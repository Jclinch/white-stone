// File: components/About.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const timeline = [
    {
      title: "U.S. regulatory obligations (AML, KYC, BSA)",
      desc: "",
      img: "/images/compliance.jpg",
    },
    {
      title: "Corporate treasury and settlement needs",
      desc: "",
      img: "/images/treasury.jpg",
    },
    {
      title: "MSB–Bank partnerships, including FBO accounts",
      desc: "",
      img: "/images/fbo.jpg",
    },
    {
      title: "Integration of crypto-to-fiat settlement layers",
      desc: "",
      img: "/images/crypto.jpg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll position to update dots (mobile only)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.clientWidth;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="about" className="relative py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-[#5b21b6] font-bold">
            About Us
          </h2>
          <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mt-2">
            Trusted Infrastructure for Global Payments
          </h3>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            White Stone Corp is a U.S.-registered Money Services Business (MSB),
            founded in Montana and registered with FinCEN (Financial Crimes
            Enforcement Network). We specialize in cross-border payments,
            digital asset settlements, and B2B treasury solutions. Partnering
            with banks, fintechs, and corporates, we deliver
            regulatory-compliant FBO (For Benefit Of) account structures,
            fiat–crypto payment rails, and global payout capabilities. Our core
            expertise lies in building compliant payment infrastructure that
            supports seamless, secure, and scalable financial operations.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Mobile: scrollable row */}
          <div
            ref={containerRef}
            className="flex md:hidden overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide gap-6 px-2 pb-6"
          >
            {timeline.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="flex-shrink-0 flex flex-col items-center text-center w-72 snap-center"
              >
                <div className="w-6 h-6 rounded-full fintech-gradient mb-6"></div>
                <div className="w-full h-40 relative rounded-xl overflow-hidden shadow-lg mb-4">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold text-[#5b21b6]">
                  {item.title}
                </h4>
                <p className="mt-2 text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Desktop: grid, no scroll */}
          <div className="hidden md:grid md:grid-cols-4 gap-8 relative">
            {/* Connector line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#5b21b6] to-[#06b6d4] -z-10"></div>

            {timeline.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-6 h-6 rounded-full fintech-gradient mb-6"></div>
                <div className="w-full h-40 relative rounded-xl overflow-hidden shadow-lg mb-4">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold text-[#5b21b6]">
                  {item.title}
                </h4>
                <p className="mt-2 text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Scroll indicators (mobile only) */}
          <div className="flex justify-center mt-4 md:hidden">
            {timeline.map((_, idx) => (
              <span
                key={idx}
                className={`mx-1 h-2 w-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? "bg-[#5b21b6] w-4" : "bg-slate-300"
                }`}
              />
            ))}
          </div>

          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            Our leadership team brings decades of fintech and compliance
            expertise, ensuring operational excellence and regulatory
            confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
