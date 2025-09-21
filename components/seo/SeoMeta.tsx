import Head from "next/head";

export default function SeoMeta() {
  return (
    <Head>
      <title>White Stone Corp | Global Money Movement</title>
      <meta
        name="description"
        content="White Stone Corp is a FinCEN-registered MSB providing cross-border payments, crypto settlements, FBO account structures, and B2B treasury solutions."
      />
      <meta
        name="keywords"
        content="money services business, cross-border payments, FBO accounts, crypto settlements, business payments, MSB compliance"
      />
      <meta name="author" content="White Stone Corp" />
      <meta property="og:title" content="White Stone Corp | Global Money Movement" />
      <meta
        property="og:description"
        content="Secure, compliant, and future-ready payments infrastructure for banks, fintechs, and corporates."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://whitestonecorp.xyz" />
      <meta property="og:image" content="/WS-logo.png" />
    </Head>
  );
}
