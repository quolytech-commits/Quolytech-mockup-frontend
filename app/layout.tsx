import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-plus-jakarta-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Quoly Tech | Premium Software Solutions",
  description: "Custom software, AI solutions, automation, cloud systems, and digital transformation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${plusJakartaSans.variable} ${outfit.variable} ${plusJakartaSans.className}`}>
        {children}
      </body>
    </html>
  );
}
