import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "Amor Dei Ministries",
  description: "Sacred Telugu Christian songs archive for worship and devotion",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
     <body
  className={`${inter.variable} ${sora.variable} antialiased bg-[#eef2f5] dark:bg-[#0a0a0c] text-slate-900 dark:text-white transition-colors duration-500`}
>
  

  {children}
</body>
    </html>
  );
}

