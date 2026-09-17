import type { VagaConfig } from './types';

const UNIDADES = ['Capim Macio', 'Petrópolis', 'Zona Norte', 'Lagoa Nova'];

export const supervisoraSeniorEstetica: VagaConfig = {
  slug: 'supervisora-senior-estetica',
  cargo: 'Supervisora Sênior — Estética',
  empresa: 'Clínica Drenesse',
  local: 'Natal/RN',
  unidades: UNIDADES,
  horario: 'Disponibilidade para circular entre unidades quando necessário.',
  descricao: [
    'A Clínica Drenesse busca uma Supervisora Sênior para liderar profissionais da área de estética, garantindo qualidade técnica, produtividade e desenvolvimento da equipe.',
    'Se você já liderou times de estética, sabe dar feedback difícil e acompanha indicadores de perto, essa vaga é para você.'
  ],
  responsabilidades: [
    'Liderar e desenvolver profissionais de estética',
    'Acompanhar indicadores de produtividade da equipe',
    'Corrigir desvios de protocolo e dar feedback técnico',
    'Identificar necessidades de treinamento',
    'Acompanhar metas comerciais da equipe'
  ],
  requisitos: [
    'Experiência liderando profissionais de estética',
    'Capacidade de dar feedback direto e construtivo',
    'Acompanhamento de indicadores de produtividade',
    'Perfil resolutivo diante de resistência da equipe'
  ],
  diferenciais: [
    'Experiência com mais de uma unidade/equipe',
    'Vivência com metas comerciais e conversão',
    'Experiência estruturando treinamentos técnicos'
  ],
  remuneracao: {
    salarioBase: 'R$ 3.000,00',
    complemento: 'bonificação por meta + vale-transporte'
  },
  beneficios: ['Bonificação por meta', 'Vale-transporte', 'Wellhub', 'Plano odontológico'],
  discAlvo: { D: 35, I: 20, S: 30, C: 15 },
  filtrosRapidos: [
    { label: 'Já liderou equipe', perguntaId: 'jaLiderouEquipe', valorEsperado: 'sim' },
    { label: 'Múltiplas unidades', perguntaId: 'responsavelMultiplasUnidades', valorEsperado: 'sim' },
    { label: 'Disponível p/ sábados', perguntaId: 'dispSabados', valorEsperado: 'sim' }
  ],
  perguntas: [
    {
      id: 'jaLiderouEquipe',
      secao: 'experiencia',
      texto: 'Você já liderou profissionais da área de estética?',
      tipo: 'simNao',
      pesoExperiencia: 8
    },
    {
      id: 'tempoLiderancaEstetica',
      secao: 'experiencia',
      texto: 'Quanto tempo de experiência você possui em liderança de equipes de estética?',
      tipo: 'select',
      opcoes: ['Menos de 1 ano', '1 a 2 anos', '2 a 4 anos', 'Mais de 4 anos'],
      pesoPorOpcao: { 'Menos de 1 ano': 2, '1 a 2 anos': 5, '2 a 4 anos': 8, 'Mais de 4 anos': 10 }
    },
    {
      id: 'maiorEquipeLiderada',
      secao: 'experiencia',
      texto: 'Qual foi o maior número de profissionais que você liderou simultaneamente?',
      tipo: 'numero',
      obrigatoria: false,
      placeholder: 'Ex: 10',
      pesoPorFaixa: [
        { min: 15, pontos: 8 },
        { min: 8, pontos: 5 },
        { min: 3, pontos: 3 }
      ]
    },
    {
      id: 'responsavelMultiplasUnidades',
      secao: 'experiencia',
      texto: 'Você já foi responsável por mais de uma unidade/equipe?',
      tipo: 'simNao',
      pesoExperiencia: 5
    },
    {
      id: 'acompanhouIndicadoresIndividuais',
      secao: 'experiencia',
      texto: 'Você já acompanhou indicadores individuais de produtividade das profissionais?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 6
    },
    {
      id: 'indicadoresAcompanhados',
      secao: 'experiencia',
      texto: 'Quais indicadores você já acompanhou?',
      tipo: 'multiSelect',
      opcoes: ['Produtividade', 'Comparecimento', 'Vendas', 'Ticket médio', 'NPS', 'Reagendamento', 'Outros'],
      categoria: 'tecnica',
      pesoPorOpcaoMulti: { Produtividade: 2, Comparecimento: 2, Vendas: 2, 'Ticket médio': 2, NPS: 2, Reagendamento: 2, Outros: 1 }
    },
    {
      id: 'participouMetasComerciais',
      secao: 'experiencia',
      texto: 'Você já participou da definição ou acompanhamento de metas comerciais da equipe?',
      tipo: 'simNao',
      pesoExperiencia: 5
    },
    {
      id: 'realizouTreinamentos',
      secao: 'experiencia',
      texto: 'Você já realizou treinamentos técnicos ou comportamentais para sua equipe?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 5
    },
    {
      id: 'acompanhouProdutividade',
      secao: 'experiencia',
      texto: 'Você já acompanhou indicadores de produtividade da equipe?',
      tipo: 'simNao',
      pesoExperiencia: 4
    },
    {
      id: 'corrigiuColaboradora',
      secao: 'experiencia',
      texto: 'Você já corrigiu uma colaboradora que não seguia o protocolo?',
      tipo: 'simNao',
      categoria: 'estrategica',
      pesoExperiencia: 4
    },
    {
      id: 'lidouResistencia',
      secao: 'experiencia',
      texto: 'Você já lidou com resistência de uma profissional a uma orientação?',
      tipo: 'simNao',
      categoria: 'estrategica',
      pesoExperiencia: 4
    },
    {
      id: 'experienciaComercial',
      secao: 'experiencia',
      texto: 'Você possui experiência comercial (metas, conversão)?',
      tipo: 'simNao',
      pesoExperiencia: 4
    },
    {
      id: 'deuFeedbackDificil',
      secao: 'experiencia',
      texto: 'Você já deu um feedback difícil a alguém?',
      tipo: 'simNao',
      categoria: 'estrategica',
      pesoExperiencia: 4
    },
    {
      id: 'identificouNecessidadeTreinamento',
      secao: 'experiencia',
      texto: 'Você já identificou necessidade de treinamento em uma colaboradora?',
      tipo: 'simNao',
      pesoExperiencia: 3
    },
    {
      id: 'avaliacaoDesempenho',
      secao: 'experiencia',
      texto: 'Você possui experiência com avaliação de desempenho e acompanhamento individual?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 4
    },
    {
      id: 'atitudeBaixoDesempenho',
      secao: 'experiencia',
      texto: 'Quando uma profissional apresenta baixo desempenho durante vários períodos, qual costuma ser sua primeira atitude?',
      tipo: 'select',
      opcoes: [
        'Converso individualmente para entender a causa',
        'Aciono um plano de desenvolvimento formal',
        'Reforço a cobrança de resultados',
        'Escalo para a diretoria/RH'
      ],
      categoria: 'estrategica',
      pesoPorOpcao: { 'Converso individualmente para entender a causa': 5, 'Aciono um plano de desenvolvimento formal': 4, 'Reforço a cobrança de resultados': 2, 'Escalo para a diretoria/RH': 1 }
    },
    {
      id: 'caseMetaAbaixo',
      secao: 'experiencia',
      texto: 'Sua equipe está abaixo da meta na metade do mês. Como você identifica o problema e o que faria nos próximos dias?',
      tipo: 'texto',
      respostaAberta: true,
      ehCase: true,
      categoria: 'estrategica',
      caseTemasBons: ['indicador', 'individual', 'convers', 'plano', 'acompanh', 'diagnost', 'meta', 'feedback']
    },
    {
      id: 'relatoSituacaoLideranca',
      secao: 'experiencia',
      texto: 'Conte brevemente a situação mais complexa de liderança que já enfrentou.',
      tipo: 'texto',
      respostaAberta: true,
      palavrasChave: ['equipe', 'lideran', 'conflito', 'resultado', 'decis', 'feedback']
    },
    {
      id: 'dispSabados',
      secao: 'disponibilidade',
      texto: 'Você possui disponibilidade para circular entre unidades quando necessário?',
      tipo: 'simNao'
    }
  ]
};
