import { redirect } from 'next/navigation';
import { estaAutenticado } from '@/lib/auth';
import { CandidateDetail } from '@/components/admin/CandidateDetail';

export default async function CandidateDetailPage({ params }: { params: Promise<{ id: string }> }) {
  if (!(await estaAutenticado())) {
    redirect('/admin');
  }

  const { id } = await params;
  return <CandidateDetail id={id} />;
}
