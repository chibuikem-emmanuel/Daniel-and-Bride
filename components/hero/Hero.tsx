"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#0E1719]">
      
      {/* Smooth Continuous Ambient Fluid Macro-Animation */}
      <motion.div 
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ backgroundColor: "#44B6C5" }}
        className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full opacity-10 filter blur-[140px] pointer-events-none"
      />
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        style={{ backgroundColor: "#8DD2DB" }}
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full opacity-15 filter blur-[160px] pointer-events-none"
      />

      {/* Optimized Background Image (Reduced Gradient Blockers) */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-normal"
        style={{ backgroundImage: "url('Image1 (6).jpeg')" }}
      />
      {/* Light subtle protective layer only to guarantee high text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0E1719]/30 via-transparent to-[#0E1719]/50" />

      <div className="relative z-20 max-w-5xl mx-auto text-center px-8 flex flex-col items-center">
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="uppercase tracking-[0.3em] text-xs font-black text-[#FFCC47] bg-[#8DD2DB]/10 px-4 py-1.5 rounded-full"
        >
          December 25, 2026
        </motion.p>

        {/* Continuous Floating Title Loop */}
        <motion.h1
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-sans font-black tracking-tight text-[#FFFFFF] mt-6 leading-none"
        >
          Daniel <span className="text-[#FFCC47]">&</span> Rejoice
        </motion.h1>

        {/* Continuous Soft Breathing Text Loop */}
        <motion.p
          animate={{ opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="mt-6 font-sans font-medium text-base md:text-lg max-w-xl leading-relaxed text-[#8DD2DB]"
        >
          We are so excited to celebrate our love story with our amazing family and friends. Join us as we begin our beautiful journey together.
        </motion.p>

        {/* Continuous Gentle Pulsing Button Loop */}
        <motion.div 
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="mt-10"
        >
          <a
            href="#rsvp"
            className="bg-[#FFCC47] text-[#0E1719] px-10 py-4 rounded-xl text-sm font-black tracking-wide shadow-md block transform hover:-translate-y-0.5 hover:bg-[#44B6C5] hover:text-[#FFFFFF] transition-all duration-300 ease-out"
          >
            Reserve Attendance
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <div className="w-[3px] h-14 bg-[#8DD2DB]/20 relative overflow-hidden rounded-full">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }} 
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} 
            className="absolute top-0 left-0 w-full h-1/2 bg-[#FFCC47]" 
          />
        </div>
      </div>
    </section>
  );
}
