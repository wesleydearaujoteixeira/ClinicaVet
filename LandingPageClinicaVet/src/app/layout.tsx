import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { CLINIC } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${CLINIC.name} — Clínica Veterinária 24h em Fortaleza`,
    template: `%s | ${CLINIC.name}`,
  },
  description:
    "Clínica veterinária 24 horas em Fortaleza com equipe especializada, estrutura moderna e atendimento humanizado. Consultas, cirurgias, exames e emergência. Agende online.",
  keywords: [
    "clínica veterinária Fortaleza",
    "veterinário 24 horas",
    "emergência veterinária",
    "consulta veterinária",
    "cirurgia veterinária",
    "Maraponga",
  ],
  authors: [{ name: CLINIC.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: CLINIC.name,
    title: `${CLINIC.name} — Clínica Veterinária 24h em São Paulo`,
    description:
      "Cuidado veterinário de alto padrão, 24 horas por dia. Equipe especializada, estrutura moderna e atendimento humanizado. Agende sua consulta online.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1612531385446-f7e6d131e1d0?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: CLINIC.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${CLINIC.name} — Clínica Veterinária 24h`,
    description:
      "Cuidado veterinário de alto padrão, 24 horas por dia. Agende online.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#2563EB",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VeterinaryCare",
  name: CLINIC.name,
  description:
    "Clínica veterinária 24 horas com equipe especializada e atendimento humanizado.",
  url: siteUrl,
  telephone: CLINIC.phoneDisplay,
  openingHours: "Mo-Su 00:00-23:59",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: CLINIC.address.street,
    addressLocality: "Fortaleza",
    addressRegion: "CE",
    postalCode: CLINIC.address.zip,
    addressCountry: "BR",
  },
  image:
    "https://images.unsplash.com/photo-1612531385446-f7e6d131e1d0?auto=format&fit=crop&w=1200&q=80",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
