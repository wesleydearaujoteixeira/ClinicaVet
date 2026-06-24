/**
 * Informações centrais da clínica.
 * Altere aqui (um único lugar) telefone, WhatsApp, endereço, etc.
 */

// ⚠️ SUBSTITUA pelo número real da clínica (formato internacional, só dígitos).
export const WHATSAPP_NUMBER = "5585999999999";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Gostaria de mais informações sobre os atendimentos da Clínica VetVida.";

export const CLINIC = {
  name: "Clínica VetVida",
  shortName: "VetVida",
  tagline: "Cuidado veterinário de alto padrão, 24 horas por dia.",
  phoneDisplay: "(85) 99999-9999",
  email: "contato@vetvida.com.br",
  address: {
    street: "Av. Godofredo Maciel, 3407",
    district: "Maraponga",
    city: "Fortaleza/CE",
    zip: "60710-684",
  },
  hours: "Aberto 24 horas — Todos os dias",
  payment: ["Cartão", "Pix", "Parcelamento"],
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
  },
  // Coordenadas aproximadas da Maraponga, Fortaleza/CE (para o mapa).
  mapsEmbed:
    "https://www.google.com/maps?q=Av.+Godofredo+Maciel,+3407+-+Maraponga,+Fortaleza+-+CE&output=embed",
} as const;

export function whatsappLink(message: string = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
