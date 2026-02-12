import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";


const titleFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-title",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Balanced Body | Sports Rehab",
  description: "Sports rehab focused on helping active people move and play pain-free.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${titleFont.variable} relative`}>
        <Navbar />

        <main className="min-h-[70vh]">{children}</main>

        <Footer />
        <FloatingContact />

      </body>
    </html>
  );
}
