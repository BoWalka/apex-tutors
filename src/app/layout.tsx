import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apex Academy | Premium Private Tutoring for All Grades",
  description: "Your child deserves the absolute best. Personalized 1-on-1 tutoring that guarantees results. K-12 & college prep with a proven perfect-score tutor.",
  keywords: "tutor, private tutoring, SAT prep, math tutor, english tutor, science tutor, [your city] tutor",
  openGraph: {
    images: "/tutor-photo.jpg"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-background text-foreground`}>
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}