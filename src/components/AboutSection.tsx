"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-black to-primary-950/20" id="about">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-primary-400">Rebelde</span> por natureza
            </h2>
            <p className="text-xl mb-8 text-white/90">
              "Desafiar o status quo para criar algo novo, audacioso e transformador"
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary-400">Missão</h3>
                <p className="text-muted-foreground">
                  {siteConfig.manifesto.mission}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary-400">Visão</h3>
                <p className="text-muted-foreground">
                  {siteConfig.manifesto.vision}
                </p>
              </div>
            </div>
            
            <Button size="lg" variant="outline" className="border-primary-400 text-primary-400 hover:bg-primary-400/10" asChild>
              <Link href="/sobre" className="flex items-center">
                Conheça nossa história
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </motion.div>
          
          {/* Valores */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-black/60 to-primary-950/40 backdrop-blur-sm rounded-2xl p-8 border border-primary/10 shadow-xl">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <span className="text-4xl mr-2">≠</span>
                <span>Nossos Valores</span>
              </h3>

              <div className="space-y-8">
                {siteConfig.manifesto.values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + (index * 0.2), duration: 0.5 }}
                  >
                    <h4 className="text-lg font-semibold mb-2 text-primary-300">{value.title}</h4>
                    <p className="text-muted-foreground">{value.description}</p>
                  </motion.div>
                ))}
              </div>
              
              {/* Elemento gráfico decorativo */}
              <div className="w-3/4 h-1 bg-gradient-to-r from-primary-500 to-transparent rounded-full mt-8"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Padrão de fundo */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10 z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" className="text-primary-500" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
    </section>
  );
}
