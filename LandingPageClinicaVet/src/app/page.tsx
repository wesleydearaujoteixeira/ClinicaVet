import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Location } from "@/components/Location";
import { BookingForm } from "@/components/BookingForm";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <About />
        <Services />
        <Testimonials />
        <Location />
        <BookingForm />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
