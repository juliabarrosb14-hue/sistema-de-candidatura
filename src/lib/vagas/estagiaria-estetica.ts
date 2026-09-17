import type { VagaConfig } from './types';

const UNIDADES = ['Capim Macio', 'Petrópolis', 'Zona Norte', 'Lagoa Nova'];

export const estagiariaEstetica: VagaConfig = {
  slug: 'estagiaria-estetica',
  cargo: 'Estagiária de Estética',
  empresa: 'Clínica Drenesse',
  local: 'Natal/RN',
  unidades: UNIDADES,
  horario: 'Disponibilidade para a rotina da clínica, incluindo sábados.',
  descricao: [
    'A Clínica Drenesse está com vaga aberta para estágio em Estética, para quem está cursando graduação ou curso técnico na área e quer colocar a mão na massa em um ambiente profissional e estruturado.',
    'Você vai acompanhar protocolos reais, aprender com profissionais experientes e desenvolver segurança técnica no dia a dia da clínica.'
  ],
  responsabilidades: [
    'Auxiliar nos atendimentos e protocolos estéticos sob supervisão',
    'Seguir os padrões técnicos e de higiene da clínica',
    'Apoiar a organização da sala de atendimento e dos materiais',
    'Acompanhar orientações e feedbacks das supervisoras',
    'Buscar aprender e evoluir tecnicamente a cada atendimento'
  ],
  requisitos: [
    'Estar cursando graduação ou curso técnico em Estética',
    'Disponibilidade para a rotina da clínica, incluindo sábados',
    'Vontade de aprender e seguir orientações técnicas',
    'Organização e atenção aos detalhes'
  ],
  diferenciais: [
    'Experiência prática prévia com procedimentos estéticos',
    'Vivência em estágio obrigatório, extracurricular ou clínica',
    'Facilidade para seguir protocolos detalhados'
  ],
  remuneracao: {
    salarioBase: 'R$ 1.000,00',
    complemento: 'bonificação por meta + vale-transporte'
  },
  beneficios: ['Bonificação por meta', 'Vale-transporte', 'Wellhub', 'Plano odontológico'],
  discAlvo: { D: 10, I: 20, S: 35, C: 35 },
  filtrosRapidos: [
    { label: 'Já possui experiência prática', perguntaId: 'experienciaPratica', valorEsperado: 'sim' },
    { label: 'Disponível p/ sábados', perguntaId: 'dispRotinaClinica', valorEsperado: 'sim' }
  ],
  perguntas: [
    {
      id: 'cursandoEstetica',
      secao: 'experiencia',
      texto: 'Você está cursando graduação ou curso técnico em Estética?',
      tipo: 'simNao',
      pesoExperiencia: 8
    },
    {
      id: 'tipoFormacao',
      secao: 'experiencia',
      texto: 'Qual tipo de formação você está cursando?',
      tipo: 'select',
      opcoes: ['Graduação em Estética', 'Curso Técnico em Estética', 'Outro'],
      categoria: 'tecnica',
      pesoPorOpcao: { 'Graduação em Estética': 5, 'Curso Técnico em Estética': 5, Outro: 2 }
    },
    {
      id: 'periodoModulo',
      secao: 'experiencia',
      texto: 'Em qual período/módulo você está?',
      tipo: 'texto',
      placeholder: 'Ex: 4º período'
    },
    {
      id: 'tempoParaConcluir',
      secao: 'experiencia',
      texto: 'Quanto tempo falta aproximadamente para concluir o curso?',
      tipo: 'select',
      opcoes: ['Menos de 6 meses', '6 meses a 1 ano', '1 a 2 anos', 'Mais de 2 anos'],
      categoria: 'tecnica',
      pesoPorOpcao: { 'Menos de 6 meses': 6, '6 meses a 1 ano': 4, '1 a 2 anos': 2, 'Mais de 2 anos': 1 }
    },
    {
      id: 'experienciaPratica',
      secao: 'experiencia',
      texto: 'Você já possui experiência prática com procedimentos estéticos?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 8
    },
    {
      id: 'procedimentosContato',
      secao: 'experiencia',
      texto: 'Em quais procedimentos você já teve contato prático?',
      tipo: 'multiSelect',
      opcoes: ['Limpeza de pele', 'Peeling', 'Drenagem linfática', 'Massagem estética', 'Depilação', 'Micropigmentação', 'Radiofrequência', 'Criolipólise', 'Outros'],
      categoria: 'tecnica',
      pesoPorOpcaoMulti: {
        'Limpeza de pele': 2,
        Peeling: 2,
        'Drenagem linfática': 2,
        'Massagem estética': 2,
        Depilação: 1,
        Micropigmentação: 1,
        Radiofrequência: 1,
        Criolipólise: 1,
        Outros: 1
      }
    },
    {
      id: 'ondeAconteceuPratica',
      secao: 'experiencia',
      texto: 'Sua experiência prática aconteceu:',
      tipo: 'select',
      opcoes: ['Em estágio obrigatório', 'Em estágio extracurricular', 'Em clínica', 'Em cursos práticos', 'Outra'],
      categoria: 'tecnica',
      pesoPorOpcao: { 'Em estágio obrigatório': 4, 'Em estágio extracurricular': 4, 'Em clínica': 5, 'Em cursos práticos': 2, Outra: 1 }
    },
    {
      id: 'atendeuClienteInsegura',
      secao: 'experiencia',
      texto: 'Você já atendeu uma cliente insegura antes de um procedimento?',
      tipo: 'simNao',
      pesoExperiencia: 3
    },
    {
      id: 'seguiuProtocolo',
      secao: 'experiencia',
      texto: 'Você já seguiu um protocolo técnico durante um atendimento?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 5
    },
    {
      id: 'confortavelProtocolos',
      secao: 'experiencia',
      texto: 'Você se sente confortável em seguir protocolos detalhados mesmo quando o procedimento é repetitivo?',
      tipo: 'select',
      opcoes: ['Sim', 'Parcialmente', 'Não'],
      categoria: 'tecnica',
      pesoPorOpcao: { Sim: 5, Parcialmente: 2, Não: 0 }
    },
    {
      id: 'aprendeuRapido',
      secao: 'experiencia',
      texto: 'Você já precisou aprender uma atividade nova rapidamente?',
      tipo: 'simNao',
      pesoExperiencia: 3
    },
    {
      id: 'recebeuFeedback',
      secao: 'experiencia',
      texto: 'Você já recebeu correção/feedback de uma supervisora ou professora?',
      tipo: 'simNao',
      pesoExperiencia: 3
    },
    {
      id: 'usaMetodoOrganizacao',
      secao: 'experiencia',
      texto: 'Você utiliza algum método para organizar suas tarefas?',
      tipo: 'simNao',
      pesoExperiencia: 2
    },
    {
      id: 'dispAprenderProtocolosDrenesse',
      secao: 'experiencia',
      texto: 'Você possui disponibilidade para aprender novos protocolos e procedimentos conforme os padrões da Drenesse?',
      tipo: 'simNao',
      categoria: 'estrategica',
      pesoExperiencia: 4
    },
    {
      id: 'caseSupervisao',
      secao: 'experiencia',
      texto:
        'Durante um atendimento supervisionado, você percebe que está insegura sobre o próximo passo do protocolo. O que você faria?',
      tipo: 'texto',
      respostaAberta: true,
      ehCase: true,
      categoria: 'estrategica',
      caseTemasBons: ['pergunt', 'supervisor', 'dúvida', 'duvida', 'seguranç', 'confirm', 'pausar', 'orientaç']
    },
    {
      id: 'relatoEscolhaEstetica',
      secao: 'experiencia',
      texto: 'Conte brevemente por que escolheu a estética e quais procedimentos já realizou na prática.',
      tipo: 'texto',
      respostaAberta: true,
      palavrasChave: ['procedimento', 'pele', 'estética', 'estetica', 'protocolo', 'aprend', 'paix']
    },
    {
      id: 'dispRotinaClinica',
      secao: 'disponibilidade',
      texto: 'Possui disponibilidade para a rotina da clínica, incluindo sábados?',
      tipo: 'simNao'
    },
    {
      id: 'dispUnidades',
      secao: 'disponibilidade',
      texto: 'Você possui disponibilidade para atuar em qual(is) unidade(s)?',
      tipo: 'multiSelect',
      opcoes: UNIDADES,
      obrigatoria: false
    }
  ]
};
