import type { VagaConfig } from './types';

const UNIDADES = ['Capim Macio', 'Petrópolis', 'Zona Norte', 'Lagoa Nova'];

export const esteticista: VagaConfig = {
  slug: 'esteticista',
  cargo: 'Esteticista',
  empresa: 'Clínica Drenesse',
  local: 'Natal/RN',
  unidades: UNIDADES,
  horario: 'Disponibilidade para sábados e atuação em diferentes unidades quando necessário.',
  descricao: [
    'A Clínica Drenesse busca uma esteticista com formação completa para executar protocolos com autonomia, cuidar da experiência das clientes do início ao fim e contribuir com os resultados da unidade.',
    'Se você domina procedimentos estéticos, tem atenção a contraindicações e gosta de indicar o melhor tratamento para cada cliente, essa vaga é para você.'
  ],
  responsabilidades: [
    'Executar protocolos estéticos com autonomia e segurança técnica',
    'Identificar contraindicações e situações de atenção durante o atendimento',
    'Garantir uma experiência humanizada e de qualidade para a cliente',
    'Indicar tratamentos adequados ao perfil e objetivo de cada cliente',
    'Contribuir com metas e indicadores da unidade'
  ],
  requisitos: [
    'Formação completa em Estética',
    'Experiência executando protocolos estéticos',
    'Atenção a contraindicações e segurança no atendimento',
    'Boa comunicação com as clientes'
  ],
  diferenciais: [
    'Experiência com metas e indicadores comerciais',
    'Vivência com venda ou indicação de tratamentos',
    'Domínio de múltiplos equipamentos estéticos'
  ],
  remuneracao: {
    salarioBase: 'R$ 1.768,00 a R$ 2.200,00',
    complemento: 'bonificação por meta + vale-transporte'
  },
  beneficios: ['Bonificação por meta', 'Vale-transporte', 'Wellhub', 'Plano odontológico'],
  discAlvo: { D: 10, I: 25, S: 35, C: 30 },
  filtrosRapidos: [
    { label: 'Formação completa', perguntaId: 'formacaoCompleta', valorEsperado: 'sim' },
    { label: 'Autônoma em protocolos', perguntaId: 'executouSemSupervisao', valorEsperado: 'sim' },
    { label: 'Disponível p/ sábados', perguntaId: 'dispSabados', valorEsperado: 'sim' }
  ],
  perguntas: [
    {
      id: 'formacaoCompleta',
      secao: 'experiencia',
      texto: 'Você possui formação completa em Estética?',
      tipo: 'simNao',
      pesoExperiencia: 8
    },
    {
      id: 'tempoExperienciaEsteticista',
      secao: 'experiencia',
      texto: 'Quanto tempo de experiência como esteticista você possui?',
      tipo: 'select',
      opcoes: ['Sem experiência', 'Até 1 ano', '1 a 2 anos', '2 a 4 anos', 'Mais de 4 anos'],
      pesoPorOpcao: { 'Sem experiência': 0, 'Até 1 ano': 3, '1 a 2 anos': 6, '2 a 4 anos': 9, 'Mais de 4 anos': 12 }
    },
    {
      id: 'procedimentosDomina',
      secao: 'experiencia',
      texto: 'Quais procedimentos estéticos você domina atualmente?',
      tipo: 'multiSelect',
      opcoes: ['Limpeza de pele', 'Peeling', 'Drenagem linfática', 'Massagem estética', 'Depilação', 'Micropigmentação', 'Radiofrequência', 'Criolipólise', 'Botox/Preenchimento', 'Outros'],
      categoria: 'tecnica',
      pesoPorOpcaoMulti: {
        'Limpeza de pele': 2, Peeling: 2, 'Drenagem linfática': 2, 'Massagem estética': 2, Depilação: 1,
        Micropigmentação: 2, Radiofrequência: 2, Criolipólise: 2, 'Botox/Preenchimento': 3, Outros: 1
      }
    },
    {
      id: 'procedimentosAutonomia',
      secao: 'experiencia',
      texto: 'Em quais procedimentos você possui maior segurança para atuar de forma autônoma?',
      tipo: 'multiSelect',
      opcoes: ['Limpeza de pele', 'Peeling', 'Drenagem linfática', 'Massagem estética', 'Depilação', 'Micropigmentação', 'Radiofrequência', 'Criolipólise', 'Botox/Preenchimento', 'Outros'],
      categoria: 'tecnica',
      pesoPorOpcaoMulti: {
        'Limpeza de pele': 2, Peeling: 2, 'Drenagem linfática': 2, 'Massagem estética': 2, Depilação: 1,
        Micropigmentação: 2, Radiofrequência: 2, Criolipólise: 2, 'Botox/Preenchimento': 3, Outros: 1
      }
    },
    {
      id: 'atendimentosPorSemana',
      secao: 'experiencia',
      texto: 'Quantos atendimentos estéticos você realiza ou já realizou, aproximadamente, por semana?',
      tipo: 'select',
      opcoes: ['Até 5', '6 a 10', '11 a 20', 'Mais de 20'],
      categoria: 'tecnica',
      pesoPorOpcao: { 'Até 5': 1, '6 a 10': 3, '11 a 20': 5, 'Mais de 20': 6 }
    },
    {
      id: 'executouSemSupervisao',
      secao: 'experiencia',
      texto: 'Você já executou protocolos estéticos do início ao fim sem supervisão?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 8
    },
    {
      id: 'seguiuProtocoloPadronizado',
      secao: 'experiencia',
      texto: 'Você já trabalhou seguindo protocolos padronizados de uma clínica?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 4
    },
    {
      id: 'usouEquipamentos',
      secao: 'experiencia',
      texto: 'Você já utilizou equipamentos estéticos?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 3
    },
    {
      id: 'equipamentosExperiencia',
      secao: 'experiencia',
      texto: 'Quais equipamentos/procedimentos você possui experiência?',
      tipo: 'multiSelect',
      opcoes: ['Radiofrequência', 'Criolipólise', 'Laser', 'Ultrassom', 'Microagulhamento', 'Outros'],
      categoria: 'tecnica',
      pesoPorOpcaoMulti: { Radiofrequência: 2, Criolipólise: 2, Laser: 2, Ultrassom: 2, Microagulhamento: 2, Outros: 1 }
    },
    {
      id: 'atendeuClienteInsatisfeita',
      secao: 'experiencia',
      texto: 'Você já atendeu uma cliente insatisfeita com um resultado?',
      tipo: 'simNao',
      categoria: 'estrategica',
      pesoExperiencia: 3
    },
    {
      id: 'identificouContraindicacao',
      secao: 'experiencia',
      texto: 'Você já identificou uma contraindicação ou situação de atenção?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 5
    },
    {
      id: 'interrompeuProcedimento',
      secao: 'experiencia',
      texto: 'Você já precisou interromper ou adaptar um procedimento por identificar uma contraindicação ou situação de risco?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 4
    },
    {
      id: 'registroEvolucao',
      secao: 'experiencia',
      texto: 'Você possui experiência com registro de evolução/prontuário ou documentação de atendimento?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 3
    },
    {
      id: 'trabalhouComMetas',
      secao: 'experiencia',
      texto: 'Você já trabalhou com metas ou indicadores?',
      tipo: 'simNao',
      pesoExperiencia: 3
    },
    {
      id: 'realizouVenda',
      secao: 'experiencia',
      texto: 'Você já realizou venda ou indicação de tratamentos?',
      tipo: 'simNao',
      pesoExperiencia: 3
    },
    {
      id: 'caseContraindicacao',
      secao: 'experiencia',
      texto:
        'Durante o atendimento, você percebe uma situação que pode contraindicar a continuidade do procedimento. O que você faria?',
      tipo: 'texto',
      respostaAberta: true,
      ehCase: true,
      categoria: 'estrategica',
      caseTemasBons: ['interromp', 'contraindic', 'pausar', 'explic', 'segurança', 'seguranca', 'orient', 'encaminh']
    },
    {
      id: 'relatoSituacaoDificil',
      secao: 'experiencia',
      texto: 'Conte brevemente uma situação difícil com uma cliente e como resolveu.',
      tipo: 'texto',
      respostaAberta: true,
      palavrasChave: ['cliente', 'resolv', 'conversa', 'calma', 'entend', 'solução', 'solucao']
    },
    {
      id: 'dispSabados',
      secao: 'disponibilidade',
      texto: 'Possui disponibilidade para sábados e outras unidades?',
      tipo: 'simNao'
    }
  ]
};
