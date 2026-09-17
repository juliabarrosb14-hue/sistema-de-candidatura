import type { VagaConfig } from './types';

const UNIDADES = ['Capim Macio', 'Petrópolis', 'Zona Norte', 'Lagoa Nova'];

export const closer: VagaConfig = {
  slug: 'closer',
  cargo: 'Closer',
  empresa: 'Clínica Drenesse',
  local: 'Natal/RN',
  unidades: UNIDADES,
  horario: 'Trabalha aos sábados.',
  descricao: [
    'A Clínica Drenesse busca uma Closer para fechar vendas com consultoria, conduzindo a cliente até a decisão com segurança e transparência.',
    'Se você sabe lidar com objeção de preço, já trabalhou com metas e comissão, e gosta de fechar negócios, essa vaga é para você.'
  ],
  responsabilidades: [
    'Conduzir negociações e fechar vendas consultivas',
    'Trabalhar objeções de preço e insegurança da cliente',
    'Cumprir metas comerciais individuais',
    'Realizar follow-up de clientes que não fecharam de primeira',
    'Registrar negociações e acompanhar sua conversão'
  ],
  requisitos: [
    'Experiência com vendas, preferencialmente consultivas',
    'Boa capacidade de negociação',
    'Experiência com metas e comissão',
    'Disponibilidade para trabalhar aos sábados'
  ],
  diferenciais: [
    'Experiência com vendas de alto ticket',
    'Vivência com CRM',
    'Experiência em estética, saúde, beleza ou bem-estar'
  ],
  remuneracao: {
    salarioBase: 'R$ 2.000,00',
    complemento: 'bonificação por meta + vale-transporte'
  },
  beneficios: ['Bonificação por meta', 'Vale-transporte', 'Wellhub', 'Plano odontológico'],
  perguntaSegmentoId: 'experienciaEstetica',
  discAlvo: { D: 40, I: 35, S: 12, C: 13 },
  filtrosRapidos: [
    { label: 'Vendas consultivas', perguntaId: 'vendasConsultivas', valorEsperado: 'sim' },
    { label: 'Experiência com CRM', perguntaId: 'usouCrm', valorEsperado: 'sim' },
    { label: 'Experiência no segmento', perguntaId: 'experienciaEstetica', valorEsperado: 'sim' }
  ],
  perguntas: [
    {
      id: 'experienciaVendas',
      secao: 'experiencia',
      texto: 'Você possui experiência com vendas?',
      tipo: 'simNao',
      pesoExperiencia: 7
    },
    {
      id: 'tempoExperienciaVendas',
      secao: 'experiencia',
      texto: 'Quanto tempo de experiência com fechamento de vendas você possui?',
      tipo: 'select',
      opcoes: ['Sem experiência', 'Até 1 ano', '1 a 2 anos', '2 a 4 anos', 'Mais de 4 anos'],
      pesoPorOpcao: { 'Sem experiência': 0, 'Até 1 ano': 3, '1 a 2 anos': 6, '2 a 4 anos': 9, 'Mais de 4 anos': 12 }
    },
    {
      id: 'vendasConsultivas',
      secao: 'experiencia',
      texto: 'Já trabalhou com vendas consultivas?',
      tipo: 'simNao',
      pesoExperiencia: 6
    },
    {
      id: 'ticketMedioAnterior',
      secao: 'experiencia',
      texto: 'Qual era aproximadamente seu ticket médio de vendas no último trabalho?',
      tipo: 'texto',
      categoria: 'tecnica',
      placeholder: 'Ex: R$ 800,00'
    },
    {
      id: 'metaMensalVendas',
      secao: 'experiencia',
      texto: 'Qual era sua meta mensal de vendas?',
      tipo: 'texto',
      categoria: 'tecnica',
      placeholder: 'Ex: R$ 30.000,00'
    },
    {
      id: 'vendasAltoTicket',
      secao: 'experiencia',
      texto: 'Você já trabalhou com vendas de alto ticket?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 5
    },
    {
      id: 'lidouObjecoesPreco',
      secao: 'experiencia',
      texto: 'Já lidou com objeções de preço de clientes?',
      tipo: 'simNao',
      categoria: 'estrategica',
      pesoExperiencia: 6
    },
    {
      id: 'objecoesTrabalhadas',
      secao: 'experiencia',
      texto: 'Quais objeções de vendas você mais costuma trabalhar?',
      tipo: 'multiSelect',
      opcoes: ['Preço', 'Tempo', 'Preciso pensar', 'Preciso falar com alguém', 'Comparação com concorrente', 'Medo/insegurança', 'Outros'],
      categoria: 'estrategica',
      pesoPorOpcaoMulti: { Preço: 1, Tempo: 1, 'Preciso pensar': 1, 'Preciso falar com alguém': 1, 'Comparação com concorrente': 1, 'Medo/insegurança': 1, Outros: 1 }
    },
    {
      id: 'trabalhouMetasComissao',
      secao: 'experiencia',
      texto: 'Já trabalhou com metas e comissão?',
      tipo: 'simNao',
      pesoExperiencia: 5
    },
    {
      id: 'comissaoVariavel',
      secao: 'experiencia',
      texto: 'Você já trabalhou com comissão variável baseada em resultado?',
      tipo: 'simNao',
      pesoExperiencia: 3
    },
    {
      id: 'acompanhouConversao',
      secao: 'experiencia',
      texto: 'Você já acompanhou sua taxa de conversão?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 4
    },
    {
      id: 'realizouFollowUp',
      secao: 'experiencia',
      texto: 'Você já realizou follow-up de clientes que não fecharam na primeira conversa?',
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
      id: 'experienciaEstetica',
      secao: 'experiencia',
      texto: 'Experiência em estética, saúde, beleza ou bem-estar?',
      tipo: 'simNao'
    },
    {
      id: 'maiorResultadoMensal',
      secao: 'experiencia',
      texto: 'Qual foi aproximadamente seu maior resultado mensal em vendas?',
      tipo: 'texto',
      categoria: 'tecnica',
      placeholder: 'Ex: R$ 45.000,00'
    },
    {
      id: 'caseClienteAchouCaro',
      secao: 'experiencia',
      texto: 'Uma cliente diz: "Achei o tratamento muito caro, vou pesquisar outros lugares antes de decidir." Como você responderia?',
      tipo: 'texto',
      respostaAberta: true,
      ehCase: true,
      categoria: 'estrategica',
      caseTemasBons: ['valor', 'benefíc', 'beneficio', 'investi', 'result', 'entend', 'compar', 'condiç']
    },
    {
      id: 'relatoMaiorVenda',
      secao: 'experiencia',
      texto: 'Conte brevemente sobre a maior venda ou negociação difícil que conseguiu fechar.',
      tipo: 'texto',
      respostaAberta: true,
      palavrasChave: ['venda', 'negociaç', 'negociac', 'fech', 'cliente', 'objeç', 'objec']
    },
    {
      id: 'dispSabados',
      secao: 'disponibilidade',
      texto: 'Trabalha aos sábados?',
      tipo: 'simNao'
    }
  ]
};
