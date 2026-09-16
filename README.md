# Drenesse · Captação e Triagem de Candidatos

Aplicativo web para divulgação de vagas, recebimento de candidaturas em formulário multi-etapas,
teste comportamental DISC, cálculo de score de aderência e painel do RH. Suporta **múltiplas vagas**
configuráveis por código — a "Supervisora Comercial" é a primeira vaga cadastrada, mas o formulário,
o teste DISC, o cálculo de score e o painel do RH são todos genéricos e funcionam para qualquer vaga
nova que você cadastrar.

## Como adicionar uma vaga nova

1. Crie um arquivo em `src/lib/vagas/` (ex: `recepcionista.ts`) exportando um objeto `VagaConfig` —
   copie `src/lib/vagas/supervisora-comercial.ts` como modelo e ajuste cargo, descrição, requisitos,
   remuneração, e a lista `perguntas` (cada pergunta define seção, tipo — sim/não, múltipla escolha,
   número ou texto — e como ela pontua no score de aderência).
2. Registre a vaga em `src/lib/vagas/index.ts`, adicionando o import ao array `VAGAS`.
3. Pronto — a vaga aparece automaticamente em `/vagas/<slug>` com formulário, DISC, score e no painel
   do RH (com filtros próprios, se você definir `filtrosRapidos` na config). Nenhum outro arquivo
   precisa ser tocado.

Peça para eu criar a config de uma vaga nova a qualquer momento, descrevendo o cargo, requisitos,
perguntas de triagem e remuneração — funciona como fiz para a Supervisora Comercial.

## Stack

- **Next.js 15** (App Router) + TypeScript + Tailwind CSS
- **Google Planilhas** como banco de dados principal (uma linha por candidata na aba `Candidatos`),
  acessado através de um **Google Apps Script** publicado como Web App — não usa Google Cloud
  Console, não usa Service Account e não exige cartão de crédito
- **Google Drive** (da mesma conta) para armazenar os currículos enviados
- Sem banco de dados local nem disco persistente — por isso funciona em hospedagens serverless
  como a **Vercel**, onde o sistema de arquivos não persiste entre execuções

Como não há armazenamento local, a configuração do Google Apps Script é **obrigatória** — sem ela, o
formulário de candidatura e o painel do RH não funcionam.

## Configurando o Google Apps Script (obrigatório, ~5 minutos, sem cartão)

