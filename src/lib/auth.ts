import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const COOKIE_NAME = 'drenesse_admin_session';

function getSecret() {
  const secret = process.env.SESSION_SECRET || 'dev-secret-troque-em-producao';
  return new TextEncoder().encode(secret);
}

export async function criarSessaoAdmin() {
  const token = await new SignJWT({ role: 'admin' })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('12h')
    .sign(getSecret());

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 12
  });
}

export async function encerrarSessaoAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export async function estaAutenticado(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return false;
  try {
    await jwtVerify(token, getSecret());
    return true;
  } catch {
    return false;
  }
}

export function validarSenhaAdmin(senha: string): boolean {
  const senhaCorreta = process.env.ADMIN_PASSWORD || 'drenesse2026';
  return senha === senhaCorreta;
}
