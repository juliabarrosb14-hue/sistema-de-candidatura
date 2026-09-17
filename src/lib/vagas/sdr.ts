import type { VagaConfig } from './types';

const UNIDADES = ['Capim Macio', 'Petrópolis', 'Zona Norte', 'Lagoa Nova'];

export const sdr: VagaConfig = {
  slug: 'sdr',
  cargo: 'SDR',
  empresa: 'Clínica Drenesse',
  local: 'Natal/RN',
  unidades: UNIDADES,
  horario: 'Trabalha aos sábados.',
  descricao: [
    'A Clínica Drenesse busca uma SDR para fazer a prospecção ativa e qualificar leads antes do fechamento com o time comercial.',
    'Se você gosta de prospecção, não se abala com "não" e sabe conduzir uma conversa até o agendamento, essa vaga é para você.'
  ],
  responsabilidades: [
    'Realizar prospecção ativa de leads',
    'Qualificar contatos antes de encaminhar ao closer',
    'Cumprir metas de agendamento',
    'Acompanhar cadência de follow-up',
    'Registrar e acompanhar sua taxa de conversão'
  ],
  requisitos: [
    'Experiência com vendas ou prospecção ativa',
    'Boa comunicação e resiliência',
    'Experiência com metas comerciais',
    'Disponibilidade para trabalhar aos sábados'
  ],
  diferenciais: [
    'Experiência prévia como SDR',
    'Vivência com CRM',
    'Experiência em estética, saúde, beleza ou bem-estar'
  ],
  remuneracao: {
    salarioBase: 'R$ 1.900,00',
    complemento: 'bonificação por meta + vale-transporte'
  },
  beneficios: ['Bonificação por meta', 'Vale-transporte', 'Wellhub', 'Plano odontológico'],
  perguntaSegmentoId: 'experienciaEstetica',
  discAlvo: { D: 35, I: 35, S: 15, C: 15 },
  filtrosRapidos: [
    { label: 'Já foi SDR', perguntaId: 'jaFoiSdr', valorEsperado: 'sim' },
    { label: 'Experiência com CRM', perguntaId: 'usouCrm', valorEsperado: 'sim' },
    { label: 'Experiência no segmento', perguntaId: 'experienciaEstetica', valorEsperado: 'sim' }
  ],
  perguntas: [
    {
      id: 'experienciaVendas',
      secao: 'experiencia',
      texto: 'Você possui experiência com vendas?',
      tipo: 'simNao',
      pesoExperiencia: 6
    },
    {
      id: 'jaFoiSdr',
      secao: 'experiencia',
      texto: 'Já trabalhou como SDR?',
      tipo: 'simNao',
      pesoExperiencia: 6
    },
    {
      id: 'tempoVendasProspeccao',
      secao: 'experiencia',
      texto: 'Quanto tempo de experiência você possui com vendas/prospecção?',
      tipo: 'select',
      opcoes: ['Sem experiência', 'Até 1 ano', '1 a 2 anos', '2 a 4 anos', 'Mais de 4 anos'],
      pesoPorOpcao: { 'Sem experiência': 0, 'Até 1 ano': 3, '1 a 2 anos': 6, '2 a 4 anos': 8, 'Mais de 4 anos': 10 }
    },
    {
      id: 'realizouProspeccaoAtiva',
      secao: 'experiencia',
      texto: 'Já realizou prospecção ativa?',
      tipo: 'simNao',
      pesoExperiencia: 6
    },
    {
      id: 'canalProspeccao',
      secao: 'experiencia',
      texto: 'Qual canal você mais utilizou para prospecção?',
      tipo: 'multiSelect',
      opcoes: ['WhatsApp', 'Instagram', 'Facebook', 'Telefone', 'E-mail', 'Outros'],
      categoria: 'tecnica',
      pesoPorOpcaoMulti: { WhatsApp: 2, Instagram: 2, Facebook: 1, Telefone: 2, 'E-mail': 1, Outros: 1 }
    },
    {
      id: 'trabalhouCadenciaFollowUp',
      secao: 'experiencia',
      texto: 'Você já trabalhou com cadência de follow-up?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 5
    },
    {
      id: 'quantidadeLeadsDia',
      secao: 'experiencia',
      texto: 'Aproximadamente quantos leads você já atendia por dia?',
      tipo: 'select',
      opcoes: ['Até 20', '21 a 50', '51 a 100', 'Mais de 100'],
      categoria: 'tecnica',
      pesoPorOpcao: { 'Até 20': 2, '21 a 50': 4, '51 a 100': 6, 'Mais de 100': 8 }
    },
    {
      id: 'trabalhouComMetas',
      secao: 'experiencia',
      texto: 'Já trabalhou com metas comerciais?',
      tipo: 'simNao',
      pesoExperiencia: 5
    },
    {
      id: 'teveMetaAgendamento',
      secao: 'experiencia',
      texto: 'Você já teve meta de agendamento?',
      tipo: 'simNao',
      pesoExperiencia: 4
    },
    {
      id: 'acompanhouIndicadores',
      secao: 'experiencia',
      texto: 'Já acompanhou indicadores como conversão, faturamento, agendamentos ou ticket médio?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 4
    },
    {
      id: 'acompanhouPropriaConversao',
      secao: 'experiencia',
      texto: 'Você já acompanhou sua própria taxa de conversão?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 4
    },
    {
      id: 'usouCrm',
      secao: 'experiencia',
      texto: 'Já utilizou CRM?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 4
    },
    {
      id: 'usouScripts',
      secao: 'experiencia',
      texto: 'Você já utilizou scripts de atendimento/vendas?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 3
    },
    {
      id: 'experienciaAtendimentoComercialWhatsapp',
      secao: 'experiencia',
      texto: 'Você possui experiência com atendimento comercial pelo WhatsApp?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 3
    },
    {
      id: 'experienciaEstetica',
      secao: 'experiencia',
      texto: 'Experiência em estética, saúde, beleza ou bem-estar?',
      tipo: 'simNao'
    },
    {
      id: 'reacaoMuitosNaos',
      secao: 'experiencia',
      texto: 'Como você reage quando recebe muitos "nãos" seguidos?',
      tipo: 'select',
      opcoes: [
        'Mantenho o ritmo e sigo para o próximo contato',
        'Reviso minha abordagem antes de continuar',
        'Preciso de uma pausa para recarregar',
        'Fico desmotivada por um tempo'
      ],
      categoria: 'estrategica',
      pesoPorOpcao: {
        'Mantenho o ritmo e sigo para o próximo contato': 5,
        'Reviso minha abordagem antes de continuar': 5,
        'Preciso de uma pausa para recarregar': 2,
        'Fico desmotivada por um tempo': 0
      }
    },
    {
      id: 'caseSumiuAposValor',
      secao: 'experiencia',
      texto: 'Uma pessoa respondeu ao anúncio, demonstrou interesse, mas parou de responder depois que você informou o valor. Como você faria o próximo contato?',
      tipo: 'texto',
      respostaAberta: true,
      ehCase: true,
      categoria: 'estrategica',
      caseTemasBons: ['valor', 'benefíc', 'beneficio', 'condiç', 'duvida', 'dúvida', 'reforç', 'follow']
    },
    {
      id: 'relatoProspeccao',
      secao: 'experiencia',
      texto: 'Conte brevemente sobre sua última experiência com prospecção ou vendas.',
      tipo: 'texto',
      respostaAberta: true,
      palavrasChave: ['prospec', 'lead', 'venda', 'meta', 'conversão', 'conversao', 'abordagem']
    },
    {
      id: 'dispSabados',
      secao: 'disponibilidade',
      texto: 'Trabalha aos sábados?',
      tipo: 'simNao'
    }
  ]
};
