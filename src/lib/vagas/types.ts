export type TipoPergunta = 'simNao' | 'select' | 'multiSelect' | 'numero' | 'texto';
export type SecaoPergunta = 'experiencia' | 'disponibilidade';
export type CategoriaPergunta = 'experiencia' | 'tecnica' | 'estrategica' | 'disponibilidade' | 'portfolio';

export interface PerguntaConfig {
  /** Chave única — vira o identificador da resposta em `respostas{}`. */
  id: string;
  secao: SecaoPergunta;
  texto: string;
  tipo: TipoPergunta;
  /** Padrão: true. */
  obrigatoria?: boolean;
  /** Necessário quando tipo === 'select' ou 'multiSelect'. */
  opcoes?: string[];
  placeholder?: string;
  /**
   * Agrupamento usado apenas para exibição/organização na ficha do RH
   * (Experiência, Competência técnica, Estratégica, Disponibilidade, Portfólio).
   * Não é usado no cálculo do score — não altera pontuação.
   */
  categoria?: CategoriaPergunta;

  // --- Pontuação (usada em src/lib/score.ts) ---
  /** tipo 'simNao': pontos brutos concedidos quando a resposta é "sim". */
  pesoExperiencia?: number;
  /** tipo 'select': pontos brutos por opção escolhida. */
  pesoPorOpcao?: Record<string, number>;
  /** tipo 'multiSelect': pontos brutos por opção marcada (soma de todas as marcadas). */
  pesoPorOpcaoMulti?: Record<string, number>;
  /** tipo 'numero': pontos por faixa, maior "min" que a resposta numérica atinge. */
  pesoPorFaixa?: { min: number; pontos: number }[];
  /** tipo 'texto': conta no bucket de "qualidade das respostas abertas" em vez de experiência. */
  respostaAberta?: boolean;
  /** Palavras-chave usadas na heurística de qualidade de resposta aberta. */
  palavrasChave?: string[];
  /**
   * Marca esta pergunta de texto como o "case rápido" situacional da vaga —
   * uma pergunta obrigatória, exibida destacada, com avaliação própria para o RH.
   */
  ehCase?: boolean;
  /** Palavras/temas que indicam uma boa resposta ao case (usado na leitura automática para o RH). */
  caseTemasBons?: string[];
}

export interface FiltroRapidoConfig {
  label: string;
  perguntaId: string;
  valorEsperado: string;
}

/**
 * Pontuação máxima de cada bucket do score de aderência (soma ideal = 100).
 * Se omitido, usa o padrão original: 40/25/10/10/15.
 */
export interface PesosScore {
  experiencia: number;
  disc: number;
  segmento: number;
  disponibilidade: number;
  respostasAbertas: number;
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
  /** ID de uma pergunta 'simNao' que representa experiência no segmento da vaga (bucket "segmento"). */
  perguntaSegmentoId?: string;
  /** Perfil DISC de referência da vaga (D/I/S/C somando ~100). */
  discAlvo: { D: number; I: number; S: number; C: number };
  /** Pesos customizados do score de aderência para esta vaga (padrão: 40/25/10/10/15). */
  pesos?: PesosScore;
  /** Checkboxes de filtro rápido no painel do RH, específicos desta vaga. */
  filtrosRapidos?: FiltroRapidoConfig[];
  lgpdTexto?: string;
  mensagemFinal?: { titulo: string; corpo: string };
}
