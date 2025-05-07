"use client"; // Mark this file as a Client Component

import { usePathname } from "next/navigation";
import Navbar from "../Navbar";

export default function ClientWrapperN({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Get the current route

  return (
    <>
      {/* {children} */}
      {pathname !== "/again" && <Navbar />}
    </>
  );
}