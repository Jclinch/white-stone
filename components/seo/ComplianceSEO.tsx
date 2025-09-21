// File: components/seo/ComplianceSEO.tsx
"use client";
import Head from "next/head";

export default function ComplianceSEO() {
  return (
    <Head>
      <title>Compliance | White Stone Corp</title>
      <meta
        name="description"
        content="White Stone Corp ensures AML/KYC, BSA compliance, OFAC screening, and regulated FBO banking structures as a FinCEN-registered MSB."
      />
      <meta
        name="keywords"
        content="MSB compliance, AML/KYC standards, BSA compliance, FBO banking, crypto regulation, U.S. money transmitter"
      />

      {/* Open Graph */}
      <meta property="og:title" content="Compliance | White Stone Corp" />
      <meta
        property="og:description"
        content="Transparency. Security. Regulatory Confidence. White Stone Corp is a FinCEN-registered MSB ensuring compliance with AML, KYC, BSA, and banking requirements."
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/images/compliance1.jpg" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Compliance | White Stone Corp" />
      <meta
        name="twitter:description"
        content="White Stone Corp provides compliance-first infrastructure for AML, KYC, BSA, and FBO banking."
      />
      <meta name="twitter:image" content="/images/compliance1.jpg" />
    </Head>
  );
}
