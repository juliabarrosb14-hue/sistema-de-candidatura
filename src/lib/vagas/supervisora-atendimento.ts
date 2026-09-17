import type { VagaConfig } from './types';

const UNIDADES = ['Capim Macio', 'Petrópolis', 'Zona Norte', 'Lagoa Nova'];

export const supervisoraAtendimento: VagaConfig = {
  slug: 'supervisora-atendimento',
  cargo: 'Supervisora de Atendimento',
  empresa: 'Clínica Drenesse',
  local: 'Natal/RN',
  unidades: UNIDADES,
  horario: 'Disponibilidade para atuar em diferentes unidades.',
  descricao: [
    'A Clínica Drenesse busca uma Supervisora de Atendimento para liderar a equipe de recepção/atendimento, garantindo organização, qualidade e boa experiência para as clientes.',
    'Se você já liderou equipes de atendimento, lida bem com reclamações e organiza o time em dias de alta demanda, essa vaga é para você.'
  ],
  responsabilidades: [
    'Liderar e organizar a equipe de atendimento',
    'Garantir a qualidade do atendimento às clientes',
    'Acompanhar indicadores de atendimento e satisfação',
    'Treinar novos colaboradores de atendimento',
    'Resolver conflitos e reclamações de clientes'
  ],
  requisitos: [
    'Experiência liderando equipes de atendimento',
    'Boa capacidade de organização em dias de alta demanda',
    'Habilidade para lidar com reclamações de clientes',
    'Perfil comunicativo e organizado'
  ],
  diferenciais: [
    'Experiência com NPS ou pesquisas de satisfação',
    'Vivência com atendimento digital/WhatsApp',
    'Experiência treinando equipes de recepção'
  ],
  remuneracao: {
    salarioBase: 'R$ 2.500,00',
    complemento: 'vale-transporte'
  },
  beneficios: ['Vale-transporte', 'Wellhub', 'Plano odontológico'],
  discAlvo: { D: 15, I: 25, S: 35, C: 25 },
  filtrosRapidos: [
    { label: 'Já liderou atendimento', perguntaId: 'jaLiderouEquipe', valorEsperado: 'sim' },
    { label: 'Acompanha NPS', perguntaId: 'acompanhouNps', valorEsperado: 'sim' },
    { label: 'Disponível múltiplas unidades', perguntaId: 'dispDeslocamentoAtendimento', valorEsperado: 'sim' }
  ],
  perguntas: [
    {
      id: 'jaLiderouEquipe',
      secao: 'experiencia',
      texto: 'Você já liderou uma equipe de atendimento?',
      tipo: 'simNao',
      pesoExperiencia: 8
    },
    {
      id: 'tempoLiderancaAtendimento',
      secao: 'experiencia',
      texto: 'Quanto tempo de experiência você possui com liderança de equipes de atendimento?',
      tipo: 'select',
      opcoes: ['Menos de 1 ano', '1 a 2 anos', '2 a 4 anos', 'Mais de 4 anos'],
      pesoPorOpcao: { 'Menos de 1 ano': 2, '1 a 2 anos': 5, '2 a 4 anos': 8, 'Mais de 4 anos': 10 }
    },
    {
      id: 'maiorEquipeLiderada',
      secao: 'experiencia',
      texto: 'Qual o maior número de pessoas que você já liderou?',
      tipo: 'numero',
      obrigatoria: false,
      placeholder: 'Ex: 8',
      pesoPorFaixa: [
        { min: 10, pontos: 8 },
        { min: 5, pontos: 5 },
        { min: 2, pontos: 3 }
      ]
    },
    {
      id: 'acompanhouNps',
      secao: 'experiencia',
      texto: 'Você já acompanhou NPS ou pesquisas de satisfação?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 5
    },
    {
      id: 'indicadoresAtendimento',
      secao: 'experiencia',
      texto: 'Quais indicadores de atendimento você já acompanhou?',
      tipo: 'multiSelect',
      opcoes: ['NPS', 'Tempo de resposta', 'Tempo de espera', 'Conversão', 'Agendamentos', 'Reclamações', 'Cancelamentos', 'Outros'],
      categoria: 'tecnica',
      pesoPorOpcaoMulti: { NPS: 2, 'Tempo de resposta': 2, 'Tempo de espera': 2, Conversão: 2, Agendamentos: 1, Reclamações: 1, Cancelamentos: 1, Outros: 1 }
    },
    {
      id: 'corrigiuColaboradoraProcedimento',
      secao: 'experiencia',
      texto: 'Você já corrigiu uma colaboradora que não seguia um procedimento?',
      tipo: 'simNao',
      categoria: 'estrategica',
      pesoExperiencia: 4
    },
    {
      id: 'lidouReclamacoes',
      secao: 'experiencia',
      texto: 'Você já lidou com reclamações de clientes?',
      tipo: 'simNao',
      pesoExperiencia: 4
    },
    {
      id: 'organizouAltaDemanda',
      secao: 'experiencia',
      texto: 'Você já organizou uma equipe em dia de alta demanda?',
      tipo: 'simNao',
      categoria: 'estrategica',
      pesoExperiencia: 5
    },
    {
      id: 'redistribuiuTarefas',
      secao: 'experiencia',
      texto: 'Você já precisou redistribuir tarefas entre colaboradores para resolver uma sobrecarga?',
      tipo: 'simNao',
      categoria: 'estrategica',
      pesoExperiencia: 4
    },
    {
      id: 'acompanhouIndicadoresAtendimento',
      secao: 'experiencia',
      texto: 'Você já acompanhou indicadores de atendimento?',
      tipo: 'simNao',
      pesoExperiencia: 4
    },
    {
      id: 'treinouColaboradores',
      secao: 'experiencia',
      texto: 'Você já treinou novos colaboradores de atendimento?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 4
    },
    {
      id: 'deuFeedback',
      secao: 'experiencia',
      texto: 'Você já deu feedback a um colaborador?',
      tipo: 'simNao',
      pesoExperiencia: 3
    },
    {
      id: 'experienciaWhatsapp',
      secao: 'experiencia',
      texto: 'Você possui experiência com WhatsApp/atendimento digital?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 3
    },
    {
      id: 'caseFaltaColaboradoras',
      secao: 'experiencia',
      texto:
        'Em um dia de pico, duas colaboradoras da recepção faltam sem aviso e a agenda está lotada. O que você faz nas próximas horas?',
      tipo: 'texto',
      respostaAberta: true,
      ehCase: true,
      categoria: 'estrategica',
      caseTemasBons: ['priorid', 'remanej', 'comunic', 'organiz', 'apoio', 'reforç', 'cliente']
    },
    {
      id: 'relatoConflito',
      secao: 'experiencia',
      texto: 'Conte brevemente uma situação de conflito que resolveu.',
      tipo: 'texto',
      respostaAberta: true,
      palavrasChave: ['conflito', 'resolv', 'convers', 'cliente', 'equipe']
    },
    {
      id: 'dispDeslocamentoAtendimento',
      secao: 'disponibilidade',
      texto: 'Você possui disponibilidade para atuar em diferentes unidades?',
      tipo: 'simNao'
    }
  ]
};
