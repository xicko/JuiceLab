import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
//const CustomScroll = dynamic(() => import("@/components/CustomScroll"), { ssr: false });//


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

        
          {children}

          <Footer/>
        
      </body>
    </html>
  );
}
