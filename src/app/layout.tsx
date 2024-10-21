import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { lato, playfair_display } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Cheers & Chills",
  description: "Create Your Perfect Pour",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${playfair_display.variable} ${lato.variable}`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
