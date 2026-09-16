import type { CandidaturaPayload } from './types';
import type { VagaConfig } from './vagas/types';

export interface ValidacaoResultado {
  valido: boolean;
  erros: string[];
}

export function validarCandidatura(vaga: VagaConfig, payload: CandidaturaPayload): ValidacaoResultado {
  const erros: string[] = [];
  const dp = payload.dadosPessoais;

  if (!dp?.nomeCompleto?.trim()) erros.push('Nome completo é obrigatório.');
  if (!dp?.whatsapp?.trim()) erros.push('WhatsApp é obrigatório.');
  if (!dp?.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(dp.email)) {
    erros.push('E-mail válido é obrigatório.');
  }
  if (!dp?.cidade?.trim()) erros.push('Cidade é obrigatória.');
  if (!dp?.bairro?.trim()) erros.push('Bairro é obrigatório.');
  if (!dp?.idade?.trim()) erros.push('Idade é obrigatória.');

  const respostas = payload.respostas || {};
  for (const pergunta of vaga.perguntas) {
    if (pergunta.obrigatoria === false) continue;
    const resposta = respostas[pergunta.id];
    if (!resposta || !String(resposta).trim()) {
      erros.push(`Resposta obrigatória: "${pergunta.texto}"`);
    }
  }

  if (!payload.pretensaoSalarial?.trim()) erros.push('Informe sua pretensão salarial.');
  if (!payload.porQueEmpresa?.trim()) erros.push(`Conte por que deseja trabalhar na ${vaga.empresa}.`);

  if (!payload.lgpdAceite) erros.push('É necessário aceitar o termo de tratamento de dados (LGPD).');

  return { valido: erros.length === 0, erros };
}

export const RESUME_ACCEPTED_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];

export const RESUME_ACCEPTED_EXTENSIONS = ['.pdf', '.doc', '.docx'];
