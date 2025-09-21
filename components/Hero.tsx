// File: components/Hero.tsx
// -----------------------------
// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function Hero() {
//   return (
//     <section id="hero" className="relative pt-32 pb-20">
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <motion.div
//           initial={{ x: -200, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="absolute -left-24 -top-12 w-96 h-96 rounded-full fintech-gradient blur-3xl opacity-30"
//         />
//         <motion.div
//           initial={{ x: 200, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 1, delay: 0.2 }}
//           className="absolute -right-24 bottom-10 w-80 h-80 rounded-3xl bg-ws-ice/70 blur-2xl rotate-12"
//         />
//       </div>

//       <div className="container mx-auto px-6 lg:px-8 relative">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[#5b21b6] to-[#06b6d4] bg-clip-text text-transparent">
//               Global Money Movement. Secure. Compliant. Future-Ready.
//             </h1>
//             <p className="mt-4 text-lg text-slate-600 max-w-xl">
//               White Stone Corp is a FinCEN-registered MSB offering cross-border
//               payments, digital asset settlements, and B2B treasury solutions
//               for banks, fintechs, and corporates.
//             </p>

//             <div className="mt-6 flex gap-4">
//               <a
//                 href="#contact"
//                 className="inline-flex items-center gap-3 px-6 py-3 rounded-md fintech-gradient text-white font-medium shadow-lg"
//               >
//                 Get in touch
//               </a>
//               <a
//                 href="#services"
//                 className="inline-flex items-center gap-3 px-6 py-3 rounded-md border border-slate-200 text-slate-800 bg-white/60 backdrop-blur-sm hover:shadow"
//               >
//                 Our services
//               </a>
//             </div>
//           </motion.div>

//       {/* Right-side illustration with glass cards */}
//       <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} className="relative">
//         <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
//           <Image
//             src="https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1200&q=80"
//             alt="Global payments illustration"
//             width={600}
//             height={400}
//             className="w-full h-80 object-cover"
//           />
//         </div>
//         <div className="mt-6 grid grid-cols-2 gap-4">
//           <div className="p-4 rounded-lg bg-white/60 backdrop-blur-lg border border-slate-200 shadow-md">
//             <div className="text-xs text-slate-500">Registered</div>
//             <div className="font-semibold">FinCEN MSB</div>
//           </div>
//           <div className="p-4 rounded-lg bg-white/60 backdrop-blur-lg border border-slate-200 shadow-md">
//             <div className="text-xs text-slate-500">Capability</div>
//             <div className="font-semibold">FBO Account Structures</div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   </div>
// </section>

//   );
// }



'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden fintech-glow">
      {/* Floating orb */}
      <motion.div
        className="absolute w-80 h-80 bg-white/20 rounded-full blur-3xl z-50"
        animate={{ y: [0, -40, 0], x: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl lg:text-7xl font-extrabold text-white leading-tight"
        >
          Powering the Future of{" "}
          <span className="bg-gradient-to-r from-yellow-300 to-cyan-400 bg-clip-text text-transparent">
            Global Payments
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-lg text-slate-100"
        >
          Compliant, scalable, and innovative infrastructure for enterprises worldwide.
        </motion.p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 rounded-full fintech-gradient text-white shadow-lg hover:scale-105 transition">
            Get Started
          </button>
          <button className="px-6 py-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
