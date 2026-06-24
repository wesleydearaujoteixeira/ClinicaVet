# 🐾 Clínica VetVida — Landing Page

Landing page premium para clínica veterinária, focada em conversão e agendamento online.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (paleta personalizada)
- **Framer Motion** (animações: fade, slide, scroll reveal, hover)
- **Lucide React** (ícones)
- **Prisma + SQLite** (persistência dos agendamentos)
- **Zod** (validação no cliente e no servidor)
- **Resend** (e-mail de confirmação — opcional)

## Como rodar

```bash
# 1. Instalar dependências
npm install

# 2. Criar o arquivo .env (copie do exemplo)
cp .env.example .env

# 3. Criar o banco de dados
npm run db:push

# 4. Ambiente de desenvolvimento
npm run dev
# acesse http://localhost:3000

# Produção
npm run build && npm start
```

## Variáveis de ambiente (`.env`)

| Variável | Obrigatória | Descrição |
|---|---|---|
| `DATABASE_URL` | ✅ | Conexão do banco (SQLite por padrão: `file:./dev.db`). |
| `RESEND_API_KEY` | ❌ | Chave da [Resend](https://resend.com) para enviar e-mail de confirmação. **Sem ela o app funciona normalmente** e apenas registra a confirmação no log. |
| `RESEND_FROM` | ❌ | Remetente do e-mail. |
| `NEXT_PUBLIC_SITE_URL` | ❌ | URL pública (usada em SEO/sitemap). |

## Personalização rápida

- **Dados da clínica** (telefone, WhatsApp, endereço, redes): `src/lib/constants.ts`
- **Conteúdo** (serviços, benefícios, depoimentos, FAQ): `src/data/content.ts`
- **Imagens**: atualmente usam fotos realistas do Unsplash. Para usar imagens próprias, troque as URLs nos componentes e ajuste `next.config.ts`.

> ⚠️ **Importante:** ajuste o número real em `WHATSAPP_NUMBER` (`src/lib/constants.ts`).

## Estrutura

```
src/
├─ app/
│  ├─ layout.tsx          # SEO, fontes, JSON-LD (structured data)
│  ├─ page.tsx            # composição das seções
│  ├─ globals.css         # tema Tailwind v4
│  ├─ sitemap.ts / robots.ts
│  └─ api/agendamento/    # POST: valida + salva + confirma
├─ components/            # Header, Hero, Benefits, About, Services,
│  │                        Testimonials, Location, BookingForm, FAQ, Footer
│  └─ ui/                 # Reveal (animações), SectionHeading, WhatsAppFloat
├─ data/content.ts        # conteúdo das seções
└─ lib/                   # constants, prisma, schema (zod), email
```

## Funcionalidades

- ✅ Hero com CTA duplo (Agendar / WhatsApp) e imagem com micro-animações
- ✅ Benefícios, Sobre, Serviços, Depoimentos (carrossel), Localização (card + mapa)
- ✅ Agendamento completo: validação, persistência em banco, mensagem de sucesso e confirmação automática
- ✅ FAQ em accordion, rodapé completo, botão flutuante de WhatsApp
- ✅ SEO: meta tags, Open Graph, Twitter, JSON-LD, sitemap e robots
- ✅ Responsivo (mobile-first → ultrawide) e acessível (`prefers-reduced-motion`)
```
