'use client';

import type { VagaConfig } from '@/lib/vagas/types';
import { ArrowBullet, Card, PrimaryButton } from './ui';

export function Landing({ vaga, onIniciar }: { vaga: VagaConfig; onIniciar: () => void }) {
  return (
    <div className="min-h-screen bg-neutral-100">
      <header className="relative overflow-hidden bg-drenesse-gradient px-6 pb-16 pt-12 text-white sm:pb-20 sm:pt-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.25) 50%, transparent 60%)'
          }}
        />
        <div className="relative mx-auto max-w-3xl animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-black/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
            {vaga.empresa} · {vaga.local}
          </div>
          <h1 className="font-display text-4xl font-medium leading-[1.05] sm:text-5xl">
            Estamos
            <br />
            <span className="font-extrabold">Contratando</span>
          </h1>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-bold sm:text-base">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-drenesse-red text-[11px]">
              ›
            </span>
            {vaga.cargo.toUpperCase()}
          </div>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base">
            {vaga.descricao[0]}
          </p>

          <button
            onClick={onIniciar}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-2xl transition active:scale-[0.98] hover:bg-neutral-900 sm:text-base"
          >
            Quero me candidatar
            <span aria-hidden>→</span>
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-10 sm:py-14">
        {vaga.descricao[1] && (
          <Card className="mb-6 p-6 sm:p-8">
            <p className="text-sm leading-relaxed text-neutral-700 sm:text-base">{vaga.descricao[1]}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {vaga.unidades.map((u) => (
                <span
                  key={u}
                  className="rounded-full bg-neutral-100 px-3.5 py-1.5 text-xs font-semibold text-neutral-700"
                >
                  📍 {u}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs text-neutral-500">{vaga.horario}</p>
          </Card>
        )}

        <Card className="mb-6 p-6 sm:p-8">
          <h2 className="font-display mb-4 text-xl font-bold text-drenesse-ink">Principais responsabilidades</h2>
          <ul className="space-y-3">
            {vaga.responsabilidades.map((r) => (
              <ArrowBullet key={r}>{r}</ArrowBullet>
            ))}
          </ul>
        </Card>

        <div className="mb-6 grid gap-6 sm:grid-cols-2">
          <Card className="p-6 sm:p-8">
            <h2 className="font-display mb-4 text-xl font-bold text-drenesse-ink">Requisitos</h2>
            <ul className="space-y-3">
              {vaga.requisitos.map((r) => (
                <ArrowBullet key={r}>{r}</ArrowBullet>
              ))}
            </ul>
          </Card>
          <Card className="p-6 sm:p-8">
            <h2 className="font-display mb-4 text-xl font-bold text-drenesse-ink">Diferenciais</h2>
            <ul className="space-y-3">
              {vaga.diferenciais.map((r) => (
                <ArrowBullet key={r}>{r}</ArrowBullet>
              ))}
            </ul>
          </Card>
        </div>

        <Card className="mb-10 overflow-hidden">
          <div className="bg-drenesse-gradient p-6 text-white sm:p-8">
            <h2 className="font-display mb-1 text-xl font-bold">Remuneração e benefícios</h2>
            <p className="mb-5 text-xs uppercase tracking-wide text-white/80">Investimento na sua carreira</p>
            <div className="flex flex-wrap items-end gap-3">
              <span className="font-display text-4xl font-extrabold sm:text-5xl">
                {vaga.remuneracao.salarioBase}
              </span>
              {vaga.remuneracao.complemento && (
                <span className="pb-1 text-sm text-white/90">+ {vaga.remuneracao.complemento}</span>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 p-6 sm:grid-cols-4 sm:p-8">
            {vaga.beneficios.map((b) => (
              <div key={b} className="rounded-2xl bg-neutral-50 p-4 text-center">
                <p className="text-xs font-semibold leading-tight text-neutral-700">{b}</p>
              </div>
            ))}
          </div>
        </Card>

        <div className="text-center">
          <PrimaryButton onClick={onIniciar} className="px-10 py-4 text-base uppercase tracking-wide">
            Quero me candidatar
          </PrimaryButton>
          <p className="mt-3 text-xs text-neutral-400">Leva cerca de 8 minutos · Você pode fazer pelo celular</p>
        </div>
      </main>

      <footer className="border-t border-neutral-200 bg-white py-6 text-center text-xs text-neutral-400">
        © {new Date().getFullYear()} {vaga.empresa} · Recrutamento e Seleção
      </footer>
    </div>
  );
}
