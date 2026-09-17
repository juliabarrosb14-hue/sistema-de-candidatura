import { MULTI_SELECT_SEPARADOR, type DiscScore, type RespostasCandidato } from './types';
import type { PesosScore, VagaConfig } from './vagas/types';

const PESOS_PADRAO: PesosScore = {
  experiencia: 40,
  disc: 25,
  segmento: 10,
  disponibilidade: 10,
  respostasAbertas: 15
};

function pesosDe(vaga: VagaConfig): PesosScore {
  return vaga.pesos ?? PESOS_PADRAO;
}

function pontosExperiencia(vaga: VagaConfig, respostas: RespostasCandidato, max: number): number {
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
    } else if (p.tipo === 'multiSelect' && p.pesoPorOpcaoMulti) {
      const valores = Object.values(p.pesoPorOpcaoMulti);
      rawMax += valores.reduce((a, b) => a + Math.max(0, b), 0);
      const selecionadas = (resposta || '').split(MULTI_SELECT_SEPARADOR).filter(Boolean);
      for (const opcao of selecionadas) {
        raw += p.pesoPorOpcaoMulti[opcao] ?? 0;
      }
    } else if (p.tipo === 'numero' && p.pesoPorFaixa) {
      const faixas = [...p.pesoPorFaixa].sort((a, b) => b.min - a.min);
      rawMax += Math.max(0, ...faixas.map((f) => f.pontos));
      const numero = Number(resposta) || 0;
      const faixa = faixas.find((f) => numero >= f.min);
      if (faixa) raw += faixa.pontos;
    }
  }

  if (rawMax === 0) return 0;
  return Math.min(max, (raw / rawMax) * max);
}

function pontosDisc(percentuais: DiscScore, discAlvo: DiscScore, max: number): number {
  const desvio =
    Math.abs(percentuais.D - discAlvo.D) +
    Math.abs(percentuais.I - discAlvo.I) +
    Math.abs(percentuais.S - discAlvo.S) +
    Math.abs(percentuais.C - discAlvo.C);

  // desvio máximo teórico é 200 (perfis totalmente opostos); normaliza para 0-1.
  const aderencia = Math.max(0, 1 - desvio / 200);
  return aderencia * max;
}

function pontosSegmento(vaga: VagaConfig, respostas: RespostasCandidato, max: number): number {
  if (!vaga.perguntaSegmentoId) return 0;
  return respostas[vaga.perguntaSegmentoId] === 'sim' ? max : 0;
}

function pontosDisponibilidade(vaga: VagaConfig, respostas: RespostasCandidato, max: number): number {
  const perguntas = vaga.perguntas.filter((p) => p.secao === 'disponibilidade' && p.tipo === 'simNao');
  if (perguntas.length === 0) return 0;
  const totalSim = perguntas.filter((p) => respostas[p.id] === 'sim').length;
  return (totalSim / perguntas.length) * max;
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
  porQueEmpresa: string,
  max: number
): number {
  const perguntasAbertas = vaga.perguntas.filter((p) => p.tipo === 'texto' && p.respostaAberta);

  const notas = perguntasAbertas.map((p) =>
    qualidadeTexto(respostas[p.id] || '', [...(p.palavrasChave || []), ...(p.caseTemasBons || [])])
  );
  notas.push(qualidadeTexto(porQueEmpresa, [...PALAVRAS_CHAVE_MOTIVACAO, vaga.empresa.toLowerCase()]));

  const media = notas.reduce((a, b) => a + b, 0) / notas.length;
  return media * max;
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
  const pesos = pesosDe(vaga);

  const experiencia = pontosExperiencia(vaga, respostas, pesos.experiencia);
  const disc = pontosDisc(percentuaisDisc, vaga.discAlvo, pesos.disc);
  const segmento = pontosSegmento(vaga, respostas, pesos.segmento);
  const disponibilidade = pontosDisponibilidade(vaga, respostas, pesos.disponibilidade);
  const respostasAbertas = pontosRespostasAbertas(vaga, respostas, porQueEmpresa, pesos.respostasAbertas);

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
