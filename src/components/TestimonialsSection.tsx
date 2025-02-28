"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Star, 
  Quote, 
  ArrowLeft, 
  ArrowRight, 
  Sparkles 
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = siteConfig.testimonials;

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
    <section 
      ref={ref} 
      className="py-24 relative overflow-hidden bg-primary-900/10"
    >
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <div className="inline-flex items-center px-4 py-1.5 text-sm font-medium border rounded-full animated-border text-primary-400 mb-4">
              <Sparkles size={14} className="mr-2 text-primary-400" />
              <span>Histórias de Sucesso</span>
            </div>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que nossos <span className="text-primary-400">clientes</span> dizem
          </h2>

          <p className="text-muted-foreground text-lg">
            Transformações autênticas e resultados que falam por si. Nossos clientes 
            compartilham suas experiências de trabalhar com a Alt Digital.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative">
          {/* Testimunho Principal */}
          <motion.div
            variants={itemVariants}
            className="col-span-12 md:col-span-8 lg:col-span-9"
          >
            <Card className="h-full bg-gradient-to-br from-primary-800/60 to-secondary-800/40 backdrop-blur-sm border-primary-400/10 shadow-xl">
              <CardContent className="p-8 h-full flex flex-col justify-between">
                <div>
                  <Quote className="text-primary-400 w-12 h-12 mb-6 opacity-40" />
                  <motion.p
                    key={activeTestimonial}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5 }}
                    className="text-xl md:text-2xl italic mb-8 text-white/90"
                  >
                    {testimonials[activeTestimonial].quote}
                  </motion.p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-primary-400">
                      <Image
                        src={testimonials[activeTestimonial].avatar}
                        alt={testimonials[activeTestimonial].author}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        {testimonials[activeTestimonial].author}
                      </h4>
                      <p className="text-muted-foreground">
                        {testimonials[activeTestimonial].role}
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={`text-primary-400 ${i < 5 ? 'fill-primary-400' : ''}`}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Miniatura de depoimentos */}
          <motion.div
            variants={itemVariants}
            className="col-span-12 md:col-span-4 lg:col-span-3 space-y-6"
          >
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`
                  cursor-pointer transition-all duration-300 
                  ${index === activeTestimonial 
                    ? 'border-primary-400 bg-primary-800/30' 
                    : 'border-border bg-background/30 hover:border-primary-400/50'}
                `}
              >
                <CardContent className="p-4 flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{testimonial.author}</h4>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Controles de navegação */}
          <motion.div 
            variants={itemVariants}
            className="col-span-12 flex justify-center space-x-4 mt-8"
          >
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              className="border-primary-400/50 text-primary-400 hover:bg-primary-400/10"
            >
              <ArrowLeft size={16} />
            </Button>
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`
                    w-2 h-2 rounded-full transition-all 
                    ${index === activeTestimonial 
                      ? 'bg-primary-400 w-6' 
                      : 'bg-primary-400/30'}
                  `}
                />
              ))}
            </div>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial}
              className="border-primary-400/50 text-primary-400 hover:bg-primary-400/10"
            >
              <ArrowRight size={16} />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}