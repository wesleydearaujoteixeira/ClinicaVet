"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { servicos } from "@/data/content";
import { SectionHeading } from "./ui/SectionHeading";
import { RevealGroup } from "./ui/Reveal";

export function Services() {
  return (
    <section id="servicos" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Nossos serviços"
          title="Cuidado completo em cada especialidade"
          description="Da prevenção à alta complexidade, oferecemos uma jornada de saúde contínua para o seu pet."
        />

        <RevealGroup
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.07}
        >
          {servicos.map((s) => (
            <motion.div
              key={s.title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5"
            >
              <div
                aria-hidden
                className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-500 text-white shadow-sm">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="relative mt-5 text-base font-bold text-slate-900">
                {s.title}
              </h3>
              <p className="relative mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {s.description}
              </p>
              <a
                href="#agendamento"
                className="relative mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 opacity-0 transition-all group-hover:opacity-100"
              >
                Agendar
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
