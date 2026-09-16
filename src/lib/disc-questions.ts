import type { DiscFator } from './types';

export interface DiscOpcao {
  id: string;
  texto: string;
  fator: DiscFator;
}

export interface DiscPergunta {
  id: string;
  texto: string;
  opcoes: DiscOpcao[];
}

// 24 perguntas contextualizadas para ambiente profissional, liderança e vendas.
// Cada pergunta tem 4 alternativas, uma para cada fator (D, I, S, C), em ordem
// embaralhada e sem qualquer rótulo visível ao candidato.
export const DISC_QUESTIONS: DiscPergunta[] = [
  {
    id: 'q1',
    texto: 'Quando surge um problema inesperado no trabalho, qual comportamento mais se aproxima de você?',
    opcoes: [
      { id: 'q1a', texto: 'Tomo uma decisão rápida e parto para a ação imediatamente.', fator: 'D' },
      { id: 'q1b', texto: 'Converso com a equipe para buscar ideias e engajar todos na solução.', fator: 'I' },
      { id: 'q1c', texto: 'Mantenho a calma e sigo resolvendo com tranquilidade, passo a passo.', fator: 'S' },
      { id: 'q1d', texto: 'Analiso os detalhes com cuidado antes de decidir o que fazer.', fator: 'C' }
    ]
  },
  {
    id: 'q2',
    texto: 'Quando sua equipe não atinge uma meta, você tende a:',
    opcoes: [
      { id: 'q2a', texto: 'Rever os processos e números com atenção para entender exatamente onde falhou.', fator: 'C' },
      { id: 'q2b', texto: 'Reunir o time rapidamente e cobrar um novo direcionamento com firmeza.', fator: 'D' },
      { id: 'q2c', texto: 'Conversar individualmente para entender como cada um está se sentindo.', fator: 'S' },
      { id: 'q2d', texto: 'Motivar o grupo com uma conversa animada, focando em recomeçar com energia.', fator: 'I' }
    ]
  },
  {
    id: 'q3',
    texto: 'Em uma reunião de equipe, você costuma:',
    opcoes: [
      { id: 'q3a', texto: 'Conduzir a pauta com objetividade, direto ao ponto e às decisões.', fator: 'D' },
      { id: 'q3b', texto: 'Ser quem anima o grupo e estimula a participação de todos.', fator: 'I' },
      { id: 'q3c', texto: 'Ouvir com atenção antes de opinar, garantindo que todos sejam ouvidos.', fator: 'S' },
      { id: 'q3d', texto: 'Preparar os dados e indicadores para embasar cada ponto discutido.', fator: 'C' }
    ]
  },
  {
    id: 'q4',
    texto: 'Diante de uma negociação difícil com um cliente, você:',
    opcoes: [
      { id: 'q4a', texto: 'Segue o roteiro e as políticas da empresa à risca, sem abrir exceções.', fator: 'C' },
      { id: 'q4b', texto: 'Usa simpatia e argumentação para conquistar a confiança do cliente.', fator: 'I' },
      { id: 'q4c', texto: 'Vai direto ao fechamento, buscando resolver o quanto antes.', fator: 'D' },
      { id: 'q4d', texto: 'Busca entender com paciência o que o cliente realmente precisa.', fator: 'S' }
    ]
  },
  {
    id: 'q5',
    texto: 'Sob pressão para entregar resultados em prazo curto, você:',
    opcoes: [
      { id: 'q5a', texto: 'Acelera o ritmo e assume o controle da situação sem hesitar.', fator: 'D' },
      { id: 'q5b', texto: 'Organiza uma lista clara de prioridades e segue metodicamente.', fator: 'C' },
      { id: 'q5c', texto: 'Busca apoio da equipe, conversando e dividindo tarefas com entusiasmo.', fator: 'I' },
      { id: 'q5d', texto: 'Mantém o ritmo constante, sem se abalar, confiando no processo.', fator: 'S' }
    ]
  },
  {
    id: 'q6',
    texto: 'Ao apresentar um resultado para a diretoria, você prefere:',
    opcoes: [
      { id: 'q6a', texto: 'Apresentar números e indicadores detalhados, com precisão.', fator: 'C' },
      { id: 'q6b', texto: 'Fazer uma apresentação envolvente, que conquiste a atenção de todos.', fator: 'I' },
      { id: 'q6c', texto: 'Ser direta e objetiva, destacando o essencial e as próximas decisões.', fator: 'D' },
      { id: 'q6d', texto: 'Contextualizar com calma, mostrando o caminho percorrido pela equipe.', fator: 'S' }
    ]
  },
  {
    id: 'q7',
    texto: 'Ao receber uma crítica sobre seu trabalho, sua primeira reação é:',
    opcoes: [
      { id: 'q7a', texto: 'Ouvir com tranquilidade e refletir antes de responder.', fator: 'S' },
      { id: 'q7b', texto: 'Analisar se a crítica tem base em fatos concretos.', fator: 'C' },
      { id: 'q7c', texto: 'Responder prontamente, defendendo seu ponto de vista com firmeza.', fator: 'D' },
      { id: 'q7d', texto: 'Levar para o lado leve e buscar entender a intenção da pessoa.', fator: 'I' }
    ]
  },
  {
    id: 'q8',
    texto: 'Ao liderar uma equipe nova, sua prioridade nas primeiras semanas é:',
    opcoes: [
      { id: 'q8a', texto: 'Definir metas claras e mostrar quem está no comando.', fator: 'D' },
      { id: 'q8b', texto: 'Criar vínculo e proximidade com cada pessoa do time.', fator: 'I' },
      { id: 'q8c', texto: 'Entender a rotina de cada um antes de propor mudanças.', fator: 'S' },
      { id: 'q8d', texto: 'Mapear processos, ferramentas e indicadores já existentes.', fator: 'C' }
    ]
  },
  {
    id: 'q9',
    texto: 'Quando um colaborador comete um erro recorrente, você:',
    opcoes: [
      { id: 'q9a', texto: 'Documenta o ocorrido e cria um plano estruturado de correção.', fator: 'C' },
      { id: 'q9b', texto: 'Dá um feedback direto e estabelece consequências claras.', fator: 'D' },
      { id: 'q9c', texto: 'Conversa com empatia, buscando entender a causa antes de agir.', fator: 'S' },
      { id: 'q9d', texto: 'Usa a conversa como motivação, incentivando a pessoa a melhorar.', fator: 'I' }
    ]
  },
  {
    id: 'q10',
    texto: 'No dia a dia, você se organiza principalmente por meio de:',
    opcoes: [
      { id: 'q10a', texto: 'Planilhas, checklists e processos bem definidos.', fator: 'C' },
      { id: 'q10b', texto: 'Uma rotina estável que raramente muda.', fator: 'S' },
      { id: 'q10c', texto: 'Prioridades claras que mudam conforme o resultado que preciso alcançar.', fator: 'D' },
      { id: 'q10d', texto: 'Conversas e alinhamentos constantes com as pessoas ao redor.', fator: 'I' }
    ]
  },
  {
    id: 'q11',
    texto: 'Diante de uma mudança repentina de estratégia da empresa, você:',
    opcoes: [
      { id: 'q11a', texto: 'Se adapta rapidamente e já parte para colocar em prática.', fator: 'D' },
      { id: 'q11b', texto: 'Precisa de um tempo para se ajustar, mas segue com consistência.', fator: 'S' },
      { id: 'q11c', texto: 'Quer entender todos os detalhes e critérios da nova estratégia.', fator: 'C' },
      { id: 'q11d', texto: 'Já pensa em como engajar e comunicar a mudança para o time.', fator: 'I' }
    ]
  },
  {
    id: 'q12',
    texto: 'Sua forma preferida de motivar uma equipe comercial é:',
    opcoes: [
      { id: 'q12a', texto: 'Estabelecendo metas desafiadoras e reconhecendo quem entrega mais.', fator: 'D' },
      { id: 'q12b', texto: 'Criando um ambiente leve, de energia e reconhecimento público.', fator: 'I' },
      { id: 'q12c', texto: 'Oferecendo apoio constante e segurança para o time evoluir.', fator: 'S' },
      { id: 'q12d', texto: 'Mostrando com clareza os indicadores e o que precisa melhorar.', fator: 'C' }
    ]
  },
  {
    id: 'q13',
    texto: 'Ao tomar uma decisão importante, o que mais pesa para você?',
    opcoes: [
      { id: 'q13a', texto: 'O impacto e a velocidade do resultado.', fator: 'D' },
      { id: 'q13b', texto: 'Os dados e informações disponíveis.', fator: 'C' },
      { id: 'q13c', texto: 'Como as pessoas envolvidas serão impactadas.', fator: 'S' },
      { id: 'q13d', texto: 'A opinião e o entusiasmo das pessoas ao redor.', fator: 'I' }
    ]
  },
  {
    id: 'q14',
    texto: 'Em um conflito entre dois membros da equipe, você:',
    opcoes: [
      { id: 'q14a', texto: 'Intervém rapidamente e determina uma solução objetiva.', fator: 'D' },
      { id: 'q14b', texto: 'Media a conversa buscando um clima leve entre as partes.', fator: 'I' },
      { id: 'q14c', texto: 'Escuta cada lado com calma antes de qualquer posicionamento.', fator: 'S' },
      { id: 'q14d', texto: 'Verifica os fatos e o que diz o processo antes de agir.', fator: 'C' }
    ]
  },
  {
    id: 'q15',
    texto: 'Ao começar um novo projeto ou desafio, você costuma:',
    opcoes: [
      { id: 'q15a', texto: 'Planejar cada etapa com cuidado antes de iniciar.', fator: 'C' },
      { id: 'q15b', texto: 'Já começar a agir e ajustar o percurso ao longo do caminho.', fator: 'D' },
      { id: 'q15c', texto: 'Reunir pessoas para trocar ideias e construir junto.', fator: 'I' },
      { id: 'q15d', texto: 'Seguir em ritmo constante, sem pressa, até concluir bem.', fator: 'S' }
    ]
  },
  {
    id: 'q16',
    texto: 'O que mais te incomoda no ambiente de trabalho?',
    opcoes: [
      { id: 'q16a', texto: 'Falta de agilidade e demora para decidir.', fator: 'D' },
      { id: 'q16b', texto: 'Ambiente sem interação, muito frio ou monótono.', fator: 'I' },
      { id: 'q16c', texto: 'Mudanças constantes e falta de estabilidade.', fator: 'S' },
      { id: 'q16d', texto: 'Falta de organização, critério ou padrão nos processos.', fator: 'C' }
    ]
  },
  {
    id: 'q17',
    texto: 'Como você costuma acompanhar as metas da sua equipe?',
    opcoes: [
      { id: 'q17a', texto: 'Cobrando resultados diariamente e de forma direta.', fator: 'D' },
      { id: 'q17b', texto: 'Incentivando o time com conversas motivacionais frequentes.', fator: 'I' },
      { id: 'q17c', texto: 'Acompanhando com constância, sem gerar pressão excessiva.', fator: 'S' },
      { id: 'q17d', texto: 'Analisando relatórios e indicadores detalhados semanalmente.', fator: 'C' }
    ]
  },
  {
    id: 'q18',
    texto: 'Ao apresentar uma nova meta desafiadora ao time, você:',
    opcoes: [
      { id: 'q18a', texto: 'Explica os números e o racional por trás da meta.', fator: 'C' },
      { id: 'q18b', texto: 'Fala com entusiasmo, buscando contagiar a equipe.', fator: 'I' },
      { id: 'q18c', texto: 'Comunica de forma direta e assertiva o que se espera.', fator: 'D' },
      { id: 'q18d', texto: 'Se preocupa em como cada pessoa vai lidar com o desafio.', fator: 'S' }
    ]
  },
  {
    id: 'q19',
    texto: 'Quando um processo definido pela empresa não parece eficiente, você:',
    opcoes: [
      { id: 'q19a', texto: 'Propõe uma mudança imediata e assume a responsabilidade por ela.', fator: 'D' },
      { id: 'q19b', texto: 'Segue o processo, mas sugere melhorias formalmente com dados.', fator: 'C' },
      { id: 'q19c', texto: 'Comenta com o time e busca apoio antes de qualquer mudança.', fator: 'I' },
      { id: 'q19d', texto: 'Continua seguindo o combinado, evitando gerar instabilidade.', fator: 'S' }
    ]
  },
  {
    id: 'q20',
    texto: 'Em épocas de muita demanda e múltiplas tarefas ao mesmo tempo, você:',
    opcoes: [
      { id: 'q20a', texto: 'Prioriza o que dá mais resultado e resolve rápido.', fator: 'D' },
      { id: 'q20b', texto: 'Faz uma lista organizada e segue item por item.', fator: 'C' },
      { id: 'q20c', texto: 'Mantém o ritmo estável, sem se deixar abalar pela correria.', fator: 'S' },
      { id: 'q20d', texto: 'Envolve outras pessoas, delegando e conversando bastante.', fator: 'I' }
    ]
  },
  {
    id: 'q21',
    texto: 'O que mais te motiva no dia a dia comercial?',
    opcoes: [
      { id: 'q21a', texto: 'Bater metas e superar desafios de forma constante.', fator: 'D' },
      { id: 'q21b', texto: 'O reconhecimento e a relação próxima com clientes e equipe.', fator: 'I' },
      { id: 'q21c', texto: 'Ver a equipe evoluindo de forma consistente e segura.', fator: 'S' },
      { id: 'q21d', texto: 'Ter processos bem estruturados que geram previsibilidade.', fator: 'C' }
    ]
  },
  {
    id: 'q22',
    texto: 'Ao dar um feedback difícil para alguém da equipe, você:',
    opcoes: [
      { id: 'q22a', texto: 'É direta e objetiva, focando no que precisa mudar.', fator: 'D' },
      { id: 'q22b', texto: 'Busca uma abordagem leve, para não desmotivar a pessoa.', fator: 'I' },
      { id: 'q22c', texto: 'Tem cuidado com as palavras, priorizando o bem-estar da pessoa.', fator: 'S' },
      { id: 'q22d', texto: 'Baseia o feedback em fatos e registros concretos.', fator: 'C' }
    ]
  },
  {
    id: 'q23',
    texto: 'Como você lida com regras e políticas internas da empresa?',
    opcoes: [
      { id: 'q23a', texto: 'Sigo à risca, valorizo padrão e conformidade.', fator: 'C' },
      { id: 'q23b', texto: 'Sigo, mas gosto de entender o motivo por trás de cada uma.', fator: 'S' },
      { id: 'q23c', texto: 'Sigo o essencial, mas não deixo que travem os resultados.', fator: 'D' },
      { id: 'q23d', texto: 'Sigo, mas prefiro comunicar as regras de forma leve ao time.', fator: 'I' }
    ]
  },
  {
    id: 'q24',
    texto: 'Depois de bater uma meta importante, você prefere:',
    opcoes: [
      { id: 'q24a', texto: 'Já partir para o próximo desafio, sem parar muito para comemorar.', fator: 'D' },
      { id: 'q24b', texto: 'Comemorar junto com a equipe, celebrando o resultado coletivo.', fator: 'I' },
      { id: 'q24c', texto: 'Reconhecer com tranquilidade e agradecer a dedicação de todos.', fator: 'S' },
      { id: 'q24d', texto: 'Analisar os números para entender o que gerou aquele resultado.', fator: 'C' }
    ]
  }
];

export const DISC_FATOR_LABEL: Record<DiscFator, string> = {
  D: 'Dominância',
  I: 'Influência',
  S: 'Estabilidade',
  C: 'Conformidade'
};
