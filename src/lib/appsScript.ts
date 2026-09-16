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

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Faz uma chamada ao Apps Script. Ocasionalmente o Google serve uma página de
 * erro genérica (HTML, não JSON) em vez da resposta real — normalmente
 * transitório. Nesses casos (e em falhas de rede) tentamos novamente uma vez;
 * uma resposta JSON válida com `ok: false` (erro de negócio real, ex.: token
 * incorreto) nunca é reexecutada.
 */
export async function chamarAppsScript<T extends RespostaAppsScript>(
  action: string,
  payload: Record<string, unknown> = {}
): Promise<T> {
  const { url, token } = getConfig();
  const tentativas = 2;

  let ultimoErro: Error | undefined;

  for (let tentativa = 1; tentativa <= tentativas; tentativa++) {
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
      ultimoErro = new Error(`Falha de conexão com o Google Apps Script: ${(err as Error).message}`);
      if (tentativa < tentativas) {
        await sleep(400);
        continue;
      }
      throw ultimoErro;
    }

    const texto = await res.text();
    let data: T;
    try {
      data = JSON.parse(texto);
    } catch {
      ultimoErro = new Error(`Resposta inesperada do Google Apps Script (HTTP ${res.status}): ${texto.slice(0, 300)}`);
      if (tentativa < tentativas) {
        await sleep(400);
        continue;
      }
      throw ultimoErro;
    }

    if (!data.ok) {
      // Erro de negócio real (token errado, candidata não encontrada, etc.) — não adianta tentar de novo.
      throw new Error(data.erro || 'Erro desconhecido no Google Apps Script.');
    }

    return data;
  }

  throw ultimoErro || new Error('Falha desconhecida ao chamar o Google Apps Script.');
}
