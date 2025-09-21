import Head from "next/head";

export default function AboutSeo() {
  return (
    <Head>
      <title>
        About White Stone Corp | Trusted Global Payments Infrastructure
      </title>
      <meta
        name="description"
        content="Founded in Montana, White Stone Corp is FinCEN-registered and specializes in compliant payment infrastructure including AML, KYC, BSA, FBO accounts, and crypto-fiat settlements."
      />
      <meta
        name="keywords"
        content="MSB USA, FinCEN registered, AML compliance, BSA compliance, FBO accounts, regulated crypto payments"
      />
      <meta property="og:title" content="About White Stone Corp" />
      <meta
        property="og:description"
        content="Trusted Infrastructure for Global Payments. FinCEN-registered MSB with AML, KYC, and BSA aligned solutions."
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/WS-logo.png" />
    </Head>
  );
}
