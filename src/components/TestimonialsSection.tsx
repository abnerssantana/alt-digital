"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
  Star,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

  // Animation configurations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section ref={ref} className="py-24 bg-primary-900/10 relative overflow-hidden" id="testimonials">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <div className="inline-flex items-center px-4 py-1.5 text-sm font-medium border rounded-full animated-border text-primary-400 mb-4">
              <Sparkles size={14} className="mr-2 text-primary-400" />
              <span>Depoimentos</span>
            </div>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que nossos <span className="text-primary-400">clientes</span> dizem
          </h2>

          <p className="text-muted-foreground text-lg">
            Autênticos e diretos. Não temos medo de expressar nossa opinião com confiança,
            e nossos clientes apreciam essa honestidade.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-[300px] md:h-[250px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: index === current ? 1 : 0,
                  x: index === current ? 0 : (index < current ? -100 : 100)
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut"
                }}
                className="absolute inset-0"
                style={{
                  display: index === current ? "block" : "none",
                  zIndex: index === current ? 10 : 0
                }}
              >
                <Card className="bg-gradient-to-br from-black/60 to-primary-800/40 backdrop-blur-sm border border-primary-400/10 shadow-xl h-full">
                  <CardContent className="p-8 md:p-12 h-full flex flex-col">
                    <Quote className="text-primary-400 w-10 h-10 mb-4 opacity-40" />

                    <motion.p
                      className="text-lg md:text-xl italic mb-6 text-white/90"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      {testimonial.quote}
                    </motion.p>

                    <div className="mt-auto flex items-center justify-between">
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

                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className="text-primary-400"
                            fill={i < 5 ? "currentColor" : "none"}
                          />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

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
                  className={`w-2 h-2 rounded-full transition-all ${index === current ? "bg-primary-400 w-4" : "bg-primary-400/30"
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

      {/* Efeitos de fundo */}
      <div className="absolute left-0 right-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent -z-10"></div>

      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary-400/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <motion.div
        className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-secondary-500/5 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2
        }}
      />
    </section>
  );
}