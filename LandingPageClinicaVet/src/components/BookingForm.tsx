"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarCheck,
  Loader2,
  CheckCircle2,
  AlertCircle,
  PartyPopper,
} from "lucide-react";
import { agendamentoSchema, especies, type AgendamentoInput } from "@/lib/schema";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

type Errors = Partial<Record<keyof AgendamentoInput, string>>;
type Status = "idle" | "loading" | "success" | "error";

const horarios = [
  "08:00", "09:00", "10:00", "11:00",
  "13:00", "14:00", "15:00", "16:00",
  "17:00", "18:00", "19:00", "20:00",
];

const campoVazio: AgendamentoInput = {
  nome: "",
  telefone: "",
  email: "",
  pet: "",
  especie: "Cão",
  data: "",
  horario: "",
  observacoes: "",
};

export function BookingForm() {
  const [form, setForm] = useState<AgendamentoInput>(campoVazio);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");

  const hoje = new Date().toISOString().split("T")[0];

  function update<K extends keyof AgendamentoInput>(
    key: K,
    value: AgendamentoInput[K],
  ) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError("");

    const parsed = agendamentoSchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof AgendamentoInput;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    // Landing page demonstrativa (somente front-end): simula o envio
    // localmente, sem chamar nenhum back-end.
    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
    setForm(campoVazio);
  }

  return (
    <section id="agendamento" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Agendamento online"
          title="Agende a consulta em menos de 1 minuto"
          description="Preencha os dados abaixo e nossa equipe entrará em contato para confirmar a consulta."
        />

        <Reveal className="mt-12">
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-9">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-10 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-500/15 text-accent-600">
                    <PartyPopper className="h-8 w-8" />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-slate-900">
                    Agendamento confirmado!
                  </h3>
                  <p className="mt-2 max-w-md text-slate-600">
                    Tudo certo! Recebemos sua solicitação e nossa equipe está
                    ansiosa para cuidar do seu pet. 🐾
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
                  >
                    Fazer novo agendamento
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  noValidate
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="grid gap-5 sm:grid-cols-2"
                >
                  <Field
                    label="Nome completo"
                    error={errors.nome}
                    className="sm:col-span-2"
                  >
                    <input
                      type="text"
                      value={form.nome}
                      onChange={(e) => update("nome", e.target.value)}
                      placeholder="Seu nome"
                      className={inputCls(errors.nome)}
                    />
                  </Field>

                  <Field label="Telefone" error={errors.telefone}>
                    <input
                      type="tel"
                      value={form.telefone}
                      onChange={(e) => update("telefone", e.target.value)}
                      placeholder="(85) 99999-9999"
                      className={inputCls(errors.telefone)}
                    />
                  </Field>

                  <Field label="E-mail" error={errors.email}>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="voce@email.com"
                      className={inputCls(errors.email)}
                    />
                  </Field>

                  <Field label="Nome do pet" error={errors.pet}>
                    <input
                      type="text"
                      value={form.pet}
                      onChange={(e) => update("pet", e.target.value)}
                      placeholder="Ex.: Thor"
                      className={inputCls(errors.pet)}
                    />
                  </Field>

                  <Field label="Espécie" error={errors.especie}>
                    <select
                      value={form.especie}
                      onChange={(e) =>
                        update(
                          "especie",
                          e.target.value as AgendamentoInput["especie"],
                        )
                      }
                      className={inputCls(errors.especie)}
                    >
                      {especies.map((esp) => (
                        <option key={esp} value={esp}>
                          {esp}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Data" error={errors.data}>
                    <input
                      type="date"
                      min={hoje}
                      value={form.data}
                      onChange={(e) => update("data", e.target.value)}
                      className={inputCls(errors.data)}
                    />
                  </Field>

                  <Field label="Horário" error={errors.horario}>
                    <select
                      value={form.horario}
                      onChange={(e) => update("horario", e.target.value)}
                      className={inputCls(errors.horario)}
                    >
                      <option value="">Selecione</option>
                      {horarios.map((h) => (
                        <option key={h} value={h}>
                          {h}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field
                    label="Observações (opcional)"
                    error={errors.observacoes}
                    className="sm:col-span-2"
                  >
                    <textarea
                      rows={3}
                      value={form.observacoes}
                      onChange={(e) => update("observacoes", e.target.value)}
                      placeholder="Conte um pouco sobre o motivo da consulta..."
                      className={`${inputCls(errors.observacoes)} resize-none`}
                    />
                  </Field>

                  {status === "error" && (
                    <div className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 sm:col-span-2">
                      <AlertCircle className="h-5 w-5 shrink-0" />
                      {serverError}
                    </div>
                  )}

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-600 px-6 py-4 text-base font-bold text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <CalendarCheck className="h-5 w-5" />
                          Confirmar Agendamento
                        </>
                      )}
                    </button>
                    <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-slate-400">
                      <CheckCircle2 className="h-4 w-4" />
                      Seus dados estão seguros e são usados apenas para o
                      atendimento.
                    </p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  className,
  children,
}: {
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="mb-1.5 block text-sm font-medium text-slate-700">
        {label}
      </span>
      {children}
      {error && (
        <span className="mt-1 block text-xs font-medium text-red-600">
          {error}
        </span>
      )}
    </label>
  );
}

function inputCls(error?: string) {
  return `w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:ring-2 ${
    error
      ? "border-red-300 focus:border-red-400 focus:ring-red-100"
      : "border-slate-200 focus:border-brand-400 focus:ring-brand-100"
  }`;
}
