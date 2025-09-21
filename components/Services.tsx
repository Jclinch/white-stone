// File: components/Services.tsx
// -----------------------------
'use client';
import { motion } from 'framer-motion';

export default function Services() {
  // ✅ Updated services to match the provided structured content
  const services = [
    {
      title: "MSB-Bank Partnership Enablement",
      desc: [
        "FBO account setup and management",
        "Corporate onboarding & due diligence support",
        "Compliance reporting and oversight",
      ],
    },
    {
      title: "Cross-Border Payment Solutions",
      desc: [
        "International wire transfers",
        "Local payout networks in key regions",
        "FX conversion with competitive rates",
      ],
    },
    {
      title: "Crypto Settlement Layer",
      desc: [
        "Convert crypto-to-fiat securely",
        "On/Off-ramp solutions for corporates",
        "Treasury crypto settlement and reconciliation",
      ],
    },
    {
      title: "Compliance & Risk Management",
      desc: [
        "KYC/AML/BSA compliance frameworks",
        "Transaction monitoring and reporting",
        "Licensing advisory and ongoing governance",
      ],
    },
  ];

  return (
    <section id="services" className="relative py-24 fintech-glow text-white">
      <div className="container mx-auto px-6 lg:px-10 text-center mb-16">
        {/* ✅ Updated tagline and headline */}
        <h2 className="text-sm uppercase tracking-widest text-[#ceafff] font-bold">
          Services
        </h2>
        <h2 className="text-3xl lg:text-4xl font-extrabold">
          End-to-End Solutions for Banks, Fintechs & Enterprises.
        </h2>

        {/* ✅ Grid rendering the detailed services */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/10 hover:bg-white/20 transition text-left"
            >
              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-slate-200">
                {s.desc.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
