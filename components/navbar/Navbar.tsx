"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Story", href: "#story" },
  { name: "Details", href: "#details" },
  { name: "Gallery", href: "#gallery" },
  { name: "RSVP", href: "#rsvp" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Structural Header Wrapper */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#0E1719]/70 backdrop-blur-xl border-b border-[#8DD2DB]/15 transition-all duration-300">
        <nav className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          
          {/* Brand Identity Branding Logo */}
          <Link href="/">
            <h1 className="text-xl md:text-2xl font-sans font-black tracking-[0.3em] text-[#FFFFFF] cursor-pointer group">
              J <span className="text-[#FFCC47] font-serif font-light transition-transform inline-block group-hover:scale-110 duration-300">&</span> D
            </h1>
          </Link>

          {/* Inline Navigation Core Links (Desktop) */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-xs uppercase tracking-[0.25em] font-sans font-black text-[#8DD2DB] hover:text-[#FFCC47] transition-colors duration-300 group py-1.5"
              >
                {link.name}
                {/* Clean centered horizontal alignment tracking line */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#FFCC47] rounded-full transition-all duration-300 ease-out group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Primary Call To Action (Desktop with Ambient Infinite Glow Pulse) */}
          <div className="hidden md:block">
            <motion.div
              animate={{ 
                scale: [1, 1.02, 1],
                boxShadow: [
                  "0px 0px 0px rgba(255,204,71,0)", 
                  "0px 4px 20px rgba(255,204,71,0.2)", 
                  "0px 0px 0px rgba(255,204,71,0)"
                ] 
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Link 
                href="#rsvp"
                className="inline-block bg-[#FFCC47] text-[#0E1719] border border-[#FFCC47] px-8 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-black hover:bg-transparent hover:text-[#FFCC47] transition-all duration-300 ease-out"
              >
                Reserve Seat
              </Link>
            </motion.div>
          </div>

          {/* Responsive Animated Hamburger Icon Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 z-50 relative focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <span className={`w-6 h-[2px] bg-[#FFFFFF] transition-all duration-300 ease-out rounded-full ${isOpen ? "rotate-45 translate-y-[2px]" : "-translate-y-1.5"}`} />
            <span className={`w-6 h-[2px] bg-[#FFFFFF] transition-all duration-200 ease-out rounded-full my-1 ${isOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`w-6 h-[2px] bg-[#FFFFFF] transition-all duration-300 ease-out rounded-full ${isOpen ? "-rotate-45 -translate-y-[6px]" : "translate-y-1.5"}`} />
          </button>
        </nav>
      </header>

      {/* Fullscreen Mobile Flyout Panel Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden flex items-center justify-center p-6 bg-[#0E1719]/95 backdrop-blur-2xl"
          >
            {/* Dynamic Card Container Modal */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.05, ease: "easeOut" }}
              className="bg-[#44B6C5]/5 border border-[#8DD2DB]/15 rounded-3xl p-8 w-full max-w-sm flex flex-col items-center text-center space-y-8 backdrop-blur-md shadow-2xl relative overflow-hidden"
            >
              {/* Secondary background soft ambient graphic element decoration inside panel */}
              <div className="absolute top-[-50%] w-full h-[150px] bg-[#44B6C5]/10 filter blur-3xl rounded-full pointer-events-none" />

              <div className="flex flex-col items-center gap-6 w-full relative z-10">
                {links.map((link, index) => (
                  <motion.div 
                    key={link.name} 
                    initial={{ opacity: 0, y: 15 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: index * 0.05 + 0.1 }}
                    className="w-full"
                  >
                    <Link 
                      href={link.href} 
                      onClick={() => setIsOpen(false)} 
                      className="text-lg uppercase tracking-[0.25em] font-sans font-black text-[#FFFFFF] hover:text-[#FFCC47] transition-colors block py-3 border-b border-[#8DD2DB]/10"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile Specific Action Target Call To Action */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: links.length * 0.05 + 0.15 }}
                  className="w-full pt-4"
                >
                  <Link 
                    href="#rsvp" 
                    onClick={() => setIsOpen(false)} 
                    className="block w-full text-center bg-[#FFCC47] text-[#0E1719] py-4 rounded-full uppercase tracking-[0.2em] text-xs font-black shadow-lg hover:bg-[#FFCC47]/90 active:scale-[0.98] transition-all duration-200"
                  >
                    Reserve Seat
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}