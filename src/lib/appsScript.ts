export class GoogleConfigError extends Error {}

function getConfig() {
  const url = process.env.APPS_SCRIPT_URL;
  const token = process.env.APPS_SCRIPT_TOKEN;

  if (!url || !token) {
    throw new GoogleConfigError(
      'Integração com o Google Apps Script incompleta. Defina APPS_SCRIPT_URL e APPS_SCRIPT_TOKEN ' +
        'no .env (veja o README para o passo a passo).'
    );
  }

  return { url, token };
}

interface RespostaAppsScript {
  ok: boolean;
  erro?: string;
  [key: string]: unknown;
}

export async function chamarAppsScript<T extends RespostaAppsScript>(
  action: string,
  payload: Record<string, unknown> = {}
): Promise<T> {
  const { url, token } = getConfig();

  let res: Response;
  try {
    res = await fetch(url, {
      method: 'POST',
      // text/plain evita preflight de CORS — o Apps Script lê o corpo como texto
      // e nós mesmos fazemos o JSON.parse do lado de lá.
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ token, action, ...payload }),
      redirect: 'follow'
    });
  } catch (err) {
    throw new Error(`Falha de conexão com o Google Apps Script: ${(err as Error).message}`);
  }

  const texto = await res.text();
  let data: T;
  try {
    data = JSON.parse(texto);
  } catch {
    throw new Error(`Resposta inesperada do Google Apps Script (HTTP ${res.status}): ${texto.slice(0, 300)}`);
  }

  if (!data.ok) {
    throw new Error(data.erro || 'Erro desconhecido no Google Apps Script.');
  }

  return data;
}
