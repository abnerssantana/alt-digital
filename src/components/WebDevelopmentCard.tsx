"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface WebDevelopmentCardProps {
  variants: {
    initial: import("framer-motion").Variant;
    animate: import("framer-motion").Variant;
    exit?: import("framer-motion").Variant;
  };
}

export function WebDevelopmentCard({ variants }: WebDevelopmentCardProps) {
  const [codeLines, setCodeLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);

  // Generate code lines for the code animation card
  useEffect(() => {
    const lines = [
      `// Alt Digital - Framework Web`,
      `function createSite(cliente) {`,
      `  // Captura a essência da marca`,
      `  const identidade = construirIdentidade(cliente.valores);`,
      `  const experiencia = criarExperiencia(cliente.publico);`,
      `  `,
      `  // Implementa componentes específicos`,
      `  const componentes = {`,
      `    design: { responsive: true, moderno: true },`,
      `    performance: { score: 98, seo: "otimizado" },`,
      `    marketing: integrarEstrategias(cliente.objetivos)`,
      `  };`,
      `  `,
      `  return {`,
      `    ...componentes,`,
      `    identidade,`,
      `    experiencia,`,
      `    lancamento: () => altDigital.deploy(cliente.nome)`,
      `  };`,
      `}`,
      ``,
      `// Iniciando projeto para o cliente`,
      `const seuProjeto = createSite({`,
      `  nome: "Sua Marca",`,
      `  valores: ["autenticidade", "inovação"],`,
      `  publico: "conectado",`,
      `  objetivos: ["conversão", "engajamento"]`,
      `});`,
      ``,
      `// Lançando seu site para o mundo`,
      `seuProjeto.lancamento(); // Site no ar!`
    ];

    setCodeLines(lines);
  }, []);

  // Animate code typing effect
  useEffect(() => {
    if (codeLines.length === 0) return;

    // Start from the beginning when we reach the end
    if (currentLine >= codeLines.length) {
      const resetTimer = setTimeout(() => {
        setCurrentLine(0);
      }, 3000); // Wait 3 seconds before resetting
      return () => clearTimeout(resetTimer);
    }

    // Typing effect with variable timing based on line content
    const timer = setTimeout(() => {
      setCurrentLine(prev => prev + 1);
    },
      // Add different timing based on line content or position
      codeLines[currentLine]?.includes('//') ? 900 : // Comments display longer
        codeLines[currentLine]?.trim() === '' ? 600 :    // Empty lines are quicker
          codeLines[currentLine]?.includes('lancamento') ? 1500 : // Dramatic pause at launch
            currentLine >= codeLines.length - 3 ? 1500 :     // Slow down at the end
              800);                                           // Regular lines

    return () => clearTimeout(timer);
  }, [currentLine, codeLines]);

  return (
    <motion.div
      variants={variants}
      className="col-span-12 md:col-span-8 row-span-1"
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <Card className="h-full overflow-hidden border-secondary-700/30 bg-gradient-to-br from-black to-zinc-900 p-0">
        <div className="h-full flex flex-col relative">
          <div className="flex items-center bg-zinc-900 px-4 py-2 border-b border-zinc-800">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="mx-auto text-xs text-zinc-400">web-development.js</div>
          </div>

          <div className="flex-1 p-4 md:p-6 font-mono text-xs md:text-sm overflow-hidden max-h-72 md:max-h-none">
            <div className="relative overflow-x-auto">
              {codeLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{
                    opacity: index <= currentLine ? 1 : 0,
                    x: index <= currentLine ? 0 : -10
                  }}
                  transition={{ duration: 0.5 }}
                  className={cn(
                    "whitespace-pre text-nowrap",
                    line.includes("//") ? "text-zinc-500" : "",
                    line.includes("function") ? "text-primary-400" : "",
                    line.includes("const ") ? "text-primary-300" : "",
                    line.includes('"') || line.includes("'") ? "text-secondary-300" : "",
                    line.includes("return") ? "text-primary-400" : "",
                    line.includes("lancamento") ? "text-primary-300 font-semibold" : ""
                  )}
                >
                  {line || "\u00A0"}
                </motion.div>
              ))}
              <motion.div
                className="absolute bottom-0 left-0 w-2 h-4 bg-primary-400"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </div>
          </div>

          <div className="p-4 md:p-6 border-t border-zinc-800">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
              <div className="w-full md:w-auto">
                <h3 className="text-lg md:text-xl font-semibold">Web Development</h3>
                <p className="text-xs md:text-sm text-zinc-400 mb-2 md:mb-0">
                  Sites responsivos e aplicações web com foco em UX e performance
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: currentLine >= codeLines.length - 3 ? 1 : 0,
                  scale: currentLine >= codeLines.length - 3 ? 1 : 0.9
                }}
                transition={{ duration: 0.5 }}
                className="bg-primary-800/50 rounded-lg px-3 py-1 md:px-4 md:py-2 self-start md:self-center order-3 md:order-2 w-full md:w-auto"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-xs md:text-sm text-primary-300 font-mono">Site lançado com sucesso!</span>
                </div>
              </motion.div>

              <Link
                href="/servicos/web-development"
                className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-primary-800/50 rounded-full hover:bg-primary-800 transition-colors ml-auto order-2 md:order-3 mt-0 md:ml-0 self-start"
              >
                <ArrowUpRight size={14} className="text-primary-300" />
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}