// File: components/Compliance.tsx
// --------------------------------
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Compliance() {
  return (
    <section
      id="compliance"
      className="relative py-24 text-white overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/compliance1.jpg" // Replace with your actual path
          alt="Compliance Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        {/* Section Title */}
        <h2 className="text-sm uppercase tracking-widest text-cyan-300 font-bold text-center">
          Compliance
        </h2>

        <h3 className="text-3xl lg:text-4xl font-extrabold text-center mt-2">
          Compliance at Core
        </h3>

        {/* Compliance Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            "FinCEN MSB Registered",
            "OFAC & AML Screening",
            "KYC / BSA Aligned",
          ].map((c, idx) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md transition shadow-lg"
            >
              <p className="text-lg font-semibold text-white text-center">
                {c}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
