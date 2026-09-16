'use client';

import type { DadosPessoais } from '@/lib/types';
import { FieldLabel, TextInput } from '../ui';

export function Step1Dados({
  dados,
  onChange
}: {
  dados: DadosPessoais;
  onChange: (patch: Partial<DadosPessoais>) => void;
}) {
  return (
    <div className="space-y-5">
      <div>
        <FieldLabel required>Nome completo</FieldLabel>
        <TextInput value={dados.nomeCompleto} onChange={(v) => onChange({ nomeCompleto: v })} placeholder="Seu nome completo" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <FieldLabel required>WhatsApp</FieldLabel>
          <TextInput value={dados.whatsapp} onChange={(v) => onChange({ whatsapp: v })} placeholder="(84) 99999-9999" type="tel" />
        </div>
        <div>
          <FieldLabel required>E-mail</FieldLabel>
          <TextInput value={dados.email} onChange={(v) => onChange({ email: v })} placeholder="voce@email.com" type="email" />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <FieldLabel required>Cidade</FieldLabel>
          <TextInput value={dados.cidade} onChange={(v) => onChange({ cidade: v })} placeholder="Natal" />
        </div>
        <div>
          <FieldLabel required>Bairro</FieldLabel>
          <TextInput value={dados.bairro} onChange={(v) => onChange({ bairro: v })} placeholder="Seu bairro" />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <FieldLabel required>Idade</FieldLabel>
          <TextInput value={dados.idade} onChange={(v) => onChange({ idade: v })} placeholder="Ex: 32" type="number" />
        </div>
        <div>
          <FieldLabel>LinkedIn (opcional)</FieldLabel>
          <TextInput value={dados.linkedin || ''} onChange={(v) => onChange({ linkedin: v })} placeholder="linkedin.com/in/seu-perfil" />
        </div>
      </div>
    </div>
  );
}
