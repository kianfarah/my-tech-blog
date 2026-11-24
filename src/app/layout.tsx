import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { Navbar } from "./components/navbar";
import { ThemeToggle } from "./components/theme-toggle";

export const metadata: Metadata = {
  title: "Unoptimized | Isak's Blog",
  description: "Notes on systems, endurance, and the cost of certainty.",
};

const currentYear = new Date().getFullYear();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="shell">
            <Navbar />
            <main>{children}</main>
            <footer className="site-footer">
              <span>© {currentYear} Unoptimized / built for the long run</span>
              <div className="footer-end">
                <a
                  href="https://github.com/kianfarah"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://www.strava.com/athletes/142589576"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Strava
                </a>
                <ThemeToggle />
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
