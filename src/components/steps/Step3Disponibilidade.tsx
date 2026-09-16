'use client';

import type { VagaConfig } from '@/lib/vagas/types';
import type { RespostasCandidato } from '@/lib/types';
import { FieldLabel, TextArea, TextInput } from '../ui';
import { PerguntaDinamica } from './PerguntaDinamica';

export function Step3Disponibilidade({
  vaga,
  respostas,
  onChangeResposta,
  pretensaoSalarial,
  onChangePretensaoSalarial,
  porQueEmpresa,
  onChangePorQueEmpresa
}: {
  vaga: VagaConfig;
  respostas: RespostasCandidato;
  onChangeResposta: (id: string, valor: string) => void;
  pretensaoSalarial: string;
  onChangePretensaoSalarial: (v: string) => void;
  porQueEmpresa: string;
  onChangePorQueEmpresa: (v: string) => void;
}) {
  const perguntas = vaga.perguntas.filter((p) => p.secao === 'disponibilidade');

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        {perguntas.map((pergunta) => (
          <PerguntaDinamica
            key={pergunta.id}
            pergunta={pergunta}
            valor={respostas[pergunta.id] || ''}
            onChange={(v) => onChangeResposta(pergunta.id, v)}
          />
        ))}
      </div>

      <div className="h-px w-full bg-neutral-200" />

      <div className="space-y-6">
        <h3 className="font-display text-base font-bold text-drenesse-ink">Pretensão e motivação</h3>
        <div>
          <FieldLabel required>Qual sua pretensão salarial?</FieldLabel>
          <TextInput value={pretensaoSalarial} onChange={onChangePretensaoSalarial} placeholder="Ex: R$ 3.500,00" />
        </div>
        <div>
          <FieldLabel required>Por que você deseja trabalhar na {vaga.empresa}?</FieldLabel>
          <TextArea
            value={porQueEmpresa}
            onChange={onChangePorQueEmpresa}
            placeholder="Conte o que te motiva nessa oportunidade..."
          />
        </div>
      </div>
    </div>
  );
}
