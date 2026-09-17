import type { VagaConfig } from './types';

const UNIDADES = ['Capim Macio', 'Petrópolis', 'Zona Norte', 'Lagoa Nova'];

export const socialMedia: VagaConfig = {
  slug: 'social-media',
  cargo: 'Social Media',
  empresa: 'Clínica Drenesse',
  local: 'Natal/RN',
  unidades: UNIDADES,
  horario: 'Horário administrativo.',
  descricao: [
    'A Clínica Drenesse busca um(a) Social Media para cuidar do conteúdo, calendário editorial e resultados das redes sociais da marca.',
    'Se você já foi responsável por um calendário editorial completo e sabe transformar conteúdo em geração de leads, essa vaga é para você.'
  ],
  responsabilidades: [
    'Planejar e executar o calendário editorial das redes',
    'Criar conteúdo com objetivo comercial e de marca',
    'Acompanhar métricas de alcance, engajamento e conversão',
    'Administrar comentários e possíveis crises nas redes',
    'Utilizar ferramentas de planejamento/agendamento de conteúdo'
  ],
  requisitos: [
    'Experiência como Social Media',
    'Boa comunicação escrita e visual',
    'Experiência acompanhando métricas de redes sociais',
    'Perfil organizado e estratégico'
  ],
  diferenciais: [
    'Experiência com conteúdo para geração de leads',
    'Vivência administrando crises/comentários negativos',
    'Portfólio ou perfil profissional disponível'
  ],
  remuneracao: {
    salarioBase: 'R$ 2.000,00',
    complemento: 'vale-transporte'
  },
  beneficios: ['Vale-transporte', 'Wellhub', 'Plano odontológico'],
  discAlvo: { D: 30, I: 40, S: 10, C: 20 },
  filtrosRapidos: [
    { label: 'Já geriu calendário editorial', perguntaId: 'responsavelCalendarioEditorial', valorEsperado: 'sim' },
    { label: 'Conteúdo p/ geração de leads', perguntaId: 'criouConteudoLeads', valorEsperado: 'sim' }
  ],
  perguntas: [
    {
      id: 'experienciaSocialMedia',
      secao: 'experiencia',
      texto: 'Já trabalhou como Social Media?',
      tipo: 'simNao',
      pesoExperiencia: 7
    },
    {
      id: 'tempoExperienciaSocialMedia',
      secao: 'experiencia',
      texto: 'Quanto tempo de experiência na função você possui?',
      tipo: 'select',
      opcoes: ['Sem experiência', 'Até 1 ano', '1 a 2 anos', '2 a 4 anos', 'Mais de 4 anos'],
      pesoPorOpcao: { 'Sem experiência': 0, 'Até 1 ano': 3, '1 a 2 anos': 6, '2 a 4 anos': 8, 'Mais de 4 anos': 10 }
    },
    {
      id: 'plataformasGerenciadas',
      secao: 'experiencia',
      texto: 'Quais plataformas você já gerenciou?',
      tipo: 'multiSelect',
      opcoes: ['Instagram', 'TikTok', 'Facebook', 'YouTube', 'Pinterest', 'Outras'],
      categoria: 'tecnica',
      pesoPorOpcaoMulti: { Instagram: 3, TikTok: 2, Facebook: 1, YouTube: 2, Pinterest: 1, Outras: 1 }
    },
    {
      id: 'responsavelCalendarioEditorial',
      secao: 'experiencia',
      texto: 'Você já foi responsável pelo calendário editorial completo de uma marca?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 6
    },
    {
      id: 'desenvolveuCalendarioConteudo',
      secao: 'experiencia',
      texto: 'Já desenvolveu um calendário de conteúdo?',
      tipo: 'simNao',
      pesoExperiencia: 5
    },
    {
      id: 'acompanhouMetricasRedes',
      secao: 'experiencia',
      texto: 'Já acompanhou indicadores de redes sociais?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 5
    },
    {
      id: 'acompanhouMetricasAmplas',
      secao: 'experiencia',
      texto: 'Você já acompanhou métricas como alcance, engajamento, crescimento, leads e conversão?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 5
    },
    {
      id: 'criouEstrategiaComercial',
      secao: 'experiencia',
      texto: 'Você já criou estratégias de conteúdo com objetivo comercial?',
      tipo: 'simNao',
      pesoExperiencia: 4
    },
    {
      id: 'criouConteudoLeads',
      secao: 'experiencia',
      texto: 'Já trabalhou com conteúdo voltado para geração de leads?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 5
    },
    {
      id: 'lidouCriticasComentarios',
      secao: 'experiencia',
      texto: 'Você já lidou com críticas ou comentários negativos nas redes?',
      tipo: 'simNao',
      categoria: 'estrategica',
      pesoExperiencia: 3
    },
    {
      id: 'administrouCriseComentario',
      secao: 'experiencia',
      texto: 'Você já precisou responder ou administrar uma crise/comentário negativo nas redes?',
      tipo: 'simNao',
      categoria: 'estrategica',
      pesoExperiencia: 3
    },
    {
      id: 'usaFerramentasAgendamento',
      secao: 'experiencia',
      texto: 'Você utiliza ferramentas de planejamento/agendamento de conteúdo?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 3
    },
    {
      id: 'ferramentasAgendamento',
      secao: 'experiencia',
      texto: 'Quais ferramentas?',
      tipo: 'texto',
      categoria: 'tecnica',
      obrigatoria: false,
      placeholder: 'Ex: Meta Business Suite, Mlabs...'
    },
    {
      id: 'linkPortfolio',
      secao: 'experiencia',
      texto: 'Link do portfólio/perfil profissional.',
      tipo: 'texto',
      obrigatoria: false,
      categoria: 'portfolio',
      placeholder: 'https://...'
    },
    {
      id: 'caseComentarioNegativoViralizando',
      secao: 'experiencia',
      texto: 'Um comentário negativo sobre a empresa começa a ganhar respostas de outras pessoas em um post. Como você conduz a situação?',
      tipo: 'texto',
      respostaAberta: true,
      ehCase: true,
      categoria: 'estrategica',
      caseTemasBons: ['calma', 'respond', 'transparen', 'empresa', 'escalar', 'privado', 'tom']
    },
    {
      id: 'relatoConteudoResultado',
      secao: 'experiencia',
      texto: 'Conte brevemente sobre um conteúdo que criou e que gerou resultado.',
      tipo: 'texto',
      respostaAberta: true,
      palavrasChave: ['conteúdo', 'conteudo', 'result', 'engajamento', 'alcance', 'lead']
    }
  ]
};
