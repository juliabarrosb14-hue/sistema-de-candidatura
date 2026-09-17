import type { VagaConfig } from './types';

const UNIDADES = ['Capim Macio', 'Petrópolis', 'Zona Norte', 'Lagoa Nova'];

export const videomaker: VagaConfig = {
  slug: 'videomaker',
  cargo: 'Videomaker',
  empresa: 'Clínica Drenesse',
  local: 'Natal/RN',
  unidades: UNIDADES,
  horario: 'Horário administrativo.',
  descricao: [
    'A Clínica Drenesse busca um(a) Videomaker para captar e editar conteúdo em vídeo para redes sociais e campanhas comerciais.',
    'Se você já captou e editou sozinho, tem portfólio e lida bem com prazo curto, essa vaga é para você.'
  ],
  responsabilidades: [
    'Captar vídeos para redes sociais e campanhas',
    'Editar conteúdo com qualidade e agilidade',
    'Produzir vídeos voltados para vendas/anúncios',
    'Trabalhar com prazos curtos e demandas simultâneas',
    'Manter o padrão visual da marca nos vídeos produzidos'
  ],
  requisitos: [
    'Experiência com produção audiovisual',
    'Portfólio disponível',
    'Experiência com captação usando câmera profissional',
    'Boa organização para trabalhar sob prazo curto'
  ],
  diferenciais: [
    'Experiência com vídeos para Instagram/TikTok/Reels',
    'Vivência com vídeos voltados para vendas',
    'Possuir equipamentos próprios'
  ],
  remuneracao: {
    salarioBase: 'R$ 2.000,00',
    complemento: 'vale-transporte'
  },
  beneficios: ['Vale-transporte', 'Wellhub', 'Plano odontológico'],
  discAlvo: { D: 10, I: 35, S: 15, C: 40 },
  filtrosRapidos: [
    { label: 'Possui portfólio', perguntaId: 'possuiPortfolio', valorEsperado: 'sim' },
    { label: 'Possui equipamentos próprios', perguntaId: 'possuiEquipamentosProprios', valorEsperado: 'sim' }
  ],
  perguntas: [
    {
      id: 'experienciaProducaoAudiovisual',
      secao: 'experiencia',
      texto: 'Possui experiência com produção audiovisual?',
      tipo: 'simNao',
      pesoExperiencia: 7
    },
    {
      id: 'tempoExperienciaVideomaker',
      secao: 'experiencia',
      texto: 'Quanto tempo de experiência você possui?',
      tipo: 'select',
      opcoes: ['Sem experiência', 'Até 1 ano', '1 a 2 anos', '2 a 4 anos', 'Mais de 4 anos'],
      pesoPorOpcao: { 'Sem experiência': 0, 'Até 1 ano': 3, '1 a 2 anos': 6, '2 a 4 anos': 8, 'Mais de 4 anos': 10 }
    },
    {
      id: 'possuiPortfolio',
      secao: 'experiencia',
      texto: 'Possui portfólio?',
      tipo: 'simNao',
      categoria: 'portfolio',
      pesoExperiencia: 6
    },
    {
      id: 'ferramentasEdicao',
      secao: 'experiencia',
      texto: 'Quais ferramentas de edição você domina?',
      tipo: 'multiSelect',
      opcoes: ['Premiere', 'After Effects', 'DaVinci Resolve', 'CapCut', 'Final Cut', 'Outra'],
      categoria: 'tecnica',
      pesoPorOpcaoMulti: { Premiere: 2, 'After Effects': 2, 'DaVinci Resolve': 2, CapCut: 1, 'Final Cut': 2, Outra: 1 }
    },
    {
      id: 'nivelEdicao',
      secao: 'experiencia',
      texto: 'Qual seu nível de edição?',
      tipo: 'select',
      opcoes: ['Básico', 'Intermediário', 'Avançado'],
      categoria: 'tecnica',
      pesoPorOpcao: { Básico: 1, Intermediário: 4, Avançado: 6 }
    },
    {
      id: 'experienciaCaptacaoCameraProfissional',
      secao: 'experiencia',
      texto: 'Você possui experiência com captação usando câmera profissional?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 5
    },
    {
      id: 'produziuConteudoRedesSociais',
      secao: 'experiencia',
      texto: 'Já produziu conteúdo para redes sociais?',
      tipo: 'simNao',
      pesoExperiencia: 5
    },
    {
      id: 'produziuVideosInstagramTiktok',
      secao: 'experiencia',
      texto: 'Já produziu vídeos para Instagram/TikTok/Reels?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 4
    },
    {
      id: 'produziuConteudoComercial',
      secao: 'experiencia',
      texto: 'Já produziu conteúdo comercial?',
      tipo: 'simNao',
      pesoExperiencia: 4
    },
    {
      id: 'trabalhouVideosVendas',
      secao: 'experiencia',
      texto: 'Já trabalhou com vídeos voltados para vendas/anúncios?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 4
    },
    {
      id: 'realizouCaptacaoEdicaoSozinho',
      secao: 'experiencia',
      texto: 'Já realizou captação e edição sozinho?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 4
    },
    {
      id: 'trabalhouPrazoCurto',
      secao: 'experiencia',
      texto: 'Já trabalhou sob prazo curto?',
      tipo: 'simNao',
      categoria: 'estrategica',
      pesoExperiencia: 3
    },
    {
      id: 'possuiEquipamentosProprios',
      secao: 'experiencia',
      texto: 'Possui equipamentos próprios?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 3
    },
    {
      id: 'linkPortfolio',
      secao: 'experiencia',
      texto: 'Link do portfólio.',
      tipo: 'texto',
      categoria: 'portfolio',
      placeholder: 'https://...'
    },
    {
      id: 'caseProblemaTecnicoGravacao',
      secao: 'experiencia',
      texto: 'Durante uma gravação importante, o equipamento apresenta um problema técnico. O que você faz?',
      tipo: 'texto',
      respostaAberta: true,
      ehCase: true,
      categoria: 'estrategica',
      caseTemasBons: ['alternativ', 'backup', 'resolv', 'calma', 'improv', 'equipament']
    },
    {
      id: 'relatoVideoProduzido',
      secao: 'experiencia',
      texto: 'Conte brevemente sobre um vídeo que produziu e qual era o objetivo dele.',
      tipo: 'texto',
      respostaAberta: true,
      palavrasChave: ['vídeo', 'video', 'objetivo', 'produç', 'produc', 'result']
    }
  ]
};
