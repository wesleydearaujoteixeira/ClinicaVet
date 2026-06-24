import {
  Clock,
  Stethoscope,
  Building2,
  FlaskConical,
  BedDouble,
  Siren,
  Syringe,
  Scissors,
  HeartPulse,
  Microscope,
  Bath,
  Smile,
  type LucideIcon,
} from "lucide-react";

export type Beneficio = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const beneficios: Beneficio[] = [
  {
    icon: Clock,
    title: "Atendimento 24 horas",
    description:
      "Estamos sempre prontos. Equipe de plantão todos os dias, inclusive feriados.",
  },
  {
    icon: Stethoscope,
    title: "Equipe especializada",
    description:
      "Médicos veterinários com especializações em clínica, cirurgia e diagnóstico.",
  },
  {
    icon: Building2,
    title: "Estrutura moderna",
    description:
      "Ambiente projetado para o conforto e a segurança do seu pet em cada etapa.",
  },
  {
    icon: Microscope,
    title: "Exames completos",
    description:
      "Laboratório próprio e imagem para diagnósticos rápidos e precisos.",
  },
  {
    icon: BedDouble,
    title: "Internação",
    description:
      "Monitoramento contínuo com acompanhamento veterinário 24 horas.",
  },
  {
    icon: Siren,
    title: "Emergência veterinária",
    description:
      "Pronto-atendimento ágil para situações críticas, sem espera.",
  },
];

export type Servico = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const servicos: Servico[] = [
  {
    icon: Stethoscope,
    title: "Consultas",
    description:
      "Avaliação clínica completa com diagnóstico e plano de tratamento individualizado.",
  },
  {
    icon: Syringe,
    title: "Vacinação",
    description:
      "Protocolos vacinais atualizados para todas as fases de vida do seu pet.",
  },
  {
    icon: Scissors,
    title: "Cirurgias",
    description:
      "Centro cirúrgico equipado com anestesia monitorada e segurança total.",
  },
  {
    icon: FlaskConical,
    title: "Exames laboratoriais",
    description:
      "Hemograma, bioquímico e exames especializados com laudo rápido.",
  },
  {
    icon: BedDouble,
    title: "Internação",
    description:
      "Estrutura de internação com cuidado intensivo e acompanhamento contínuo.",
  },
  {
    icon: HeartPulse,
    title: "Emergência",
    description:
      "Pronto-socorro veterinário 24h para atendimentos de urgência.",
  },
  {
    icon: Smile,
    title: "Odontologia veterinária",
    description:
      "Profilaxia, tratamento e prevenção da saúde bucal do seu animal.",
  },
  {
    icon: Bath,
    title: "Banho e tosa",
    description:
      "Estética e higiene com produtos premium e profissionais experientes.",
  },
];

export type Depoimento = {
  nome: string;
  pet: string;
  foto: string;
  estrelas: number;
  comentario: string;
};

export const depoimentos: Depoimento[] = [
  {
    nome: "Mariana Lopes",
    pet: "Tutora do Thor",
    foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    estrelas: 5,
    comentario:
      "Atendimento impecável de madrugada quando meu cão passou mal. Salvaram a vida dele. Gratidão eterna à equipe!",
  },
  {
    nome: "Rafael Andrade",
    pet: "Tutor da Mel",
    foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    estrelas: 5,
    comentario:
      "Estrutura de altíssimo nível e profissionais que realmente amam o que fazem. Minha gata foi tratada com todo carinho.",
  },
  {
    nome: "Camila Ferreira",
    pet: "Tutora do Bob",
    foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    estrelas: 5,
    comentario:
      "Fiz a castração do meu cachorro aqui. Tudo explicado com clareza, pós-operatório acompanhado de perto. Recomendo demais.",
  },
  {
    nome: "Pedro Henrique",
    pet: "Tutor da Luna",
    foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    estrelas: 5,
    comentario:
      "Agendamento rápido pelo site e confirmação na hora. Modernidade e cuidado humanizado andando juntos.",
  },
  {
    nome: "Juliana Martins",
    pet: "Tutora do Simba",
    foto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    estrelas: 5,
    comentario:
      "Equipe atenciosa do início ao fim. Senti total segurança em deixar meu pet internado. Ambiente limpo e acolhedor.",
  },
];

export type Faq = {
  pergunta: string;
  resposta: string;
};

export const faqs: Faq[] = [
  {
    pergunta: "A clínica atende 24 horas?",
    resposta:
      "Sim. Funcionamos 24 horas por dia, todos os dias da semana, incluindo feriados, com equipe de plantão e pronto-atendimento de emergência.",
  },
  {
    pergunta: "Vocês aceitam Pix?",
    resposta:
      "Aceitamos Pix, cartões de crédito e débito, além de oferecermos parcelamento para procedimentos eletivos.",
  },
  {
    pergunta: "A clínica realiza cirurgias?",
    resposta:
      "Sim. Contamos com centro cirúrgico completo, anestesia monitorada e equipe especializada para cirurgias eletivas e de emergência.",
  },
  {
    pergunta: "Como funciona o atendimento de emergência?",
    resposta:
      "Basta chegar à clínica ou chamar no WhatsApp. Nosso pronto-socorro prioriza casos críticos com triagem imediata, sem necessidade de agendamento prévio.",
  },
  {
    pergunta: "Como faço para agendar uma consulta?",
    resposta:
      "Você pode agendar diretamente pelo formulário deste site, em poucos segundos, ou falar com a nossa equipe pelo WhatsApp. A confirmação é enviada automaticamente.",
  },
];
