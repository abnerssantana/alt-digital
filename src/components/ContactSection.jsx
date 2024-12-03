import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import Button from "./Button";
import Offices from "./Offices";

const ContactSection = () => {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-[#688B61] px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-white [text-wrap:balance] sm:text-4xl">
            Vamos conversar?
          </h2>
          <h3 className="font-display text-base font-semibold text-white">
            Para saber mais sobre os nossos produtos, serviços e cases, entre em
            contato
          </h3>
          <div className="mt-6 flex">
            <Button href={"/contact"} invert>
              Contato
            </Button>
          </div>
          <div className="mt-10 border-t border-white/10 pt-10">
            <Offices
              invert
              className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
            />
          </div>
        </div>
      </FadeIn>
    </Container>
  );
};

export default ContactSection;
