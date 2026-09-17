import type { VagaConfig } from './types';

const UNIDADES = ['Capim Macio', 'Petrópolis', 'Zona Norte', 'Lagoa Nova'];

export const headMarketing: VagaConfig = {
  slug: 'head-marketing',
  cargo: 'Head de Marketing',
  empresa: 'Clínica Drenesse',
  local: 'Natal/RN',
  unidades: UNIDADES,
  horario: 'Horário administrativo.',
  descricao: [
    'A Clínica Drenesse busca um(a) Head de Marketing para liderar a estratégia de aquisição, branding e geração de leads da rede, conectando marketing e vendas.',
    'Se você já liderou equipe de marketing, gerencia mídia paga com propriedade e mede resultado de tudo que faz, essa vaga é para você.'
  ],
  responsabilidades: [
    'Liderar a estratégia de marketing da rede',
    'Gerenciar investimento em mídia paga',
    'Acompanhar geração de leads e indicadores de aquisição',
    'Integrar marketing e vendas em um funil único',
    'Apresentar resultados para diretoria/sócios'
  ],
  requisitos: [
    'Experiência liderando marketing',
    'Experiência com tráfego pago',
    'Boa capacidade analítica e de apresentação de resultados',
    'Vivência conectando marketing e vendas'
  ],
  diferenciais: [
    'Experiência com branding',
    'Vivência com funil de marketing e vendas integrado',
    'Experiência apresentando resultados diretamente à diretoria'
  ],
  remuneracao: {
    salarioBase: 'R$ 5.000,00',
    complemento: 'vale-transporte'
  },
  beneficios: ['Vale-transporte', 'Wellhub', 'Plano odontológico'],
  discAlvo: { D: 40, I: 35, S: 10, C: 15 },
  filtrosRapidos: [
    { label: 'Já liderou marketing', perguntaId: 'jaLiderouMarketing', valorEsperado: 'sim' },
    { label: 'Já trabalhou com tráfego pago', perguntaId: 'trabalhouTrafegoPago', valorEsperado: 'sim' }
  ],
  perguntas: [
    {
      id: 'jaLiderouMarketing',
      secao: 'experiencia',
      texto: 'Já liderou uma área de marketing?',
      tipo: 'simNao',
      pesoExperiencia: 8
    },
    {
      id: 'anosExperienciaMarketing',
      secao: 'experiencia',
      texto: 'Quantos anos de experiência você possui em marketing?',
      tipo: 'select',
      opcoes: ['1 a 2 anos', '2 a 4 anos', '4 a 7 anos', 'Mais de 7 anos'],
      pesoPorOpcao: { '1 a 2 anos': 3, '2 a 4 anos': 6, '4 a 7 anos': 9, 'Mais de 7 anos': 11 }
    },
    {
      id: 'tamanhoEquipeLiderada',
      secao: 'experiencia',
      texto: 'Qual foi o maior tamanho de equipe de marketing que você liderou?',
      tipo: 'numero',
      obrigatoria: false,
      placeholder: 'Ex: 5',
      pesoPorFaixa: [
        { min: 6, pontos: 6 },
        { min: 3, pontos: 4 },
        { min: 1, pontos: 2 }
      ]
    },
    {
      id: 'desenvolveuEstrategiasAquisicao',
      secao: 'experiencia',
      texto: 'Já desenvolveu estratégias de aquisição de clientes?',
      tipo: 'simNao',
      pesoExperiencia: 6
    },
    {
      id: 'trabalhouTrafegoPago',
      secao: 'experiencia',
      texto: 'Já trabalhou com tráfego pago?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 6
    },
    {
      id: 'maiorInvestimentoMidia',
      secao: 'experiencia',
      texto: 'Qual foi o maior investimento mensal em mídia que você já gerenciou?',
      tipo: 'select',
      opcoes: ['Até R$ 5 mil', 'R$ 5 mil a R$ 20 mil', 'R$ 20 mil a R$ 50 mil', 'Mais de R$ 50 mil'],
      categoria: 'tecnica',
      pesoPorOpcao: { 'Até R$ 5 mil': 2, 'R$ 5 mil a R$ 20 mil': 4, 'R$ 20 mil a R$ 50 mil': 6, 'Mais de R$ 50 mil': 8 }
    },
    {
      id: 'responsavelMetasLeads',
      secao: 'experiencia',
      texto: 'Você já foi responsável por metas de geração de leads?',
      tipo: 'simNao',
      pesoExperiencia: 5
    },
    {
      id: 'acompanhouCacCplRoas',
      secao: 'experiencia',
      texto: 'Já acompanhou CAC, CPL, ROAS ou outros indicadores de aquisição?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 5
    },
    {
      id: 'trabalhouBranding',
      secao: 'experiencia',
      texto: 'Já trabalhou com branding?',
      tipo: 'simNao',
      pesoExperiencia: 4
    },
    {
      id: 'mediuRetornoCampanha',
      secao: 'experiencia',
      texto: 'Já mediu o retorno de uma campanha?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 4
    },
    {
      id: 'conectouMarketingVendas',
      secao: 'experiencia',
      texto: 'Já conectou marketing e vendas em uma estratégia?',
      tipo: 'simNao',
      pesoExperiencia: 4
    },
    {
      id: 'liderouEstrategiaIntegrada',
      secao: 'experiencia',
      texto: 'Você já liderou estratégia de marketing integrada com o time comercial?',
      tipo: 'simNao',
      categoria: 'estrategica',
      pesoExperiencia: 4
    },
    {
      id: 'trabalhouFunilMarketingVendas',
      secao: 'experiencia',
      texto: 'Já trabalhou com funil de marketing e vendas?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 4
    },
    {
      id: 'apresentouResultadosDiretoria',
      secao: 'experiencia',
      texto: 'Você já apresentou resultados de marketing diretamente para diretoria/sócios?',
      tipo: 'simNao',
      categoria: 'estrategica',
      pesoExperiencia: 4
    },
    {
      id: 'caseCampanhaSemRetorno',
      secao: 'experiencia',
      texto: 'Uma campanha com bom investimento não está trazendo o retorno esperado na metade do período. O que você faz?',
      tipo: 'texto',
      respostaAberta: true,
      ehCase: true,
      categoria: 'estrategica',
      caseTemasBons: ['analis', 'dado', 'ajust', 'hipótese', 'hipotese', 'test', 'público', 'publico', 'criativ']
    },
    {
      id: 'relatoResultadoMensuravel',
      secao: 'experiencia',
      texto: 'Conte brevemente um resultado de marketing que você conseguiu mensurar.',
      tipo: 'texto',
      respostaAberta: true,
      palavrasChave: ['result', 'campanha', 'lead', 'convers', 'indicador', 'roi']
    }
  ]
};
