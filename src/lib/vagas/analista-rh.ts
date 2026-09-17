import type { VagaConfig } from './types';

const UNIDADES = ['Capim Macio', 'Petrópolis', 'Zona Norte', 'Lagoa Nova'];

export const analistaRh: VagaConfig = {
  slug: 'analista-rh',
  cargo: 'Analista de RH',
  empresa: 'Clínica Drenesse',
  local: 'Natal/RN',
  unidades: UNIDADES,
  horario: 'Horário administrativo.',
  descricao: [
    'A Clínica Drenesse busca uma Analista de RH para conduzir processos seletivos, apoiar o desenvolvimento das equipes e cuidar do clima organizacional da rede.',
    'Se você já conduziu recrutamento do início ao fim e sabe lidar com situações delicadas entre pessoas, essa vaga é para você.'
  ],
  responsabilidades: [
    'Conduzir processos seletivos completos',
    'Realizar entrevistas e apoiar decisões de contratação',
    'Estruturar e acompanhar onboarding',
    'Aplicar e analisar pesquisas de clima',
    'Acompanhar indicadores de RH'
  ],
  requisitos: [
    'Experiência com RH, preferencialmente recrutamento e seleção',
    'Boa capacidade de comunicação e escuta',
    'Experiência conduzindo entrevistas',
    'Perfil resolutivo diante de conflitos entre pessoas'
  ],
  diferenciais: [
    'Experiência com onboarding estruturado',
    'Vivência com indicadores de RH (turnover, absenteísmo)',
    'Experiência com sistema/ATS de recrutamento'
  ],
  remuneracao: {
    salarioBase: 'R$ 3.500,00',
    complemento: 'vale-transporte'
  },
  beneficios: ['Vale-transporte', 'Wellhub', 'Plano odontológico'],
  discAlvo: { D: 10, I: 30, S: 32, C: 28 },
  filtrosRapidos: [
    { label: 'Recrutamento e seleção', perguntaId: 'experienciaRecrutamento', valorEsperado: 'sim' },
    { label: 'Já usou ATS', perguntaId: 'usouAts', valorEsperado: 'sim' }
  ],
  perguntas: [
    {
      id: 'jaTrabalhouRh',
      secao: 'experiencia',
      texto: 'Já trabalhou com RH?',
      tipo: 'simNao',
      pesoExperiencia: 7
    },
    {
      id: 'tempoExperienciaRh',
      secao: 'experiencia',
      texto: 'Quanto tempo de experiência em RH você possui?',
      tipo: 'select',
      opcoes: ['Sem experiência', 'Até 1 ano', '1 a 2 anos', '2 a 4 anos', 'Mais de 4 anos'],
      pesoPorOpcao: { 'Sem experiência': 0, 'Até 1 ano': 4, '1 a 2 anos': 7, '2 a 4 anos': 9, 'Mais de 4 anos': 11 }
    },
    {
      id: 'areaRhMaiorExperiencia',
      secao: 'experiencia',
      texto: 'Qual área de RH você possui maior experiência?',
      tipo: 'multiSelect',
      opcoes: ['Recrutamento e seleção', 'Departamento Pessoal', 'Treinamento', 'Desenvolvimento', 'Clima/cultura', 'Avaliação de desempenho', 'Endomarketing', 'Outros'],
      categoria: 'tecnica',
      pesoPorOpcaoMulti: { 'Recrutamento e seleção': 3, 'Departamento Pessoal': 2, Treinamento: 2, Desenvolvimento: 2, 'Clima/cultura': 2, 'Avaliação de desempenho': 2, Endomarketing: 1, Outros: 1 }
    },
    {
      id: 'experienciaRecrutamento',
      secao: 'experiencia',
      texto: 'Possui experiência com recrutamento e seleção?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 7
    },
    {
      id: 'conduziuProcessoCompleto',
      secao: 'experiencia',
      texto: 'Você já realizou processos seletivos completos, desde divulgação até contratação?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 6
    },
    {
      id: 'vagasSimultaneas',
      secao: 'experiencia',
      texto: 'Quantas vagas você costuma conduzir simultaneamente?',
      tipo: 'select',
      opcoes: ['1 a 5', '6 a 10', '11 a 20', 'Mais de 20'],
      categoria: 'tecnica',
      pesoPorOpcao: { '1 a 5': 2, '6 a 10': 4, '11 a 20': 6, 'Mais de 20': 8 }
    },
    {
      id: 'realizouEntrevistas',
      secao: 'experiencia',
      texto: 'Já realizou entrevistas?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 5
    },
    {
      id: 'trabalhouOnboarding',
      secao: 'experiencia',
      texto: 'Já trabalhou com onboarding?',
      tipo: 'simNao',
      pesoExperiencia: 4
    },
    {
      id: 'estruturouOnboarding',
      secao: 'experiencia',
      texto: 'Você já estruturou onboarding?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 4
    },
    {
      id: 'aplicouPesquisaClima',
      secao: 'experiencia',
      texto: 'Você já aplicou pesquisas de clima ou satisfação interna?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 3
    },
    {
      id: 'acompanhouIndicadoresRh',
      secao: 'experiencia',
      texto: 'Você já acompanhou indicadores de RH?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 4
    },
    {
      id: 'indicadoresRh',
      secao: 'experiencia',
      texto: 'Quais indicadores?',
      tipo: 'multiSelect',
      opcoes: ['Turnover', 'Absenteísmo', 'NPS interno', 'Tempo de contratação', 'Retenção', 'Outros'],
      categoria: 'tecnica',
      pesoPorOpcaoMulti: { Turnover: 2, Absenteísmo: 2, 'NPS interno': 2, 'Tempo de contratação': 2, Retenção: 2, Outros: 1 }
    },
    {
      id: 'usouAts',
      secao: 'experiencia',
      texto: 'Você já utilizou algum sistema/ATS de recrutamento?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 3
    },
    {
      id: 'lidouConflitosColaboradores',
      secao: 'experiencia',
      texto: 'Já lidou com conflitos entre colaboradores?',
      tipo: 'simNao',
      categoria: 'estrategica',
      pesoExperiencia: 4
    },
    {
      id: 'caseVagaUrgenteSemFit',
      secao: 'experiencia',
      texto: 'Uma líder pede que você contrate rapidamente uma pessoa porque está com falta de equipe, mas os candidatos disponíveis não atendem aos requisitos da vaga. O que você faria?',
      tipo: 'texto',
      respostaAberta: true,
      ehCase: true,
      categoria: 'estrategica',
      caseTemasBons: ['alinh', 'expectativ', 'critério', 'criterio', 'risco', 'prazo', 'transparen', 'alternativ']
    },
    {
      id: 'relatoSituacaoDelicada',
      secao: 'experiencia',
      texto: 'Conte brevemente sobre uma situação delicada envolvendo pessoas que precisou lidar.',
      tipo: 'texto',
      respostaAberta: true,
      palavrasChave: ['conflito', 'pessoa', 'escuta', 'convers', 'resolv', 'equipe']
    }
  ]
};
