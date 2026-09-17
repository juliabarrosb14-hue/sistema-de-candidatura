import { NextRequest, NextResponse } from 'next/server';
import { estaAutenticado } from '@/lib/auth';
import { buscarCandidatoPorId } from '@/lib/sheetsDb';
import { baixarCurriculoDoDrive } from '@/lib/drive';
import { GoogleConfigError } from '@/lib/appsScript';

// Baixar e decodificar um currículo maior pelo Apps Script pode levar vários
// segundos — o padrão da Vercel (10s) não é suficiente.
export const maxDuration = 60;

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await estaAutenticado())) {
    return NextResponse.json({ erro: 'Não autorizado.' }, { status: 401 });
  }

  try {
    const { id } = await params;
    const row = await buscarCandidatoPorId(id);
    if (!row?.curriculoJson) {
      return NextResponse.json({ erro: 'Currículo não encontrado.' }, { status: 404 });
    }

    const curriculo = JSON.parse(row.curriculoJson);
    const buffer = await baixarCurriculoDoDrive(curriculo.storedName);

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': curriculo.mimeType || 'application/octet-stream',
        'Content-Disposition': `attachment; filename="${curriculo.fileName}"`
      }
    });
  } catch (error) {
    if (error instanceof GoogleConfigError) {
      return NextResponse.json({ erro: error.message }, { status: 503 });
    }
    console.error('Erro ao baixar currículo:', error);
    return NextResponse.json({ erro: 'Arquivo não encontrado no Google Drive.' }, { status: 404 });
  }
}
