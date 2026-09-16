import { NextRequest, NextResponse } from 'next/server';
import { criarSessaoAdmin, validarSenhaAdmin } from '@/lib/auth';

export async function POST(req: NextRequest) {
  const { senha } = await req.json();

  if (!validarSenhaAdmin(senha || '')) {
    return NextResponse.json({ erro: 'Senha incorreta.' }, { status: 401 });
  }

  await criarSessaoAdmin();
  return NextResponse.json({ ok: true });
}
