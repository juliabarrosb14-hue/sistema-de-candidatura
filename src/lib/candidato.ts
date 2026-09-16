import type { CandidatoRow, Curriculo, DiscScore, RespostasCandidato, StatusCandidatura } from './types';
import { interpretarDiscParaRh } from './disc';
import { getVagaBySlug } from './vagas';

export interface CandidatoDetalhado {
  id: string;
  criadoEm: string;
  vagaSlug: string;
  vagaCargo: string;
  nomeCompleto: string;
  whatsapp: string;
  email: string;
  cidade: string;
  bairro: string;
  idade: string;
  linkedin: string | null;
  respostas: RespostasCandidato;
  pretensaoSalarial: string;
  porQueEmpresa: string;
  discPercentual: DiscScore;
  discInterpretacao: string;
  curriculo: Curriculo | null;
  scoreTotal: number;
  scoreClassificacao: string;
  status: StatusCandidatura;
  observacoesRh: string | null;
  lgpdAceite: boolean;
}

export function paraDetalhado(row: CandidatoRow): CandidatoDetalhado {
  const discPercentual: DiscScore = JSON.parse(row.discPercentualJson);
  const vaga = getVagaBySlug(row.vagaSlug);

  return {
    id: row.id,
    criadoEm: row.criadoEm,
    vagaSlug: row.vagaSlug,
    vagaCargo: vaga?.cargo || row.vagaSlug,
    nomeCompleto: row.nomeCompleto,
    whatsapp: row.whatsapp,
    email: row.email,
    cidade: row.cidade,
    bairro: row.bairro,
    idade: row.idade,
    linkedin: row.linkedin,
    respostas: JSON.parse(row.respostasJson || '{}'),
    pretensaoSalarial: row.pretensaoSalarial,
    porQueEmpresa: row.porQueEmpresa,
    discPercentual,
    discInterpretacao: interpretarDiscParaRh(discPercentual, vaga?.discAlvo || { D: 25, I: 25, S: 25, C: 25 }),
    curriculo: row.curriculoJson ? JSON.parse(row.curriculoJson) : null,
    scoreTotal: row.scoreTotal,
    scoreClassificacao: row.scoreClassificacao,
    status: row.status,
    observacoesRh: row.observacoesRh,
    lgpdAceite: !!row.lgpdAceite
  };
}
