// File: components/Contact.tsx
// -----------------------------
'use client';

import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-10 text-center">
        {/* Section Title */}
        <h2 className="text-sm uppercase tracking-widest text-[#5b21b6] font-bold">
          Contact Us
        </h2>

        <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mt-2">
          Get in Touch
        </h3>

        <p className="mt-4 text-lg text-slate-600 max-w-xl mx-auto">
          Have questions or want to collaborate? Reach out to us directly via email.
        </p>

        {/* Large Email Icon */}
        <motion.a
          href="mailto:compliance@whitestonecorp.xyz"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 inline-flex items-center justify-center w-32 h-32 rounded-full fintech-gradient text-white shadow-xl"
        >
          <Mail size={56} />
        </motion.a>

        {/* Email Label */}
        <p className="mt-6 text-lg font-semibold text-slate-700">
          compliance@whitestonecorp.xyz
        </p>
      </div>
    </section>
  );
}
