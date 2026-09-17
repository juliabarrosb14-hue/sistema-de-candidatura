import type { VagaConfig } from './types';

const UNIDADES = ['Capim Macio', 'Petrópolis', 'Zona Norte', 'Lagoa Nova'];

export const socialSelling: VagaConfig = {
  slug: 'social-selling',
  cargo: 'Social Selling',
  empresa: 'Clínica Drenesse',
  local: 'Natal/RN',
  unidades: UNIDADES,
  horario: 'Trabalha aos sábados.',
  descricao: [
    'A Clínica Drenesse busca uma profissional de Social Selling para transformar interações nas redes sociais em agendamentos reais.',
    'Se você já conversou com estranhos no Instagram até fechar um agendamento, essa vaga é para você.'
  ],
  responsabilidades: [
    'Conduzir conversas comerciais pelo Instagram e redes sociais',
    'Abordar pessoas que interagiram com o perfil da empresa',
    'Cumprir metas de agendamento/conversão',
    'Realizar follow-up de leads pelas redes sociais',
    'Registrar contatos e acompanhar resultados'
  ],
  requisitos: [
    'Experiência com atendimento comercial em redes sociais',
    'Boa comunicação escrita',
    'Experiência em estética, saúde, beleza ou bem-estar',
    'Disponibilidade para trabalhar aos sábados'
  ],
  diferenciais: [
    'Experiência com social selling estruturado',
    'Vivência com CRM',
    'Facilidade para adaptar comunicação ao perfil do cliente'
  ],
  remuneracao: {
    salarioBase: 'R$ 1.900,00',
    complemento: 'bonificação por meta + vale-transporte'
  },
  beneficios: ['Bonificação por meta', 'Vale-transporte', 'Wellhub', 'Plano odontológico'],
  perguntaSegmentoId: 'experienciaEstetica',
  discAlvo: { D: 15, I: 40, S: 30, C: 15 },
  filtrosRapidos: [
    { label: 'Já fez social selling', perguntaId: 'jaTrabalhouSocialSelling', valorEsperado: 'sim' },
    { label: 'Experiência com CRM', perguntaId: 'usouCrmContatos', valorEsperado: 'sim' },
    { label: 'Experiência no segmento', perguntaId: 'experienciaEstetica', valorEsperado: 'sim' }
  ],
  perguntas: [
    {
      id: 'experienciaAtendimentoInstagram',
      secao: 'experiencia',
      texto: 'Você possui experiência com atendimento pelo Instagram?',
      tipo: 'simNao',
      pesoExperiencia: 6
    },
    {
      id: 'jaTrabalhouSocialSelling',
      secao: 'experiencia',
      texto: 'Já trabalhou com social selling?',
      tipo: 'simNao',
      pesoExperiencia: 6
    },
    {
      id: 'tempoAtendimentoComercialRedes',
      secao: 'experiencia',
      texto: 'Quanto tempo de experiência você possui com atendimento comercial em redes sociais?',
      tipo: 'select',
      opcoes: ['Sem experiência', 'Até 1 ano', '1 a 2 anos', '2 a 4 anos', 'Mais de 4 anos'],
      pesoPorOpcao: { 'Sem experiência': 0, 'Até 1 ano': 3, '1 a 2 anos': 6, '2 a 4 anos': 8, 'Mais de 4 anos': 10 }
    },
    {
      id: 'canaisUtilizados',
      secao: 'experiencia',
      texto: 'Quais canais você já utilizou?',
      tipo: 'multiSelect',
      opcoes: ['Instagram', 'WhatsApp', 'Facebook', 'TikTok', 'Outros'],
      categoria: 'tecnica',
      pesoPorOpcaoMulti: { Instagram: 2, WhatsApp: 2, Facebook: 1, TikTok: 1, Outros: 1 }
    },
    {
      id: 'conduziuAteAgendamento',
      secao: 'experiencia',
      texto: 'Já conduziu uma conversa comercial até o agendamento?',
      tipo: 'simNao',
      pesoExperiencia: 6
    },
    {
      id: 'abordagemAtiva',
      secao: 'experiencia',
      texto: 'Você já utilizou abordagem ativa com pessoas que interagiram com o perfil da empresa?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 5
    },
    {
      id: 'followUpRedes',
      secao: 'experiencia',
      texto: 'Você já trabalhou com follow-up de leads pelas redes sociais?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 5
    },
    {
      id: 'trabalhouMetasAgendamento',
      secao: 'experiencia',
      texto: 'Você já trabalhou com metas de agendamento?',
      tipo: 'simNao',
      pesoExperiencia: 4
    },
    {
      id: 'teveMetaConversaoAgendamento',
      secao: 'experiencia',
      texto: 'Você já teve meta de conversão ou agendamento?',
      tipo: 'simNao',
      pesoExperiencia: 4
    },
    {
      id: 'usouCrmContatos',
      secao: 'experiencia',
      texto: 'Você já utilizou CRM para registrar contatos?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 4
    },
    {
      id: 'conversasComerciaisDia',
      secao: 'experiencia',
      texto: 'Aproximadamente quantas conversas comerciais você já conduzia por dia?',
      tipo: 'select',
      opcoes: ['Até 20', '21 a 50', '51 a 100', 'Mais de 100'],
      categoria: 'tecnica',
      pesoPorOpcao: { 'Até 20': 2, '21 a 50': 4, '51 a 100': 6, 'Mais de 100': 8 }
    },
    {
      id: 'facilidadeAdaptarComunicacao',
      secao: 'experiencia',
      texto: 'Você possui facilidade para adaptar sua comunicação de acordo com o perfil do cliente?',
      tipo: 'simNao',
      categoria: 'estrategica',
      pesoExperiencia: 4
    },
    {
      id: 'experienciaEstetica',
      secao: 'experiencia',
      texto: 'Experiência em estética, saúde, beleza ou bem-estar?',
      tipo: 'simNao'
    },
    {
      id: 'caseSumiuAposComentario',
      secao: 'experiencia',
      texto: 'Uma pessoa comenta com interesse em um post, mas some depois da primeira mensagem. Como você retomaria o contato alguns dias depois?',
      tipo: 'texto',
      respostaAberta: true,
      ehCase: true,
      categoria: 'estrategica',
      caseTemasBons: ['leve', 'naturalidade', 'valor', 'conteúdo', 'conteudo', 'sem pressa', 'reengaj']
    },
    {
      id: 'relatoIniciarConversa',
      secao: 'experiencia',
      texto: 'Conte brevemente como você iniciaria uma conversa com alguém que passou a seguir a clínica.',
      tipo: 'texto',
      respostaAberta: true,
      palavrasChave: ['conversa', 'abord', 'seguir', 'interess', 'pergunt']
    },
    {
      id: 'dispSabados',
      secao: 'disponibilidade',
      texto: 'Trabalha aos sábados?',
      tipo: 'simNao'
    }
  ]
};
