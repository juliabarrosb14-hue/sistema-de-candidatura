import type { VagaConfig } from './types';
import { supervisoraComercial } from './supervisora-comercial';
import { estagiariaEstetica } from './estagiaria-estetica';
import { esteticista } from './esteticista';
import { supervisoraSeniorEstetica } from './supervisora-senior-estetica';
import { coordenadoraOperacoes } from './coordenadora-operacoes';
import { supervisoraAtendimento } from './supervisora-atendimento';
import { recepcionista } from './recepcionista';
import { asg } from './asg';
import { sdr } from './sdr';
import { closer } from './closer';
import { socialSelling } from './social-selling';
import { gerenteAdministrativo } from './gerente-administrativo';
import { assistenteFinanceiro } from './assistente-financeiro';
import { assistenteDp } from './assistente-dp';
import { analistaRh } from './analista-rh';
import { customerSuccess } from './customer-success';
import { supervisorLogistica } from './supervisor-logistica';
import { estagiarioEngenhariaProducao } from './estagiario-engenharia-producao';
import { estagiarioDesenvolvimento } from './estagiario-desenvolvimento';
import { headMarketing } from './head-marketing';
import { designer } from './designer';
import { videomaker } from './videomaker';
import { socialMedia } from './social-media';

/**
 * Registro de todas as vagas ativas. Para publicar uma vaga nova, crie um novo
 * arquivo neste diretório exportando um VagaConfig e adicione-o aqui — nenhum
 * outro código precisa mudar (formulário, DISC, score e painel do RH são
 * genéricos e leem tudo a partir desta configuração).
 */
export const VAGAS: VagaConfig[] = [
  supervisoraComercial,
  estagiariaEstetica,
  esteticista,
  supervisoraSeniorEstetica,
  coordenadoraOperacoes,
  supervisoraAtendimento,
  recepcionista,
  asg,
  sdr,
  closer,
  socialSelling,
  gerenteAdministrativo,
  assistenteFinanceiro,
  assistenteDp,
  analistaRh,
  customerSuccess,
  supervisorLogistica,
  estagiarioEngenhariaProducao,
  estagiarioDesenvolvimento,
  headMarketing,
  designer,
  videomaker,
  socialMedia
];

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

export type {
  VagaConfig,
  PerguntaConfig,
  FiltroRapidoConfig,
  TipoPergunta,
  SecaoPergunta,
  CategoriaPergunta,
  PesosScore
} from './types';
