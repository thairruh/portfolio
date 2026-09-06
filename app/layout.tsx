import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/old components/navbar"; 


export const metadata: Metadata = {
  title: "Thaira Choudhury",
  description: "Thaira's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en">
      <body className="min-h-full flex flex-col">
        
        {children}
      </body>
    </html>
  );
}
