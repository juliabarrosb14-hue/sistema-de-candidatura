/**
 * Drenesse · Captação e Triagem de Candidatos
 * Backend em Google Apps Script: usa a própria planilha como banco de dados
 * e uma pasta do Google Drive para guardar os currículos.
 *
 * COMO INSTALAR:
 * 1. Abra a planilha do Google que vai servir de banco de dados.
 * 2. Menu Extensões → Apps Script.
 * 3. Apague o conteúdo padrão de Code.gs e cole este arquivo inteiro.
 * 4. Troque o valor de TOKEN abaixo por um segredo seu (qualquer texto longo e
 *    aleatório) e use o MESMO valor na variável APPS_SCRIPT_TOKEN do .env do app.
 * 5. Clique em Implantar → Nova implantação → tipo "Aplicativo da Web".
 *    - Executar como: Eu (seu e-mail)
 *    - Quem pode acessar: Qualquer pessoa
 * 6. Autorize as permissões pedidas (é a sua própria conta Google, sem custo).
 * 7. Copie a URL do aplicativo da web gerada — é o valor de APPS_SCRIPT_URL no .env.
 * 8. Sempre que editar este script, gere uma NOVA implantação (ou "Gerenciar
 *    implantações" → editar) para as mudanças valerem na URL publicada.
 */

const TOKEN = 'COLOQUE_AQUI_UM_TOKEN_SECRETO_LONGO';
const SHEET_NAME = 'Candidatos';
const DRIVE_FOLDER_NAME = 'Currículos - Drenesse';

// Precisa bater exatamente com a ordem de COLUNAS em src/lib/sheetsDb.ts
// As respostas específicas de cada vaga (que variam conforme a vaga) ficam
// dentro da coluna "Respostas (JSON)" — isso permite que o mesmo backend
// atenda várias vagas diferentes sem mudar o esquema da planilha.
const CABECALHO = [
  'ID',
  'Data da candidatura',
  'Vaga',
  'Nome completo',
  'WhatsApp',
  'E-mail',
  'Cidade',
  'Bairro',
  'Idade',
  'LinkedIn',
  'Respostas (JSON)',
  'Pretensão salarial',
  'Por que quer trabalhar na empresa',
  'Currículo (nome do arquivo)',
  'Currículo (ID no Drive)',
  'Currículo (tipo)',
  'Currículo (tamanho em bytes)',
  'D (%)',
  'I (%)',
  'S (%)',
  'C (%)',
  'Score de aderência',
  'Classificação',
  'Status',
  'Observações do RH',
  'Aceite LGPD'
];

function doPost(e) {
  let body;
  try {
    body = JSON.parse(e.postData.contents);
  } catch (err) {
    return jsonResponse({ ok: false, erro: 'Corpo da requisição inválido.' });
  }

  if (body.token !== TOKEN) {
    return jsonResponse({ ok: false, erro: 'Não autorizado.' });
  }

  try {
    switch (body.action) {
      case 'appendRow':
        return jsonResponse(appendRow(body.values));
      case 'getRows':
        return jsonResponse({ ok: true, rows: getRows() });
      case 'updateCell':
        return jsonResponse(updateCell(body.rowId, body.columnIndex, body.value));
      case 'uploadFile':
        return jsonResponse(uploadFile(body.fileName, body.mimeType, body.base64));
      case 'downloadFile':
        return jsonResponse(downloadFile(body.fileId));
      default:
        return jsonResponse({ ok: false, erro: 'Ação desconhecida: ' + body.action });
    }
  } catch (err) {
    return jsonResponse({ ok: false, erro: String(err) });
  }
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(CABECALHO);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function appendRow(values) {
  const sheet = getSheet();
  const id = values[0];

  // Idempotente: se o app cliente repetir a chamada (ex.: após uma resposta
  // perdida na rede) e a linha já tiver sido gravada, não duplica.
  const lastRow = sheet.getLastRow();
  if (lastRow >= 2) {
    const ids = sheet.getRange(2, 1, lastRow - 1, 1).getValues();
    for (let i = 0; i < ids.length; i++) {
      if (String(ids[i][0]) === String(id)) {
        return { ok: true, duplicado: true };
      }
    }
  }

  sheet.appendRow(values);
  return { ok: true };
}

function getRows() {
  const sheet = getSheet();
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return [];
  const lastCol = sheet.getLastColumn();
  const values = sheet.getRange(2, 1, lastRow - 1, lastCol).getValues();
  return values.map(function (row) {
    return row.map(function (cell) {
      if (cell instanceof Date) return cell.toISOString();
      return cell === null || cell === undefined ? '' : String(cell);
    });
  });
}

function updateCell(rowId, columnIndex, value) {
  const sheet = getSheet();
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return { ok: false, erro: 'Nenhuma candidata cadastrada ainda.' };

  const ids = sheet.getRange(2, 1, lastRow - 1, 1).getValues();
  for (let i = 0; i < ids.length; i++) {
    if (String(ids[i][0]) === String(rowId)) {
      sheet.getRange(i + 2, columnIndex + 1).setValue(value);
      return { ok: true };
    }
  }
  return { ok: false, erro: 'Candidata não encontrada.' };
}

function getFolder() {
  const folders = DriveApp.getFoldersByName(DRIVE_FOLDER_NAME);
  if (folders.hasNext()) return folders.next();
  return DriveApp.createFolder(DRIVE_FOLDER_NAME);
}

function uploadFile(fileName, mimeType, base64) {
  const folder = getFolder();
  const bytes = Utilities.base64Decode(base64);
  const blob = Utilities.newBlob(bytes, mimeType, fileName);
  const file = folder.createFile(blob);
  return { ok: true, fileId: file.getId() };
}

function downloadFile(fileId) {
  const file = DriveApp.getFileById(fileId);
  const blob = file.getBlob();
  return {
    ok: true,
    base64: Utilities.base64Encode(blob.getBytes()),
    mimeType: blob.getContentType(),
    fileName: file.getName()
  };
}
