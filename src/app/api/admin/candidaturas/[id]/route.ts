import { NextRequest, NextResponse } from 'next/server';
import { estaAutenticado } from '@/lib/auth';
import { atualizarObservacoesCandidato, atualizarStatusCandidato, buscarCandidatoPorId } from '@/lib/sheetsDb';
import { paraDetalhado } from '@/lib/candidato';
import { GoogleConfigError } from '@/lib/appsScript';
import type { StatusCandidatura } from '@/lib/types';

const STATUS_VALIDOS: StatusCandidatura[] = [
  'NOVO',
  'EM_ANALISE',
  'APROVADO_ENTREVISTA',
  'REPROVADO',
  'CONTRATADO'
];

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await estaAutenticado())) {
    return NextResponse.json({ erro: 'Não autorizado.' }, { status: 401 });
  }

  try {
    const { id } = await params;
    const row = await buscarCandidatoPorId(id);
    if (!row) return NextResponse.json({ erro: 'Candidata não encontrada.' }, { status: 404 });

    return NextResponse.json({ candidato: paraDetalhado(row) });
  } catch (error) {
    if (error instanceof GoogleConfigError) {
      return NextResponse.json({ erro: error.message }, { status: 503 });
    }
    console.error('Erro ao buscar candidata:', error);
    return NextResponse.json({ erro: 'Erro ao carregar candidata.' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await estaAutenticado())) {
    return NextResponse.json({ erro: 'Não autorizado.' }, { status: 401 });
  }

  try {
    const { id } = await params;
    const row = await buscarCandidatoPorId(id);
    if (!row) return NextResponse.json({ erro: 'Candidata não encontrada.' }, { status: 404 });

    const body = await req.json();

    if (typeof body.status === 'string') {
      if (!STATUS_VALIDOS.includes(body.status)) {
        return NextResponse.json({ erro: 'Status inválido.' }, { status: 400 });
      }
      await atualizarStatusCandidato(id, body.status);
    }

    if (typeof body.observacoesRh === 'string') {
      await atualizarObservacoesCandidato(id, body.observacoesRh);
    }

    const atualizado = await buscarCandidatoPorId(id);
    return NextResponse.json({ candidato: paraDetalhado(atualizado!) });
  } catch (error) {
    if (error instanceof GoogleConfigError) {
      return NextResponse.json({ erro: error.message }, { status: 503 });
    }
    console.error('Erro ao atualizar candidata:', error);
    return NextResponse.json({ erro: 'Erro ao atualizar candidata.' }, { status: 500 });
  }
}
