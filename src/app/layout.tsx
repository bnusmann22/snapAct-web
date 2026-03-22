"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/footer";
import Loading from "./loading";
import { Toaster } from "@/components/ui/toaster";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <title>SnapAct - Report with Pictures</title>
        <meta
          name="description"
          content="AI-powered civic report app. Report local issues with pictures. Just like Snapchat, but takes action."
        />
        <meta name="generator" content="v0.app" />
      </head>
      <body suppressHydrationWarning className="font-sans antialiased">
        {isLoading ? (
          <div className="w-full h-screen fixed inset-0 z-50">
            <Loading />
          </div>
        ) : (
          <>
            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </>
        )}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}