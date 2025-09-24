// File: app/layout.tsx
// -----------------------------
"use client";
import "./globals.css";
import type { ReactNode } from "react";
import Nav from "../components/Nav";
import Cursor from "../components/Cursor";
import ScrollToTop from "../components/ScrollToTop";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="relative bg-slate-50 text-slate-900 antialiased">
        <Cursor />
        <Nav />
  {children}
  <ScrollToTop />
      </body>
    </html>
  );
}
