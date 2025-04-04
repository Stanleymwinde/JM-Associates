import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import { BottomNav, MainNav, TopNav } from "@/components/ui/navbar";
import { BottomFooter, MainFooter } from "@/components/ui/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Whatsapp from "@/components/Whatsapp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JM Associates",
  description:
    "We are a consultancy firm that offers professional services in Audit, Tax, Consulting, and Financial advisory to public and private clients in Africa, spanning multiple industries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider>
          <TopNav />
          <MainNav />
          <BottomNav />
          {children}
          <MainFooter />
          <BottomFooter />
          <Whatsapp />
        </Provider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
