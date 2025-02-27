"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Pronto para ser <span className="text-primary-400">diferente</span>?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Vamos criar algo extraordinário juntos. Entre em contato e descubra como podemos 
            transformar sua presença digital.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group bg-primary hover:bg-primary-600" asChild>
              <Link href="/contato" className="flex items-center">
                Inicie seu projeto
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10"
            >
              <Link href="https://wa.me/5517900000000" target="_blank" rel="noopener noreferrer">
                Fale pelo WhatsApp
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Background decorativo */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl">
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,#6a994e15_0,transparent_60%)]"></div>
          
          {/* Símbolos ≠ flutuantes */}
          <motion.div 
            className="absolute top-1/4 left-1/4 text-6xl font-bold text-primary-900/10"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          >
            ≠
          </motion.div>
          
          <motion.div 
            className="absolute bottom-1/4 right-1/4 text-4xl font-bold text-primary-900/10"
            animate={{ 
              y: [0, 15, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
          >
            ≠
          </motion.div>
          
          <motion.div 
            className="absolute top-2/3 left-1/3 text-5xl font-bold text-secondary-800/10"
            animate={{ 
              y: [0, 10, 0],
              rotate: [0, 15, 0]
            }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 2 }}
          >
            ≠
          </motion.div>
        </div>
      </div>
    </section>
  );
}
