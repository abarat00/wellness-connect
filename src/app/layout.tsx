import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import ChatWidget from "@/components/chat/ChatWidget";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wellness Connect",
  description: "Il tuo benessere, a portata di click.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={manrope.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="antialiased font-display bg-background-light text-text-main">
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
