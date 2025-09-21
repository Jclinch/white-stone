// File: components/About.tsx
// -----------------------------
// File: components/About.tsx
// -----------------------------
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function About() {
  const timeline = [
    {
      title: "Compliance First",
      desc: "AML, KYC, and BSA aligned flows with OFAC screening and monitoring.",
      img: "/images/compliance.jpg",
    },
    {
      title: "Treasury Solutions",
      desc: "Corporate onboarding, reconciliation, and multi-currency settlement.",
      img: "/images/treasury.jpg",
    },
    {
      title: "Crypto Integration",
      desc: "Secure crypto-to-fiat rails for enterprise settlements and custodial flows.",
      img: "/images/crypto.jpg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll position to update dots
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.clientWidth;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="relative py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-[#5b21b6] font-bold">
            About
          </h2>
          <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mt-2">
            Trusted Infrastructure for Global Payments
          </h3>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Founded in Montana, White Stone Corp is an MSB registered with FinCEN. 
            We build compliant payment infrastructure that supports U.S. regulatory obligations, 
            corporate treasury needs, and MSB bank partnerships.
          </p>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative">
          <div
            ref={containerRef}
            className="overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
          >
            <div className="flex items-start md:items-center justify-start md:justify-between gap-12 md:gap-8 relative min-w-max md:min-w-0 px-2 pb-6">
              {/* Connector line (visible only on md+) */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#5b21b6] to-[#06b6d4] -z-10"></div>

              {timeline.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 flex flex-col items-center text-center w-72 snap-center"
                >
                  {/* Timeline Dot */}
                  <div className="w-6 h-6 rounded-full fintech-gradient mb-6"></div>

                  {/* Image Card */}
                  <div className="w-full h-40 relative rounded-xl overflow-hidden shadow-lg mb-4">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <h4 className="text-xl font-semibold text-[#5b21b6]">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-slate-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Scroll indicators (mobile only) */}
          <div className="flex justify-center mt-4 md:hidden">
            {timeline.map((_, idx) => (
              <span
                key={idx}
                className={`mx-1 h-2 w-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'bg-[#5b21b6] w-4' : 'bg-slate-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
