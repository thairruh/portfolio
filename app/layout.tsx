import type { Metadata, Viewport} from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Thaira Choudhury",
  description: "Thaira's portfolio",
};

export const viewport: Viewport = {
  themeColor: "f6ecd9",
  viewportFit: "cover",
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
