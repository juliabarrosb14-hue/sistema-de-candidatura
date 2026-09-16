'use client';

import type { VagaConfig } from '@/lib/vagas/types';
import { MENSAGEM_FINAL_PADRAO } from '@/lib/vagas';
import { PrimaryButton } from './ui';

export function SuccessScreen({ vaga, onFinalizar }: { vaga: VagaConfig; onFinalizar: () => void }) {
  const mensagem = vaga.mensagemFinal || MENSAGEM_FINAL_PADRAO;

  return (
    <div className="flex min-h-screen items-center justify-center bg-drenesse-gradient px-6 py-16">
      <div className="animate-pop w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-card sm:p-10">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-drenesse-red/10 text-3xl">
          🎉
        </div>
        <h1 className="font-display mb-3 text-xl font-bold text-drenesse-ink sm:text-2xl">
          Candidatura enviada com sucesso!
        </h1>
        <p className="mb-8 text-sm leading-relaxed text-neutral-600">{mensagem.corpo}</p>
        <PrimaryButton onClick={onFinalizar} className="w-full">
          Finalizar
        </PrimaryButton>
      </div>
    </div>
  );
}
