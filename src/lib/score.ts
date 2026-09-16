import type { DiscScore, RespostasCandidato } from './types';
import type { VagaConfig } from './vagas/types';

const EXPERIENCIA_MAX = 40;
const DISC_MAX = 25;
const SEGMENTO_MAX = 10;
const DISPONIBILIDADE_MAX = 10;
const RESPOSTAS_ABERTAS_MAX = 15;

function pontosExperiencia(vaga: VagaConfig, respostas: RespostasCandidato): number {
  const perguntas = vaga.perguntas.filter((p) => p.secao === 'experiencia' && !p.respostaAberta);

  let raw = 0;
  let rawMax = 0;

  for (const p of perguntas) {
    const resposta = respostas[p.id];

    if (p.tipo === 'simNao') {
      const peso = p.pesoExperiencia ?? 0;
      rawMax += peso;
      if (resposta === 'sim') raw += peso;
    } else if (p.tipo === 'select' && p.pesoPorOpcao) {
      const valores = Object.values(p.pesoPorOpcao);
      rawMax += Math.max(0, ...valores);
      raw += p.pesoPorOpcao[resposta] ?? 0;
    } else if (p.tipo === 'numero' && p.pesoPorFaixa) {
      const faixas = [...p.pesoPorFaixa].sort((a, b) => b.min - a.min);
      rawMax += Math.max(0, ...faixas.map((f) => f.pontos));
      const numero = Number(resposta) || 0;
      const faixa = faixas.find((f) => numero >= f.min);
      if (faixa) raw += faixa.pontos;
    }
  }

  if (rawMax === 0) return 0;
  return Math.min(EXPERIENCIA_MAX, (raw / rawMax) * EXPERIENCIA_MAX);
}

function pontosDisc(percentuais: DiscScore, discAlvo: DiscScore): number {
  const desvio =
    Math.abs(percentuais.D - discAlvo.D) +
    Math.abs(percentuais.I - discAlvo.I) +
    Math.abs(percentuais.S - discAlvo.S) +
    Math.abs(percentuais.C - discAlvo.C);

  // desvio máximo teórico é 200 (perfis totalmente opostos); normaliza para 0-1.
  const aderencia = Math.max(0, 1 - desvio / 200);
  return aderencia * DISC_MAX;
}

function pontosSegmento(vaga: VagaConfig, respostas: RespostasCandidato): number {
  if (!vaga.perguntaSegmentoId) return 0;
  return respostas[vaga.perguntaSegmentoId] === 'sim' ? SEGMENTO_MAX : 0;
}

function pontosDisponibilidade(vaga: VagaConfig, respostas: RespostasCandidato): number {
  const perguntas = vaga.perguntas.filter((p) => p.secao === 'disponibilidade' && p.tipo === 'simNao');
  if (perguntas.length === 0) return 0;
  const totalSim = perguntas.filter((p) => respostas[p.id] === 'sim').length;
  return (totalSim / perguntas.length) * DISPONIBILIDADE_MAX;
}

function qualidadeTexto(texto: string, palavrasChave: string[]): number {
  const limpo = (texto || '').trim();
  if (!limpo) return 0;

  const palavras = limpo.split(/\s+/).filter(Boolean).length;
  let pontosTamanho = 0;
  if (palavras >= 40) pontosTamanho = 1;
  else if (palavras >= 20) pontosTamanho = 0.75;
  else if (palavras >= 8) pontosTamanho = 0.5;
  else pontosTamanho = 0.2;

  const textoLower = limpo.toLowerCase();
  const acertos = palavrasChave.filter((chave) => textoLower.includes(chave)).length;
  const pontosConteudo = palavrasChave.length
    ? Math.min(1, acertos / Math.max(3, palavrasChave.length / 2))
    : 0.5;

  return pontosTamanho * 0.5 + pontosConteudo * 0.5;
}

const PALAVRAS_CHAVE_MOTIVACAO = ['cresc', 'oportunidade', 'desafio', 'aprend', 'result', 'equipe', 'time'];

function pontosRespostasAbertas(
  vaga: VagaConfig,
  respostas: RespostasCandidato,
  porQueEmpresa: string
): number {
  const perguntasAbertas = vaga.perguntas.filter((p) => p.tipo === 'texto' && p.respostaAberta);

  const notas = perguntasAbertas.map((p) => qualidadeTexto(respostas[p.id] || '', p.palavrasChave || []));
  notas.push(qualidadeTexto(porQueEmpresa, [...PALAVRAS_CHAVE_MOTIVACAO, vaga.empresa.toLowerCase()]));

  const media = notas.reduce((a, b) => a + b, 0) / notas.length;
  return media * RESPOSTAS_ABERTAS_MAX;
}

export interface ScoreDetalhado {
  total: number;
  classificacao: 'Alta aderência' | 'Boa aderência' | 'Avaliar' | 'Baixa aderência';
  detalhamento: {
    experiencia: number;
    disc: number;
    segmento: number;
    disponibilidade: number;
    respostasAbertas: number;
  };
}

export function classificarScore(total: number): ScoreDetalhado['classificacao'] {
  if (total >= 80) return 'Alta aderência';
  if (total >= 60) return 'Boa aderência';
  if (total >= 40) return 'Avaliar';
  return 'Baixa aderência';
}

export function calcularScoreAderencia(
  vaga: VagaConfig,
  respostas: RespostasCandidato,
  porQueEmpresa: string,
  percentuaisDisc: DiscScore
): ScoreDetalhado {
  const experiencia = pontosExperiencia(vaga, respostas);
  const disc = pontosDisc(percentuaisDisc, vaga.discAlvo);
  const segmento = pontosSegmento(vaga, respostas);
  const disponibilidade = pontosDisponibilidade(vaga, respostas);
  const respostasAbertas = pontosRespostasAbertas(vaga, respostas, porQueEmpresa);

  const total = Math.round(experiencia + disc + segmento + disponibilidade + respostasAbertas);

  return {
    total,
    classificacao: classificarScore(total),
    detalhamento: {
      experiencia: Math.round(experiencia * 10) / 10,
      disc: Math.round(disc * 10) / 10,
      segmento,
      disponibilidade: Math.round(disponibilidade * 10) / 10,
      respostasAbertas: Math.round(respostasAbertas * 10) / 10
    }
  };
}
