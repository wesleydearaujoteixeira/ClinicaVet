import { Resend } from "resend";
import { CLINIC } from "./constants";
import type { AgendamentoInput } from "./schema";

/**
 * Envia o e-mail de confirmação de agendamento.
 *
 * O envio é "graceful": se RESEND_API_KEY não estiver configurada, a função
 * apenas registra a confirmação no log e retorna sucesso, permitindo que o
 * fluxo de agendamento continue funcionando em desenvolvimento.
 */
export async function enviarConfirmacao(data: AgendamentoInput) {
  const apiKey = process.env.RESEND_API_KEY;
  const dataFormatada = formatarData(data.data);

  const texto = `Olá, ${data.nome}.

Seu agendamento foi realizado com sucesso.

Pet: ${data.pet}
Data: ${dataFormatada}
Horário: ${data.horario}

Em caso de dúvidas entre em contato conosco.

${CLINIC.name}
${CLINIC.phoneDisplay}`;

  if (!apiKey) {
    console.info(
      "[email] RESEND_API_KEY ausente — confirmação não enviada por e-mail.\n" +
        texto,
    );
    return { sent: false as const };
  }

  const resend = new Resend(apiKey);

  await resend.emails.send({
    from: process.env.RESEND_FROM ?? "Clinica VetVida <onboarding@resend.dev>",
    to: data.email,
    subject: `Confirmação de agendamento — ${CLINIC.name}`,
    text: texto,
    html: gerarHtml(data, dataFormatada),
  });

  return { sent: true as const };
}

function gerarHtml(data: AgendamentoInput, dataFormatada: string) {
  return `
  <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 560px; margin: 0 auto; background:#f8fafc; padding: 32px;">
    <div style="background:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 4px 24px rgba(15,23,42,.06);">
      <div style="background:#2563EB; padding:28px 32px;">
        <h1 style="margin:0; color:#fff; font-size:20px;">${CLINIC.name}</h1>
        <p style="margin:4px 0 0; color:#dbeafe; font-size:13px;">Confirmação de agendamento</p>
      </div>
      <div style="padding:32px;">
        <p style="font-size:16px; color:#0f172a;">Olá, <strong>${data.nome}</strong>.</p>
        <p style="font-size:15px; color:#334155;">Seu agendamento foi realizado com sucesso. 🐾</p>
        <table style="width:100%; border-collapse:collapse; margin:24px 0;">
          <tr><td style="padding:10px 0; color:#64748b;">Pet</td><td style="padding:10px 0; text-align:right; color:#0f172a; font-weight:600;">${data.pet}</td></tr>
          <tr><td style="padding:10px 0; color:#64748b; border-top:1px solid #e2e8f0;">Data</td><td style="padding:10px 0; text-align:right; color:#0f172a; font-weight:600; border-top:1px solid #e2e8f0;">${dataFormatada}</td></tr>
          <tr><td style="padding:10px 0; color:#64748b; border-top:1px solid #e2e8f0;">Horário</td><td style="padding:10px 0; text-align:right; color:#0f172a; font-weight:600; border-top:1px solid #e2e8f0;">${data.horario}</td></tr>
        </table>
        <p style="font-size:14px; color:#64748b;">Em caso de dúvidas entre em contato conosco pelo telefone ${CLINIC.phoneDisplay}.</p>
      </div>
    </div>
  </div>`;
}

function formatarData(iso: string) {
  const [ano, mes, dia] = iso.split("-");
  if (!ano || !mes || !dia) return iso;
  return `${dia}/${mes}/${ano}`;
}
