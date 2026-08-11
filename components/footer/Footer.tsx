"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#F5F0EB] pt-24 pb-12 px-8 border-t border-[#C2A675]/25 relative overflow-hidden">
      <motion.div 
        animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.22, 0.12], x: [0, 15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-15%] left-[25%] w-[40%] h-[50%] rounded-full bg-[#D4B2A7] filter blur-[120px] pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1.1, 0.95, 1.1], opacity: [0.08, 0.18, 0.08], y: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[20%] w-[35%] h-[45%] rounded-full bg-[#C2A675]/30 filter blur-[100px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-[#C2A675]/30 pb-16 gap-8">
          <motion.div 
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="text-center md:text-left space-y-1"
          >
            <h2 className="text-3xl md:text-4xl font-serif italic text-[#4A121A]">
              Dan <span className="font-serif italic text-[#404734]">&</span> Rejoice
            </h2>
            <motion.p 
              animate={{ letterSpacing: ["0.35em", "0.4em", "0.35em"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="text-[10px] font-sans font-semibold text-[#404734] uppercase tracking-[0.4em]"
            >
              #Dan'sJoy2026
            </motion.p>
          </motion.div>

          <p className="text-center md:text-right text-xs md:text-sm font-sans text-[#404734]/80 max-w-xs leading-relaxed">
            Bound in love, laughter, and a shared vision for the future. Thank you for celebrating our union with us.
          </p>
        </div>

        <div className="pt-10 flex flex-col md:flex-row items-center justify-between text-[10px] tracking-[0.25em] text-[#404734]/60 font-sans font-semibold gap-4">
          <p className="uppercase">
            © {new Date().getFullYear()} DAN'SJOY. ALL RIGHTS RESERVED.
          </p>
          
          <motion.p 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-[#4A121A] tracking-[0.3em] font-serif italic text-xs uppercase"
          >
            Forever & Always.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}