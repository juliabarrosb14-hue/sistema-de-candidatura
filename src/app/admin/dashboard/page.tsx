import { redirect } from 'next/navigation';
import { estaAutenticado } from '@/lib/auth';
import { Dashboard } from '@/components/admin/Dashboard';

export default async function DashboardPage() {
  if (!(await estaAutenticado())) {
    redirect('/admin');
  }

  return <Dashboard />;
}
