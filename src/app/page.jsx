import Hero from '@/components/Hero';
import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import logoPhobiaDark from "@/images/clients/fet.png";
import BentoGrid from '@/components/BentoGrid';

export default function Home() {
  return (
    <main className="text-black">
      <Hero />
      <BentoGrid/>
      <Services />
      <div className="mt-24 sm:mt-32 lg:mt-40">
        <Container>
          <FadeIn className="max-w-2xl">
            <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              Autêntico e Direto
            </h2>
            <p className="mt-6 text-lg text-neutral-600">
              Não tem medo de ser direto e expressar sua opinião com confiança. 
              Nada de frases vazias ou convencionais; a Alt digital fala o que pensa 
              e o que realmente importa.
            </p>
          </FadeIn>
        </Container>
      </div>
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Phobia", logo: logoPhobiaDark }}
      >
        A Alt digital fala de forma criativa, usando metáforas, analogias e frases 
        que chamam a atenção. O tom é inovador e reflete a capacidade da agência de 
        pensar fora da caixa.
      </Testimonials>
      <Clients />
      <ContactSection />
    </main>
  );
}