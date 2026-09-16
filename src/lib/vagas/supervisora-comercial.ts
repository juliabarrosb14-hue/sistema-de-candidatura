import type { VagaConfig } from './types';

const ANOS_OPCOES = ['Sem experiência', 'Até 1 ano', '1 a 2 anos', '2 a 4 anos', 'Mais de 4 anos'];

export const supervisoraComercial: VagaConfig = {
  slug: 'supervisora-comercial',
  cargo: 'Supervisora Comercial',
  empresa: 'Clínica Drenesse',
  local: 'Natal/RN',
  unidades: ['Capim Macio', 'Petrópolis', 'Zona Norte', 'Lagoa Nova'],
  horario: 'Disponibilidade para horário comercial, de segunda a sábado.',
  descricao: [
    'A Clínica Drenesse está em busca de uma profissional estratégica, comunicativa e apaixonada por resultados para liderar e desenvolver nossa equipe comercial, garantindo excelência no atendimento, cumprimento dos processos e alcance das metas.',
    'Se você tem perfil de liderança, gosta de vendas, acompanha indicadores e sabe transformar metas em resultados, essa oportunidade pode ser para você!'
  ],
  responsabilidades: [
    'Liderar, acompanhar e desenvolver a equipe comercial',
    'Acompanhar metas de vendas, agendamentos, conversão e faturamento',
    'Monitorar indicadores e resultados da equipe',
    'Realizar reuniões de alinhamento, feedbacks e acompanhamentos individuais',
    'Desenvolver estratégias para melhorar a conversão e os resultados comerciais',
    'Atuar no acompanhamento de negociações e fechamento de vendas',
    'Garantir o cumprimento dos processos comerciais',
    'Identificar oportunidades de melhoria na operação comercial',
    'Engajar a equipe para o alcance das metas',
    'Garantir um atendimento humanizado, ágil e alinhado ao padrão Drenesse',
    'Acompanhar os resultados das unidades e apresentar os principais indicadores à diretoria'
  ],
  requisitos: [
    'Experiência com liderança comercial',
    'Experiência com metas, vendas e atendimento ao cliente',
    'Perfil de liderança, organização e foco em resultados',
    'Boa comunicação e capacidade de conduzir diferentes perfis de profissionais',
    'Proatividade e perfil resolutivo',
    'Capacidade de acompanhar indicadores e tomar decisões com base em resultados'
  ],
  diferenciais: [
    'Experiência com vendas e/ou SDR',
    'Experiência em estética, saúde, beleza ou bem-estar',
    'Experiência com gestão de equipes comerciais',
    'Vivência com CRM',
    'Experiência com indicadores e acompanhamento de funil de vendas'
  ],
  remuneracao: {
    salarioBase: 'R$ 3.000,00',
    complemento: 'R$ 1.200,00 de ajuda de custo'
  },
  beneficios: ['Bonificações por atingimento de metas', 'Vale-transporte', 'Wellhub', 'Plano odontológico'],
  perguntaSegmentoId: 'experienciaEstetica',
  discAlvo: { D: 35, I: 30, S: 20, C: 15 },
  filtrosRapidos: [
    { label: 'Com experiência em liderança', perguntaId: 'liderancaComercial', valorEsperado: 'sim' },
    { label: 'Com experiência em SDR', perguntaId: 'experienciaSdr', valorEsperado: 'sim' },
    { label: 'Com experiência em estética', perguntaId: 'experienciaEstetica', valorEsperado: 'sim' },
    { label: 'Disponível seg. a sáb.', perguntaId: 'segundaASabado', valorEsperado: 'sim' }
  ],
  perguntas: [
    {
      id: 'liderancaComercial',
      secao: 'experiencia',
      texto: 'Você possui experiência com liderança comercial?',
      tipo: 'simNao',
      pesoExperiencia: 10
    },
    {
      id: 'anosLiderancaComercial',
      secao: 'experiencia',
      texto: 'Quantos anos de experiência com liderança comercial?',
      tipo: 'select',
      opcoes: ANOS_OPCOES,
      pesoPorOpcao: {
        'Sem experiência': 0,
        'Até 1 ano': 2,
        '1 a 2 anos': 4,
        '2 a 4 anos': 6,
        'Mais de 4 anos': 8
      }
    },
    {
      id: 'jaLiderouEquipe',
      secao: 'experiencia',
      texto: 'Você já liderou uma equipe?',
      tipo: 'simNao',
      pesoExperiencia: 5
    },
    {
      id: 'maiorEquipeLiderada',
      secao: 'experiencia',
      texto: 'Qual foi o maior número de pessoas que você já liderou?',
      tipo: 'numero',
      obrigatoria: false,
      placeholder: 'Ex: 8',
      pesoPorFaixa: [
        { min: 10, pontos: 3 },
        { min: 5, pontos: 2 },
        { min: 1, pontos: 1 }
      ]
    },
    {
      id: 'experienciaVendas',
      secao: 'experiencia',
      texto: 'Você possui experiência com vendas?',
      tipo: 'simNao',
      pesoExperiencia: 5
    },
    {
      id: 'experienciaSdr',
      secao: 'experiencia',
      texto: 'Você possui experiência com SDR?',
      tipo: 'simNao',
      pesoExperiencia: 3
    },
    {
      id: 'trabalhouComMetas',
      secao: 'experiencia',
      texto: 'Você já trabalhou com metas comerciais?',
      tipo: 'simNao',
      pesoExperiencia: 4
    },
    {
      id: 'acompanhouIndicadores',
      secao: 'experiencia',
      texto:
        'Você já acompanhou indicadores como conversão, faturamento, agendamentos ou ticket médio?',
      tipo: 'simNao',
      pesoExperiencia: 4
    },
    {
      id: 'usouCrm',
      secao: 'experiencia',
      texto: 'Você já utilizou CRM?',
      tipo: 'simNao',
      pesoExperiencia: 3
    },
    {
      id: 'experienciaEstetica',
      secao: 'experiencia',
      texto: 'Experiência em estética, saúde, beleza ou bem-estar?',
      tipo: 'simNao'
      // Sem pesoExperiencia: esta pergunta alimenta o bucket "segmento" (perguntaSegmentoId), não o de experiência.
    },
    {
      id: 'relatoUltimaExperiencia',
      secao: 'experiencia',
      texto: 'Conte brevemente sobre sua última experiência como líder comercial.',
      tipo: 'texto',
      respostaAberta: true,
      palavrasChave: ['equipe', 'lideran', 'meta', 'resultado', 'vend', 'indicador', 'process', 'time']
    },
    {
      id: 'segundaASabado',
      secao: 'disponibilidade',
      texto: 'Você possui disponibilidade para trabalhar de segunda a sábado?',
      tipo: 'simNao'
    },
    {
      id: 'diferentesUnidades',
      secao: 'disponibilidade',
      texto: 'Você possui disponibilidade para atuar em diferentes unidades de Natal/RN, quando necessário?',
      tipo: 'simNao'
    },
    {
      id: 'horarioComercial',
      secao: 'disponibilidade',
      texto: 'Você possui disponibilidade para horário comercial?',
      tipo: 'simNao'
    },
    {
      id: 'oQueImportaNaLideranca',
      secao: 'disponibilidade',
      texto: 'O que você considera mais importante para liderar uma equipe comercial?',
      tipo: 'texto',
      respostaAberta: true,
      palavrasChave: [
        'confianc',
        'comunicac',
        'exemplo',
        'meta',
        'resultado',
        'escuta',
        'feedback',
        'respeito',
        'organiz'
      ]
    }
  ]
};
