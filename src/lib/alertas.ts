import type { RespostasCandidato } from './types';
import type { VagaConfig } from './vagas/types';

function perguntaExiste(vaga: VagaConfig, ids: string[]): string | undefined {
  return vaga.perguntas.find((p) => ids.includes(p.id))?.id;
}

function parseValorBR(texto: string | undefined | null): number | null {
  if (!texto) return null;
  let s = texto.replace(/[^\d.,]/g, '');
  if (!s) return null;

  const hasDot = s.includes('.');
  const hasComma = s.includes(',');

  if (hasDot && hasComma) {
    s = s.replace(/\./g, '').replace(',', '.');
  } else if (hasComma) {
    s = s.replace(',', '.');
  } else if (hasDot) {
    const partes = s.split('.');
    if (partes[partes.length - 1].length === 3) {
      s = s.replace(/\./g, '');
    }
  }

  const n = parseFloat(s);
  return Number.isNaN(n) ? null : n;
}

/**
 * Gera alertas informativos para o RH a partir das respostas da candidata.
 * Nunca reprova automaticamente — são apenas sinais para atenção na triagem/entrevista.
 */
export function gerarAlertasRh(
  vaga: VagaConfig,
  respostas: RespostasCandidato,
  pretensaoSalarial: string
): string[] {
  const alertas: string[] = [];

  const idLideranca = perguntaExiste(vaga, ['jaLiderouEquipe', 'liderancaComercial']);
  if (idLideranca && respostas[idLideranca] === 'nao') {
    alertas.push('Sem experiência em liderança');
  }

  const idSabados = perguntaExiste(vaga, ['dispSabados', 'segundaASabado']);
  if (idSabados && respostas[idSabados] === 'nao') {
    alertas.push('Sem disponibilidade aos sábados');
  }

  const valorOferecido = parseValorBR(vaga.remuneracao.salarioBase);
  const valorPretendido = parseValorBR(pretensaoSalarial);
  if (valorOferecido && valorPretendido && valorPretendido > valorOferecido * 1.4) {
    alertas.push('Pretensão salarial pode estar acima da remuneração informada');
  }

  const idCrm = perguntaExiste(vaga, ['usouCrm']);
  if (idCrm && respostas[idCrm] === 'nao') {
    alertas.push('Sem experiência com CRM');
  }

  if (vaga.perguntaSegmentoId && respostas[vaga.perguntaSegmentoId] !== 'sim') {
    alertas.push('Sem experiência no segmento');
  }

  const idPortfolio = perguntaExiste(vaga, ['linkPortfolio', 'linkGithub']);
  if (idPortfolio && !respostas[idPortfolio]?.trim()) {
    alertas.push('Portfólio não informado');
  }

  const idDeslocamento = perguntaExiste(vaga, ['dispDeslocamento', 'diferentesUnidades']);
  if (idDeslocamento) {
    const resposta = respostas[idDeslocamento];
    if (resposta === 'nao' || resposta === 'Não' || resposta === 'Depende da unidade') {
      alertas.push('Disponibilidade parcial para unidades');
    }
  }

  return alertas;
}
