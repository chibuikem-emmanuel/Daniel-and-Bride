"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";

export default function Details() {
  const cards = [
    { icon: Calendar, title: "Date", val: "December 25, 2026" },
    { icon: Clock, title: "Time", val: "10:00 AM Prompt" },
    { icon: MapPin, title: "Location", val: "Oriental Hotel, VI, Lagos" }
  ];

  return (
    <section id="details" className="py-24 bg-[#0E1719] px-6 relative overflow-hidden border-b border-[#8DD2DB]/10">
      
      {/* Background ambient decorative light element */}
      <motion.div 
        animate={{ scale: [1, 1.15, 1], opacity: [0.03, 0.06, 0.03] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[10%] w-[45%] h-[45%] rounded-full bg-[#44B6C5] filter blur-[140px] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Continuous Floating Header */}
        <motion.div 
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-2"
        >
          <span className="text-xs font-black uppercase tracking-wider text-[#FFCC47] bg-[#8DD2DB]/10 px-4 py-1.5 rounded-full">
            The Celebration
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-black tracking-tight text-[#FFFFFF] mt-4">
            When & Where
          </h2>
        </motion.div>

        {/* Dynamic Details Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              animate={{ 
                boxShadow: ["0px 0px 0px rgba(68,182,197,0)", "0px 4px 25px rgba(68,182,197,0.04)", "0px 0px 0px rgba(68,182,197,0)"],
                y: [0, -2, 0]
              }}
              transition={{ 
                initial: { duration: 0.6, delay: idx * 0.1 },
                boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.3 },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }
              }}
              className="bg-[#44B6C5]/5 border border-[#8DD2DB]/20 p-8 rounded-2xl flex flex-col items-center text-center group hover:bg-[#44B6C5]/10 hover:border-[#44B6C5]/50 transition-all duration-300 backdrop-blur-sm"
            >
              {/* Continuous Pulsing Icon Container */}
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: idx * 0.4 }}
                className="w-14 h-14 rounded-full bg-[#0E1719] border border-[#8DD2DB]/30 flex items-center justify-center mb-5 text-[#FFCC47] group-hover:border-[#FFCC47] group-hover:bg-[#44B6C5]/10 transition-all duration-300"
              >
                <card.icon size={22} strokeWidth={2} />
              </motion.div>
              
              <h3 className="text-xs tracking-widest font-sans font-black text-[#8DD2DB] uppercase">
                {card.title}
              </h3>
              
              <span className="w-6 h-[2px] bg-[#8DD2DB]/20 my-4 rounded-full group-hover:bg-[#FFCC47]/40 transition-colors duration-300" />
              
              <p className="text-[#FFFFFF] font-sans font-bold text-base md:text-lg tracking-tight group-hover:text-[#FFCC47] transition-colors duration-300">
                {card.val}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}