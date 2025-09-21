// File: components/Services.tsx
// -----------------------------
// "use client";
// import { motion } from "framer-motion";

// const services = [
//   {
//     title: "MSB-Bank Partnership Enablement",
//     items: [
//       "FBO account setup and management",
//       "Corporate onboarding & due diligence",
//       "Compliance reporting",
//     ],
//   },
//   {
//     title: "Cross-Border Payment Solutions",
//     items: [
//       "International wire transfers",
//       "Local payout networks",
//       "FX conversion",
//     ],
//   },
//   {
//     title: "Crypto Settlement Layer",
//     items: [
//       "Convert crypto-to-fiat securely",
//       "On/Off-ramp solutions",
//       "Treasury reconciliation",
//     ],
//   },
//   {
//     title: "Compliance & Risk Management",
//     items: [
//       "KYC/AML frameworks",
//       "Transaction monitoring",
//       "Licensing advisory",
//     ],
//   },
// ];

// export default function Services() {
//   return (
//     <section id="services" className="py-20">
//       <div className="left-0 text-green-600 font-black z-40">Services</div>
//       <div className="flex items-center justify-between gap-6">
//         <div>
//           <h2 className="text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-[#5b21b6] to-[#06b6d4] bg-clip-text text-transparent">
//             End-to-End Solutions for Banks, Fintechs & Enterprises
//           </h2>
//           <p className="text-slate-600 mt-2 text-lg">
//             Modular services tailored for regulated financial ecosystems.
//           </p>
//         </div>
//       </div>

//       <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
//         {services.map((s) => (
//           <motion.div
//             key={s.title}
//             whileHover={{ y: -6 }}
//             className="fintech-card p-6"
//           >
//             <h3 className="font-semibold text-[#5b21b6]">{s.title}</h3>
//             <ul className="mt-3 text-slate-600 list-disc list-inside">
//               {s.items.map((it) => (
//                 <li key={it}>{it}</li>
//               ))}
//             </ul>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }
















'use client';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    { title: "Payments API", desc: "Seamless integration for global businesses." },
    { title: "Treasury Dashboard", desc: "Real-time insights and reconciliations." },
    { title: "AML Screening", desc: "Built-in compliance tools." },
    { title: "Crypto-Fiat Rails", desc: "On/off ramps for enterprise crypto." },
  ];

  return (
    <section id="services" className="relative py-24 fintech-glow text-white">
      <div className="container mx-auto px-6 lg:px-10 text-center mb-16">
      <h2 className="text-sm uppercase tracking-widest text-[#ceafff] font-bold">
        Services
          </h2>
        <h2 className="text-3xl lg:text-4xl font-extrabold">
          Services Designed for Scale
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/10 hover:bg-white/20 transition"
            >
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
