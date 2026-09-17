import type { VagaConfig } from './types';

const UNIDADES = ['Capim Macio', 'Petrópolis', 'Zona Norte', 'Lagoa Nova'];

export const estagiarioEngenhariaProducao: VagaConfig = {
  slug: 'estagiario-engenharia-producao',
  cargo: 'Estagiário de Engenharia de Produção',
  empresa: 'Clínica Drenesse',
  local: 'Natal/RN',
  unidades: UNIDADES,
  horario: 'Estágio de 6 horas por dia.',
  descricao: [
    'A Clínica Drenesse busca um(a) estagiário(a) de Engenharia de Produção para apoiar análise de processos, indicadores e melhoria contínua da operação.',
    'Se você gosta de dados, processos e já usou ferramentas como Excel, Power BI ou Lean, essa vaga é para você.'
  ],
  responsabilidades: [
    'Apoiar no mapeamento e melhoria de processos',
    'Levantar e analisar indicadores operacionais',
    'Apoiar projetos de melhoria contínua',
    'Construir relatórios e painéis de acompanhamento',
    'Propor soluções baseadas em dados'
  ],
  requisitos: [
    'Estar cursando Engenharia de Produção',
    'Conhecimento de Excel',
    'Disponibilidade para estágio de 6 horas por dia'
  ],
  diferenciais: [
    'Conhecimento em Power BI',
    'Vivência com ferramentas de melhoria contínua (Lean, PDCA, Ishikawa)',
    'Conhecimento de BPMN e mapeamento de processos'
  ],
  remuneracao: {
    salarioBase: 'R$ 1.600,00',
    complemento: 'vale-transporte'
  },
  beneficios: ['Vale-transporte', 'Wellhub', 'Plano odontológico'],
  discAlvo: { D: 30, I: 10, S: 15, C: 45 },
  filtrosRapidos: [
    { label: 'Já trabalhou com KPIs', perguntaId: 'trabalhouKpis', valorEsperado: 'sim' },
    { label: 'Já usou ferramentas de melhoria', perguntaId: 'usouFerramentasMelhoria', valorEsperado: 'sim' }
  ],
  perguntas: [
    {
      id: 'cursandoEngenhariaProducao',
      secao: 'experiencia',
      texto: 'Você está cursando Engenharia de Produção?',
      tipo: 'simNao',
      pesoExperiencia: 8
    },
    {
      id: 'periodoAtual',
      secao: 'experiencia',
      texto: 'Em qual período você está?',
      tipo: 'texto',
      placeholder: 'Ex: 6º período'
    },
    {
      id: 'nivelExcel',
      secao: 'experiencia',
      texto: 'Qual seu nível de Excel?',
      tipo: 'select',
      opcoes: ['Básico', 'Intermediário', 'Avançado'],
      categoria: 'tecnica',
      pesoPorOpcao: { Básico: 1, Intermediário: 4, Avançado: 6 }
    },
    {
      id: 'nivelPowerBi',
      secao: 'experiencia',
      texto: 'Qual seu nível de Power BI?',
      tipo: 'select',
      opcoes: ['Nenhum', 'Básico', 'Intermediário', 'Avançado'],
      categoria: 'tecnica',
      pesoPorOpcao: { Nenhum: 0, Básico: 3, Intermediário: 5, Avançado: 7 }
    },
    {
      id: 'trabalhouAnaliseDados',
      secao: 'experiencia',
      texto: 'Já trabalhou com análise de dados?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 5
    },
    {
      id: 'trabalhouKpis',
      secao: 'experiencia',
      texto: 'Já trabalhou com indicadores/KPIs?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 5
    },
    {
      id: 'conheceBpmn',
      secao: 'experiencia',
      texto: 'Conhece BPMN?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 3
    },
    {
      id: 'criouFluxogramas',
      secao: 'experiencia',
      texto: 'Já criou fluxogramas?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 3
    },
    {
      id: 'usouFerramentasAnaliseProcessos',
      secao: 'experiencia',
      texto: 'Já utilizou ferramentas de análise de processos?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 3
    },
    {
      id: 'realizouMapeamentoMelhoria',
      secao: 'experiencia',
      texto: 'Já realizou mapeamento ou melhoria de processos?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 5
    },
    {
      id: 'participouProjetoMelhoria',
      secao: 'experiencia',
      texto: 'Já participou de algum projeto de melhoria contínua?',
      tipo: 'simNao',
      pesoExperiencia: 4
    },
    {
      id: 'conhecimentoLean',
      secao: 'experiencia',
      texto: 'Possui conhecimento em Lean?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 3
    },
    {
      id: 'usouFerramentasMelhoria',
      secao: 'experiencia',
      texto: 'Já utilizou ferramentas como 5W2H, PDCA, Ishikawa ou Pareto?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 4
    },
    {
      id: 'caseRetrabalhoNaoFormalizado',
      secao: 'experiencia',
      texto: 'Você percebe que um processo está gerando retrabalho constante, mas ninguém formalizou isso ainda. O que você faria?',
      tipo: 'texto',
      respostaAberta: true,
      ehCase: true,
      categoria: 'estrategica',
      caseTemasBons: ['mapea', 'document', 'dado', 'causa', 'process', 'propon', 'indicador']
    },
    {
      id: 'relatoProblemaComDados',
      secao: 'experiencia',
      texto: 'Conte brevemente sobre um problema que resolveu utilizando dados.',
      tipo: 'texto',
      respostaAberta: true,
      palavrasChave: ['dado', 'process', 'indicador', 'analis', 'resolv', 'melhor']
    },
    {
      id: 'dispEstagio6h',
      secao: 'disponibilidade',
      texto: 'Você possui disponibilidade para trabalhar 6 horas por dia?',
      tipo: 'simNao'
    }
  ]
};
