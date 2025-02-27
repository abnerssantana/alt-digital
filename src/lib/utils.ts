import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Une classes do Tailwind resolvendo conflitos
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Formata uma data para o formato brasileiro DD/MM/YYYY
 */
export function formatDate(date) {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return new Date(date).toLocaleDateString('pt-BR', options);
}

/**
 * Trunca um texto para o número máximo de palavras
 */
export function truncateText(text, maxWords = 25) {
  const words = text.split(' ');
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(' ') + '...';
}

/**
 * Gera um slug a partir de um texto
 */
export function slugify(text) {
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
}

/**
 * Obtém as iniciais de um nome
 */
export function getInitials(name) {
  const names = name.split(' ');
  
  if (names.length === 1) return names[0].charAt(0);
  
  return names[0].charAt(0) + names[names.length - 1].charAt(0);
}