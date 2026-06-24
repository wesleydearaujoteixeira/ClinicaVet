import {
  PawPrint,
  MapPin,
  Phone,
  Clock,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import { CLINIC, whatsappLink } from "@/lib/constants";
import { WhatsAppIcon } from "./ui/WhatsAppIcon";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#localizacao", label: "Localização" },
  { href: "#faq", label: "FAQ" },
  { href: "#agendamento", label: "Agendar" },
];

export function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        {/* Marca */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white">
              <PawPrint className="h-5 w-5" />
            </span>
            <span className="text-lg font-bold text-white">
              {CLINIC.shortName}
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            {CLINIC.tagline}
          </p>
          <div className="mt-5 flex gap-3">
            <SocialLink href={CLINIC.social.instagram} label="Instagram">
              <Instagram className="h-5 w-5" />
            </SocialLink>
            <SocialLink href={CLINIC.social.facebook} label="Facebook">
              <Facebook className="h-5 w-5" />
            </SocialLink>
            <SocialLink href={CLINIC.social.youtube} label="YouTube">
              <Youtube className="h-5 w-5" />
            </SocialLink>
          </div>
        </div>

        {/* Navegação */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            Navegação
          </h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            Contato
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li className="flex gap-2.5">
              <MapPin className="h-5 w-5 shrink-0 text-brand-400" />
              <span>
                {CLINIC.address.street}
                <br />
                {CLINIC.address.district}, {CLINIC.address.city}
              </span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="h-5 w-5 shrink-0 text-brand-400" />
              <span>{CLINIC.phoneDisplay}</span>
            </li>
            <li className="flex gap-2.5">
              <Clock className="h-5 w-5 shrink-0 text-brand-400" />
              <span>{CLINIC.hours}</span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            Atendimento rápido
          </h3>
          <p className="mt-4 text-sm text-slate-400">
            Precisa de ajuda agora? Fale com a gente pelo WhatsApp.
          </p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-600"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Chamar no WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-center text-xs text-slate-500 sm:flex-row sm:px-6 sm:text-left lg:px-8">
          <p>
            © {ano} {CLINIC.name}. Todos os direitos reservados.
          </p>
          <p>Feito com 💙 para quem ama animais.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-300 transition-colors hover:bg-brand-600 hover:text-white"
    >
      {children}
    </a>
  );
}
