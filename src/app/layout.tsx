import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/layout/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Docure - AI-Powered Health Platform",
  description: "Your personal AI Health Assistant for accurate health decisions and preventive care. Gain AI-driven health insights and validate them with leading doctors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.variable} font-sans min-h-screen bg-background antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
