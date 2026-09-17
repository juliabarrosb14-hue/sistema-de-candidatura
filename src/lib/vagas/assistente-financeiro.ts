import type { VagaConfig } from './types';

const UNIDADES = ['Capim Macio', 'Petrópolis', 'Zona Norte', 'Lagoa Nova'];

export const assistenteFinanceiro: VagaConfig = {
  slug: 'assistente-financeiro',
  cargo: 'Assistente Financeiro',
  empresa: 'Clínica Drenesse',
  local: 'Natal/RN',
  unidades: UNIDADES,
  horario: 'Horário administrativo.',
  descricao: [
    'A Clínica Drenesse busca uma Assistente Financeira organizada e atenta a detalhes, para cuidar de contas a pagar, receber e conciliações.',
    'Se você tem experiência com rotina financeira e gosta de fechar as contas certinho, essa vaga é para você.'
  ],
  responsabilidades: [
    'Realizar lançamentos de contas a pagar e receber',
    'Conferir notas fiscais e cobranças',
    'Realizar conciliação bancária',
    'Apoiar no fechamento financeiro diário/mensal',
    'Identificar e corrigir divergências financeiras'
  ],
  requisitos: [
    'Experiência na área financeira',
    'Boa organização e atenção aos detalhes',
    'Experiência com Excel',
    'Experiência com fluxo de caixa'
  ],
  diferenciais: [
    'Experiência com sistemas financeiros/ERP',
    'Vivência com cobrança de clientes',
    'Experiência com conciliação bancária'
  ],
  remuneracao: {
    salarioBase: 'R$ 2.200,00',
    complemento: 'vale-transporte'
  },
  beneficios: ['Vale-transporte', 'Wellhub', 'Plano odontológico'],
  discAlvo: { D: 10, I: 10, S: 35, C: 45 },
  filtrosRapidos: [
    { label: 'Experiência financeira', perguntaId: 'experienciaFinanceira', valorEsperado: 'sim' },
    { label: 'Já realizou conciliação bancária', perguntaId: 'realizouConciliacao', valorEsperado: 'sim' }
  ],
  perguntas: [
    {
      id: 'experienciaFinanceira',
      secao: 'experiencia',
      texto: 'Você possui experiência na área financeira?',
      tipo: 'simNao',
      pesoExperiencia: 8
    },
    {
      id: 'tempoExperienciaFinanceira',
      secao: 'experiencia',
      texto: 'Quanto tempo de experiência na área financeira você possui?',
      tipo: 'select',
      opcoes: ['Sem experiência', 'Até 1 ano', '1 a 2 anos', '2 a 4 anos', 'Mais de 4 anos'],
      pesoPorOpcao: { 'Sem experiência': 0, 'Até 1 ano': 4, '1 a 2 anos': 7, '2 a 4 anos': 9, 'Mais de 4 anos': 11 }
    },
    {
      id: 'contasPagarReceber',
      secao: 'experiencia',
      texto: 'Já trabalhou com contas a pagar e receber?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 7
    },
    {
      id: 'realizouConciliacao',
      secao: 'experiencia',
      texto: 'Já realizou conciliação bancária?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 6
    },
    {
      id: 'nivelExcel',
      secao: 'experiencia',
      texto: 'Qual seu nível de Excel/Google Sheets?',
      tipo: 'select',
      opcoes: ['Básico', 'Intermediário', 'Avançado'],
      categoria: 'tecnica',
      pesoPorOpcao: { Básico: 1, Intermediário: 4, Avançado: 6 }
    },
    {
      id: 'lancamentoNotasFiscais',
      secao: 'experiencia',
      texto: 'Você já realizou lançamento e conferência de notas fiscais?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 5
    },
    {
      id: 'trabalhouFluxoCaixa',
      secao: 'experiencia',
      texto: 'Já trabalhou com fluxo de caixa?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 5
    },
    {
      id: 'realizouCobranca',
      secao: 'experiencia',
      texto: 'Já realizou cobrança de clientes?',
      tipo: 'simNao',
      pesoExperiencia: 4
    },
    {
      id: 'emissaoBoletos',
      secao: 'experiencia',
      texto: 'Já trabalhou com emissão de boletos ou cobranças?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 3
    },
    {
      id: 'trabalhouSistemasFinanceiros',
      secao: 'experiencia',
      texto: 'Já trabalhou com sistemas financeiros/ERP?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 4
    },
    {
      id: 'sistemaFinanceiroUtilizado',
      secao: 'experiencia',
      texto: 'Qual sistema financeiro/ERP você já utilizou?',
      tipo: 'texto',
      categoria: 'tecnica',
      placeholder: 'Ex: Omie, Conta Azul, SAP...'
    },
    {
      id: 'realizouFechamentoFinanceiro',
      secao: 'experiencia',
      texto: 'Já realizou fechamento financeiro diário/mensal?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 5
    },
    {
      id: 'identificouDivergencia',
      secao: 'experiencia',
      texto: 'Já identificou divergência entre sistema, banco e caixa?',
      tipo: 'simNao',
      categoria: 'estrategica',
      pesoExperiencia: 4
    },
    {
      id: 'caseDivergenciaCaixa',
      secao: 'experiencia',
      texto: 'Você percebe uma diferença entre o valor no sistema e o valor recebido no caixa de uma unidade. O que você faz?',
      tipo: 'texto',
      respostaAberta: true,
      ehCase: true,
      categoria: 'estrategica',
      caseTemasBons: ['confer', 'investig', 'comprovante', 'registr', 'comunic', 'document']
    },
    {
      id: 'relatoErroFinanceiro',
      secao: 'experiencia',
      texto: 'Conte brevemente sobre uma situação em que identificou e corrigiu um erro financeiro.',
      tipo: 'texto',
      respostaAberta: true,
      palavrasChave: ['erro', 'identifi', 'corrig', 'confer', 'divergên', 'divergen']
    }
  ]
};
