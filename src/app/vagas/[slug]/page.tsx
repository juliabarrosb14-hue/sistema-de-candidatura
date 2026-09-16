import { notFound } from 'next/navigation';
import { getVagaBySlug, VAGAS } from '@/lib/vagas';
import { CandidaturaApp } from '@/components/CandidaturaApp';

export function generateStaticParams() {
  return VAGAS.map((v) => ({ slug: v.slug }));
}

export default async function VagaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vaga = getVagaBySlug(slug);

  if (!vaga) notFound();

  return <CandidaturaApp vaga={vaga} />;
}
