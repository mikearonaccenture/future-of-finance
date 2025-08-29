import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "AI-Powered Future of Finance | Transform Your Finance Function",
    template: "%s | Future of Finance"
  },
  description: "Discover how AI transforms finance operations. Interactive prototypes showcase next-generation FP&A, automated reporting, intelligent forecasting, and data-driven decision making.",
  keywords: [
    "AI Finance",
    "Artificial Intelligence Finance",
    "FP&A Automation",
    "Financial Planning Analysis",
    "AI Forecasting",
    "Automated Financial Reporting",
    "Finance Transformation",
    "Digital Finance",
    "Machine Learning Finance",
    "CFO Technology",
    "Finance Analytics",
    "Business Intelligence"
  ],
  authors: [{ name: "Future of Finance Team" }],
  creator: "Future of Finance",
  publisher: "Future of Finance",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://future-of-finance.com",
    siteName: "Future of Finance",
    title: "AI-Powered Future of Finance | Transform Your Finance Function",
    description: "Discover how AI transforms finance operations. Interactive prototypes showcase next-generation FP&A, automated reporting, intelligent forecasting, and data-driven decision making.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Future of Finance - AI Transformation"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Future of Finance",
    description: "Discover how AI transforms finance operations with interactive prototypes",
    images: ["/images/og-image.png"],
    creator: "@futureoffinance"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    }
  },
  alternates: {
    canonical: "https://future-of-finance.com"
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Future of Finance",
              "description": "AI-Powered Future of Finance - Transform Your Finance Function",
              "url": "https://future-of-finance.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://future-of-finance.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Future of Finance",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://future-of-finance.com/images/logo.png"
                }
              }
            })
          }}
        />
      </body>
    </html>
  );
}
