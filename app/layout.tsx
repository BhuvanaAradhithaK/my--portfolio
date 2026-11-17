import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Bhuvana Aradhitha K | Portfolio",
  description: "Personal portfolio of Bhuvana Aradhitha K — an enthusiastic and curious developer passionate about Java, C, and Python.",
  keywords: ["Bhuvana Aradhitha K", "Portfolio", "Software Developer", "Java", "C", "Python", "Student Developer"],
  authors: [{ name: "Bhuvana Aradhitha K" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-gothic-bg text-zinc-100 antialiased min-h-screen selection:bg-red-950 selection:text-white">
        {children}
      </body>
    </html>
  );
}
