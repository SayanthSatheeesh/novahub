import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { LivePurchaseTicker } from "@/components/layout/live-purchase-ticker";
import { WhatsAppFAB } from "@/components/layout/whatsapp-fab";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NovaHub - Digital Software Subscriptions",
  description: "Your one-stop destination for genuine software subscriptions at the best prices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html
        lang="en"
        className={`${outfit.variable} font-sans h-full antialiased light`}
      >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/85 dark:bg-[#0F0F23]/85 border-b border-slate-200 dark:border-white/10 shadow-sm transition-all">
            <AnnouncementBar />
            <Nav />
          </header>
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <LivePurchaseTicker />
          <WhatsAppFAB />
        </ThemeProvider>
      </body>
    </html>
  );
}
