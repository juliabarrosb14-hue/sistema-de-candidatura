export type TipoPergunta = 'simNao' | 'select' | 'numero' | 'texto';
export type SecaoPergunta = 'experiencia' | 'disponibilidade';

export interface PerguntaConfig {
  /** Chave única — vira o identificador da resposta em `respostas{}`. */
  id: string;
  secao: SecaoPergunta;
  texto: string;
  tipo: TipoPergunta;
  /** Padrão: true. */
  obrigatoria?: boolean;
  /** Necessário quando tipo === 'select'. */
  opcoes?: string[];
  placeholder?: string;

  // --- Pontuação (usada em src/lib/score.ts) ---
  /** tipo 'simNao': pontos brutos concedidos quando a resposta é "sim". */
  pesoExperiencia?: number;
  /** tipo 'select': pontos brutos por opção escolhida. */
  pesoPorOpcao?: Record<string, number>;
  /** tipo 'numero': pontos por faixa, maior "min" que a resposta numérica atinge. */
  pesoPorFaixa?: { min: number; pontos: number }[];
  /** tipo 'texto': conta no bucket de "qualidade das respostas abertas" em vez de experiência. */
  respostaAberta?: boolean;
  /** Palavras-chave usadas na heurística de qualidade de resposta aberta. */
  palavrasChave?: string[];
}

export interface FiltroRapidoConfig {
  label: string;
  perguntaId: string;
  valorEsperado: string;
}

export interface VagaConfig {
  slug: string;
  cargo: string;
  empresa: string;
  local: string;
  unidades: string[];
  horario: string;
  descricao: string[];
  responsabilidades: string[];
  requisitos: string[];
  diferenciais: string[];
  remuneracao: { salarioBase: string; complemento?: string };
  beneficios: string[];
  perguntas: PerguntaConfig[];
  /** ID de uma pergunta 'simNao' que representa experiência no segmento da vaga (bucket de 10 pts). */
  perguntaSegmentoId?: string;
  /** Perfil DISC de referência da vaga (D/I/S/C somando ~100). */
  discAlvo: { D: number; I: number; S: number; C: number };
  /** Checkboxes de filtro rápido no painel do RH, específicos desta vaga. */
  filtrosRapidos?: FiltroRapidoConfig[];
  lgpdTexto?: string;
  mensagemFinal?: { titulo: string; corpo: string };
}
