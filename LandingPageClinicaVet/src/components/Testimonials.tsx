"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { depoimentos } from "@/data/content";
import { SectionHeading } from "./ui/SectionHeading";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback((dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + depoimentos.length) % depoimentos.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 6000);
    return () => clearInterval(timer);
  }, [paginate]);

  const atual = depoimentos[index];

  return (
    <section
      id="depoimentos"
      className="relative overflow-hidden bg-gradient-to-b from-brand-700 to-brand-800 py-20 text-white sm:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-500/30 blur-3xl"
      />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          eyebrow="Depoimentos"
          title="A confiança de quem ama seus pets"
          description="Histórias reais de tutores que confiaram a saúde dos seus melhores amigos à VetVida."
        />

        <div className="relative mt-14">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.figure
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction >= 0 ? -60 : 60 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-2xl rounded-3xl bg-white/10 p-8 text-center backdrop-blur-md ring-1 ring-white/15 sm:p-10"
            >
              <Quote className="mx-auto h-10 w-10 text-brand-300" />
              <div className="mt-4 flex justify-center gap-1">
                {Array.from({ length: atual.estrelas }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <blockquote className="mt-5 text-lg leading-relaxed text-white sm:text-xl">
                “{atual.comentario}”
              </blockquote>
              <figcaption className="mt-7 flex items-center justify-center gap-3">
                <span className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-white/40">
                  <Image
                    src={atual.foto}
                    alt={atual.nome}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </span>
                <span className="text-left">
                  <span className="block text-sm font-bold">{atual.nome}</span>
                  <span className="block text-xs text-brand-200">
                    {atual.pet}
                  </span>
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          {/* Controles */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => paginate(-1)}
              aria-label="Depoimento anterior"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {depoimentos.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  aria-label={`Ir para depoimento ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index ? "w-7 bg-white" : "w-2.5 bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => paginate(1)}
              aria-label="Próximo depoimento"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
