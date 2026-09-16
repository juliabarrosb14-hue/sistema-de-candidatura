'use client';

import type { ReactNode } from 'react';

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl bg-white shadow-card border border-black/5 ${className}`}>{children}</div>
  );
}

export function ArrowBullet({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-drenesse-red text-white text-[11px]">
        ›
      </span>
      <span className="text-sm leading-relaxed text-neutral-700">{children}</span>
    </li>
  );
}

export function PrimaryButton({
  children,
  onClick,
  type = 'button',
  disabled,
  className = ''
}: {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-drenesse-red px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition active:scale-[0.98] hover:bg-drenesse-redDark disabled:cursor-not-allowed disabled:opacity-40 ${className}`}
    >
      {children}
    </button>
  );
}

export function GhostButton({
  children,
  onClick,
  type = 'button',
  disabled,
  className = ''
}: {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3.5 text-sm font-semibold text-neutral-700 transition active:scale-[0.98] hover:border-neutral-400 disabled:cursor-not-allowed disabled:opacity-40 ${className}`}
    >
      {children}
    </button>
  );
}

export function FieldLabel({ children, required }: { children: ReactNode; required?: boolean }) {
  return (
    <label className="mb-1.5 block text-sm font-semibold text-neutral-800">
      {children} {required && <span className="text-drenesse-red">*</span>}
    </label>
  );
}

export function TextInput({
  value,
  onChange,
  placeholder,
  type = 'text'
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition focus:border-drenesse-red focus:ring-4 focus:ring-drenesse-red/10"
    />
  );
}

export function TextArea({
  value,
  onChange,
  placeholder,
  rows = 4
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      className="w-full resize-none rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition focus:border-drenesse-red focus:ring-4 focus:ring-drenesse-red/10"
    />
  );
}

export function SelectInput({
  value,
  onChange,
  options,
  placeholder
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder?: string;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition focus:border-drenesse-red focus:ring-4 focus:ring-drenesse-red/10"
    >
      <option value="" disabled>
        {placeholder || 'Selecione'}
      </option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}

export function SimNaoToggle({
  value,
  onChange
}: {
  value: 'sim' | 'nao' | '';
  onChange: (v: 'sim' | 'nao') => void;
}) {
  return (
    <div className="flex gap-3">
      {(['sim', 'nao'] as const).map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={`flex-1 rounded-xl border px-4 py-3 text-sm font-semibold transition ${
            value === opt
              ? 'border-drenesse-red bg-drenesse-red text-white shadow-glow'
              : 'border-neutral-300 bg-white text-neutral-600 hover:border-neutral-400'
          }`}
        >
          {opt === 'sim' ? 'Sim' : 'Não'}
        </button>
      ))}
    </div>
  );
}

export function ProgressBar({
  etapas,
  atual
}: {
  etapas: readonly { id: number; titulo: string }[];
  atual: number;
}) {
  return (
    <div className="w-full">
      <div className="mb-2 flex justify-between text-[11px] font-semibold uppercase tracking-wide text-neutral-500">
        <span>
          Etapa {atual} de {etapas.length}
        </span>
        <span>{etapas.find((e) => e.id === atual)?.titulo}</span>
      </div>
      <div className="flex h-2 w-full gap-1.5">
        {etapas.map((e) => (
          <div
            key={e.id}
            className={`h-full flex-1 rounded-full transition-colors ${
              e.id <= atual ? 'bg-drenesse-red' : 'bg-neutral-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
