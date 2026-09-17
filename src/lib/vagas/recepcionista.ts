import type { VagaConfig } from './types';

const UNIDADES = ['Capim Macio', 'Petrópolis', 'Zona Norte', 'Lagoa Nova'];

export const recepcionista: VagaConfig = {
  slug: 'recepcionista',
  cargo: 'Recepcionista',
  empresa: 'Clínica Drenesse',
  local: 'Natal/RN',
  unidades: UNIDADES,
  horario: 'Trabalha aos sábados.',
  descricao: [
    'A Clínica Drenesse está em busca de uma recepcionista atenciosa e organizada, que seja a primeira impressão de qualidade para nossas clientes.',
    'Se você gosta de atendimento ao público, tem facilidade com agenda e sistemas, e lida bem com o dia a dia corrido de uma clínica, essa vaga é para você.'
  ],
  responsabilidades: [
    'Recepcionar e acolher as clientes com excelência',
    'Gerenciar agendamentos e organizar a agenda das unidades',
    'Realizar atendimento por telefone e WhatsApp',
    'Apoiar no fechamento financeiro e recebimentos',
    'Oferecer e indicar serviços quando pertinente'
  ],
  requisitos: [
    'Experiência com atendimento ao público',
    'Boa comunicação e organização',
    'Facilidade para lidar com múltiplas demandas ao mesmo tempo',
    'Disponibilidade para trabalhar aos sábados'
  ],
  diferenciais: [
    'Experiência em clínica, hospital, estética ou área semelhante',
    'Vivência com sistemas de atendimento ou CRM',
    'Experiência com vendas ou oferta de serviços'
  ],
  remuneracao: {
    salarioBase: 'R$ 1.700,00',
    complemento: 'vale-transporte'
  },
  beneficios: ['Vale-transporte', 'Wellhub', 'Plano odontológico'],
  discAlvo: { D: 10, I: 30, S: 35, C: 25 },
  filtrosRapidos: [
    { label: 'Experiência em clínica/saúde', perguntaId: 'experienciaClinica', valorEsperado: 'sim' },
    { label: 'Experiência com CRM', perguntaId: 'usouCrm', valorEsperado: 'sim' },
    { label: 'Disponível p/ sábados', perguntaId: 'dispSabados', valorEsperado: 'sim' }
  ],
  perguntas: [
    {
      id: 'experienciaAtendimentoPublico',
      secao: 'experiencia',
      texto: 'Você possui experiência com atendimento ao público?',
      tipo: 'simNao',
      pesoExperiencia: 6
    },
    {
      id: 'tempoAtendimentoPublico',
      secao: 'experiencia',
      texto: 'Quanto tempo de experiência você possui com atendimento ao público?',
      tipo: 'select',
      opcoes: ['Sem experiência', 'Até 1 ano', '1 a 2 anos', '2 a 4 anos', 'Mais de 4 anos'],
      pesoPorOpcao: { 'Sem experiência': 0, 'Até 1 ano': 3, '1 a 2 anos': 5, '2 a 4 anos': 7, 'Mais de 4 anos': 9 }
    },
    {
      id: 'experienciaClinica',
      secao: 'experiencia',
      texto: 'Já trabalhou em clínica, hospital, estética ou área semelhante?',
      tipo: 'simNao',
      pesoExperiencia: 6
    },
    {
      id: 'lidouClienteInsatisfeita',
      secao: 'experiencia',
      texto: 'Você já lidou com uma cliente insatisfeita?',
      tipo: 'simNao',
      categoria: 'estrategica',
      pesoExperiencia: 3
    },
    {
      id: 'usouCrm',
      secao: 'experiencia',
      texto: 'Você já utilizou sistemas de atendimento ou CRM?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 5
    },
    {
      id: 'experienciaAgendamento',
      secao: 'experiencia',
      texto: 'Você possui experiência com agendamento?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 5
    },
    {
      id: 'experienciaSistemasAgendamento',
      secao: 'experiencia',
      texto: 'Você possui experiência com sistemas de agendamento?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 3
    },
    {
      id: 'experienciaWhatsapp',
      secao: 'experiencia',
      texto: 'Você possui experiência com atendimento por WhatsApp?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 3
    },
    {
      id: 'lidouCobrancaPagamento',
      secao: 'experiencia',
      texto: 'Você já lidou com cobrança/pagamento de clientes?',
      tipo: 'simNao',
      pesoExperiencia: 3
    },
    {
      id: 'experienciaCaixaFinanceiro',
      secao: 'experiencia',
      texto: 'Você possui experiência com caixa, recebimentos ou fechamento financeiro?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 3
    },
    {
      id: 'experienciaVendas',
      secao: 'experiencia',
      texto: 'Você possui experiência com vendas ou oferta de serviços?',
      tipo: 'simNao',
      pesoExperiencia: 3
    },
    {
      id: 'multiplasDemandas',
      secao: 'experiencia',
      texto: 'Como você se sente atendendo várias demandas simultaneamente?',
      tipo: 'select',
      opcoes: ['Muito confortável', 'Confortável', 'Tenho alguma dificuldade', 'Tenho muita dificuldade'],
      categoria: 'estrategica',
      pesoPorOpcao: { 'Muito confortável': 5, Confortável: 4, 'Tenho alguma dificuldade': 1, 'Tenho muita dificuldade': 0 }
    },
    {
      id: 'conhecimentoInformatica',
      secao: 'experiencia',
      texto: 'Você possui conhecimento básico de informática?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 3
    },
    {
      id: 'facilidadeFluxoClientes',
      secao: 'experiencia',
      texto: 'Possui facilidade para trabalhar em ambiente com grande fluxo de clientes?',
      tipo: 'simNao',
      pesoExperiencia: 4
    },
    {
      id: 'caseTresClientes',
      secao: 'experiencia',
      texto: 'A clínica está cheia, três clientes chegam ao mesmo tempo e o telefone está tocando. Como você organiza a situação?',
      tipo: 'texto',
      respostaAberta: true,
      ehCase: true,
      categoria: 'estrategica',
      caseTemasBons: ['priorid', 'calma', 'organiz', 'cumpriment', 'ordem', 'ajuda', 'gentil']
    },
    {
      id: 'relatoPrimeiraVez',
      secao: 'experiencia',
      texto: 'Conte brevemente como você recebe uma cliente que chega pela primeira vez.',
      tipo: 'texto',
      respostaAberta: true,
      palavrasChave: ['acolh', 'bem-vind', 'apresent', 'explic', 'sorris', 'atenç']
    },
    {
      id: 'dispSabados',
      secao: 'disponibilidade',
      texto: 'Você possui disponibilidade para trabalhar aos sábados?',
      tipo: 'simNao'
    }
  ]
};
