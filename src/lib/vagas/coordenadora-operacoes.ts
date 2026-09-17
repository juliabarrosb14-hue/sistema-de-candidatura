import type { VagaConfig } from './types';

const UNIDADES = ['Capim Macio', 'Petrópolis', 'Zona Norte', 'Lagoa Nova'];

export const coordenadoraOperacoes: VagaConfig = {
  slug: 'coordenadora-operacoes',
  cargo: 'Coordenadora de Operações',
  empresa: 'Clínica Drenesse',
  local: 'Natal/RN',
  unidades: UNIDADES,
  horario: 'Disponibilidade para atuar em diferentes unidades.',
  descricao: [
    'A Clínica Drenesse busca uma Coordenadora de Operações para garantir que as unidades funcionem de forma eficiente, com processos claros e times bem liderados.',
    'Se você já coordenou mais de uma operação ao mesmo tempo, resolve problemas com autonomia e usa dados para decidir, essa vaga é para você.'
  ],
  responsabilidades: [
    'Coordenar líderes e operações de diferentes unidades',
    'Identificar e resolver problemas operacionais',
    'Implementar e melhorar processos',
    'Acompanhar indicadores operacionais para decisão',
    'Conduzir reuniões com líderes de diferentes áreas'
  ],
  requisitos: [
    'Experiência coordenando mais de uma equipe/operação',
    'Capacidade de resolver problemas operacionais com autonomia',
    'Perfil orientado a dados e processos',
    'Boa gestão de conflitos entre líderes'
  ],
  diferenciais: [
    'Experiência com ferramentas de gestão de tarefas/processos',
    'Vivência implementando mudanças com resistência inicial',
    'Experiência acompanhando múltiplos indicadores operacionais'
  ],
  remuneracao: {
    salarioBase: 'R$ 2.500,00',
    complemento: 'vale-transporte'
  },
  beneficios: ['Vale-transporte', 'Wellhub', 'Plano odontológico'],
  discAlvo: { D: 35, I: 20, S: 15, C: 30 },
  filtrosRapidos: [
    { label: 'Já coordenou múltiplas equipes', perguntaId: 'coordenouMultiplasEquipes', valorEsperado: 'sim' },
    { label: 'Usa ferramentas de gestão', perguntaId: 'usouFerramentasGestao', valorEsperado: 'sim' },
    { label: 'Disponível múltiplas unidades', perguntaId: 'dispDeslocamentoOperacoes', valorEsperado: 'sim' }
  ],
  perguntas: [
    {
      id: 'coordenouMultiplasEquipes',
      secao: 'experiencia',
      texto: 'Você já coordenou mais de uma equipe/operação ao mesmo tempo?',
      tipo: 'simNao',
      pesoExperiencia: 8
    },
    {
      id: 'anosGestaoCoordenacao',
      secao: 'experiencia',
      texto: 'Quantos anos de experiência você possui em gestão/coordenação?',
      tipo: 'select',
      opcoes: ['Menos de 1 ano', '1 a 2 anos', '2 a 4 anos', 'Mais de 4 anos'],
      pesoPorOpcao: { 'Menos de 1 ano': 2, '1 a 2 anos': 5, '2 a 4 anos': 8, 'Mais de 4 anos': 10 }
    },
    {
      id: 'responsavelMaisDeUmaUnidade',
      secao: 'experiencia',
      texto: 'Você já foi responsável simultaneamente por mais de uma unidade?',
      tipo: 'simNao',
      pesoExperiencia: 5
    },
    {
      id: 'maiorColaboradoresGestao',
      secao: 'experiencia',
      texto: 'Qual foi o maior número de colaboradores sob sua gestão direta ou indireta?',
      tipo: 'numero',
      obrigatoria: false,
      placeholder: 'Ex: 20',
      pesoPorFaixa: [
        { min: 20, pontos: 8 },
        { min: 10, pontos: 5 },
        { min: 3, pontos: 3 }
      ]
    },
    {
      id: 'indicadoresOperacionais',
      secao: 'experiencia',
      texto: 'Quais indicadores operacionais você já acompanhou?',
      tipo: 'multiSelect',
      opcoes: ['Produtividade', 'NPS', 'Vendas', 'Faturamento', 'Comparecimento', 'Absenteísmo', 'Reclamações', 'Estoque', 'Outros'],
      categoria: 'tecnica',
      pesoPorOpcaoMulti: { Produtividade: 2, NPS: 2, Vendas: 2, Faturamento: 2, Comparecimento: 1, Absenteísmo: 1, Reclamações: 1, Estoque: 1, Outros: 1 }
    },
    {
      id: 'usouFerramentasGestao',
      secao: 'experiencia',
      texto: 'Você já utilizou ferramentas de gestão de tarefas/processos?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 4
    },
    {
      id: 'ferramentasGestao',
      secao: 'experiencia',
      texto: 'Quais ferramentas?',
      tipo: 'multiSelect',
      opcoes: ['ClickUp', 'Trello', 'Asana', 'Monday', 'Excel/Google Sheets', 'Outra'],
      categoria: 'tecnica',
      pesoPorOpcaoMulti: { ClickUp: 2, Trello: 2, Asana: 2, Monday: 2, 'Excel/Google Sheets': 1, Outra: 1 }
    },
    {
      id: 'identificouResolveuProblema',
      secao: 'experiencia',
      texto: 'Você já identificou e resolveu um problema operacional?',
      tipo: 'simNao',
      pesoExperiencia: 5
    },
    {
      id: 'cobrouLider',
      secao: 'experiencia',
      texto: 'Você já cobrou uma líder que não entregava o resultado esperado?',
      tipo: 'simNao',
      categoria: 'estrategica',
      pesoExperiencia: 4
    },
    {
      id: 'lidouConflitosLideres',
      secao: 'experiencia',
      texto: 'Você já lidou com conflitos entre líderes?',
      tipo: 'simNao',
      categoria: 'estrategica',
      pesoExperiencia: 4
    },
    {
      id: 'implementouProcessos',
      secao: 'experiencia',
      texto: 'Você já implementou ou melhorou processos?',
      tipo: 'simNao',
      pesoExperiencia: 5
    },
    {
      id: 'usaDadosParaDecidir',
      secao: 'experiencia',
      texto: 'Você utiliza dados/indicadores para tomar decisões?',
      tipo: 'simNao',
      pesoExperiencia: 4
    },
    {
      id: 'conduziuReunioesLideres',
      secao: 'experiencia',
      texto: 'Você já conduziu reuniões com líderes de diferentes áreas?',
      tipo: 'simNao',
      pesoExperiencia: 3
    },
    {
      id: 'implementouMudancaResistencia',
      secao: 'experiencia',
      texto: 'Você já precisou implementar uma mudança que inicialmente encontrou resistência da equipe?',
      tipo: 'simNao',
      categoria: 'estrategica',
      pesoExperiencia: 3
    },
    {
      id: 'comoAcompanhaMelhoria',
      secao: 'experiencia',
      texto: 'Como você normalmente acompanha se uma melhoria implantada realmente funcionou?',
      tipo: 'texto',
      respostaAberta: true,
      categoria: 'estrategica',
      palavrasChave: ['indicador', 'acompanh', 'dado', 'result', 'compar', 'meta']
    },
    {
      id: 'caseProblemaOperacional',
      secao: 'experiencia',
      texto:
        'Duas unidades relatam o mesmo problema operacional na mesma semana. Como você decide o que investigar primeiro e o que faz nos próximos dias?',
      tipo: 'texto',
      respostaAberta: true,
      ehCase: true,
      categoria: 'estrategica',
      caseTemasBons: ['priorid', 'investig', 'dado', 'impacto', 'causa', 'plano', 'prazo']
    },
    {
      id: 'relatoSituacaoComplexa',
      secao: 'experiencia',
      texto: 'Conte brevemente a situação mais complexa de liderança/operação que já enfrentou.',
      tipo: 'texto',
      respostaAberta: true,
      palavrasChave: ['operaç', 'operac', 'equipe', 'process', 'result', 'decis']
    },
    {
      id: 'dispDeslocamentoOperacoes',
      secao: 'disponibilidade',
      texto: 'Possui disponibilidade para atuar em diferentes unidades?',
      tipo: 'simNao'
    }
  ]
};
