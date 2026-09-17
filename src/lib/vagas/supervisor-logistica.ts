import type { VagaConfig } from './types';

const UNIDADES = ['Capim Macio', 'Petrópolis', 'Zona Norte', 'Lagoa Nova'];

export const supervisorLogistica: VagaConfig = {
  slug: 'supervisor-logistica',
  cargo: 'Supervisor de Logística',
  empresa: 'Clínica Drenesse',
  local: 'Natal/RN',
  unidades: UNIDADES,
  horario: 'Disponibilidade para deslocamento entre unidades.',
  descricao: [
    'A Clínica Drenesse busca um(a) Supervisor(a) de Logística para garantir o abastecimento correto de todas as unidades e a saúde do estoque da rede.',
    'Se você já liderou equipe de logística/estoque e resolve urgências operacionais com tranquilidade, essa vaga é para você.'
  ],
  responsabilidades: [
    'Liderar a equipe de logística/estoque',
    'Garantir o abastecimento correto das unidades',
    'Realizar inventários periódicos',
    'Identificar divergências, perdas ou desvios de estoque',
    'Organizar rotas e entregas entre unidades'
  ],
  requisitos: [
    'Experiência com logística ou estoque',
    'Experiência liderando equipe',
    'Boa organização e capacidade de resolver urgências',
    'Disponibilidade para deslocamento entre unidades'
  ],
  diferenciais: [
    'Experiência com sistemas de estoque/ERP',
    'Vivência com controle de estoque mínimo e máximo',
    'Experiência com inventário periódico'
  ],
  remuneracao: {
    salarioBase: 'R$ 2.500,00',
    complemento: 'vale-transporte'
  },
  beneficios: ['Vale-transporte', 'Wellhub', 'Plano odontológico'],
  discAlvo: { D: 40, I: 10, S: 15, C: 35 },
  filtrosRapidos: [
    { label: 'Já liderou equipe', perguntaId: 'jaLiderouEquipe', valorEsperado: 'sim' },
    { label: 'Já usou ERP de estoque', perguntaId: 'usouSistemaEstoque', valorEsperado: 'sim' },
    { label: 'Disponível p/ deslocamento', perguntaId: 'dispDeslocamentoUnidades', valorEsperado: 'sim' }
  ],
  perguntas: [
    {
      id: 'experienciaLogisticaEstoque',
      secao: 'experiencia',
      texto: 'Já trabalhou com logística ou estoque?',
      tipo: 'simNao',
      pesoExperiencia: 7
    },
    {
      id: 'tempoExperienciaLogistica',
      secao: 'experiencia',
      texto: 'Quanto tempo de experiência você possui em logística/estoque?',
      tipo: 'select',
      opcoes: ['Sem experiência', 'Até 1 ano', '1 a 2 anos', '2 a 4 anos', 'Mais de 4 anos'],
      pesoPorOpcao: { 'Sem experiência': 0, 'Até 1 ano': 4, '1 a 2 anos': 7, '2 a 4 anos': 9, 'Mais de 4 anos': 11 }
    },
    {
      id: 'jaLiderouEquipe',
      secao: 'experiencia',
      texto: 'Já liderou equipe?',
      tipo: 'simNao',
      pesoExperiencia: 6
    },
    {
      id: 'maiorEquipeLiderada',
      secao: 'experiencia',
      texto: 'Qual foi o maior número de pessoas que você já liderou?',
      tipo: 'numero',
      obrigatoria: false,
      placeholder: 'Ex: 6',
      pesoPorFaixa: [
        { min: 8, pontos: 6 },
        { min: 4, pontos: 4 },
        { min: 1, pontos: 2 }
      ]
    },
    {
      id: 'responsavelAbastecimento',
      secao: 'experiencia',
      texto: 'Você já foi responsável pelo abastecimento de diferentes unidades?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 5
    },
    {
      id: 'controleEstoqueMinMax',
      secao: 'experiencia',
      texto: 'Você já realizou controle de estoque mínimo e máximo?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 5
    },
    {
      id: 'organizouRotasEntregas',
      secao: 'experiencia',
      texto: 'Você já organizou rotas ou entregas?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 4
    },
    {
      id: 'realizouInventario',
      secao: 'experiencia',
      texto: 'Já realizou inventário?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 5
    },
    {
      id: 'trabalhouInventarioPeriodico',
      secao: 'experiencia',
      texto: 'Você já trabalhou com inventário periódico?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 4
    },
    {
      id: 'identificouDivergenciasEstoque',
      secao: 'experiencia',
      texto: 'Já identificou divergências de estoque?',
      tipo: 'simNao',
      categoria: 'estrategica',
      pesoExperiencia: 4
    },
    {
      id: 'identificouPerdasDesvios',
      secao: 'experiencia',
      texto: 'Você já identificou perdas, desvios ou diferenças de estoque?',
      tipo: 'simNao',
      categoria: 'estrategica',
      pesoExperiencia: 4
    },
    {
      id: 'usouSistemaEstoque',
      secao: 'experiencia',
      texto: 'Já utilizou sistemas de estoque/ERP?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 4
    },
    {
      id: 'nivelExcel',
      secao: 'experiencia',
      texto: 'Você possui experiência com Excel/Google Sheets?',
      tipo: 'select',
      opcoes: ['Básico', 'Intermediário', 'Avançado'],
      categoria: 'tecnica',
      pesoPorOpcao: { Básico: 1, Intermediário: 3, Avançado: 5 }
    },
    {
      id: 'trabalhouSobPressao',
      secao: 'experiencia',
      texto: 'Já trabalhou sob pressão em urgências operacionais?',
      tipo: 'simNao',
      pesoExperiencia: 4
    },
    {
      id: 'caseFaltaProdutoUltimaHora',
      secao: 'experiencia',
      texto: 'Uma unidade avisa, de última hora, que está sem um produto essencial para o atendimento do dia. O que você faz?',
      tipo: 'texto',
      respostaAberta: true,
      ehCase: true,
      categoria: 'estrategica',
      caseTemasBons: ['priorid', 'transfer', 'unidade', 'urgên', 'urgen', 'comunic', 'soluç', 'reposiç']
    },
    {
      id: 'relatoProblemaLogistico',
      secao: 'experiencia',
      texto: 'Conte brevemente sobre uma situação em que resolveu um problema logístico.',
      tipo: 'texto',
      respostaAberta: true,
      palavrasChave: ['estoque', 'logistic', 'logístic', 'resolv', 'abasteci', 'unidade']
    },
    {
      id: 'dispDeslocamentoUnidades',
      secao: 'disponibilidade',
      texto: 'Possui disponibilidade para deslocamento entre unidades?',
      tipo: 'simNao'
    }
  ]
};
