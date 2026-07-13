"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#0E1719] pt-24 pb-12 px-8 border-t border-[#8DD2DB]/10 relative overflow-hidden">
      
      {/* Dynamic dual-layered continuous ambient backlight loop */}
      <motion.div 
        animate={{ scale: [1, 1.15, 1], opacity: [0.02, 0.05, 0.02], x: [0, 15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-15%] left-[25%] w-[40%] h-[50%] rounded-full bg-[#FFCC47] filter blur-[120px] pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1.1, 0.95, 1.1], opacity: [0.01, 0.03, 0.01], y: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[20%] w-[35%] h-[45%] rounded-full bg-[#44B6C5] filter blur-[100px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Main Footer Block */}
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-[#8DD2DB]/10 pb-16 gap-8">
          
          {/* Continuous breathing container for names */}
          <motion.div 
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="text-center md:text-left space-y-1"
          >
            <h2 className="text-3xl font-sans font-black tracking-tight text-[#FFFFFF]">
              Daniel <span className="text-[#FFCC47] font-serif font-light">&</span> Rejoice
            </h2>
            <motion.p 
              animate={{ letterSpacing: ["0.35em", "0.4em", "0.35em"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="text-[10px] font-sans font-black text-[#8DD2DB]/70 uppercase tracking-[0.4em]"
            >
              Our Forever Begins
            </motion.p>
          </motion.div>
          
          {/* Warm, Welcoming Message Block */}
          <p className="text-center md:text-right text-sm font-sans font-medium text-[#8DD2DB]/80 max-w-xs leading-relaxed">
            Bound in love, laughter, and a shared vision for the future. Thank you for celebrating our union with us.
          </p>
        </div>

        {/* Bottom Credits & Copyright Bar */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between text-[10px] tracking-[0.25em] text-[#8DD2DB]/40 font-sans font-bold gap-4">
          <p className="uppercase">
            © {new Date().getFullYear()} DANIEL & REJOICE. ALL RIGHTS RESERVED.
          </p>
          
          <motion.p 
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-[#FFCC47] tracking-[0.3em] font-black uppercase"
          >
            Forever & Always.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
