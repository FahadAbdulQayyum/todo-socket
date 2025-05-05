import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import UpperBanner from "@/components/UpperBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Providers from "@/components/Providers";

import { Toaster } from "@/components/ui/toaster"
import AppLoader from "@/components/AppLoader";

const myfont = Inter({
  subsets: ["latin"],
  weight: ["100", "300", "700"],
});

export const metadata: Metadata = {
  title: "User Management Q-Commerce",
  description: "Developed by Fahad Abdul Qayyum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myfont.className}>
        <Providers>
          <span className="relative">
            <span className="fixed top-0 left-0 right-0 z-50">
              <UpperBanner />
              <Navbar />
            </span>
            <div className="mt-24">
              {children}
            </div>
            <AppLoader />
            <Toaster />
            <Footer />
          </span>
        </Providers>
      </body>
    </html >
  );
}