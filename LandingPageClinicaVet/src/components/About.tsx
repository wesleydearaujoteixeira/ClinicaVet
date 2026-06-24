"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Heart, Award, CheckCircle2 } from "lucide-react";
import { Reveal } from "./ui/Reveal";

const diferenciais = [
  "Plantão veterinário 24 horas, todos os dias",
  "Laboratório e diagnóstico por imagem próprios",
  "Centro cirúrgico com anestesia monitorada",
  "Atendimento humanizado e acolhedor",
];

const pilares = [
  {
    icon: Target,
    title: "Missão",
    text: "Promover saúde, bem-estar e qualidade de vida aos animais com excelência técnica e amor.",
  },
  {
    icon: Heart,
    title: "Valores",
    text: "Respeito, empatia e cuidado humanizado em cada atendimento, com tutores e pets.",
  },
  {
    icon: Award,
    title: "Diferencial",
    text: "Tecnologia de ponta aliada a uma equipe que trata cada pet como parte da família.",
  },
];

export function About() {
  return (
    <section id="sobre" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Imagens */}
        <Reveal direction="right" className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-900/10 ring-1 ring-black/5">
            <Image
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80"
              alt="Estrutura moderna da clínica veterinária VetVida"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <motion.div
            className="absolute -bottom-6 -right-2 hidden w-44 overflow-hidden rounded-2xl shadow-xl ring-4 ring-white sm:block"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="relative aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=400&q=80"
                alt="Cão saudável após atendimento"
                fill
                sizes="200px"
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Selo de anos */}
          <div className="absolute -left-3 -top-3 flex h-24 w-24 flex-col items-center justify-center rounded-2xl bg-brand-600 text-white shadow-xl">
            <span className="text-3xl font-extrabold leading-none">+15</span>
            <span className="mt-1 text-[11px] font-medium text-brand-100">
              anos de história
            </span>
          </div>
        </Reveal>

        {/* Texto */}
        <div>
          <Reveal>
            <span className="inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
              Sobre a clínica
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Uma história construída com{" "}
              <span className="text-brand-600">amor e dedicação</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Nascemos do desejo de oferecer um atendimento veterinário
              diferente: técnico, moderno e profundamente humano. Há mais de 15
              anos cuidamos da saúde dos pets de Fortaleza, crescendo junto com a
              confiança de milhares de famílias.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {diferenciais.map((d) => (
                <li key={d} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                  <span className="text-sm text-slate-700">{d}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {pilares.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
                >
                  <p.icon className="h-6 w-6 text-brand-600" />
                  <h3 className="mt-3 text-sm font-bold text-slate-900">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                    {p.text}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
