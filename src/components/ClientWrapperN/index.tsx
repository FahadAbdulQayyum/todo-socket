// ClientWrapper.tsx
"use client"; // Mark this file as a Client Component

import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Get the current route

  return (
    <>
      {/* {children} */}
      {pathname !== "/again" && <Footer />}
    </>
  );
}