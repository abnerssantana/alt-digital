import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";

import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const fontSans = FontSans({ 
  subsets: ["latin"], 
  variable: "--font-sans" 
});

// Adicionar fonte Satoshi (você precisará ter o arquivo de fonte)
const fontSatoshi = localFont({
  src: [
    {
      path: '../../public/fonts/Satoshi-Variable.woff2',
      weight: '300 900',
      style: 'normal',
    }
  ],
  variable: '--font-satoshi',
});

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Agência digital",
    "Marketing digital",
    "Design",
    "Branding",
    "Social media",
    "Web development",
    "Vídeo",
    "Fotografia",
    "Brasil",
  ],
  authors: [
    {
      name: "Alt Digital",
      url: siteConfig.url,
    },
  ],
  creator: "Alt Digital",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@altdigital",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${fontSans.variable} ${fontSatoshi.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}