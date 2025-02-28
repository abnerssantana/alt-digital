"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/lib/site-config";

import { Variants } from "framer-motion";

interface VideoShowcaseProps {
  variants: Variants;
}

export function VideoShowcase({ variants }: VideoShowcaseProps) {
  return (
    <motion.div
      variants={variants}
      className="col-span-12 md:col-span-6 row-span-2"
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <Card className="h-full overflow-hidden border-secondary-600/30 relative group">
        <div className="absolute inset-0 bg-black/10 z-10 group-hover:bg-black/20 transition-colors duration-300"></div>
        
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
          <div className="space-y-3 text-white">
            <h3 className="text-xl md:text-2xl font-semibold">
              Vídeo & Foto
            </h3>
            <p className="text-sm text-white/80 max-w-xs">
              Produções audiovisuais de alta qualidade que contam histórias e conectam emoções.
            </p>
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={`/servicos/${siteConfig.services[1].id}`}
                className="inline-flex items-center text-sm text-white/90 hover:text-white group"
              >
                Saiba mais
                <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
        
        <video
          src="/videoplayback.mp4"
          autoPlay
          muted
          playsInline
          loop
          className="w-full h-full object-cover absolute inset-0"
        />
      </Card>
    </motion.div>
  );
}