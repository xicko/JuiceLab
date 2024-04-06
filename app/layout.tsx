import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Background from "@/components/Background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Juice Lab & Co",
  description: ".",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        <Background/>
        {children}
      </body>
    </html>
  );
}
