"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Our Story", href: "#story" },
  { name: "Details", href: "#details" },
  { name: "Schedule", href: "#schedule" },
  { name: "Gallery", href: "#gallery" },
  { name: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#F5F0EB]/95 backdrop-blur-md border-b border-[#C2A675]/20 transition-all duration-300">
        <nav className="max-w-7xl mx-auto px-8 py-3.5 flex items-center justify-between">
          
          {/* Logo Monogram */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif italic text-2xl font-normal text-[#4A121A]">D</span>
            <span className="text-xs text-[#C2A675] font-serif">|</span>
            <span className="font-serif italic text-2xl font-normal text-[#4A121A]">R</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#404734] hover:text-[#4A121A] transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Top Vintage Badge CTA (Inspiration from top-right badge in Image 1) */}
          <div className="hidden md:block">
            <Link 
              href="#rsvp"
              className="inline-block bg-[#404734] text-[#F5F0EB] px-6 py-2.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-semibold border border-[#C2A675]/30 hover:bg-[#4A121A] transition-colors duration-300"
            >
              RSVP
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#4A121A] text-xs uppercase tracking-widest font-semibold"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-[57px] bg-[#F5F0EB] border-b border-[#C2A675]/30 p-8 z-40 md:hidden flex flex-col items-center space-y-6 shadow-xl"
          >
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-xs uppercase tracking-[0.2em] font-medium text-[#404734] hover:text-[#4A121A]"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="#rsvp" 
              onClick={() => setIsOpen(false)}
              className="bg-[#4A121A] text-[#F5F0EB] px-8 py-3 rounded-full text-xs uppercase tracking-widest font-semibold"
            >
              RSVP Form
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}