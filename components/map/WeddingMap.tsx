"use client";

import { motion } from "framer-motion";

export default function WeddingMap() {
  return (
    <section id="venue" className="py-24 bg-[#0E1719] px-6 relative overflow-hidden border-b border-[#8DD2DB]/10">
      
      {/* Slow-pulsing fluid background ambient lighting blocks */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.03, 0.05, 0.03] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#44B6C5] filter blur-[140px] pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.02, 0.04, 0.02] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[-10%] w-[45%] h-[45%] rounded-full bg-[#8DD2DB] filter blur-[130px] pointer-events-none"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Continuous Floating Header */}
        <motion.div 
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="text-center mb-16 space-y-2"
        >
          <span className="text-xs font-black uppercase tracking-wider text-[#FFCC47] bg-[#8DD2DB]/10 px-4 py-1.5 rounded-full">
            Location Details
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-black tracking-tight text-[#FFFFFF] mt-4">
            The Venue
          </h2>
        </motion.div>

        {/* Dynamic Map Wrapper with Continuous Ambient Shadow Breathe */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          animate={{ 
            boxShadow: ["0px 0px 0px rgba(68,182,197,0)", "0px 4px 35px rgba(141,210,219,0.08)", "0px 0px 0px rgba(68,182,197,0)"],
            borderColor: ["rgba(141,210,219,0.2)", "rgba(255,204,71,0.3)", "rgba(141,210,219,0.2)"]
          }}
          transition={{ 
            initial: { duration: 0.8, ease: "easeOut" },
            boxShadow: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            borderColor: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="w-full p-3 bg-[#44B6C5]/5 border rounded-3xl backdrop-blur-sm transition-colors duration-500 hover:border-[#44B6C5]/60"
        >
          <div className="w-full h-[450px] overflow-hidden rounded-2xl relative bg-[#FFFFFF] border border-[#8DD2DB]/20 shadow-inner">
            <iframe
              src="https://maps.google.com/maps?q=rhema%20university%20aba&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full opacity-95 transition-opacity duration-500 ease-out hover:opacity-100"
              title="Wedding Venue Map"
            />
            
            {/* Fine Protective Framer Overlay Rim */}
            <div className="absolute inset-0 border border-[#0E1719]/10 pointer-events-none rounded-2xl group-hover:border-[#FFCC47]/30 transition-colors duration-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}