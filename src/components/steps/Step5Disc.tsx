'use client';

import { useMemo, useState } from 'react';
import { DISC_QUESTIONS } from '@/lib/disc-questions';
import type { DiscFator, DiscRespostas } from '@/lib/types';
import { GhostButton } from '../ui';

export function Step5Disc({
  respostas,
  onAnswer
}: {
  respostas: DiscRespostas;
  onAnswer: (perguntaId: string, fator: DiscFator) => void;
}) {
  const primeiraNaoRespondida = useMemo(() => {
    const idx = DISC_QUESTIONS.findIndex((p) => !respostas[p.id]);
    return idx === -1 ? 0 : idx;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const [indice, setIndice] = useState(primeiraNaoRespondida);
  const pergunta = DISC_QUESTIONS[indice];
  const total = DISC_QUESTIONS.length;
  const respondidas = Object.keys(respostas).length;

  function selecionar(fator: DiscFator) {
    onAnswer(pergunta.id, fator);
    if (indice < total - 1) {
      setTimeout(() => setIndice((i) => Math.min(i + 1, total - 1)), 180);
    }
  }

  return (
    <div>
      <div className="mb-6 rounded-xl bg-neutral-50 p-4 text-xs leading-relaxed text-neutral-500">
        Este é um teste de <strong>perfil comportamental</strong> para fins de processo seletivo — não se trata
        de um diagnóstico psicológico. Responda com a alternativa que mais se aproxima de como você realmente
        costuma agir, sem pensar muito em "qual seria a resposta certa".
      </div>

      <div className="mb-4 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wide text-neutral-500">
        <span>
          Pergunta {indice + 1} de {total}
        </span>
        <span>{respondidas}/{total} respondidas</span>
      </div>
      <div className="mb-6 flex gap-1">
        {DISC_QUESTIONS.map((p, i) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setIndice(i)}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              respostas[p.id] ? 'bg-drenesse-red' : i === indice ? 'bg-neutral-400' : 'bg-neutral-200'
            }`}
            aria-label={`Ir para pergunta ${i + 1}`}
          />
        ))}
      </div>

      <h3 className="font-display mb-5 text-lg font-bold leading-snug text-drenesse-ink">{pergunta.texto}</h3>

      <div className="space-y-3">
        {pergunta.opcoes.map((opcao) => {
          const selecionada = respostas[pergunta.id] === opcao.fator;
          return (
            <button
              key={opcao.id}
              type="button"
              onClick={() => selecionar(opcao.fator)}
              className={`flex w-full items-start gap-3 rounded-2xl border px-4 py-3.5 text-left text-sm transition ${
                selecionada
                  ? 'border-drenesse-red bg-drenesse-red/5 ring-2 ring-drenesse-red/20'
                  : 'border-neutral-200 bg-white hover:border-neutral-300'
              }`}
            >
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[11px] ${
                  selecionada ? 'border-drenesse-red bg-drenesse-red text-white' : 'border-neutral-300'
                }`}
              >
                {selecionada ? '✓' : ''}
              </span>
              <span className="text-neutral-700">{opcao.texto}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex justify-between">
        <GhostButton onClick={() => setIndice((i) => Math.max(0, i - 1))} disabled={indice === 0}>
          ← Anterior
        </GhostButton>
        <GhostButton
          onClick={() => setIndice((i) => Math.min(total - 1, i + 1))}
          disabled={indice === total - 1}
        >
          Próxima →
        </GhostButton>
      </div>
    </div>
  );
}
