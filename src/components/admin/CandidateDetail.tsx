'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { CandidatoDetalhado } from '@/lib/candidato';
import { STATUS_LABEL, STATUS_OPCOES, CLASSIFICACAO_COLOR } from '@/lib/status';
import { DISC_FATOR_LABEL } from '@/lib/disc';
import { getVagaBySlug } from '@/lib/vagas';
import { Card, GhostButton, PrimaryButton, TextArea } from '@/components/ui';

const SIM_NAO_LABEL: Record<string, string> = { sim: 'Sim', nao: 'Não' };

function Field({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-wide text-neutral-400">{label}</p>
      <p className="whitespace-pre-wrap text-sm font-medium text-neutral-800">{value || '—'}</p>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Card className="p-6 sm:p-7">
      <h2 className="font-display mb-4 text-base font-bold text-drenesse-ink">{title}</h2>
      {children}
    </Card>
  );
}

export function CandidateDetail({ id }: { id: string }) {
  const router = useRouter();
  const [candidato, setCandidato] = useState<CandidatoDetalhado | null>(null);
  const [erroCarregamento, setErroCarregamento] = useState('');
  const [observacoes, setObservacoes] = useState('');
  const [salvando, setSalvando] = useState(false);
  const [salvo, setSalvo] = useState(false);

  useEffect(() => {
    fetch(`/api/admin/candidaturas/${id}`)
      .then(async (r) => {
        if (r.status === 401) {
          router.push('/admin');
          return null;
        }
        const data = await r.json();
        if (!r.ok) {
          setErroCarregamento(data?.erro || 'Erro ao carregar candidata.');
          return null;
        }
        return data;
      })
      .then((data) => {
        if (data?.candidato) {
          setCandidato(data.candidato);
          setObservacoes(data.candidato.observacoesRh || '');
        }
      })
      .catch(() => setErroCarregamento('Falha de conexão ao carregar candidata.'));
  }, [id, router]);

  async function atualizar(patch: Record<string, unknown>) {
    const res = await fetch(`/api/admin/candidaturas/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(patch)
    });
    const data = await res.json();
    if (data?.candidato) setCandidato(data.candidato);
  }

  async function salvarObservacoes() {
    setSalvando(true);
    await atualizar({ observacoesRh: observacoes });
    setSalvando(false);
    setSalvo(true);
    setTimeout(() => setSalvo(false), 2000);
  }

  if (erroCarregamento) {
    return (
      <div className="p-10 text-center text-sm font-medium text-drenesse-red">{erroCarregamento}</div>
    );
  }

  if (!candidato) {
    return <div className="p-10 text-center text-sm text-neutral-400">Carregando ficha da candidata...</div>;
  }

  const c = candidato;
  const vaga = getVagaBySlug(c.vagaSlug);
  const perguntasExperiencia = vaga?.perguntas.filter((p) => p.secao === 'experiencia') || [];
  const perguntasDisponibilidade = vaga?.perguntas.filter((p) => p.secao === 'disponibilidade') || [];

  function valorResposta(perguntaId: string, tipo: string) {
    const bruto = c.respostas[perguntaId];
    if (tipo === 'simNao') return SIM_NAO_LABEL[bruto] || bruto;
    return bruto;
  }

  return (
    <div className="min-h-screen bg-neutral-100 pb-16">
      <header className="bg-drenesse-gradient px-6 py-6 text-white">
        <div className="mx-auto max-w-4xl">
          <GhostButton onClick={() => router.push('/admin/dashboard')} className="mb-4 !border-white/30 !bg-white/10 !text-white">
            ← Voltar ao painel
          </GhostButton>
          <h1 className="font-display text-2xl font-bold">{c.nomeCompleto}</h1>
          <p className="text-xs text-white/80">
            {c.vagaCargo} · Candidatura em {new Date(c.criadoEm).toLocaleString('pt-BR')}
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-4xl space-y-5 px-6 py-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <Card className="p-6">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-neutral-400">
              Score de aderência à vaga
            </p>
            <div className="mt-2 flex items-end gap-3">
              <span className="font-display text-4xl font-extrabold text-drenesse-ink">{c.scoreTotal}</span>
              <span
                className={`mb-1 rounded-full border px-3 py-1 text-xs font-bold ${CLASSIFICACAO_COLOR[c.scoreClassificacao]}`}
              >
                {c.scoreClassificacao}
              </span>
            </div>
          </Card>

          <Card className="p-6">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-neutral-400">
              Status da candidatura
            </p>
            <select
              value={c.status}
              onChange={(e) => atualizar({ status: e.target.value })}
              className="w-full rounded-xl border border-neutral-300 px-3 py-2.5 text-sm font-semibold outline-none focus:border-drenesse-red"
            >
              {STATUS_OPCOES.map((s) => (
                <option key={s} value={s}>
                  {STATUS_LABEL[s]}
                </option>
              ))}
            </select>
          </Card>
        </div>

        <Section title="Dados pessoais">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Nome completo" value={c.nomeCompleto} />
            <Field label="WhatsApp" value={c.whatsapp} />
            <Field label="E-mail" value={c.email} />
            <Field label="Cidade / Bairro" value={`${c.cidade} / ${c.bairro}`} />
            <Field label="Idade" value={c.idade} />
            <Field label="LinkedIn" value={c.linkedin} />
          </div>
        </Section>

        <Section title="Experiência profissional">
          <div className="grid gap-4 sm:grid-cols-2">
            {perguntasExperiencia
              .filter((p) => p.tipo !== 'texto')
              .map((p) => (
                <Field key={p.id} label={p.texto} value={valorResposta(p.id, p.tipo)} />
              ))}
          </div>
          {perguntasExperiencia
            .filter((p) => p.tipo === 'texto')
            .map((p) => (
              <div key={p.id} className="mt-4">
                <Field label={p.texto} value={c.respostas[p.id]} />
              </div>
            ))}
        </Section>

        {perguntasDisponibilidade.length > 0 && (
          <Section title="Disponibilidade">
            <div className="grid gap-4 sm:grid-cols-2">
              {perguntasDisponibilidade
                .filter((p) => p.tipo !== 'texto')
                .map((p) => (
                  <Field key={p.id} label={p.texto} value={valorResposta(p.id, p.tipo)} />
                ))}
            </div>
            {perguntasDisponibilidade
              .filter((p) => p.tipo === 'texto')
              .map((p) => (
                <div key={p.id} className="mt-4">
                  <Field label={p.texto} value={c.respostas[p.id]} />
                </div>
              ))}
          </Section>
        )}

        <Section title="Pretensão e motivação">
          <div className="space-y-4">
            <Field label="Pretensão salarial" value={c.pretensaoSalarial} />
            <Field label={`Por que deseja trabalhar na ${vaga?.empresa || 'empresa'}`} value={c.porQueEmpresa} />
          </div>
        </Section>

        <Section title="Currículo">
          {c.curriculo ? (
            <a
              href={`/api/admin/curriculo/${c.id}`}
              className="inline-flex items-center gap-2 rounded-xl bg-neutral-50 px-4 py-3 text-sm font-semibold text-drenesse-red hover:bg-neutral-100"
            >
              📄 {c.curriculo.fileName}
              <span className="text-neutral-400">
                ({(c.curriculo.sizeBytes / 1024 / 1024).toFixed(2)} MB) — baixar
              </span>
            </a>
          ) : (
            <p className="text-sm text-neutral-400">Nenhum currículo anexado.</p>
          )}
        </Section>

        <Section title="Aderência comportamental ao perfil da vaga (DISC)">
          <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {(['D', 'I', 'S', 'C'] as const).map((f) => (
              <div key={f} className="rounded-xl bg-neutral-50 p-4 text-center">
                <p className="font-display text-2xl font-extrabold text-drenesse-red">{c.discPercentual[f]}%</p>
                <p className="text-[11px] font-semibold text-neutral-500">
                  {f} — {DISC_FATOR_LABEL[f]}
                </p>
              </div>
            ))}
          </div>
          <div className="rounded-xl bg-drenesse-red/5 p-4 text-sm leading-relaxed text-neutral-700">
            {c.discInterpretacao}
          </div>
          {vaga && (
            <p className="mt-3 text-[11px] leading-relaxed text-neutral-400">
              Perfil de referência para a vaga: D {vaga.discAlvo.D}%, I {vaga.discAlvo.I}%, S {vaga.discAlvo.S}%,
              C {vaga.discAlvo.C}%. Esta análise é uma ferramenta de apoio ao recrutamento e não deve ser
              utilizada como critério único de decisão.
            </p>
          )}
        </Section>

        <Section title="Observações do recrutador">
          <TextArea value={observacoes} onChange={setObservacoes} placeholder="Anote observações sobre esta candidata..." rows={4} />
          <div className="mt-3 flex items-center gap-3">
            <PrimaryButton onClick={salvarObservacoes} disabled={salvando}>
              {salvando ? 'Salvando...' : 'Salvar observações'}
            </PrimaryButton>
            {salvo && <span className="text-xs font-semibold text-emerald-600">Salvo com sucesso ✓</span>}
          </div>
        </Section>

        <p className="text-center text-[11px] text-neutral-400">
          Aceite de tratamento de dados (LGPD): {c.lgpdAceite ? 'Confirmado' : 'Não confirmado'}
        </p>
      </main>
    </div>
  );
}
