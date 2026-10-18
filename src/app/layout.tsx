import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BUSINESS_CONFIG } from "@/config/business";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shree Bhagavanthi Travels | Taxi & Travel Services in Mulki",
  description:
    "Plan your next journey with Shree Bhagavanthi Travels. Enquire about local travel, outstation trips, family tours, and customized travel services in and around Mulki.",
  keywords: [
    "Shree Bhagavanthi Travels",
    "Taxi service in Mulki",
    "Mulki travel agency",
    "Mangalore outstation cab",
    "Udupi temple tour cab",
    "Dharmasthala taxi",
    "Airport taxi Mulki",
    "Lingappadavakadu travels",
  ],
  authors: [{ name: "Shree Bhagavanthi Travels" }],
  openGraph: {
    title: "Shree Bhagavanthi Travels | Taxi & Travel Services in Mulki",
    description:
      "Comfortable and reliable taxi, outstation, temple pilgrimage, and family holiday travel services across Mulki, Mangaluru, and Udupi.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: BUSINESS_CONFIG.name,
    description: BUSINESS_CONFIG.shortDescription,
    telephone: BUSINESS_CONFIG.phones.map((p) => p.number),
    address: {
      "@type": "PostalAddress",
      streetAddress: `${BUSINESS_CONFIG.address.landmark}, ${BUSINESS_CONFIG.address.street}`,
      addressLocality: BUSINESS_CONFIG.address.city,
      postalCode: BUSINESS_CONFIG.address.pincode,
      addressRegion: BUSINESS_CONFIG.address.state,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "13.0903",
      longitude: "74.7937",
    },
    priceRange: "$$",
    areaServed: BUSINESS_CONFIG.operatingAreas,
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 selection:bg-[#FFD900] selection:text-slate-900">
        {children}
      </body>
    </html>
  );
}
