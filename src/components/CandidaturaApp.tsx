'use client';

import { useState } from 'react';
import { ETAPAS_FORM } from '@/lib/vaga';
import { DISC_QUESTIONS } from '@/lib/disc-questions';
import type { CandidaturaPayload, DadosPessoais, DiscFator, RespostasCandidato } from '@/lib/types';
import type { VagaConfig } from '@/lib/vagas/types';
import { Landing } from './Landing';
import { SuccessScreen } from './SuccessScreen';
import { Card, GhostButton, PrimaryButton, ProgressBar } from './ui';
import { Step1Dados } from './steps/Step1Dados';
import { Step2Experiencia } from './steps/Step2Experiencia';
import { Step3Disponibilidade } from './steps/Step3Disponibilidade';
import { Step4Curriculo } from './steps/Step4Curriculo';
import { Step5Disc } from './steps/Step5Disc';
import { Step6Finalizacao } from './steps/Step6Finalizacao';

const DADOS_INICIAL: DadosPessoais = {
  nomeCompleto: '',
  whatsapp: '',
  email: '',
  cidade: '',
  bairro: '',
  idade: '',
  linkedin: ''
};

type View = 'landing' | 'form' | 'success';

export function CandidaturaApp({ vaga }: { vaga: VagaConfig }) {
  const [view, setView] = useState<View>('landing');
  const [step, setStep] = useState(1);
  const [dados, setDados] = useState(DADOS_INICIAL);
  const [respostas, setRespostas] = useState<RespostasCandidato>({});
  const [pretensaoSalarial, setPretensaoSalarial] = useState('');
  const [porQueEmpresa, setPorQueEmpresa] = useState('');
  const [discRespostas, setDiscRespostas] = useState<Record<string, DiscFator>>({});
  const [arquivo, setArquivo] = useState<File | null>(null);
  const [lgpdAceite, setLgpdAceite] = useState(false);
  const [erro, setErro] = useState('');
  const [enviando, setEnviando] = useState(false);

  function onChangeResposta(id: string, valor: string) {
    setRespostas((r) => ({ ...r, [id]: valor }));
  }

  function validarEtapaAtual(): string | null {
    if (step === 1) {
      if (!dados.nomeCompleto.trim()) return 'Informe seu nome completo.';
      if (!dados.whatsapp.trim()) return 'Informe seu WhatsApp.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(dados.email)) return 'Informe um e-mail válido.';
      if (!dados.cidade.trim()) return 'Informe sua cidade.';
      if (!dados.bairro.trim()) return 'Informe seu bairro.';
      if (!dados.idade.trim()) return 'Informe sua idade.';
    }
    if (step === 2) {
      for (const p of vaga.perguntas.filter((q) => q.secao === 'experiencia')) {
        if (p.obrigatoria === false) continue;
        if (!respostas[p.id]?.trim()) return `Responda: "${p.texto}"`;
      }
    }
    if (step === 3) {
      for (const p of vaga.perguntas.filter((q) => q.secao === 'disponibilidade')) {
        if (p.obrigatoria === false) continue;
        if (!respostas[p.id]?.trim()) return `Responda: "${p.texto}"`;
      }
      if (!pretensaoSalarial.trim()) return 'Informe sua pretensão salarial.';
      if (!porQueEmpresa.trim()) return `Conte por que deseja trabalhar na ${vaga.empresa}.`;
    }
    if (step === 5) {
      if (Object.keys(discRespostas).length < DISC_QUESTIONS.length) {
        return 'Responda todas as perguntas do perfil comportamental para continuar.';
      }
    }
    if (step === 6) {
      if (!lgpdAceite) return 'É necessário marcar o aceite de tratamento de dados (LGPD) para enviar.';
    }
    return null;
  }

  function avancar() {
    const msg = validarEtapaAtual();
    if (msg) {
      setErro(msg);
      return;
    }
    setErro('');
    setStep((s) => Math.min(6, s + 1));
  }

  function voltar() {
    setErro('');
    setStep((s) => Math.max(1, s - 1));
  }

  async function enviarCandidatura() {
    const msg = validarEtapaAtual();
    if (msg) {
      setErro(msg);
      return;
    }
    setEnviando(true);
    setErro('');

    const payload: CandidaturaPayload = {
      vagaSlug: vaga.slug,
      dadosPessoais: dados,
      respostas,
      pretensaoSalarial,
      porQueEmpresa,
      discRespostas,
      lgpdAceite
    };

    try {
      const formData = new FormData();
      formData.append('payload', JSON.stringify(payload));
      if (arquivo) formData.append('curriculo', arquivo);

      const res = await fetch('/api/candidaturas', { method: 'POST', body: formData });
      const data = await res.json();

      if (!res.ok) {
        setErro(data.erro || 'Não foi possível enviar sua candidatura. Tente novamente.');
        setEnviando(false);
        return;
      }

      setView('success');
    } catch {
      setErro('Falha de conexão. Verifique sua internet e tente novamente.');
    } finally {
      setEnviando(false);
    }
  }

  function reiniciar() {
    setView('landing');
    setStep(1);
    setDados(DADOS_INICIAL);
    setRespostas({});
    setPretensaoSalarial('');
    setPorQueEmpresa('');
    setDiscRespostas({});
    setArquivo(null);
    setLgpdAceite(false);
    setErro('');
  }

  if (view === 'landing') return <Landing vaga={vaga} onIniciar={() => setView('form')} />;
  if (view === 'success') return <SuccessScreen vaga={vaga} onFinalizar={reiniciar} />;

  return (
    <div className="min-h-screen bg-neutral-100 pb-28">
      <div className="bg-drenesse-gradient px-6 py-6 text-white">
        <div className="mx-auto max-w-2xl">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-white/80">
            {vaga.empresa} · {vaga.cargo}
          </p>
          <ProgressBar etapas={ETAPAS_FORM} atual={step} />
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-6 py-8">
        <Card className="p-6 sm:p-8">
          {step === 1 && <Step1Dados dados={dados} onChange={(p) => setDados((d) => ({ ...d, ...p }))} />}
          {step === 2 && (
            <Step2Experiencia vaga={vaga} respostas={respostas} onChange={onChangeResposta} />
          )}
          {step === 3 && (
            <Step3Disponibilidade
              vaga={vaga}
              respostas={respostas}
              onChangeResposta={onChangeResposta}
              pretensaoSalarial={pretensaoSalarial}
              onChangePretensaoSalarial={setPretensaoSalarial}
              porQueEmpresa={porQueEmpresa}
              onChangePorQueEmpresa={setPorQueEmpresa}
            />
          )}
          {step === 4 && <Step4Curriculo arquivo={arquivo} onChange={setArquivo} />}
          {step === 5 && (
            <Step5Disc
              respostas={discRespostas}
              onAnswer={(perguntaId, fator) =>
                setDiscRespostas((r) => ({ ...r, [perguntaId]: fator }))
              }
            />
          )}
          {step === 6 && (
            <Step6Finalizacao
              vaga={vaga}
              dadosPessoais={dados}
              arquivo={arquivo}
              lgpdAceite={lgpdAceite}
              onChangeLgpd={setLgpdAceite}
            />
          )}

          {erro && (
            <div className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-drenesse-red">{erro}</div>
          )}
        </Card>
      </div>

      <div className="fixed inset-x-0 bottom-0 border-t border-neutral-200 bg-white/95 px-6 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-2xl items-center justify-between gap-3">
          <GhostButton onClick={step === 1 ? () => setView('landing') : voltar}>
            {step === 1 ? 'Voltar à vaga' : '← Voltar'}
          </GhostButton>
          {step < 6 ? (
            <PrimaryButton onClick={avancar}>Avançar →</PrimaryButton>
          ) : (
            <PrimaryButton onClick={enviarCandidatura} disabled={enviando}>
              {enviando ? 'Enviando...' : 'Enviar candidatura'}
            </PrimaryButton>
          )}
        </div>
      </div>
    </div>
  );
}
