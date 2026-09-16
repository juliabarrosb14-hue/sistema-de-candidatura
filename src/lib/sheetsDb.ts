import type { CandidatoRow, Curriculo, StatusCandidatura } from './types';
import { chamarAppsScript } from './appsScript';

// Lista ordenada de colunas da planilha "Candidatos". A ordem aqui precisa ser
// EXATAMENTE a mesma do array CABECALHO no Code.gs do Google Apps Script.
// As respostas específicas de cada vaga (dinâmicas, variam por pergunta) ficam
// em um único campo JSON (respostasJson) — por isso o esquema é estável mesmo
// com múltiplas vagas diferentes usando a mesma planilha.
const COLUNAS = [
  'id',
  'criadoEm',
  'vagaSlug',
  'nomeCompleto',
  'whatsapp',
  'email',
  'cidade',
  'bairro',
  'idade',
  'linkedin',
  'respostasJson',
  'pretensaoSalarial',
  'porQueEmpresa',
  'curriculoFileName',
  'curriculoDriveFileId',
  'curriculoMimeType',
  'curriculoSizeBytes',
  'discD',
  'discI',
  'discS',
  'discC',
  'scoreTotal',
  'scoreClassificacao',
  'status',
  'observacoesRh',
  'lgpdAceite'
] as const;

type ColunaChave = (typeof COLUNAS)[number];

const INDICE: Record<ColunaChave, number> = COLUNAS.reduce(
  (acc, chave, i) => ({ ...acc, [chave]: i }),
  {} as Record<ColunaChave, number>
);

function linhaParaValores(row: CandidatoRow): (string | number)[] {
  const discPercentual = JSON.parse(row.discPercentualJson);
  const curriculo: Curriculo | null = row.curriculoJson ? JSON.parse(row.curriculoJson) : null;

  const porChave: Record<ColunaChave, string | number> = {
    id: row.id,
    criadoEm: row.criadoEm,
    vagaSlug: row.vagaSlug,
    nomeCompleto: row.nomeCompleto,
    whatsapp: row.whatsapp,
    email: row.email,
    cidade: row.cidade,
    bairro: row.bairro,
    idade: row.idade,
    linkedin: row.linkedin || '',
    respostasJson: row.respostasJson,
    pretensaoSalarial: row.pretensaoSalarial,
    porQueEmpresa: row.porQueEmpresa,
    curriculoFileName: curriculo?.fileName || '',
    curriculoDriveFileId: curriculo?.storedName || '',
    curriculoMimeType: curriculo?.mimeType || '',
    curriculoSizeBytes: curriculo?.sizeBytes ?? '',
    discD: discPercentual.D,
    discI: discPercentual.I,
    discS: discPercentual.S,
    discC: discPercentual.C,
    scoreTotal: row.scoreTotal,
    scoreClassificacao: row.scoreClassificacao,
    status: row.status,
    observacoesRh: row.observacoesRh || '',
    lgpdAceite: row.lgpdAceite ? 'Sim' : 'Não'
  };

  return COLUNAS.map((chave) => porChave[chave]);
}

function valoresParaLinha(valores: string[]): CandidatoRow {
  const v = (chave: ColunaChave) => valores[INDICE[chave]] ?? '';

  const discPercentualJson = JSON.stringify({
    D: Number(v('discD')) || 0,
    I: Number(v('discI')) || 0,
    S: Number(v('discS')) || 0,
    C: Number(v('discC')) || 0
  });

  const curriculoFileName = v('curriculoFileName');
  const curriculoJson = curriculoFileName
    ? JSON.stringify({
        fileName: curriculoFileName,
        storedName: v('curriculoDriveFileId'),
        mimeType: v('curriculoMimeType'),
        sizeBytes: Number(v('curriculoSizeBytes')) || 0
      })
    : null;

  return {
    id: v('id'),
    criadoEm: v('criadoEm'),
    vagaSlug: v('vagaSlug'),
    nomeCompleto: v('nomeCompleto'),
    whatsapp: v('whatsapp'),
    email: v('email'),
    cidade: v('cidade'),
    bairro: v('bairro'),
    idade: v('idade'),
    linkedin: v('linkedin') || null,
    respostasJson: v('respostasJson') || '{}',
    pretensaoSalarial: v('pretensaoSalarial'),
    porQueEmpresa: v('porQueEmpresa'),
    discPercentualJson,
    curriculoJson,
    scoreTotal: Number(v('scoreTotal')) || 0,
    scoreClassificacao: v('scoreClassificacao'),
    status: (v('status') || 'NOVO') as StatusCandidatura,
    observacoesRh: v('observacoesRh') || null,
    lgpdAceite: v('lgpdAceite') === 'Sim' ? 1 : 0
  };
}

export async function inserirCandidato(row: CandidatoRow): Promise<void> {
  await chamarAppsScript('appendRow', { values: linhaParaValores(row) });
}

export async function listarCandidatos(): Promise<CandidatoRow[]> {
  const data = await chamarAppsScript<{ ok: true; rows: string[][] }>('getRows');
  return data.rows.map(valoresParaLinha).reverse();
}

export async function buscarCandidatoPorId(id: string): Promise<CandidatoRow | undefined> {
  const candidatos = await listarCandidatos();
  return candidatos.find((c) => c.id === id);
}

export async function atualizarStatusCandidato(id: string, status: StatusCandidatura): Promise<void> {
  await chamarAppsScript('updateCell', { rowId: id, columnIndex: INDICE.status, value: status });
}

export async function atualizarObservacoesCandidato(id: string, observacoes: string): Promise<void> {
  await chamarAppsScript('updateCell', {
    rowId: id,
    columnIndex: INDICE.observacoesRh,
    value: observacoes
  });
}
