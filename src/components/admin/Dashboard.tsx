'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { CandidatoDetalhado } from '@/lib/candidato';
import { STATUS_COLOR, STATUS_LABEL, CLASSIFICACAO_COLOR } from '@/lib/status';
import { VAGAS, getVagaBySlug } from '@/lib/vagas';

type FiltroAderencia = 'todas' | 'Alta aderência' | 'Boa aderência' | 'Avaliar' | 'Baixa aderência';

const FILTROS_ADERENCIA: { id: FiltroAderencia; label: string }[] = [
  { id: 'todas', label: 'Todas' },
  { id: 'Alta aderência', label: 'Alta aderência' },
  { id: 'Boa aderência', label: 'Boa aderência' },
  { id: 'Avaliar', label: 'Avaliar' },
  { id: 'Baixa aderência', label: 'Baixa aderência' }
];

export function Dashboard() {
  const router = useRouter();
  const [candidatos, setCandidatos] = useState<CandidatoDetalhado[] | null>(null);
  const [erroCarregamento, setErroCarregamento] = useState('');
  const [busca, setBusca] = useState('');
  const [vagaSlug, setVagaSlug] = useState<string>(VAGAS[0]?.slug || '');
  const [filtroAderencia, setFiltroAderencia] = useState<FiltroAderencia>('todas');
  const [filtrosRapidosAtivos, setFiltrosRapidosAtivos] = useState<Record<string, boolean>>({});

  const vagaAtual = getVagaBySlug(vagaSlug);

  useEffect(() => {
    fetch('/api/admin/candidaturas')
      .then(async (r) => {
        if (r.status === 401) {
          router.push('/admin');
          return null;
        }
        const data = await r.json();
        if (!r.ok) {
          setErroCarregamento(data?.erro || 'Erro ao carregar candidatas.');
          return null;
        }
        return data;
      })
      .then((data) => data && setCandidatos(data.candidatos))
      .catch(() => setErroCarregamento('Falha de conexão ao carregar candidatas.'));
  }, [router]);

  const filtrados = useMemo(() => {
    if (!candidatos) return [];
    return candidatos.filter((c) => {
      if (VAGAS.length > 1 && vagaSlug && c.vagaSlug !== vagaSlug) return false;
      if (filtroAderencia !== 'todas' && c.scoreClassificacao !== filtroAderencia) return false;

      for (const filtro of vagaAtual?.filtrosRapidos || []) {
        if (filtrosRapidosAtivos[filtro.perguntaId] && c.respostas[filtro.perguntaId] !== filtro.valorEsperado) {
          return false;
        }
      }

      if (busca.trim()) {
        const q = busca.toLowerCase();
        if (!c.nomeCompleto.toLowerCase().includes(q) && !c.whatsapp.includes(q) && !c.email.toLowerCase().includes(q)) {
          return false;
        }
      }
      return true;
    });
  }, [candidatos, vagaSlug, vagaAtual, filtroAderencia, filtrosRapidosAtivos, busca]);

  async function sair() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin');
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-neutral-100">
      <header className="bg-drenesse-gradient px-6 py-6 text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/80">Painel do RH</p>
            <h1 className="font-display text-xl font-bold">
              {vagaAtual ? vagaAtual.cargo : 'Todas as vagas'}
            </h1>
          </div>
          <button
            onClick={sair}
            className="rounded-full bg-black/30 px-4 py-2 text-xs font-semibold backdrop-blur hover:bg-black/40"
          >
            Sair
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">
        {VAGAS.length > 1 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {VAGAS.map((v) => (
              <button
                key={v.slug}
                onClick={() => {
                  setVagaSlug(v.slug);
                  setFiltrosRapidosAtivos({});
                }}
                className={`rounded-full border px-4 py-2 text-xs font-bold transition ${
                  vagaSlug === v.slug
                    ? 'border-drenesse-ink bg-drenesse-ink text-white'
                    : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300'
                }`}
              >
                {v.cargo}
              </button>
            ))}
          </div>
        )}

        <div className="mb-6 rounded-2xl bg-white p-4 shadow-card sm:p-5">
          <input
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar por nome, e-mail ou WhatsApp..."
            className="mb-4 w-full rounded-xl border border-neutral-300 px-4 py-2.5 text-sm outline-none focus:border-drenesse-red focus:ring-4 focus:ring-drenesse-red/10"
          />

          <div className="mb-3 flex flex-wrap gap-2">
            {FILTROS_ADERENCIA.map((f) => (
              <button
                key={f.id}
                onClick={() => setFiltroAderencia(f.id)}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition ${
                  filtroAderencia === f.id
                    ? 'border-drenesse-red bg-drenesse-red text-white'
                    : 'border-neutral-200 text-neutral-600 hover:border-neutral-300'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {(vagaAtual?.filtrosRapidos?.length || 0) > 0 && (
            <div className="flex flex-wrap gap-3 text-xs text-neutral-600">
              {vagaAtual!.filtrosRapidos!.map((filtro) => (
                <label key={filtro.perguntaId} className="flex items-center gap-1.5">
                  <input
                    type="checkbox"
                    checked={!!filtrosRapidosAtivos[filtro.perguntaId]}
                    onChange={(e) =>
                      setFiltrosRapidosAtivos((f) => ({ ...f, [filtro.perguntaId]: e.target.checked }))
                    }
                    className="accent-drenesse-red"
                  />
                  {filtro.label}
                </label>
              ))}
            </div>
          )}
        </div>

        {erroCarregamento && (
          <p className="rounded-2xl bg-red-50 p-6 text-center text-sm font-medium text-drenesse-red shadow-card">
            {erroCarregamento}
          </p>
        )}

        {!candidatos && !erroCarregamento && (
          <p className="text-center text-sm text-neutral-400">Carregando candidatas...</p>
        )}

        {candidatos && filtrados.length === 0 && (
          <p className="rounded-2xl bg-white p-10 text-center text-sm text-neutral-400 shadow-card">
            Nenhuma candidata encontrada com os filtros selecionados.
          </p>
        )}

        <div className="space-y-3">
          {filtrados.map((c) => {
            const vagaDaCandidata = getVagaBySlug(c.vagaSlug);
            return (
              <button
                key={c.id}
                onClick={() => router.push(`/admin/dashboard/${c.id}`)}
                className="flex w-full flex-col gap-3 rounded-2xl bg-white p-5 text-left shadow-card transition hover:-translate-y-0.5 hover:shadow-lg sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-base font-bold text-drenesse-ink">{c.nomeCompleto}</h3>
                    <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${STATUS_COLOR[c.status]}`}>
                      {STATUS_LABEL[c.status]}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-neutral-500">
                    {new Date(c.criadoEm).toLocaleDateString('pt-BR')} · {c.whatsapp} · {c.email}
                    {VAGAS.length > 1 && <> · {c.vagaCargo}</>}
                  </p>
                  {(vagaDaCandidata?.filtrosRapidos?.length || 0) > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1.5 text-[11px] text-neutral-500">
                      {vagaDaCandidata!.filtrosRapidos!.map((f) => (
                        <Tag key={f.perguntaId} ativo={c.respostas[f.perguntaId] === f.valorEsperado}>
                          {f.label.replace(/^Com experiência em |^Dispon[íi]vel /i, '')}
                        </Tag>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex shrink-0 items-center gap-4 sm:flex-col sm:items-end sm:gap-1.5">
                  <div
                    className={`rounded-full border px-3 py-1 text-xs font-bold ${CLASSIFICACAO_COLOR[c.scoreClassificacao]}`}
                  >
                    {c.scoreTotal} · {c.scoreClassificacao}
                  </div>
                  <p className="text-[11px] text-neutral-400">
                    D{c.discPercentual.D} I{c.discPercentual.I} S{c.discPercentual.S} C{c.discPercentual.C}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </main>
    </div>
  );
}

function Tag({ ativo, children }: { ativo: boolean; children: React.ReactNode }) {
  return (
    <span className={`rounded-full px-2 py-0.5 ${ativo ? 'bg-drenesse-red/10 text-drenesse-red' : 'bg-neutral-100 text-neutral-400'}`}>
      {children}
    </span>
  );
}
