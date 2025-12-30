import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { Navbar } from "./components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unoptimized | Isak's Blog",
  description: "Notes on systems, endurance, and the cost of certainty.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-slate-950 text-slate-50 min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          <Navbar />

          {/* 'flex-grow' gör att main tar upp allt ledigt utrymme */}
          <main className="max-w-5xl w-full mx-auto py-10 px-6 grow">
            {children}
          </main>

          <footer className="w-full py-10 px-6 border-t border-slate-900">
            <div className="max-w-3xl mx-auto text-center text-slate-500 text-sm font-mono italic">
              © {new Date().getFullYear()} Unomptimized | Built for the long run
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
