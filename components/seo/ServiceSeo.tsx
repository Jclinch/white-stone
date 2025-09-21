// app/components/SEO.tsx
"use client";

import Head from "next/head";

type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string[];
  url?: string;
  image?: string;
};

export default function SEO({
  title = "White Stone Corp - Compliant Global Payments",
  description = "White Stone Corp provides end-to-end compliant payment infrastructure including MSB-bank partnerships, cross-border payments, crypto settlement, and risk management.",
  keywords = [
    "B2B payments",
    "money transmitter solutions",
    "FBO banking",
    "crypto MSB",
    "regulated settlement",
    "compliance services",
  ],
  url = "https://whitestonecorp.xyz",
}: SEOProps) {
  return (
    <Head>
      {/* ✅ Standard SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
        <meta name="author" content="White Stone Corp" />

<link rel="canonical" href={url || "https://whitestonecorp.xyz"} />
    </Head>
  );
}
