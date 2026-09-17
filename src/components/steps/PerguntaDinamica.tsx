'use client';

import type { PerguntaConfig } from '@/lib/vagas/types';
import { FieldLabel, MultiSelectInput, SelectInput, SimNaoToggle, TextArea, TextInput } from '../ui';

export function PerguntaDinamica({
  pergunta,
  valor,
  onChange
}: {
  pergunta: PerguntaConfig;
  valor: string;
  onChange: (v: string) => void;
}) {
  const obrigatoria = pergunta.obrigatoria !== false;

  return (
    <div className={pergunta.ehCase ? 'rounded-2xl border border-drenesse-red/20 bg-drenesse-red/5 p-4' : undefined}>
      {pergunta.ehCase && (
        <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-drenesse-red px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
          Situação prática
        </span>
      )}
      <FieldLabel required={obrigatoria}>{pergunta.texto}</FieldLabel>
      {pergunta.tipo === 'simNao' && (
        <SimNaoToggle value={(valor as 'sim' | 'nao') || ''} onChange={onChange} />
      )}
      {pergunta.tipo === 'select' && (
        <SelectInput value={valor} onChange={onChange} options={pergunta.opcoes || []} />
      )}
      {pergunta.tipo === 'multiSelect' && (
        <MultiSelectInput value={valor} onChange={onChange} options={pergunta.opcoes || []} />
      )}
      {pergunta.tipo === 'numero' && (
        <TextInput
          value={valor}
          onChange={(v) => onChange(v.replace(/[^0-9]/g, ''))}
          placeholder={pergunta.placeholder}
          type="number"
        />
      )}
      {pergunta.tipo === 'texto' && (
        <TextArea value={valor} onChange={onChange} placeholder={pergunta.placeholder} />
      )}
    </div>
  );
}
