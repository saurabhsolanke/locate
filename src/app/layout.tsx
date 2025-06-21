import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NBFC Bank - Digital Financial Services & Lending Solutions",
  description: "Experience seamless digital banking with our NBFC services. Get instant loans, investment solutions, and comprehensive financial services tailored to your needs.",
  keywords: ["NBFC", "digital banking", "instant loans", "investment solutions", "financial services", "lending", "digital finance", "banking"],
  authors: [{ name: "NBFC Bank Team" }],
  creator: "NBFC Bank",
  publisher: "NBFC Bank",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://your-domain.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "NBFC Bank - Digital Financial Services & Lending Solutions",
    description: "Experience seamless digital banking with our NBFC services. Get instant loans, investment solutions, and comprehensive financial services tailored to your needs.",
    url: 'https://your-domain.com',
    siteName: 'NBFC Bank',
    images: [
      {
        url: '/1708076776789.png',
        width: 1200,
        height: 630,
        alt: 'NBFC Bank - Digital Financial Services & Lending Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "NBFC Bank - Digital Financial Services & Lending Solutions",
    description: "Experience seamless digital banking with our NBFC services. Get instant loans, investment solutions, and comprehensive financial services tailored to your needs.",
    images: ['/1708076776789.png'],
    creator: '@nbfcbank',
    site: '@nbfcbank',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'finance',
  classification: 'Financial Services',
  other: {
    'theme-color': '#3B82F6',
    'color-scheme': 'light dark',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'NBFC Bank',
    'application-name': 'NBFC Bank',
    'msapplication-TileColor': '#3B82F6',
    'msapplication-config': '/browserconfig.xml',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
