"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Countdown() {
  const weddingDate = new Date("2026-12-25T10:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const distance = weddingDate - new Date().getTime();
      if (distance < 0) { clearInterval(timer); return; }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / 1000 / 60) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [weddingDate]);

  const blocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="relative py-24 bg-[#0E1719] text-center px-6 overflow-hidden border-b border-[#8DD2DB]/10">
      
      {/* Continuous Fluid Background Orb */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.07, 0.03] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-[#44B6C5] filter blur-[130px] pointer-events-none"
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Continuous Soft Floating Header Element */}
        <motion.div 
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="space-y-2"
        >
          <span className="text-xs font-black uppercase tracking-wider text-[#FFCC47] bg-[#8DD2DB]/10 px-4 py-1.5 rounded-full">
            The Big Day
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-black tracking-tight text-[#FFFFFF] mt-3">
            Counting Down the Moments
          </h2>
        </motion.div>

        {/* Responsive Flex/Grid Grid Layout */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {blocks.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              animate={{ 
                boxShadow: ["0px 0px 0px rgba(68,182,197,0)", "0px 4px 20px rgba(68,182,197,0.05)", "0px 0px 0px rgba(68,182,197,0)"]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: index * 0.2 
              }}
              className="bg-[#44B6C5]/5 border border-[#8DD2DB]/20 backdrop-blur-md p-6 md:p-8 rounded-2xl flex flex-col items-center relative group overflow-hidden transition-all duration-300 hover:border-[#44B6C5]/60"
            >
              {/* Premium rounded structural indicator accent */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-[#FFCC47] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
              
              <span className="text-4xl md:text-5xl font-sans font-black text-[#FFFFFF] tracking-tight group-hover:text-[#FFCC47] transition-colors duration-300">
                {String(item.value).padStart(2, "0")}
              </span>
              
              <span className="w-6 h-[2px] bg-[#8DD2DB]/30 my-3 rounded-full group-hover:bg-[#FFCC47]/40 transition-colors duration-300" />
              
              <span className="uppercase text-xs font-black tracking-widest font-sans text-[#8DD2DB]">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}