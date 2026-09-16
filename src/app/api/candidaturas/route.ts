import { NextRequest, NextResponse } from 'next/server';
import { nanoid } from 'nanoid';
import { inserirCandidato } from '@/lib/sheetsDb';
import { enviarCurriculoParaDrive } from '@/lib/drive';
import { GoogleConfigError } from '@/lib/appsScript';
import { calcularPercentuaisDisc, validarRespostasDisc } from '@/lib/disc';
import { calcularScoreAderencia } from '@/lib/score';
import { RESUME_ACCEPTED_EXTENSIONS, validarCandidatura } from '@/lib/validation';
import { getVagaBySlug } from '@/lib/vagas';
import type { CandidaturaPayload, CandidatoRow, Curriculo } from '@/lib/types';

export const runtime = 'nodejs';

const MAX_SIZE_MB = Number(process.env.MAX_RESUME_SIZE_MB || 8);

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const payloadRaw = formData.get('payload');
    const curriculoFile = formData.get('curriculo') as File | null;

    if (!payloadRaw || typeof payloadRaw !== 'string') {
      return NextResponse.json({ erro: 'Dados da candidatura ausentes.' }, { status: 400 });
    }

    const payload = JSON.parse(payloadRaw) as CandidaturaPayload;

    const vaga = getVagaBySlug(payload.vagaSlug);
    if (!vaga) {
      return NextResponse.json({ erro: 'Vaga não encontrada.' }, { status: 404 });
    }

    const validacao = validarCandidatura(vaga, payload);
    if (!validacao.valido) {
      return NextResponse.json({ erro: validacao.erros[0], erros: validacao.erros }, { status: 400 });
    }

    if (!validarRespostasDisc(payload.discRespostas)) {
      return NextResponse.json({ erro: 'Responda todas as perguntas do perfil comportamental.' }, { status: 400 });
    }

    let curriculo: Curriculo | null = null;

    if (curriculoFile && curriculoFile.size > 0) {
      const ext = '.' + curriculoFile.name.split('.').pop()?.toLowerCase();
      if (!RESUME_ACCEPTED_EXTENSIONS.includes(ext)) {
        return NextResponse.json({ erro: 'Formato de currículo inválido. Envie PDF, DOC ou DOCX.' }, { status: 400 });
      }
      if (curriculoFile.size > MAX_SIZE_MB * 1024 * 1024) {
        return NextResponse.json({ erro: `O currículo excede o limite de ${MAX_SIZE_MB}MB.` }, { status: 400 });
      }

      const buffer = Buffer.from(await curriculoFile.arrayBuffer());
      const mimeType = curriculoFile.type || 'application/octet-stream';
      const driveFileId = await enviarCurriculoParaDrive(buffer, curriculoFile.name, mimeType);

      curriculo = {
        fileName: curriculoFile.name,
        storedName: driveFileId,
        sizeBytes: curriculoFile.size,
        mimeType
      };
    }

    const discPercentual = calcularPercentuaisDisc(payload.discRespostas);
    const score = calcularScoreAderencia(vaga, payload.respostas, payload.porQueEmpresa, discPercentual);

    const row: CandidatoRow = {
      id: nanoid(14),
      criadoEm: new Date().toISOString(),
      vagaSlug: vaga.slug,
      nomeCompleto: payload.dadosPessoais.nomeCompleto.trim(),
      whatsapp: payload.dadosPessoais.whatsapp.trim(),
      email: payload.dadosPessoais.email.trim(),
      cidade: payload.dadosPessoais.cidade.trim(),
      bairro: payload.dadosPessoais.bairro.trim(),
      idade: payload.dadosPessoais.idade.trim(),
      linkedin: payload.dadosPessoais.linkedin?.trim() || null,
      respostasJson: JSON.stringify(payload.respostas),
      pretensaoSalarial: payload.pretensaoSalarial.trim(),
      porQueEmpresa: payload.porQueEmpresa.trim(),
      discPercentualJson: JSON.stringify(discPercentual),
      curriculoJson: curriculo ? JSON.stringify(curriculo) : null,
      scoreTotal: score.total,
      scoreClassificacao: score.classificacao,
      status: 'NOVO',
      observacoesRh: null,
      lgpdAceite: payload.lgpdAceite ? 1 : 0
    };

    await inserirCandidato(row);

    return NextResponse.json({ ok: true, id: row.id });
  } catch (error) {
    if (error instanceof GoogleConfigError) {
      console.error(error.message);
      return NextResponse.json(
        { erro: 'O sistema de candidaturas está temporariamente indisponível. Tente novamente em instantes.' },
        { status: 503 }
      );
    }
    console.error('Erro ao processar candidatura:', error);
    return NextResponse.json({ erro: 'Erro inesperado ao processar sua candidatura.' }, { status: 500 });
  }
}
