'use client';

import type { VagaConfig } from '@/lib/vagas/types';
import type { DadosPessoais } from '@/lib/types';
import { LGPD_TEXTO_PADRAO } from '@/lib/vagas';

export function Step6Finalizacao({
  vaga,
  dadosPessoais,
  arquivo,
  lgpdAceite,
  onChangeLgpd
}: {
  vaga: VagaConfig;
  dadosPessoais: DadosPessoais;
  arquivo: File | null;
  lgpdAceite: boolean;
  onChangeLgpd: (v: boolean) => void;
}) {
  const resumo = [
    { label: 'Nome', valor: dadosPessoais.nomeCompleto },
    { label: 'WhatsApp', valor: dadosPessoais.whatsapp },
    { label: 'E-mail', valor: dadosPessoais.email },
    { label: 'Cidade / Bairro', valor: `${dadosPessoais.cidade} / ${dadosPessoais.bairro}` },
    { label: 'Currículo', valor: arquivo?.name || 'Não anexado' }
  ];

  return (
    <div className="space-y-6">
      <p className="text-sm text-neutral-600">
        Revise suas informações antes de enviar sua candidatura para <strong>{vaga.cargo}</strong> na{' '}
        {vaga.empresa}.
      </p>

      <div className="overflow-hidden rounded-2xl border border-neutral-200">
        {resumo.map((item, i) => (
          <div
            key={item.label}
            className={`flex items-center justify-between px-4 py-3 text-sm ${
              i % 2 === 0 ? 'bg-neutral-50' : 'bg-white'
            }`}
          >
            <span className="text-neutral-500">{item.label}</span>
            <span className="max-w-[60%] truncate text-right font-medium text-neutral-800">{item.valor}</span>
          </div>
        ))}
      </div>

      <label className="flex cursor-pointer items-start gap-3 rounded-2xl bg-neutral-50 p-4 text-xs leading-relaxed text-neutral-600">
        <input
          type="checkbox"
          checked={lgpdAceite}
          onChange={(e) => onChangeLgpd(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 accent-drenesse-red"
        />
        <span>
          <strong>Li e concordo.</strong> {vaga.lgpdTexto || LGPD_TEXTO_PADRAO(vaga.empresa)}
        </span>
      </label>
    </div>
  );
}
