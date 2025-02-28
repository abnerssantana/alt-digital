"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Palette } from "lucide-react";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/lib/site-config";

interface BrandingCardProps {
  variants?: any;
  iconMap: Record<string, React.ElementType>;
}

export function BrandingCard({ variants, iconMap }: BrandingCardProps) {
  return (
    <motion.div
      variants={variants}
      className="col-span-6 md:col-span-4 row-span-1"
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <Card className="h-full overflow-hidden border-primary-700/30 bg-gradient-to-br from-primary-800 to-primary-700 relative">
        {/* Fundo animado com A */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 300 300" 
          className="absolute top-0 left-0 w-full h-full opacity-10 z-0"
          preserveAspectRatio="xMidYMid slice"
        >
          <style>{`
            .point {
              fill: #7BAC80;
              transition: all 0.5s ease;
            }
            .line {
              fill: none;
              stroke: #7BAC80;
              stroke-width: 3;
              stroke-linecap: round;
              stroke-dasharray: 200;
              stroke-dashoffset: 200;
            }

            @keyframes drawLine {
              0%, 50% { stroke-dashoffset: 200; }
              25%, 75% { stroke-dashoffset: 0; }
              100% { stroke-dashoffset: -200; }
            }

            @keyframes pulsePoint {
              0%, 100% { transform: scale(1); opacity: 0.7; }
              50% { transform: scale(1.2); opacity: 1; }
            }

            .line-1 { animation: drawLine 4s linear infinite; }
            .line-2 { animation: drawLine 4s linear infinite 0.5s; }

            .point-1, .point-2, .point-3, .point-4 { 
              animation: pulsePoint 3s infinite;
            }
            .point-1 { animation-delay: 0s; }
            .point-2 { animation-delay: 0.5s; }
            .point-3 { animation-delay: 1s; }
            .point-4 { animation-delay: 1.5s; }
          `}</style>

          <circle className="point point-1" cx="50" cy="250" r="5" />
          <circle className="point point-2" cx="150" cy="50" r="5" />
          <circle className="point point-3" cx="250" cy="250" r="5" />
          <circle className="point point-4" cx="150" cy="150" r="5" />

          <path 
            className="line line-1" 
            d="M50,250 L150,50" 
            stroke="#7BAC80" 
          />
          <path 
            className="line line-2" 
            d="M150,50 L250,250" 
            stroke="#7BAC80" 
          />
          <path 
            className="line" 
            d="M100,250 L200,250" 
            stroke="#7BAC80" 
          />
        </svg>

        <div className="h-full flex flex-col justify-between relative z-10 p-6">
          <div>
            <motion.div
              className="w-12 h-12 rounded-full bg-primary-400/20 flex items-center justify-center mb-4"
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            >
              {iconMap.Palette && <iconMap.Palette size={24} className="text-primary-300" />}
            </motion.div>
            
            <h3 className="text-xl font-semibold mb-2 text-white">
              {siteConfig.services[2].title}
            </h3>
            <p className="text-sm text-white/80">
              Identidades visuais que traduzem a essência da sua marca em conceitos memoráveis e impactantes.
            </p>
          </div>
          
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
            className="mt-4"
          >
            <Link
              href={`/servicos/${siteConfig.services[2].id}`}
              className="inline-flex items-center text-sm text-primary-300 hover:text-white group"
            >
              Saiba mais
              <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Decorative blob */}
          <motion.div
            className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-primary-400/10 blur-2xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3] 
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
        </div>
      </Card>
    </motion.div>
  );
}