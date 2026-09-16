export type SimNao = 'sim' | 'nao';

export interface DadosPessoais {
  nomeCompleto: string;
  whatsapp: string;
  email: string;
  cidade: string;
  bairro: string;
  idade: string;
  linkedin?: string;
}

/** Respostas às perguntas dinâmicas da vaga (VagaConfig.perguntas), chaveadas por id. */
export type RespostasCandidato = Record<string, string>;

export interface Curriculo {
  fileName: string;
  storedName: string;
  sizeBytes: number;
  mimeType: string;
}

export type DiscFator = 'D' | 'I' | 'S' | 'C';

export interface DiscRespostas {
  [questionId: string]: DiscFator;
}

export interface DiscScore {
  D: number;
  I: number;
  S: number;
  C: number;
}

export type StatusCandidatura =
  | 'NOVO'
  | 'EM_ANALISE'
  | 'APROVADO_ENTREVISTA'
  | 'REPROVADO'
  | 'CONTRATADO';

export interface CandidaturaPayload {
  vagaSlug: string;
  dadosPessoais: DadosPessoais;
  respostas: RespostasCandidato;
  pretensaoSalarial: string;
  porQueEmpresa: string;
  discRespostas: DiscRespostas;
  lgpdAceite: boolean;
}

export interface CandidatoRow {
  id: string;
  criadoEm: string;
  vagaSlug: string;
  nomeCompleto: string;
  whatsapp: string;
  email: string;
  cidade: string;
  bairro: string;
  idade: string;
  linkedin: string | null;
  respostasJson: string;
  pretensaoSalarial: string;
  porQueEmpresa: string;
  discPercentualJson: string;
  curriculoJson: string | null;
  scoreTotal: number;
  scoreClassificacao: string;
  status: StatusCandidatura;
  observacoesRh: string | null;
  lgpdAceite: number;
}
