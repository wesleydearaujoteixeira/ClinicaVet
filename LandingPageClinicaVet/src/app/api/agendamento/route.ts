import { NextResponse } from "next/server";
import { agendamentoSchema } from "@/lib/schema";
import { prisma } from "@/lib/prisma";
import { enviarConfirmacao } from "@/lib/email";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Requisição inválida." },
      { status: 400 },
    );
  }

  const parsed = agendamentoSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Dados inválidos. Verifique os campos do formulário.",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 422 },
    );
  }

  const data = parsed.data;

  try {
    // 1. Salvar no banco de dados
    const agendamento = await prisma.agendamento.create({ data });

    // 2. Enviar confirmação automática (não bloqueia o sucesso se falhar)
    let confirmacaoEnviada = false;
    try {
      const result = await enviarConfirmacao(data);
      confirmacaoEnviada = result.sent;
    } catch (err) {
      console.error("[agendamento] Falha ao enviar confirmação:", err);
    }

    return NextResponse.json(
      { id: agendamento.id, confirmacaoEnviada },
      { status: 201 },
    );
  } catch (err) {
    console.error("[agendamento] Erro ao salvar:", err);
    return NextResponse.json(
      { error: "Não foi possível concluir o agendamento. Tente novamente." },
      { status: 500 },
    );
  }
}