1. Crie uma planilha nova e vazia no [Google Sheets](https://sheets.new) com a sua conta Google normal
   (pessoal ou do Workspace da clínica).
2. Nela, abra o menu **Extensões → Apps Script**.
3. Apague o conteúdo padrão do arquivo `Code.gs` que abrir e cole o conteúdo do arquivo
   [`google-apps-script/Code.gs`](google-apps-script/Code.gs) deste projeto.
4. Nesse código, troque a linha `const TOKEN = 'COLOQUE_AQUI_UM_TOKEN_SECRETO_LONGO';` por um segredo
   seu (qualquer texto longo e aleatório) — vai ser usado como senha entre o app e a planilha.
5. Clique em **Implantar → Nova implantação**. Escolha o tipo **"Aplicativo da Web"**, configure:
   - Executar como: **Eu** (seu e-mail)
   - Quem pode acessar: **Qualquer pessoa**
6. Clique em Implantar e autorize as permissões pedidas (é a sua própria conta, é gratuito e não
   passa pelo Google Cloud Console — só um aviso padrão de "app não verificado", clique em
   "Avançado" → "Acessar [nome do projeto] (não seguro)" para confirmar, é normal para scripts
   pessoais).
7. Copie a **URL do aplicativo da Web** gerada (algo como
   `https://script.google.com/macros/s/AKfycb.../exec`).
8. Preencha no `.env`:
   - `APPS_SCRIPT_URL` — a URL copiada no passo 7
   - `APPS_SCRIPT_TOKEN` — o mesmo segredo que você colocou no `TOKEN` do passo 4

O app cria sozinho a aba `Candidatos` (com cabeçalhos) e a pasta `Currículos - Drenesse` no seu
Google Drive na primeira candidatura recebida — nada mais precisa ser configurado manualmente na
planilha ou no Drive.

**Sempre que editar o `Code.gs`** (por exemplo, ao atualizar para uma versão nova deste projeto),
é preciso gerar uma nova versão: **Implantar → Gerenciar implantações → editar (ícone de lápis) →
Nova versão → Implantar**, senão a URL publicada continua rodando o código antigo.

## Como rodar localmente

```bash
npm install
cp .env.example .env
# edite o .env com a senha do painel e as credenciais do Google (passo acima)
npm run dev
```

Acesse:
- `http://localhost:3000` — página da vaga e formulário de candidatura
- `http://localhost:3000/admin` — painel do RH (senha definida em `ADMIN_PASSWORD` no `.env`)

## Variáveis de ambiente

Veja `.env.example` para o formato exato. Resumo:

- `ADMIN_PASSWORD` — senha de acesso ao painel do RH (troque o valor padrão antes de publicar)
- `SESSION_SECRET` — string aleatória longa usada para assinar a sessão do admin
- `MAX_RESUME_SIZE_MB` — limite de tamanho do currículo (padrão 8MB)
- `APPS_SCRIPT_URL` — URL do Web App do Google Apps Script (veja a seção acima)
- `APPS_SCRIPT_TOKEN` — segredo compartilhado entre o app e o Apps Script

## Publicando na Vercel

1. Suba este projeto para um repositório no GitHub (ou GitLab/Bitbucket).
2. Na Vercel, clique em "Add New… → Project" e importe o repositório.
3. Em "Environment Variables", adicione as mesmas variáveis do `.env` (`ADMIN_PASSWORD`,
   `SESSION_SECRET`, `APPS_SCRIPT_URL`, `APPS_SCRIPT_TOKEN`).
4. Clique em "Deploy". A Vercel gera uma URL pública (`https://seu-projeto.vercel.app`) que fica no ar
   permanentemente — esse é o link que pode ser compartilhado com candidatas e com o RH.

Como o banco de dados é a planilha do Google (via Apps Script) e os arquivos ficam no Google Drive,
não é preciso configurar nenhum disco ou volume persistente na Vercel.

## Lógica de negócio

- **Teste DISC** (`src/lib/disc-questions.ts` e `src/lib/disc.ts`): 24 perguntas contextualizadas para
  liderança comercial, cada uma com 4 alternativas mapeadas a D/I/S/C sem qualquer rótulo visível ao
  candidato. O resultado nunca é exibido à candidata — apenas ao RH, no painel administrativo.
- **Score de aderência** (`src/lib/score.ts`): combina experiência/competências (40 pts, conforme os
  pesos definidos nas `perguntas` da vaga), aderência ao perfil DISC de referência da vaga —
  `discAlvo`, configurável por vaga — (25 pts), experiência no segmento (10 pts, se a vaga definir
  `perguntaSegmentoId`), disponibilidade (10 pts) e qualidade das respostas abertas (15 pts).
  Classificação: Alta aderência (80-100), Boa aderência (60-79), Avaliar (40-59), Baixa aderência
  (0-39). É uma ferramenta de apoio — nunca reprova automaticamente uma candidata apenas pelo DISC.
- **LGPD**: o envio da candidatura só é permitido com o aceite explícito do termo de tratamento de
  dados.

## Painel do RH

- Lista de candidatas com busca, filtro por aderência e filtros rápidos específicos de cada vaga
  (definidos em `filtrosRapidos` na config da vaga — para a Supervisora Comercial, por exemplo:
  liderança, SDR, experiência em estética e disponibilidade de segunda a sábado).
- Quando há mais de uma vaga cadastrada, um seletor no topo do painel troca entre elas.
- Ficha individual com dados pessoais, todas as respostas do formulário (rotuladas com o texto exato
  da pergunta), currículo para download, resultado DISC com interpretação, score de aderência, campo
  de observações do recrutador e alteração de status (Novo, Em análise, Aprovado para entrevista,
  Reprovado, Contratado).

## Limites a ter em mente

- O Google Apps Script tem cotas de uso (por padrão, algumas centenas de requisições e ~6 minutos de
  execução por chamada em contas pessoais), suficientes para o volume esperado de um processo
  seletivo, mas não para tráfego em massa.
- Cada carregamento do painel do RH lê a planilha inteira — funciona bem até algumas centenas de
  candidatas; se o volume crescer muito, vale migrar para um banco de dados tradicional.
- O token em `APPS_SCRIPT_TOKEN` é a única proteção do endpoint do Apps Script (que fica com acesso
  "Qualquer pessoa" para poder ser chamado pelo servidor) — trate-o como uma senha e nunca o exponha
  no código do navegador (ele só é usado no servidor, nunca no lado do cliente).
