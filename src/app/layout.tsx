import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Providers from "@/components/Providers";

import { Toaster } from "@/components/ui/toaster"
import AppLoader from "@/components/AppLoader";
import { Suspense } from "react";
import ClientWrapper from "@/components/ClientWrapper";
import ClientWrapperN from "@/components/ClientWrapper";

const myfont = Inter({
  subsets: ["latin"],
  weight: ["100", "300", "700"],
});

export const metadata: Metadata = {
  title: "Todo Web App with Socket",
  description: "Developed by Fahad Abdul Qayyum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        {/* Link to Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={myfont.className}>
        <Providers>
          <span className="relative">
            <span className="fixed top-0 left-0 right-0 z-50">
              {/* <Navbar /> */}
              <Suspense fallback={<div>Loading...</div>}>
                <ClientWrapperN>{children}</ClientWrapperN>
            </Suspense>
            </span>
            <div className="mt-24">
              <Suspense fallback={<div>Loading...</div>}>
                {children}
              </Suspense>
            </div>
            <AppLoader />
            <Toaster />
            <Suspense fallback={<div>Loading...</div>}>
                <ClientWrapper>{children}</ClientWrapper>
            </Suspense>
            </span>
        </Providers>
      </body>
    </html >
  );
}