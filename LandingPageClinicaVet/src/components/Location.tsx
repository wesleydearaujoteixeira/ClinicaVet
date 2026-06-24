"use client";

import { MapPin, Clock, CreditCard } from "lucide-react";
import { CLINIC, whatsappLink } from "@/lib/constants";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { WhatsAppIcon } from "./ui/WhatsAppIcon";

export function Location() {
  return (
    <section id="localizacao" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Localização"
          title="Pertinho de você, sempre que precisar"
          description="Estamos em um ponto de fácil acesso na Maraponga, prontos para receber você e seu pet a qualquer hora."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Lado esquerdo: card de informações */}
          <Reveal direction="right">
            <div className="flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-7 shadow-lg shadow-slate-900/5 sm:p-9">
              <div className="space-y-7">
                <InfoRow
                  icon={<MapPin className="h-6 w-6" />}
                  title="Endereço"
                >
                  <p>{CLINIC.address.street}</p>
                  <p>
                    {CLINIC.address.district}, {CLINIC.address.city}
                  </p>
                  <p>{CLINIC.address.zip}</p>
                </InfoRow>

                <div className="h-px bg-slate-100" />

                <InfoRow icon={<Clock className="h-6 w-6" />} title="Horário">
                  <p className="font-semibold text-accent-600">Aberto 24 horas</p>
                  <p>Todos os dias</p>
                </InfoRow>

                <div className="h-px bg-slate-100" />

                <InfoRow
                  icon={<CreditCard className="h-6 w-6" />}
                  title="Pagamento"
                >
                  <div className="flex flex-wrap gap-2">
                    {CLINIC.payment.map((p) => (
                      <span
                        key={p}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </InfoRow>
              </div>

              <a
                href={whatsappLink(
                  "Olá! Preciso de atendimento imediato para o meu pet.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center justify-center gap-2.5 rounded-2xl bg-accent-500 px-6 py-4 text-base font-bold text-white shadow-lg shadow-accent-500/30 transition-all hover:bg-accent-600 hover:shadow-xl hover:shadow-accent-500/40"
              >
                <WhatsAppIcon className="h-5 w-5 transition-transform group-hover:scale-110" />
                Atendimento Imediato via WhatsApp
              </a>
            </div>
          </Reveal>

          {/* Lado direito: mapa */}
          <Reveal direction="left">
            <div className="h-full min-h-[360px] overflow-hidden rounded-3xl shadow-lg shadow-slate-900/5 ring-1 ring-slate-100">
              <iframe
                title="Mapa da localização da Clínica VetVida"
                src={CLINIC.mapsEmbed}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full min-h-[360px] border-0"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
          {title}
        </h3>
        <div className="mt-1 space-y-0.5 text-sm text-slate-600">{children}</div>
      </div>
    </div>
  );
}
