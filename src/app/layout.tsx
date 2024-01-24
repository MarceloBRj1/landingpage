import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./_components/theme-provider";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Next Dev",
  description: "praticando next com shadcn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={cn('min-h-screen bg-background font-mono antialiased')}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}  
        </ThemeProvider>
      </body>
    </html>
  );
}
