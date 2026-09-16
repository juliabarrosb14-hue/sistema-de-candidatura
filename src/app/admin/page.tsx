'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, FieldLabel, PrimaryButton, TextInput } from '@/components/ui';

export default function AdminLoginPage() {
  const router = useRouter();
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  async function entrar() {
    setCarregando(true);
    setErro('');
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ senha })
      });
      if (!res.ok) {
        const data = await res.json();
        setErro(data.erro || 'Não foi possível entrar.');
        setCarregando(false);
        return;
      }
      router.push('/admin/dashboard');
      router.refresh();
    } catch {
      setErro('Falha de conexão.');
      setCarregando(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-drenesse-gradient px-6">
      <Card className="w-full max-w-sm p-8">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-drenesse-red text-lg font-bold text-white">
            D
          </div>
          <h1 className="font-display text-lg font-bold text-drenesse-ink">Painel do RH</h1>
          <p className="text-xs text-neutral-400">Clínica Drenesse · Recrutamento</p>
        </div>

        <FieldLabel>Senha de acesso</FieldLabel>
        <TextInput value={senha} onChange={setSenha} placeholder="••••••••" type="password" />

        {erro && <p className="mt-3 text-sm font-medium text-drenesse-red">{erro}</p>}

        <PrimaryButton
          onClick={entrar}
          disabled={carregando || !senha}
          className="mt-5 w-full"
        >
          {carregando ? 'Entrando...' : 'Entrar'}
        </PrimaryButton>
      </Card>
    </div>
  );
}
