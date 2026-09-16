import { DISC_QUESTIONS, DISC_FATOR_LABEL } from './disc-questions';
import type { DiscFator, DiscRespostas, DiscScore } from './types';

export function validarRespostasDisc(respostas: DiscRespostas): boolean {
  return DISC_QUESTIONS.every((pergunta) => {
    const resposta = respostas[pergunta.id];
    if (!resposta) return false;
    return pergunta.opcoes.some((opcao) => opcao.fator === resposta);
  });
}

/** Calcula o percentual de cada fator (D, I, S, C) a partir das respostas brutas. */
export function calcularPercentuaisDisc(respostas: DiscRespostas): DiscScore {
  const contagem: DiscScore = { D: 0, I: 0, S: 0, C: 0 };
  let total = 0;

  for (const pergunta of DISC_QUESTIONS) {
    const fator = respostas[pergunta.id] as DiscFator | undefined;
    if (fator && fator in contagem) {
      contagem[fator] += 1;
      total += 1;
    }
  }

  if (total === 0) {
    return { D: 0, I: 0, S: 0, C: 0 };
  }

  return {
    D: Math.round((contagem.D / total) * 100),
    I: Math.round((contagem.I / total) * 100),
    S: Math.round((contagem.S / total) * 100),
    C: Math.round((contagem.C / total) * 100)
  };
}

export function fatorDominante(percentuais: DiscScore): DiscFator {
  return (Object.entries(percentuais) as [DiscFator, number][]).sort((a, b) => b[1] - a[1])[0][0];
}

/**
 * Gera uma interpretação objetiva para o RH, comparando o perfil da candidata
 * ao perfil DISC de referência configurado para a vaga (discAlvo), sem expor a
 * lógica de corte ao candidato em nenhum outro ponto do sistema.
 */
export function interpretarDiscParaRh(percentuais: DiscScore, discAlvo: DiscScore): string {
  const nivel = (valor: number) => (valor >= 30 ? 'alto' : valor >= 18 ? 'médio' : 'baixo');

  const d = nivel(percentuais.D);
  const i = nivel(percentuais.I);
  const s = nivel(percentuais.S);
  const c = nivel(percentuais.C);

  const partes: string[] = [];

  partes.push(
    d === 'alto'
      ? 'Demonstra forte orientação para decisão, resultados e liderança direta.'
      : d === 'médio'
      ? 'Apresenta postura de liderança moderada, equilibrando decisão com ponderação.'
      : 'Tende a evitar confronto e decisões unilaterais, preferindo apoio de terceiros.'
  );

  partes.push(
    i === 'alto'
      ? 'Boa capacidade de comunicação, persuasão e engajamento de equipe.'
      : i === 'médio'
      ? 'Comunicação equilibrada, sem forte apelo persuasivo.'
      : 'Perfil mais reservado, pode precisar de apoio em comunicação e influência.'
  );

  partes.push(
    s === 'alto'
      ? 'Alta estabilidade emocional e constância; pode ter resistência a mudanças rápidas.'
      : s === 'médio'
      ? 'Equilíbrio entre constância e adaptação a mudanças no dia a dia.'
      : 'Alta adaptabilidade, mas pode demonstrar menor paciência com rotina.'
  );

  partes.push(
    c === 'alto'
      ? 'Forte atenção a processos, dados e conformidade.'
      : c === 'médio'
      ? 'Atenção equilibrada a processos, sem rigidez excessiva.'
      : 'Menor apego a processos formais; pode precisar de reforço no cumprimento de padrões.'
  );

  const niveis: Record<DiscFator, 'alto' | 'médio' | 'baixo'> = { D: d, I: i, S: s, C: c };
  const fatoresAltoEsperados = (Object.entries(discAlvo) as [DiscFator, number][])
    .filter(([, v]) => v >= 30)
    .map(([fator]) => fator);

  const aderenciaPerfil =
    fatoresAltoEsperados.length === 0 || fatoresAltoEsperados.every((f) => niveis[f] !== 'baixo')
      ? 'O perfil apresenta aderência ao comportamento esperado para esta vaga.'
      : `O perfil apresenta divergência em relação ao comportamento esperado para esta vaga (${fatoresAltoEsperados
          .map((f) => DISC_FATOR_LABEL[f])
          .join(' e ')} alto seria o esperado), o que merece atenção na entrevista.`;

  return `${partes.join(' ')} ${aderenciaPerfil}`;
}

export { DISC_FATOR_LABEL };
