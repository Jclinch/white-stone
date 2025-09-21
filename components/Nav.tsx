// File: components/Nav.tsx
// -------------------------
'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Nav() {
  const links = ["About", "Services", "Industries", "Compliance", "Contact"];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200"
    >
      <div className="container mx-auto px-6 lg:px-10 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="">
         <Image
            src="/WS-logo.png"
            alt="White Stone Corp Logo"
            width={100}
            height={40}
            className="object-contain"
            priority
          />
         {/* White Stone Corp */}
         {/* <span>White Stone Corp</span> */}
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 text-slate-700 font-medium">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-[#5b21b6] transition"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 right-0 w-64 h-screen bg-white shadow-xl md:hidden flex flex-col p-6 gap-6"
          >
            {links.map((link, idx) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-lg font-medium text-slate-700 hover:text-[#5b21b6] transition"
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
