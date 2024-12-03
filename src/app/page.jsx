import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";

const TypewriterText = ({ text, className }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50); // Ajuste esta velocidade conforme necessário

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1] }}
        transition={{ repeat: Infinity, duration: 0.7 }}
        className="inline-block ml-1"
      >
        |
      </motion.span>
    </motion.span>
  );
};

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            <TypewriterText 
              text="A (ALT)ERNATIVA PARA QUEM PENSA DIFERENTE."
            />
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Nosso propósito é ser a alternativa fora da curva no mercado de conteúdo e audiovisual. 
            Na alt ≠, rompemos com o comum, trazendo uma abordagem disruptiva e criativa que desafia 
            o padrão e cria experiências que realmente marcam.
          </p>
        </FadeIn>
      </Container>
      <Clients />
      <div className="mt-24 sm:mt-32 lg:mt-40">
        <Container>
          <FadeIn className="max-w-2xl">
            <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              <TypewriterText 
                text="Autêntico e Direto"
              />
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
      <Services />
      <ContactSection />
    </main>
  );
}