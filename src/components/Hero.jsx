"use client";

import React, { useState, useEffect } from 'react';
import Container from "./Container";
import FadeIn from "./FadeIn";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="mt-8 relative min-h-screen overflow-hidden">
      {/* Background Image with fade-in */}
      <div 
        className={`absolute inset-0 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat 
          transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      />
      
      {/* Green Overlay with fade-in */}
      <div className={`absolute inset-0 bg-gradient-to-t from-green-900/40 to-zinc-900
        transition-opacity duration-1500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div
            className={`absolute top-1 left-1/4 w-64 h-64 bg-green-600/30 rounded-full blur-3xl
              animate-pulse transition-transform duration-1000
              hover:scale-110 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
          />
          <div
            className={`absolute bottom-1 right-1/4 w-96 h-96 bg-[#859F3D]/40 rounded-full blur-3xl
              animate-pulse transition-transform duration-1000 delay-500
              hover:scale-110 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
          />
        </div>
      </div>

      {/* Content */}
      <Container className="relative pt-32 sm:pt-40 pb-32">
        <FadeIn className="max-w-7xl mx-auto text-left">
          <h1 
            className={`font-display text-5xl font-bold tracking-tight text-white [text-wrap:balance] sm:text-6xl
              transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
          >
            A (ALT)ERNATIVA PARA QUEM PENSA DIFERENTE
          </h1>
          
          <p 
            className={`mt-6 text-xl text-neutral-200
              transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
          >
            Nosso propósito é ser a alternativa fora da curva no mercado de conteúdo e audiovisual. 
            Na alt ≠, rompemos com o comum, trazendo uma abordagem disruptiva e criativa que desafia 
            o padrão e cria experiências que realmente marcam. Com soluções inovadoras, ajudamos 
            marcas a se destacarem e se conectarem com o que há de mais atual no mundo digital.
          </p>
        </FadeIn>
      </Container>
    </div>
  );
};

export default Hero;