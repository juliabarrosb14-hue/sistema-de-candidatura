import type { PerguntaConfig } from './types';

export const ANOS_OPCOES = ['Sem experiência', 'Até 1 ano', '1 a 2 anos', '2 a 4 anos', 'Mais de 4 anos'];
export const ANOS_OPCOES_GESTAO = ['Menos de 1 ano', '1 a 2 anos', '2 a 4 anos', 'Mais de 4 anos'];
export const NIVEL_OPCOES = ['Básico', 'Intermediário', 'Avançado'];

export function pesoPorAnos(pontos: { semExperiencia?: number; ate1?: number; um2?: number; dois4?: number; mais4?: number }) {
  return {
    'Sem experiência': pontos.semExperiencia ?? 0,
    'Até 1 ano': pontos.ate1 ?? 0,
    '1 a 2 anos': pontos.um2 ?? 0,
    '2 a 4 anos': pontos.dois4 ?? 0,
    'Mais de 4 anos': pontos.mais4 ?? 0
  };
}

export function pesoPorAnosGestao(pontos: { menos1?: number; um2?: number; dois4?: number; mais4?: number }) {
  return {
    'Menos de 1 ano': pontos.menos1 ?? 0,
    '1 a 2 anos': pontos.um2 ?? 0,
    '2 a 4 anos': pontos.dois4 ?? 0,
    'Mais de 4 anos': pontos.mais4 ?? 0
  };
}

export function pesoPorNivel(pontos: { basico?: number; intermediario?: number; avancado?: number }) {
  return {
    Básico: pontos.basico ?? 0,
    Intermediário: pontos.intermediario ?? 0,
    Avançado: pontos.avancado ?? 0
  };
}

/**
 * Perguntas padrão anexadas ao final de TODAS as vagas (item 23 da especificação
 * do RH): disponibilidade de horário/sábado/deslocamento, quando pode iniciar e
 * situação de emprego atual. A pretensão salarial já é coletada como campo
 * universal (não entra aqui para não duplicar).
 */
export const PERGUNTAS_PADRAO: PerguntaConfig[] = [
  {
    id: 'dispHorario',
    secao: 'disponibilidade',
    texto: 'Você possui disponibilidade para trabalhar no horário informado na vaga?',
    tipo: 'simNao',
    categoria: 'disponibilidade'
  },
  {
    id: 'dispSabados',
    secao: 'disponibilidade',
    texto: 'Você possui disponibilidade para trabalhar aos sábados, quando a vaga exigir?',
    tipo: 'simNao',
    categoria: 'disponibilidade'
  },
  {
    id: 'dispDeslocamento',
    secao: 'disponibilidade',
    texto: 'Você possui disponibilidade para deslocamento entre unidades, quando a vaga exigir?',
    tipo: 'select',
    opcoes: ['Sim', 'Não', 'Depende da unidade'],
    categoria: 'disponibilidade'
  },
  {
    id: 'dispAcessoUnidades',
    secao: 'disponibilidade',
    texto: 'Você possui fácil acesso às possíveis unidades de trabalho?',
    tipo: 'select',
    opcoes: ['Sim', 'Não', 'Parcialmente'],
    categoria: 'disponibilidade'
  },
  {
    id: 'quandoPodeIniciar',
    secao: 'disponibilidade',
    texto: 'Quando poderia iniciar, caso fosse selecionada?',
    tipo: 'select',
    opcoes: ['Imediatamente', 'Até 15 dias', '15 a 30 dias', 'Mais de 30 dias'],
    categoria: 'disponibilidade'
  },
  {
    id: 'situacaoEmprego',
    secao: 'disponibilidade',
    texto: 'Você está trabalhando atualmente? Se sim, qual seu prazo de aviso prévio?',
    tipo: 'select',
    opcoes: ['Não estou trabalhando atualmente', 'Sim, sem aviso prévio', 'Sim, até 15 dias de aviso', 'Sim, 15 a 30 dias de aviso'],
    obrigatoria: false,
    categoria: 'disponibilidade'
  }
];
