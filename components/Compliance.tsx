// File: components/Compliance.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ComplianceSEO from "./seo/ComplianceSEO";

export default function Compliance() {
  const compliancePoints = [
    "AML/KYC Standards under the Bank Secrecy Act (BSA)",
    "OFAC Sanctions Screening",
    "Transaction Monitoring & SAR Filing",
    "State-Level Money Transmitter Licensing (as applicable)",
    "FBO Account Structuring & Reporting in line with U.S. banking expectations",
  ];

  return (
    <>
      {/* ✅ SEO component for this section */}
      <ComplianceSEO />

      <section
        id="compliance"
        className="relative py-24 text-white overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/compliance1.jpg"
            alt="Compliance Background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-10 relative z-10">
          {/* Section Title */}
          <h2 className="text-sm uppercase tracking-widest text-cyan-300 font-bold text-center">
            Compliance
          </h2>

          <h3 className="text-3xl lg:text-4xl font-extrabold text-center mt-2">
            Transparency. Security. Regulatory Confidence.
          </h3>

          <p className="mt-6 text-lg text-slate-200 text-center max-w-3xl mx-auto">
            As a FinCEN-registered MSB, White Stone Corp ensures compliance with
            U.S. regulatory frameworks and banking expectations. Our
            compliance-first approach guarantees that banks, regulators, and
            clients trust our infrastructure.
          </p>

          {/* Compliance Cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {compliancePoints.map((point, idx) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md transition shadow-lg"
              >
                <p className="text-lg font-medium text-white text-center">
                  {point}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
