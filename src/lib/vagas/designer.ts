import type { VagaConfig } from './types';

const UNIDADES = ['Capim Macio', 'Petrópolis', 'Zona Norte', 'Lagoa Nova'];

export const designer: VagaConfig = {
  slug: 'designer',
  cargo: 'Designer',
  empresa: 'Clínica Drenesse',
  local: 'Natal/RN',
  unidades: UNIDADES,
  horario: 'Horário administrativo.',
  descricao: [
    'A Clínica Drenesse busca um(a) Designer para criar peças que fortaleçam a identidade visual da marca e apoiem as estratégias de marketing e redes sociais.',
    'Se você domina ferramentas de design, tem portfólio e sabe lidar com múltiplas demandas em prazo curto, essa vaga é para você.'
  ],
  responsabilidades: [
    'Criar peças gráficas para redes sociais e campanhas',
    'Manter a identidade visual da marca em todas as peças',
    'Trabalhar seguindo o manual de marca',
    'Produzir demandas com prazos curtos e simultâneos',
    'Atuar em conjunto com o time de marketing/social media'
  ],
  requisitos: [
    'Experiência como designer',
    'Portfólio disponível',
    'Domínio de ferramentas de design (Photoshop, Illustrator, Figma ou Canva)',
    'Boa organização para múltiplas demandas'
  ],
  diferenciais: [
    'Experiência com identidade visual de marcas',
    'Vivência com peças para redes sociais',
    'Conhecimento de After Effects/Premiere'
  ],
  remuneracao: {
    salarioBase: 'R$ 2.000,00',
    complemento: 'vale-transporte'
  },
  beneficios: ['Vale-transporte', 'Wellhub', 'Plano odontológico'],
  discAlvo: { D: 10, I: 35, S: 15, C: 40 },
  filtrosRapidos: [
    { label: 'Possui portfólio', perguntaId: 'possuiPortfolio', valorEsperado: 'sim' },
    { label: 'Experiência com identidade visual', perguntaId: 'experienciaIdentidadeVisual', valorEsperado: 'sim' }
  ],
  perguntas: [
    {
      id: 'experienciaDesigner',
      secao: 'experiencia',
      texto: 'Você possui experiência como designer?',
      tipo: 'simNao',
      pesoExperiencia: 7
    },
    {
      id: 'tempoExperienciaDesigner',
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
      id: 'ferramentasDomina',
      secao: 'experiencia',
      texto: 'Quais ferramentas você domina?',
      tipo: 'multiSelect',
      opcoes: ['Photoshop', 'Illustrator', 'Figma', 'Canva', 'After Effects', 'Premiere', 'Outra'],
      categoria: 'tecnica',
      pesoPorOpcaoMulti: { Photoshop: 2, Illustrator: 2, Figma: 2, Canva: 1, 'After Effects': 2, Premiere: 2, Outra: 1 }
    },
    {
      id: 'nivelFerramentas',
      secao: 'experiencia',
      texto: 'Qual seu nível de domínio das principais ferramentas?',
      tipo: 'select',
      opcoes: ['Básico', 'Intermediário', 'Avançado'],
      categoria: 'tecnica',
      pesoPorOpcao: { Básico: 1, Intermediário: 4, Avançado: 6 }
    },
    {
      id: 'trabalhouIdentidadeMarcas',
      secao: 'experiencia',
      texto: 'Já trabalhou com identidade visual de marcas?',
      tipo: 'simNao',
      pesoExperiencia: 5
    },
    {
      id: 'experienciaIdentidadeVisual',
      secao: 'experiencia',
      texto: 'Você possui experiência com identidade visual?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 4
    },
    {
      id: 'seguiuManualMarca',
      secao: 'experiencia',
      texto: 'Já trabalhou seguindo manual de marca?',
      tipo: 'simNao',
      categoria: 'tecnica',
      pesoExperiencia: 4
    },
    {
      id: 'criouPecasRedesSociais',
      secao: 'experiencia',
      texto: 'Já criou peças para redes sociais?',
      tipo: 'simNao',
      pesoExperiencia: 5
    },
    {
      id: 'produziuVariasPecasPrazoCurto',
      secao: 'experiencia',
      texto: 'Já precisou produzir várias peças com prazo curto?',
      tipo: 'simNao',
      categoria: 'estrategica',
      pesoExperiencia: 4
    },
    {
      id: 'organizouVariasDemandas',
      secao: 'experiencia',
      texto: 'Você já organizou várias demandas simultaneamente?',
      tipo: 'simNao',
      pesoExperiencia: 3
    },
    {
      id: 'trabalhouComMarketing',
      secao: 'experiencia',
      texto: 'Já trabalhou diretamente com equipes de marketing/social media?',
      tipo: 'simNao',
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
      id: 'caseMudancaUltimaHora',
      secao: 'experiencia',
      texto: 'O cliente interno pede uma alteração de última hora em uma peça que já estava aprovada e o prazo é hoje. Como você lida com isso?',
      tipo: 'texto',
      respostaAberta: true,
      ehCase: true,
      categoria: 'estrategica',
      caseTemasBons: ['priorid', 'prazo', 'comunic', 'alinh', 'negoci', 'organiz']
    },
    {
      id: 'relatoProjetoDesign',
      secao: 'experiencia',
      texto: 'Conte brevemente sobre um projeto de design que considera relevante.',
      tipo: 'texto',
      respostaAberta: true,
      palavrasChave: ['projeto', 'design', 'marca', 'result', 'criativ']
    }
  ]
};
