import type { VagaConfig } from './types';

const UNIDADES = ['Capim Macio', 'Petrópolis', 'Zona Norte', 'Lagoa Nova'];

export const gerenteAdministrativo: VagaConfig = {
  slug: 'gerente-administrativo',
  cargo: 'Gerente Administrativo',
  empresa: 'Clínica Drenesse',
  local: 'Natal/RN',
  unidades: UNIDADES,
  horario: 'Horário administrativo.',
  descricao: [
    'A Clínica Drenesse busca uma Gerente Administrativa para estruturar processos, acompanhar indicadores financeiros e administrativos, e liderar a operação de bastidores da rede.',
    'Se você já geriu orçamento, equipe e processos administrativos do zero, essa vaga é para você.'
  ],
  responsabilidades: [
    'Gerenciar a operação administrativa da rede',
    'Acompanhar orçamento e controle de despesas',
    'Participar de decisões de estrutura de equipe',
    'Implantar processos e controles administrativos',
    'Acompanhar indicadores financeiros e administrativos'
  ],
  requisitos: [
    'Experiência em gestão administrativa',
    'Experiência com orçamento e controle de despesas',
    'Boa capacidade analítica e de organização',
    'Vivência com decisões de estrutura de equipe'
  ],
  diferenciais: [
    'Graduação completa',
    'Experiência com ERP ou sistemas de gestão',
    'Vivência implantando processos administrativos do zero'
  ],
  remuneracao: {
    salarioBase: 'R$ 5.000,00',
    complemento: 'vale-transporte'
  },
  beneficios: ['Vale-transporte', 'Wellhub', 'Plano odontológico'],
  discAlvo: { D: 35, I: 10, S: 25, C: 30 },
  filtrosRapidos: [
    { label: 'Já liderou equipe', perguntaId: 'jaLiderouEquipe', valorEsperado: 'sim' },
    { label: 'Já usou ERP', perguntaId: 'usouErp', valorEsperado: 'sim' },
    { label: 'Graduação completa', perguntaId: 'graduacaoCompleta', valorEsperado: 'Sim' }
  ],
  perguntas: [
    {
      id: 'jaLiderouEquipe',
      secao: 'experiencia',
      texto: 'Já gerenciou uma operação administrativa?',
      tipo: 'simNao',
      pesoExperiencia: 7
    },
    {
      id: 'anosGestaoAdministrativa',
      secao: 'experiencia',
      texto: 'Quantos anos de experiência você possui em gestão administrativa?',
      tipo: 'select',
      opcoes: ['Menos de 1 ano', '1 a 2 anos', '2 a 4 anos', 'Mais de 4 anos'],
      pesoPorOpcao: { 'Menos de 1 ano': 2, '1 a 2 anos': 5, '2 a 4 anos': 8, 'Mais de 4 anos': 10 }
    },
    {
      id: 'maiorEquipeLiderada',
      secao: 'experiencia',
      texto: 'Quantas pessoas já liderou?',
      tipo: 'numero',
      obrigatoria: false,
      placeholder: 'Ex: 15',
      pesoPorFaixa: [
        { min: 15, pontos: 7 },
        { min: 7, pontos: 5 },
        { min: 2, pontos: 3 }
      ]
    },
    {
      id: 'coordenouRhFinanceiro',
      secao: 'experiencia',
      texto: 'Já coordenou RH, financeiro ou processos?',
      tipo: 'simNao',
      pesoExperiencia: 5
    },
    {
      id: 'responsavelOrcamento',
      secao: 'experiencia',
      texto: 'Você já foi responsável por orçamento ou controle de despesas?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 6
    },
    {
      id: 'acompanhouIndicadoresFinanceiros',
      secao: 'experiencia',
      texto: 'Você já acompanhou indicadores financeiros e administrativos?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 5
    },
    {
      id: 'estruturouProcessosAdministrativos',
      secao: 'experiencia',
      texto: 'Já participou da estruturação de processos administrativos?',
      tipo: 'simNao',
      pesoExperiencia: 5
    },
    {
      id: 'implantouProcessosZero',
      secao: 'experiencia',
      texto: 'Você já implantou processos ou controles administrativos do zero?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 5
    },
    {
      id: 'participouDecisoesEquipe',
      secao: 'experiencia',
      texto: 'Você já participou de decisões relacionadas a contratação, desligamento ou estrutura de equipe?',
      tipo: 'simNao',
      categoria: 'estrategica',
      pesoExperiencia: 4
    },
    {
      id: 'lidouColaboradorNaoEntregou',
      secao: 'experiencia',
      texto: 'Já lidou com um colaborador que não entregou uma atividade?',
      tipo: 'simNao',
      categoria: 'estrategica',
      pesoExperiencia: 4
    },
    {
      id: 'nivelExcel',
      secao: 'experiencia',
      texto: 'Você possui experiência com Excel/Google Sheets?',
      tipo: 'select',
      opcoes: ['Básico', 'Intermediário', 'Avançado'],
      categoria: 'tecnica',
      pesoPorOpcao: { Básico: 1, Intermediário: 3, Avançado: 5 }
    },
    {
      id: 'usouErp',
      secao: 'experiencia',
      texto: 'Você já utilizou algum ERP ou sistema de gestão?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 4
    },
    {
      id: 'graduacaoCompleta',
      secao: 'experiencia',
      texto: 'Possui graduação completa?',
      tipo: 'select',
      opcoes: ['Sim', 'Não', 'Em andamento'],
      pesoPorOpcao: { Sim: 4, 'Em andamento': 2, Não: 0 }
    },
    {
      id: 'formacao',
      secao: 'experiencia',
      texto: 'Qual sua formação?',
      tipo: 'texto',
      placeholder: 'Ex: Administração'
    },
    {
      id: 'caseDivergenciaOrcamento',
      secao: 'experiencia',
      texto: 'Você percebe uma divergência recorrente entre o previsto e o realizado no orçamento de uma unidade. Como você investiga e resolve?',
      tipo: 'texto',
      respostaAberta: true,
      ehCase: true,
      categoria: 'estrategica',
      caseTemasBons: ['investig', 'compar', 'dado', 'causa', 'process', 'ajust', 'acompanh']
    },
    {
      id: 'relatoMelhoriaProcesso',
      secao: 'experiencia',
      texto: 'Conte brevemente sobre uma situação em que melhorou um processo administrativo.',
      tipo: 'texto',
      respostaAberta: true,
      palavrasChave: ['process', 'melhor', 'implant', 'result', 'equipe']
    }
  ]
};
