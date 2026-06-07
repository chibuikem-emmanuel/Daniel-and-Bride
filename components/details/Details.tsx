"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function Details() {
  const cards = [
    {
      icon: Calendar,
      title: "Date",
      val: "December 25, 2026",
    },
    {
      icon: Clock,
      title: "Time",
      val: "10:00 AM Prompt",
    },
    {
      icon: MapPin,
      title: "Location",
      val: "Rhema University Auditorium, Aba",
    },
  ];

  return (
    <section
      id="details"
      className="py-24 bg-[#0E1719] px-6 relative overflow-hidden border-b border-[#8DD2DB]/10"
    >
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] right-[10%] w-[45%] h-[45%] rounded-full bg-[#44B6C5] blur-[140px] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-black uppercase tracking-wider text-[#FFCC47] bg-[#8DD2DB]/10 px-4 py-1.5 rounded-full">
            The Celebration
          </span>

          <h2 className="text-3xl md:text-4xl font-black text-white mt-4">
            When & Where
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((card, idx) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.1,
                }}
                whileHover={{
                  y: -5,
                }}
                className="bg-[#44B6C5]/5 border border-[#8DD2DB]/20 p-8 rounded-2xl flex flex-col items-center text-center group hover:bg-[#44B6C5]/10 hover:border-[#44B6C5]/50 transition-all duration-300 backdrop-blur-sm"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-14 h-14 rounded-full bg-[#0E1719] border border-[#8DD2DB]/30 flex items-center justify-center mb-5 text-[#FFCC47]"
                >
                  <Icon size={22} strokeWidth={2} />
                </motion.div>

                <h3 className="text-xs tracking-widest font-black text-[#8DD2DB] uppercase">
                  {card.title}
                </h3>

                <span className="w-6 h-[2px] bg-[#8DD2DB]/20 my-4 rounded-full" />

                <p className="text-white font-bold text-base md:text-lg">
                  {card.val}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}