"use client";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
