import type { VagaConfig } from './types';

const UNIDADES = ['Capim Macio', 'Petrópolis', 'Zona Norte', 'Lagoa Nova'];

export const estagiarioDesenvolvimento: VagaConfig = {
  slug: 'estagiario-desenvolvimento',
  cargo: 'Estagiário de Desenvolvimento',
  empresa: 'Clínica Drenesse',
  local: 'Natal/RN',
  unidades: UNIDADES,
  horario: 'Estágio de 6 horas por dia.',
  descricao: [
    'A Clínica Drenesse busca um(a) estagiário(a) de Desenvolvimento para apoiar na construção e manutenção de sistemas internos e integrações.',
    'Se você já programou projetos próprios, tem familiaridade com Git e gosta de aprender tecnologias novas, essa vaga é para você.'
  ],
  responsabilidades: [
    'Apoiar no desenvolvimento de sistemas e automações internas',
    'Auxiliar na manutenção e correção de funcionalidades existentes',
    'Apoiar integrações com APIs externas',
    'Documentar código e processos técnicos',
    'Aprender e aplicar boas práticas de desenvolvimento'
  ],
  requisitos: [
    'Estar cursando ou possuir formação em Tecnologia/Desenvolvimento',
    'Conhecimento básico de programação',
    'Disponibilidade para estágio de 6 horas por dia'
  ],
  diferenciais: [
    'Experiência com Git/GitHub',
    'Vivência com APIs e bancos de dados',
    'Projetos publicados no GitHub ou portfólio próprio'
  ],
  remuneracao: {
    salarioBase: 'R$ 1.500,00',
    complemento: 'vale-transporte'
  },
  beneficios: ['Vale-transporte', 'Wellhub', 'Plano odontológico'],
  discAlvo: { D: 30, I: 10, S: 15, C: 45 },
  filtrosRapidos: [
    { label: 'Projetos no GitHub', perguntaId: 'possuiProjetosGithub', valorEsperado: 'sim' },
    { label: 'Já usou banco de dados SQL', perguntaId: 'usouBancoDadosSql', valorEsperado: 'sim' }
  ],
  perguntas: [
    {
      id: 'cursandoTecnologia',
      secao: 'experiencia',
      texto: 'Está cursando ou possui formação em Tecnologia/Desenvolvimento?',
      tipo: 'simNao',
      pesoExperiencia: 7
    },
    {
      id: 'linguagemMaiorFamiliaridade',
      secao: 'experiencia',
      texto: 'Qual linguagem de programação você possui maior familiaridade?',
      tipo: 'texto',
      categoria: 'tecnica',
      placeholder: 'Ex: JavaScript, Python...'
    },
    {
      id: 'nivelProgramacao',
      secao: 'experiencia',
      texto: 'Qual seu nível de conhecimento em programação?',
      tipo: 'select',
      opcoes: ['Iniciante', 'Básico', 'Intermediário', 'Avançado'],
      categoria: 'tecnica',
      pesoPorOpcao: { Iniciante: 1, Básico: 3, Intermediário: 6, Avançado: 8 }
    },
    {
      id: 'desenvolveuProjeto',
      secao: 'experiencia',
      texto: 'Já desenvolveu algum projeto de programação?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 6
    },
    {
      id: 'possuiProjetosGithub',
      secao: 'experiencia',
      texto: 'Você possui projetos publicados no GitHub?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 4
    },
    {
      id: 'experienciaGit',
      secao: 'experiencia',
      texto: 'Possui experiência com Git/GitHub?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 4
    },
    {
      id: 'usouBancoDadosSql',
      secao: 'experiencia',
      texto: 'Você já trabalhou com banco de dados SQL?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 4
    },
    {
      id: 'trabalhouApis',
      secao: 'experiencia',
      texto: 'Já trabalhou com APIs?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 4
    },
    {
      id: 'integrouApiExterna',
      secao: 'experiencia',
      texto: 'Já integrou uma aplicação com uma API externa?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 4
    },
    {
      id: 'desenvolveuSistemasWeb',
      secao: 'experiencia',
      texto: 'Já desenvolveu sistemas web?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 3
    },
    {
      id: 'usouIaDesenvolvimento',
      secao: 'experiencia',
      texto: 'Já utilizou ferramentas de IA no desenvolvimento?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 2
    },
    {
      id: 'linkGithub',
      secao: 'experiencia',
      texto: 'Link do GitHub.',
      tipo: 'texto',
      obrigatoria: false,
      categoria: 'portfolio',
      placeholder: 'https://github.com/seu-usuario'
    },
    {
      id: 'linkPortfolio',
      secao: 'experiencia',
      texto: 'Link do portfólio.',
      tipo: 'texto',
      obrigatoria: false,
      categoria: 'portfolio',
      placeholder: 'https://...'
    },
    {
      id: 'caseBugEmProducao',
      secao: 'experiencia',
      texto: 'Você identifica um erro (bug) em uma funcionalidade que já está em uso pelos usuários. Como você agiria?',
      tipo: 'texto',
      respostaAberta: true,
      ehCase: true,
      categoria: 'estrategica',
      caseTemasBons: ['reproduz', 'priorid', 'comunic', 'test', 'corrig', 'document', 'impacto']
    },
    {
      id: 'relatoProjetoTecnico',
      secao: 'experiencia',
      texto: 'Conte brevemente sobre um projeto técnico que desenvolveu e as tecnologias usadas.',
      tipo: 'texto',
      respostaAberta: true,
      palavrasChave: ['projeto', 'tecnolog', 'desenvolv', 'código', 'codigo', 'aprend']
    },
    {
      id: 'dispEstagio6h',
      secao: 'disponibilidade',
      texto: 'Você possui disponibilidade para estágio de 6 horas?',
      tipo: 'simNao'
    }
  ]
};
