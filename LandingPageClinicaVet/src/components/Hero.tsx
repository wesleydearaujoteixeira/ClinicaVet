"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarCheck, ShieldCheck, Clock, Star } from "lucide-react";
import { whatsappLink } from "@/lib/constants";
import { WhatsAppIcon } from "./ui/WhatsAppIcon";

const destaques = [
  { icon: Clock, label: "Atendimento 24h" },
  { icon: ShieldCheck, label: "Equipe especializada" },
  { icon: Star, label: "Nota 4,9 dos tutores" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 via-white to-white pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24"
    >
      {/* Brilhos de fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -left-24 h-80 w-80 rounded-full bg-accent-400/20 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-4 py-1.5 text-xs font-semibold text-brand-700 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-accent-500" />
            Pronto-atendimento aberto agora
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Cuidado veterinário
            <span className="block text-gradient">que sua família merece</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Estrutura moderna, equipe especializada e atendimento humanizado 24
            horas por dia. Aqui o seu pet é tratado com a dedicação de quem ama
            animais de verdade.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#agendamento"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-600/30"
            >
              <CalendarCheck className="h-5 w-5 transition-transform group-hover:scale-110" />
              Agendar Consulta
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-accent-500 bg-white px-7 py-3.5 text-base font-semibold text-accent-700 transition-all hover:bg-accent-50"
            >
              <WhatsAppIcon className="h-5 w-5 transition-transform group-hover:scale-110" />
              Falar no WhatsApp
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
            {destaques.map((d) => (
              <li
                key={d.label}
                className="flex items-center gap-2 text-sm font-medium text-slate-700"
              >
                <d.icon className="h-5 w-5 text-brand-600" />
                {d.label}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Imagem */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] shadow-2xl shadow-brand-900/20 ring-1 ring-black/5 lg:max-w-none">
            <Image
              src="https://images.unsplash.com/photo-1612531385446-f7e6d131e1d0?auto=format&fit=crop&w=900&q=80"
              alt="Médica veterinária examinando um cão com carinho na clínica"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Card flutuante: avaliação */}
          <motion.div
            className="absolute -left-2 bottom-8 flex items-center gap-3 rounded-2xl bg-white/90 p-3 pr-5 shadow-xl ring-1 ring-black/5 backdrop-blur sm:-left-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/15 text-accent-600">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">+12 mil pets</p>
              <p className="text-xs text-slate-500">atendidos com amor</p>
            </div>
          </motion.div>

          {/* Card flutuante: 24h */}
          <motion.div
            className="absolute -right-2 top-8 flex items-center gap-2 rounded-2xl bg-brand-600 px-4 py-3 text-white shadow-xl sm:-right-5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.85, duration: 0.5 }}
          >
            <Clock className="h-5 w-5" />
            <span className="text-sm font-semibold">Aberto 24h</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
