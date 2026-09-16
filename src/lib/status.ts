import type { StatusCandidatura } from './types';

export const STATUS_LABEL: Record<StatusCandidatura, string> = {
  NOVO: 'Novo',
  EM_ANALISE: 'Em análise',
  APROVADO_ENTREVISTA: 'Aprovado para entrevista',
  REPROVADO: 'Reprovado',
  CONTRATADO: 'Contratado'
};

export const STATUS_COLOR: Record<StatusCandidatura, string> = {
  NOVO: 'bg-blue-50 text-blue-700',
  EM_ANALISE: 'bg-amber-50 text-amber-700',
  APROVADO_ENTREVISTA: 'bg-emerald-50 text-emerald-700',
  REPROVADO: 'bg-neutral-100 text-neutral-500',
  CONTRATADO: 'bg-drenesse-red/10 text-drenesse-red'
};

export const STATUS_OPCOES: StatusCandidatura[] = [
  'NOVO',
  'EM_ANALISE',
  'APROVADO_ENTREVISTA',
  'REPROVADO',
  'CONTRATADO'
];

export const CLASSIFICACAO_COLOR: Record<string, string> = {
  'Alta aderência': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Boa aderência': 'bg-lime-50 text-lime-700 border-lime-200',
  Avaliar: 'bg-amber-50 text-amber-700 border-amber-200',
  'Baixa aderência': 'bg-neutral-100 text-neutral-500 border-neutral-200'
};
