"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { 
  ArrowLeft, 
  ArrowRight, 
  Quote 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [current, setCurrent] = useState(0);
  
  const testimonials = siteConfig.testimonials;
  
  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };
  
  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-primary-900/10" id="testimonials">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que nossos <span className="text-primary-400">clientes</span> dizem
          </h2>
          <p className="text-muted-foreground text-lg">
            Autênticos e diretos. Não temos medo de expressar nossa opinião com confiança, 
            e nossos clientes apreciam essa honestidade.
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: index === current ? 1 : 0,
                x: index === current ? 0 : (index < current ? -100 : 100)
              }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-black/60 to-primary-800/40 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-primary-400/10 shadow-xl absolute inset-0"
              style={{ display: index === current ? "block" : "none" }}
            >
              <Quote className="text-primary-400 w-16 h-16 mb-6 opacity-30" />
              
              <p className="text-lg md:text-xl italic mb-8 text-white/90">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary-400/20 flex items-center justify-center mr-4">
                  <span className="text-primary-300 font-semibold">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Controles de navegação */}
          <div className="absolute -bottom-16 left-0 right-0 flex justify-center gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="border-primary-400/50 text-primary-400 hover:bg-primary-400/10"
              onClick={prev}
            >
              <ArrowLeft size={16} />
              <span className="sr-only">Anterior</span>
            </Button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current ? "bg-primary-400 w-4" : "bg-primary-400/30"
                  }`}
                  onClick={() => setCurrent(index)}
                >
                  <span className="sr-only">Depoimento {index + 1}</span>
                </button>
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="border-primary-400/50 text-primary-400 hover:bg-primary-400/10"
              onClick={next}
            >
              <ArrowRight size={16} />
              <span className="sr-only">Próximo</span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Efeito de fundo */}
      <div className="absolute left-0 right-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent -z-10"></div>
    </section>
  );
}