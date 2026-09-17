import { Fragment } from 'react';

const PRINCIPIOS = [
  {
    icone: '📈',
    titulo: 'Crescimento por mérito',
    texto:
      'A sua evolução é reconhecida com base no seu desempenho, nas suas entregas e no impacto que você gera para o time e para a Drenesse.'
  },
  {
    icone: '⏱️',
    titulo: 'Tempo não garante promoção',
    texto:
      'Cumprir o tempo mínimo só torna o colaborador elegível à avaliação. A evolução acontece com base em resultados e competências.'
  },
  {
    icone: '🎯',
    titulo: 'Critérios objetivos',
    texto:
      'Toda promoção é baseada em critérios pré-definidos por cargo e nível, garantindo mais transparência, justiça e clareza para todos.'
  },
  {
    icone: '💡',
    titulo: 'Desenvolvimento contínuo',
    texto:
      'Temos trilhas de aprendizado, treinamentos e ferramentas para que você desenvolva suas habilidades e alcance o próximo nível com segurança.'
  },
  {
    icone: '👥',
    titulo: 'Equidade',
    texto: 'Mesmo cargo e nível = mesmos critérios de avaliação, respeitadas as particularidades de cada função e setor.'
  },
  {
    icone: '🏆',
    titulo: 'Resultado + comportamento',
    texto: 'Aqui, o que importa é o equilíbrio: resultado, competência, comportamento, cultura e conhecimento técnico.'
  }
];

const ETAPAS = [
  { nome: 'Estágio', niveis: 'I → IV', descricao: 'Aprendizado e autonomia', icone: '🎓' },
  { nome: 'Analista', niveis: 'I → II', descricao: 'Especialização e maior impacto', icone: '⭐' },
  { nome: 'Supervisão', niveis: 'I → IV', descricao: 'Liderança e gestão de pessoas', icone: '🧑‍💼' },
  { nome: 'Coordenação', niveis: 'I → IV', descricao: 'Gestão de operação e resultados', icone: '👑' },
  { nome: 'Gerência', niveis: 'I → IV', descricao: 'Visão estratégica e expansão', icone: '💎' }
];

const OPACIDADE_ETAPA = ['bg-drenesse-red/45', 'bg-drenesse-red/60', 'bg-drenesse-red/75', 'bg-drenesse-red/90', 'bg-drenesse-red'];

export function PlanoCarreira() {
  return (
    <section className="mt-10 overflow-hidden rounded-3xl border border-black/5 bg-white shadow-card">
      <div className="relative overflow-hidden bg-drenesse-gradient px-6 py-8 text-white sm:px-10 sm:py-10">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.25) 50%, transparent 60%)'
          }}
        />
        <div className="relative">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-black/30 px-3 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Plano de carreira
          </span>

          <div className="mt-4 grid gap-5 sm:grid-cols-[auto_1px_1fr] sm:items-center sm:gap-8">
            <h2 className="font-display text-2xl font-extrabold leading-tight sm:text-3xl">
              Seu desenvolvimento
              <br />
              <span className="italic font-semibold text-white/90">é o nosso próximo nível.</span>
            </h2>
            <div className="hidden h-16 w-px bg-white/25 sm:block" />
            <p className="max-w-md text-sm leading-relaxed text-white/90">
              Na Drenesse, o plano de carreira é estruturado com base em{' '}
              <strong className="font-bold">dados, métricas e critérios claros</strong> para que cada
              colaborador saiba exatamente o que precisa fazer para evoluir.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-3">
        {PRINCIPIOS.map((p) => (
          <div key={p.titulo} className="rounded-2xl border border-neutral-100 bg-neutral-50 p-5">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-drenesse-red/10 text-xl">
              {p.icone}
            </div>
            <p className="text-sm font-bold text-drenesse-ink">{p.titulo}</p>
            <div className="my-2 h-px w-6 bg-drenesse-red/40" />
            <p className="text-sm leading-relaxed text-neutral-600">{p.texto}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-neutral-100 bg-neutral-50/70 p-6 sm:p-8">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-lg font-bold text-drenesse-ink">📈 Sua evolução</p>
            <p className="text-xs text-neutral-500">É real, é possível, é com a gente.</p>
          </div>
          <p className="max-w-xs text-xs leading-relaxed text-neutral-500 sm:text-right">
            Cada etapa é um passo a mais na sua jornada com a Drenesse.
          </p>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2 sm:justify-between sm:gap-2 sm:overflow-visible">
          {ETAPAS.map((etapa, i) => (
            <Fragment key={etapa.nome}>
              <div className="flex w-[104px] shrink-0 flex-col items-center text-center sm:w-auto sm:flex-1">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-full text-xl text-white shadow-glow ${OPACIDADE_ETAPA[i]}`}
                >
                  {etapa.icone}
                </div>
                <p className="mt-2 text-xs font-bold uppercase tracking-wide text-drenesse-ink">{etapa.nome}</p>
                <p className="text-[10px] font-semibold text-drenesse-red">{etapa.niveis}</p>
                <p className="mt-1 text-[11px] leading-tight text-neutral-500">{etapa.descricao}</p>
              </div>
              {i < ETAPAS.length - 1 && <span className="mt-6 shrink-0 text-sm text-neutral-300">→</span>}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
