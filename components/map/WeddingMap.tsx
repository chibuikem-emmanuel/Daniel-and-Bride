"use client";

import { motion } from "framer-motion";

export default function WeddingMap() {
  return (
    <section
      id="venue"
      className="py-24 bg-[#F5F0EB] px-6 relative overflow-hidden border-b border-[#C2A675]/25"
    >
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[10%] right-[-5%] w-[45%] h-[45%] rounded-full bg-[#D4B2A7] blur-[140px] pointer-events-none"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-center mb-16 flex flex-col items-center space-y-2"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#404734] bg-[#404734]/10 border border-[#404734]/20 px-4 py-1.5 rounded-full">
            Location Details
          </span>

          <h2 className="text-3xl md:text-5xl font-serif italic text-[#4A121A] tracking-tight mt-4">
            The Venue
          </h2>

          <p className="text-sm font-sans text-[#404734]/80 max-w-md mx-auto mt-2">
            Apostolic Foundation Church, LWM Int’l <br />
            Rhema University Nigeria, 153 Aba-Owerri Road, Aba, Abia State
          </p>
        </motion.div>

        <div className="w-full p-3 bg-[#EFE8DF] border border-[#C2A675]/35 rounded-3xl backdrop-blur-sm shadow-sm">
          <div className="w-full h-[450px] overflow-hidden rounded-2xl relative bg-[#F5F0EB] border border-[#C2A675]/20 shadow-inner">
            <iframe
              src="https://maps.google.com/maps?q=rhema%20university%20aba&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale opacity-90 contrast-[0.95] hover:grayscale-0 transition-all duration-700"
              title="Wedding Venue Map"
            />
            <div className="absolute inset-0 border border-[#4A121A]/10 pointer-events-none rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}