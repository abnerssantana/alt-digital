import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageMedia from "../images/media.jpg";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Nossos Serviços"
        title="Transformamos sua presença digital com estratégia e criatividade"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Desenvolvemos soluções personalizadas para fortalecer sua marca no ambiente digital,
          conectando você ao seu público de forma autêntica e impactante.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageMedia}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Gestão de Redes Sociais">
              Criamos e gerenciamos conteúdo estratégico para Instagram, Facebook e LinkedIn,
              desenvolvendo sua presença digital com posts engajadores, stories dinâmicos e 
              campanhas direcionadas que conectam sua marca ao público-alvo.
            </ListItem>
            <ListItem title="Produção Audiovisual">
              Produzimos conteúdo audiovisual de alta qualidade para suas redes sociais e campanhas.
              Desde vídeos institucionais e reels até documentação de eventos e podcasts,
              contamos histórias que fortalecem sua marca.
            </ListItem>
            <ListItem title="Branding & Identidade Visual">
              Desenvolvemos identidades visuais marcantes e estratégias de branding que
              traduzem a essência da sua marca. Criamos logos, guias de estilo e todo o
              material visual necessário para fortalecer seu posicionamento.
            </ListItem>
            <ListItem title="Marketing Digital & Performance">
              Implementamos estratégias completas de marketing digital, incluindo SEO,
              tráfego pago, email marketing e análise de dados. Focamos em resultados
              mensuráveis e crescimento sustentável da sua presença online.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;