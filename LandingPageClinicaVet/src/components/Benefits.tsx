"use client";

import { motion } from "framer-motion";
import { beneficios } from "@/data/content";
import { SectionHeading } from "./ui/SectionHeading";
import { RevealGroup } from "./ui/Reveal";

export function Benefits() {
  return (
    <section id="beneficios" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Por que a VetVida"
          title="Tudo o que o seu pet precisa, em um só lugar"
          description="Cuidado completo com a estrutura e a equipe que a saúde do seu melhor amigo merece."
        />

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {beneficios.map((b) => (
            <motion.div
              key={b.title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition-shadow hover:shadow-xl hover:shadow-brand-900/5"
            >
              <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-600 to-accent-500 transition-transform duration-300 group-hover:scale-x-100" />
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <b.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {b.description}
              </p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
