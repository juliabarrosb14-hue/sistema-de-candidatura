import type { VagaConfig } from './types';

const UNIDADES = ['Capim Macio', 'Petrópolis', 'Zona Norte', 'Lagoa Nova'];

export const assistenteDp: VagaConfig = {
  slug: 'assistente-dp',
  cargo: 'Assistente de Departamento Pessoal',
  empresa: 'Clínica Drenesse',
  local: 'Natal/RN',
  unidades: UNIDADES,
  horario: 'Horário administrativo.',
  descricao: [
    'A Clínica Drenesse busca uma Assistente de Departamento Pessoal para cuidar da rotina de admissão, folha, férias e benefícios da equipe.',
    'Se você tem experiência com DP e conhece a legislação trabalhista aplicada ao dia a dia, essa vaga é para você.'
  ],
  responsabilidades: [
    'Realizar processos de admissão e documentação',
    'Apoiar no fechamento e conferência da folha de pagamento',
    'Controlar ponto, férias e benefícios',
    'Realizar rescisões e cálculos trabalhistas',
    'Manter a rotina de DP em conformidade com a legislação'
  ],
  requisitos: [
    'Experiência em Departamento Pessoal',
    'Conhecimento de legislação trabalhista aplicada à rotina de DP',
    'Boa organização e atenção aos detalhes'
  ],
  diferenciais: [
    'Experiência com eSocial',
    'Vivência com folha de pagamento e rescisões',
    'Experiência com sistemas de DP'
  ],
  remuneracao: {
    salarioBase: 'R$ 2.200,00',
    complemento: 'vale-transporte'
  },
  beneficios: ['Vale-transporte', 'Wellhub', 'Plano odontológico'],
  discAlvo: { D: 10, I: 10, S: 35, C: 45 },
  filtrosRapidos: [
    { label: 'Experiência em DP', perguntaId: 'experienciaDp', valorEsperado: 'sim' },
    { label: 'Já usou eSocial', perguntaId: 'usouEsocial', valorEsperado: 'sim' }
  ],
  perguntas: [
    {
      id: 'experienciaDp',
      secao: 'experiencia',
      texto: 'Você possui experiência em Departamento Pessoal?',
      tipo: 'simNao',
      pesoExperiencia: 8
    },
    {
      id: 'tempoExperienciaDp',
      secao: 'experiencia',
      texto: 'Quanto tempo de experiência em DP você possui?',
      tipo: 'select',
      opcoes: ['Sem experiência', 'Até 1 ano', '1 a 2 anos', '2 a 4 anos', 'Mais de 4 anos'],
      pesoPorOpcao: { 'Sem experiência': 0, 'Até 1 ano': 4, '1 a 2 anos': 7, '2 a 4 anos': 9, 'Mais de 4 anos': 11 }
    },
    {
      id: 'nivelLegislacaoTrabalhista',
      secao: 'experiencia',
      texto: 'Você possui conhecimento de legislação trabalhista aplicada à rotina de DP?',
      tipo: 'select',
      opcoes: ['Básico', 'Intermediário', 'Avançado'],
      categoria: 'tecnica',
      pesoPorOpcao: { Básico: 1, Intermediário: 4, Avançado: 6 }
    },
    {
      id: 'trabalhouAdmissao',
      secao: 'experiencia',
      texto: 'Já trabalhou com admissão?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 6
    },
    {
      id: 'controleDocumentosAdmissionais',
      secao: 'experiencia',
      texto: 'Já realizou controle de documentos admissionais?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 4
    },
    {
      id: 'trabalhouFolhaPagamento',
      secao: 'experiencia',
      texto: 'Já trabalhou com folha de pagamento?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 6
    },
    {
      id: 'calculosConferenciasFolha',
      secao: 'experiencia',
      texto: 'Já realizou cálculos ou conferências de folha?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 5
    },
    {
      id: 'experienciaControlePonto',
      secao: 'experiencia',
      texto: 'Possui experiência com controle de ponto?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 4
    },
    {
      id: 'controlouBancoHoras',
      secao: 'experiencia',
      texto: 'Já controlou banco de horas?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 3
    },
    {
      id: 'trabalhouFeriasBeneficios',
      secao: 'experiencia',
      texto: 'Já trabalhou com férias e benefícios?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 5
    },
    {
      id: 'realizouRescisoes',
      secao: 'experiencia',
      texto: 'Já realizou rescisões?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 5
    },
    {
      id: 'usouEsocial',
      secao: 'experiencia',
      texto: 'Já trabalhou com eSocial?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 5
    },
    {
      id: 'experienciaSistemasDp',
      secao: 'experiencia',
      texto: 'Possui experiência com sistemas de DP?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 4
    },
    {
      id: 'sistemaDpUtilizado',
      secao: 'experiencia',
      texto: 'Qual sistema de DP você já utilizou?',
      tipo: 'texto',
      categoria: 'tecnica',
      placeholder: 'Ex: Senior, TOTVS, Gupy...'
    },
    {
      id: 'caseFolhaMenorQueEsperado',
      secao: 'experiencia',
      texto: 'Uma colaboradora te procura dizendo que o valor da folha de pagamento dela veio menor do que o esperado. Como você conduz essa situação?',
      tipo: 'texto',
      respostaAberta: true,
      ehCase: true,
      categoria: 'estrategica',
      caseTemasBons: ['confer', 'explic', 'calcul', 'document', 'escuta', 'transparen']
    },
    {
      id: 'relatoErroCorrigido',
      secao: 'experiencia',
      texto: 'Conte brevemente sobre uma situação em que identificou e corrigiu um erro.',
      tipo: 'texto',
      respostaAberta: true,
      palavrasChave: ['erro', 'identifi', 'corrig', 'confer', 'folha', 'process']
    }
  ]
};
