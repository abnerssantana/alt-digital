import RootLayout from "@/components/RootLayout";
import "./globals.css";

export const metadata = {
  title: {
    template: "Alt Digital",
    default: "Alt Digital",
  },
};

export default function Layout({ children }) {
  return (
    <html
      lang="pt-BR"
      className="h-full bg-[#2A3F2C] text-base antialiased text-[#182623]"
    >
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
