'use client';

import type { PerguntaConfig } from '@/lib/vagas/types';
import { FieldLabel, SelectInput, SimNaoToggle, TextArea, TextInput } from '../ui';

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
    <div>
      <FieldLabel required={obrigatoria}>{pergunta.texto}</FieldLabel>
      {pergunta.tipo === 'simNao' && (
        <SimNaoToggle value={(valor as 'sim' | 'nao') || ''} onChange={onChange} />
      )}
      {pergunta.tipo === 'select' && (
        <SelectInput value={valor} onChange={onChange} options={pergunta.opcoes || []} />
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
