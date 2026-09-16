'use client';

import type { VagaConfig } from '@/lib/vagas/types';
import type { RespostasCandidato } from '@/lib/types';
import { PerguntaDinamica } from './PerguntaDinamica';

export function Step2Experiencia({
  vaga,
  respostas,
  onChange
}: {
  vaga: VagaConfig;
  respostas: RespostasCandidato;
  onChange: (id: string, valor: string) => void;
}) {
  const perguntas = vaga.perguntas.filter((p) => p.secao === 'experiencia');

  return (
    <div className="space-y-6">
      {perguntas.map((pergunta) => (
        <PerguntaDinamica
          key={pergunta.id}
          pergunta={pergunta}
          valor={respostas[pergunta.id] || ''}
          onChange={(v) => onChange(pergunta.id, v)}
        />
      ))}
    </div>
  );
}
