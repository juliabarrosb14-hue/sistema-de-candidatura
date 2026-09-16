import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display'
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body'
});

export const metadata: Metadata = {
  title: 'Vaga: Supervisora Comercial | Clínica Drenesse',
  description:
    'Estamos contratando Supervisora Comercial para a Clínica Drenesse em Natal/RN. Candidate-se e faça parte do nosso time.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} ${inter.variable} font-body bg-neutral-100 text-drenesse-ink`}>
        {children}
      </body>
    </html>
  );
}
