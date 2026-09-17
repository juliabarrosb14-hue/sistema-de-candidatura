import type { VagaConfig } from './types';

const UNIDADES = ['Capim Macio', 'Petrópolis', 'Zona Norte', 'Lagoa Nova'];

export const asg: VagaConfig = {
  slug: 'asg',
  cargo: 'ASG',
  empresa: 'Clínica Drenesse',
  local: 'Natal/RN',
  unidades: UNIDADES,
  horario: 'Trabalha aos sábados.',
  descricao: [
    'A Clínica Drenesse busca uma profissional de limpeza e organização (ASG) para manter os padrões de higiene que nossas clientes merecem.',
    'Se você tem experiência com limpeza profissional, atenção aos detalhes e gosta de manter tudo em ordem, essa vaga é para você.'
  ],
  responsabilidades: [
    'Realizar a limpeza e organização dos ambientes da clínica',
    'Seguir protocolos de higiene específicos de ambiente de saúde/estética',
    'Controlar e repor materiais de limpeza',
    'Identificar e corrigir pontos fora do padrão de organização',
    'Manter os ambientes prontos para atendimento durante todo o dia'
  ],
  requisitos: [
    'Experiência com limpeza e organização profissional',
    'Atenção aos detalhes e padrões de higiene',
    'Disponibilidade para a rotina da vaga, incluindo sábados'
  ],
  diferenciais: [
    'Experiência em clínicas ou ambientes com cuidados específicos de higiene',
    'Conhecimento sobre diluição e uso correto de produtos de limpeza',
    'Experiência com controle/reposição de materiais'
  ],
  remuneracao: {
    salarioBase: 'R$ 1.621,00',
    complemento: 'vale-transporte'
  },
  beneficios: ['Vale-transporte', 'Wellhub', 'Plano odontológico'],
  discAlvo: { D: 10, I: 15, S: 40, C: 35 },
  filtrosRapidos: [
    { label: 'Experiência em clínicas', perguntaId: 'experienciaClinicas', valorEsperado: 'sim' },
    { label: 'Disponível p/ sábados', perguntaId: 'dispSabados', valorEsperado: 'sim' }
  ],
  perguntas: [
    {
      id: 'experienciaLimpezaProfissional',
      secao: 'experiencia',
      texto: 'Já trabalhou com limpeza e organização profissional?',
      tipo: 'simNao',
      pesoExperiencia: 8
    },
    {
      id: 'tempoExperienciaLimpeza',
      secao: 'experiencia',
      texto: 'Quanto tempo de experiência você possui com limpeza profissional?',
      tipo: 'select',
      opcoes: ['Sem experiência', 'Até 1 ano', '1 a 2 anos', '2 a 4 anos', 'Mais de 4 anos'],
      pesoPorOpcao: { 'Sem experiência': 0, 'Até 1 ano': 4, '1 a 2 anos': 7, '2 a 4 anos': 9, 'Mais de 4 anos': 11 }
    },
    {
      id: 'experienciaClinicas',
      secao: 'experiencia',
      texto: 'Já trabalhou em clínicas ou ambientes com cuidados específicos de higiene?',
      tipo: 'simNao',
      pesoExperiencia: 8
    },
    {
      id: 'experienciaAtendimentoPublicoLimpeza',
      secao: 'experiencia',
      texto: 'Você possui experiência com limpeza de ambientes de atendimento ao público?',
      tipo: 'simNao',
      pesoExperiencia: 5
    },
    {
      id: 'conhecimentoDiluicaoProdutos',
      secao: 'experiencia',
      texto: 'Você possui conhecimento sobre diluição e utilização correta de produtos de limpeza?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 6
    },
    {
      id: 'controleMateriais',
      secao: 'experiencia',
      texto: 'Já foi responsável pelo controle ou reposição de materiais de limpeza?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 4
    },
    {
      id: 'seguiuRotinaChecklist',
      secao: 'experiencia',
      texto: 'Você já trabalhou seguindo uma rotina/checklist de limpeza?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 4
    },
    {
      id: 'recebeuOrientacaoMelhoria',
      secao: 'experiencia',
      texto: 'Você já recebeu uma orientação de melhoria no trabalho?',
      tipo: 'simNao',
      pesoExperiencia: 2
    },
    {
      id: 'trabalhouMomentosMovimento',
      secao: 'experiencia',
      texto: 'Você já trabalhou em momentos de grande movimento?',
      tipo: 'simNao',
      pesoExperiencia: 3
    },
    {
      id: 'experienciaProdutosMateriais',
      secao: 'experiencia',
      texto: 'Você possui experiência com produtos e materiais de limpeza?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 4
    },
    {
      id: 'identificaForaPadrao',
      secao: 'experiencia',
      texto: 'Você possui facilidade para identificar algo que está fora do padrão de organização sem precisar ser orientada?',
      tipo: 'simNao',
      categoria: 'estrategica',
      pesoExperiencia: 4
    },
    {
      id: 'caseEstoqueAcabando',
      secao: 'experiencia',
      texto: 'Você percebe que o estoque de um produto de limpeza essencial está quase acabando no meio do dia. O que você faz?',
      tipo: 'texto',
      respostaAberta: true,
      ehCase: true,
      categoria: 'estrategica',
      caseTemasBons: ['avis', 'comunic', 'substitu', 'prioriz', 'reposiç', 'responsável']
    },
    {
      id: 'relatoRotinaLimpeza',
      secao: 'experiencia',
      texto: 'Conte brevemente como organiza sua rotina de limpeza.',
      tipo: 'texto',
      respostaAberta: true,
      palavrasChave: ['rotina', 'checklist', 'organiz', 'horário', 'horario', 'prioriz']
    },
    {
      id: 'dispSabados',
      secao: 'disponibilidade',
      texto: 'Possui disponibilidade para trabalhar aos sábados?',
      tipo: 'simNao'
    }
  ]
};
