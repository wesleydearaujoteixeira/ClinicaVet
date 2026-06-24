import { z } from "zod";

export const especies = [
  "Cão",
  "Gato",
  "Ave",
  "Roedor",
  "Réptil",
  "Outro",
] as const;

export const agendamentoSchema = z.object({
  nome: z
    .string()
    .trim()
    .min(3, "Informe seu nome completo")
    .max(120, "Nome muito longo"),
  telefone: z
    .string()
    .trim()
    .min(10, "Telefone inválido")
    .max(20, "Telefone inválido")
    .regex(/^[0-9()+\-\s]+$/, "Telefone inválido"),
  email: z.string().trim().email("E-mail inválido"),
  pet: z.string().trim().min(1, "Informe o nome do pet").max(60),
  especie: z.enum(especies, { message: "Selecione a espécie" }),
  data: z.string().min(1, "Selecione a data"),
  horario: z.string().min(1, "Selecione o horário"),
  observacoes: z.string().trim().max(500, "Observações muito longas").optional(),
});

export type AgendamentoInput = z.infer<typeof agendamentoSchema>;
