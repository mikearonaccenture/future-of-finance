import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Future of Finance - AI-Powered Transformation",
  description: "Interactive prototypes showcasing how artificial intelligence will transform every aspect of finance - from planning to reporting, from compliance to treasury.",
  keywords: ["AI", "Finance", "FP&A", "Forecasting", "Financial Planning", "Artificial Intelligence"],
  authors: [{ name: "Future of Finance Team" }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
