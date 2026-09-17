import type { VagaConfig } from './types';

const UNIDADES = ['Capim Macio', 'Petrópolis', 'Zona Norte', 'Lagoa Nova'];

export const customerSuccess: VagaConfig = {
  slug: 'customer-success',
  cargo: 'CS — Customer Success',
  empresa: 'Clínica Drenesse',
  local: 'Natal/RN',
  unidades: UNIDADES,
  horario: 'Horário administrativo.',
  descricao: [
    'A Clínica Drenesse busca uma profissional de Customer Success para cuidar da carteira de clientes, aumentar retenção e recuperar clientes insatisfeitos.',
    'Se você já trabalhou com NPS, retenção e sabe reconquistar um cliente, essa vaga é para você.'
  ],
  responsabilidades: [
    'Acompanhar carteira de clientes ativos',
    'Identificar clientes em risco de cancelamento',
    'Realizar contato ativo de recuperação',
    'Acompanhar indicadores de satisfação e churn',
    'Trabalhar estratégias de fidelização'
  ],
  requisitos: [
    'Experiência com Customer Success ou atendimento',
    'Boa comunicação e empatia',
    'Experiência com indicadores de satisfação (NPS)',
    'Perfil proativo para contato com clientes'
  ],
  diferenciais: [
    'Experiência com metas de retenção/renovação',
    'Vivência com CRM',
    'Experiência com estratégias de fidelização'
  ],
  remuneracao: {
    salarioBase: 'R$ 1.900,00',
    complemento: 'vale-transporte'
  },
  beneficios: ['Vale-transporte', 'Wellhub', 'Plano odontológico'],
  discAlvo: { D: 10, I: 35, S: 40, C: 15 },
  filtrosRapidos: [
    { label: 'Experiência com CS/atendimento', perguntaId: 'experienciaCs', valorEsperado: 'sim' },
    { label: 'Já usou CRM', perguntaId: 'usouCrm', valorEsperado: 'sim' }
  ],
  perguntas: [
    {
      id: 'experienciaCs',
      secao: 'experiencia',
      texto: 'Já trabalhou com Customer Success ou atendimento?',
      tipo: 'simNao',
      pesoExperiencia: 7
    },
    {
      id: 'tempoExperienciaCs',
      secao: 'experiencia',
      texto: 'Quanto tempo de experiência na função você possui?',
      tipo: 'select',
      opcoes: ['Sem experiência', 'Até 1 ano', '1 a 2 anos', '2 a 4 anos', 'Mais de 4 anos'],
      pesoPorOpcao: { 'Sem experiência': 0, 'Até 1 ano': 4, '1 a 2 anos': 7, '2 a 4 anos': 9, 'Mais de 4 anos': 11 }
    },
    {
      id: 'trabalhouCarteiraClientes',
      secao: 'experiencia',
      texto: 'Você já trabalhou com carteira de clientes?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 5
    },
    {
      id: 'clientesSimultaneos',
      secao: 'experiencia',
      texto: 'Quantos clientes aproximadamente você acompanhava simultaneamente?',
      tipo: 'select',
      opcoes: ['Até 50', '51 a 100', '101 a 200', 'Mais de 200'],
      categoria: 'tecnica',
      pesoPorOpcao: { 'Até 50': 2, '51 a 100': 4, '101 a 200': 6, 'Mais de 200': 8 }
    },
    {
      id: 'trabalhouNps',
      secao: 'experiencia',
      texto: 'Já trabalhou com NPS ou outros indicadores de satisfação?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 6
    },
    {
      id: 'acompanhouChurn',
      secao: 'experiencia',
      texto: 'Você já acompanhou indicadores de churn/cancelamento?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 5
    },
    {
      id: 'identificouClienteRisco',
      secao: 'experiencia',
      texto: 'Já identificou um cliente em risco de cancelamento?',
      tipo: 'simNao',
      categoria: 'estrategica',
      pesoExperiencia: 5
    },
    {
      id: 'recuperouClienteInsatisfeito',
      secao: 'experiencia',
      texto: 'Já recuperou um cliente insatisfeito?',
      tipo: 'simNao',
      categoria: 'estrategica',
      pesoExperiencia: 5
    },
    {
      id: 'trabalhouMetasRetencao',
      secao: 'experiencia',
      texto: 'Você já trabalhou com metas de retenção ou renovação?',
      tipo: 'simNao',
      pesoExperiencia: 4
    },
    {
      id: 'contatoAtivoInativos',
      secao: 'experiencia',
      texto: 'Você já realizou contato ativo com clientes que estavam inativos?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 4
    },
    {
      id: 'trabalhouFidelizacao',
      secao: 'experiencia',
      texto: 'Você já trabalhou com estratégias de fidelização?',
      tipo: 'simNao',
      pesoExperiencia: 3
    },
    {
      id: 'usouCrm',
      secao: 'experiencia',
      texto: 'Você já utilizou CRM?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 3
    },
    {
      id: 'caseClienteEngajadoSumiu',
      secao: 'experiencia',
      texto: 'Um cliente que sempre foi engajado para de responder e não renova um agendamento. Como você conduz o contato de recuperação?',
      tipo: 'texto',
      respostaAberta: true,
      ehCase: true,
      categoria: 'estrategica',
      caseTemasBons: ['contato', 'entend', 'motiv', 'ofereç', 'oferec', 'escuta', 'reconquist']
    },
    {
      id: 'relatoRecuperouCliente',
      secao: 'experiencia',
      texto: 'Conte brevemente sobre uma situação em que recuperou um cliente insatisfeito.',
      tipo: 'texto',
      respostaAberta: true,
      palavrasChave: ['cliente', 'recuper', 'insatisf', 'resolv', 'escuta']
    }
  ]
};
