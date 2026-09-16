import { redirect } from 'next/navigation';
import { VAGAS } from '@/lib/vagas';
import { VagasList } from '@/components/VagasList';

export default function Page() {
  if (VAGAS.length === 1) {
    redirect(`/vagas/${VAGAS[0].slug}`);
  }

  return <VagasList vagas={VAGAS} />;
}
