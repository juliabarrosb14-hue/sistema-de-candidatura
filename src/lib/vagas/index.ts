import type { VagaConfig } from './types';
import { supervisoraComercial } from './supervisora-comercial';

/**
 * Registro de todas as vagas ativas. Para publicar uma vaga nova, crie um novo
 * arquivo neste diretório exportando um VagaConfig e adicione-o aqui — nenhum
 * outro código precisa mudar (formulário, DISC, score e painel do RH são
 * genéricos e leem tudo a partir desta configuração).
 */
export const VAGAS: VagaConfig[] = [supervisoraComercial];

export function getVagaBySlug(slug: string): VagaConfig | undefined {
  return VAGAS.find((v) => v.slug === slug);
}

export const LGPD_TEXTO_PADRAO = (empresa: string) =>
  `Autorizo a ${empresa} a utilizar os dados e documentos fornecidos nesta candidatura exclusivamente para fins de recrutamento e seleção, conforme sua política de privacidade.`;

export const MENSAGEM_FINAL_PADRAO = {
  titulo: '🎉 Candidatura enviada com sucesso!',
  corpo:
    'Recebemos suas informações e seu currículo. Nosso time de recrutamento analisará seu perfil e, caso haja aderência à oportunidade, entraremos em contato pelo WhatsApp ou e-mail informado.'
};

export type { VagaConfig, PerguntaConfig, FiltroRapidoConfig, TipoPergunta, SecaoPergunta } from './types';
