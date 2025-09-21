// File: components/Industries.tsx
// --------------------------------
"use client";

import { motion } from "framer-motion";
// import { desc } from "framer-motion/client";
import { Landmark, Building2, Banknote, Bitcoin } from "lucide-react";

export default function Industries() {
  const industries = [
    {
      name: "Fintechs",
      icon: Landmark,
      desc: "Seamless integration of money movement & compliance.",
    },
    {
      name: "Enterprises",
      icon: Building2,
      desc: "Corporate treasury, global payroll, and cross-border vendor payments.",
    },
    {
      name: "Banks & Correspondent Institutions",
      icon: Banknote,
      desc: "Partnering on MSB FBO accounts.",
    },
    {
      name: "Crypto Businesses",
      icon: Bitcoin,
      desc: "Fiat settlement, regulatory onboarding, and MSB licensing support.",
    },
  ];

  return (
    <section id="industries" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-10 text-center">
        {/* Component Title */}
        <h2 className="text-sm uppercase tracking-widest text-[#5b21b6] font-bold">
          Industries
        </h2>
        <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mt-2">
          Custom Solutions for Regulated Ecosystems
        </h3>

        {/* Industry Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {industries.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                {/* Icon */}
                <div className="w-20 h-20 flex items-center justify-center rounded-full fintech-gradient text-white mb-6">
                  <Icon size={40} />
                </div>
                {/* Label */}
                <h4 className="text-lg font-semibold text-slate-800">
                  {item.name}
                </h4>
                <div className="text-sm font-semibold text-slate-600 pt-2">
                  {item.desc}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
