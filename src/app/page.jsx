import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import logoPhobiaDark from "@/images/clients/fet.png";

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-5xl">
          <h1 className="font-display text-4xl font-bold tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
            A (ALT)ERNATIVA PARA QUEM PENSA DIFERENTE.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Nosso propósito é ser a alternativa fora da curva no mercado de conteúdo e audiovisual. 
            Na alt ≠, rompemos com o comum, trazendo uma abordagem disruptiva e criativa que desafia 
            o padrão e cria experiências que realmente marcam. Com soluções inovadoras, ajudamos 
            marcas a se destacarem e se conectarem com o que há de mais atual no mundo digital.
          </p>
        </FadeIn>
      </Container>
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