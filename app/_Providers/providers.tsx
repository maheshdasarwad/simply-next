"use client"

import { ThemeProvider } from "../context/ThemeContext";
import Header from "../(common)/header/header";
import Footer from "../(common)/footer/footer";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
}



