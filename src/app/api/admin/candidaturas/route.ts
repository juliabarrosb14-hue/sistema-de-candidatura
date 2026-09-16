import { NextResponse } from 'next/server';
import { estaAutenticado } from '@/lib/auth';
import { listarCandidatos } from '@/lib/sheetsDb';
import { paraDetalhado } from '@/lib/candidato';
import { GoogleConfigError } from '@/lib/appsScript';

export async function GET() {
  if (!(await estaAutenticado())) {
    return NextResponse.json({ erro: 'Não autorizado.' }, { status: 401 });
  }

  try {
    const candidatos = (await listarCandidatos()).map(paraDetalhado);
    return NextResponse.json({ candidatos });
  } catch (error) {
    if (error instanceof GoogleConfigError) {
      return NextResponse.json({ erro: error.message }, { status: 503 });
    }
    console.error('Erro ao listar candidatos:', error);
    return NextResponse.json({ erro: 'Erro ao carregar candidatas.' }, { status: 500 });
  }
}
