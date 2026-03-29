import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Recipes",
  description: "Recipe app",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <div className="flex min-h-screen flex-col justify-between">
          <header className="sticky top-0 z-50 w-full border-b border-border">
            <div className="glass-navbar flex w-full items-center justify-center py-4">
              <h1
                className={`${playfair.className} text-center text-2xl font-semibold tracking-tight`}
              >
                RecipeBook
              </h1>
            </div>
          </header>

          <main className="flex-1 py-12">
            <div className="flex w-full flex-col gap-6 px-4">
              <section className="surface-card max-w-5xl w-full mx-auto">
                {children}
              </section>
            </div>
          </main>

          <footer className="sticky bottom-0 border-t border-border bg-background/80 py-6 text-center text-sm text-muted-foreground backdrop-blur">
            © 2026 RecipeBook
          </footer>
        </div>
      </body>
    </html>
  );
}
