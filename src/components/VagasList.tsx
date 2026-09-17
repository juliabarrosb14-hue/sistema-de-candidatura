import Link from 'next/link';
import type { VagaConfig } from '@/lib/vagas/types';
import { Card } from './ui';

const PRINCIPIOS_CARREIRA = [
  {
    titulo: 'Crescimento por mérito',
    texto: 'A promoção não acontece só pelo tempo de casa; exige evolução compatível com o próximo nível.'
  },
  {
    titulo: 'Tempo não garante promoção',
    texto: 'Cumprir o tempo mínimo só torna o colaborador elegível à avaliação — não gera promoção automática.'
  },
  {
    titulo: 'Critérios objetivos',
    texto: 'Toda promoção é baseada em critérios pré-definidos por cargo e nível.'
  },
  {
    titulo: 'Desenvolvimento contínuo',
    texto: 'Carreira é um processo contínuo, não apenas uma mudança salarial.'
  },
  {
    titulo: 'Equidade',
    texto: 'Mesmo cargo e nível = mesmos critérios de avaliação, respeitadas as particularidades da função.'
  },
  {
    titulo: 'Resultado + comportamento',
    texto: 'Bom resultado sozinho não promove; entram também competência, comportamento, cultura e conhecimento.'
  }
];

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

        <Card className="mt-10 overflow-hidden">
          <div className="bg-drenesse-gradient p-6 text-white sm:p-8">
            <h2 className="font-display text-xl font-bold sm:text-2xl">Plano de Carreira Drenesse</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/90">
              O valor exibido em cada vaga é o <strong>salário base</strong>. Aqui na Drenesse, o cargo em que
              você entra é só o começo — temos um plano de carreira estruturado, com critérios claros para
              cada evolução.
            </p>
          </div>
          <div className="grid gap-3 p-6 sm:grid-cols-2 sm:p-8">
            {PRINCIPIOS_CARREIRA.map((p) => (
              <div key={p.titulo} className="rounded-2xl bg-neutral-50 p-4">
                <p className="text-sm font-bold text-drenesse-ink">{p.titulo}</p>
                <p className="mt-1 text-sm leading-relaxed text-neutral-600">{p.texto}</p>
              </div>
            ))}
          </div>
        </Card>
      </main>

      <footer className="border-t border-neutral-200 bg-white py-6 text-center text-xs text-neutral-400">
        © {new Date().getFullYear()} Recrutamento e Seleção
      </footer>
    </div>
  );
}
