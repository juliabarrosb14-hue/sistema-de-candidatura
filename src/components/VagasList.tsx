import Link from 'next/link';
import type { VagaConfig } from '@/lib/vagas/types';
import { Card } from './ui';
import { PlanoCarreira } from './PlanoCarreira';

const RESUMO_MAX_CARACTERES = 130;

function resumoDuasFrases(texto: string): string {
  const frases = texto.match(/[^.!?]+[.!?]+/g) || [texto];
  const resumo = frases.slice(0, 2).join(' ').trim();

  if (resumo.length <= RESUMO_MAX_CARACTERES) return resumo;

  const cortado = resumo.slice(0, RESUMO_MAX_CARACTERES);
  const ultimoEspaco = cortado.lastIndexOf(' ');
  return `${cortado.slice(0, ultimoEspaco > 0 ? ultimoEspaco : RESUMO_MAX_CARACTERES)}…`;
}

export function VagasList({ vagas }: { vagas: VagaConfig[] }) {
  return (
    <div className="min-h-screen bg-neutral-100">
      <header className="bg-drenesse-gradient px-6 py-12 text-center text-white sm:py-16">
        <h1 className="font-display text-4xl font-medium leading-[1.05] sm:text-5xl">
          Estamos
          <br />
          <span className="font-extrabold">Contratando</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm text-white/90 sm:text-base">
          Confira as vagas abertas e candidate-se em poucos minutos.
        </p>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-10 sm:py-14">
        <div className="space-y-4">
          {vagas.map((vaga) => (
            <Link key={vaga.slug} href={`/vagas/${vaga.slug}`}>
              <Card className="flex items-center justify-between gap-4 p-6 transition hover:-translate-y-0.5 hover:shadow-lg sm:p-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-drenesse-red">
                    {vaga.empresa} · {vaga.local}
                  </p>
                  <h2 className="font-display mt-1 text-xl font-bold text-drenesse-ink">{vaga.cargo}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                    {resumoDuasFrases(vaga.descricao[0])}
                  </p>
                </div>
                <span className="shrink-0 text-2xl text-drenesse-red">→</span>
              </Card>
            </Link>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-neutral-400">
          O valor exibido em cada vaga é o salário base — conheça o plano de carreira completo abaixo.
        </p>

        <PlanoCarreira />
      </main>

      <footer className="border-t border-neutral-200 bg-white py-6 text-center text-xs text-neutral-400">
        © {new Date().getFullYear()} Recrutamento e Seleção
      </footer>
    </div>
  );
}
