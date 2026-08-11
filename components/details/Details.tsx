"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function Details() {
  const cards = [
    {
      icon: Calendar,
      title: "Church Ceremony",
      val: "Saturday, Nov 14, 2026",
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
      className="py-24 bg-[#F5F0EB] px-6 relative overflow-hidden border-b border-[#C2A675]/25"
    >
      {/* Soft Dusty Rose Background Ambient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] right-[10%] w-[45%] h-[45%] rounded-full bg-[#D4B2A7] blur-[140px] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#404734] bg-[#404734]/10 border border-[#404734]/20 px-4 py-1.5 rounded-full">
            The Celebration
          </span>

          <h2 className="text-3xl md:text-5xl font-serif italic text-[#4A121A] mt-4 tracking-tight">
            When & Where
          </h2>
        </motion.div>

        {/* Cards Grid */}
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
                className="bg-[#EFE8DF] border border-[#C2A675]/35 p-8 rounded-2xl flex flex-col items-center text-center group hover:bg-[#F5F0EB] hover:border-[#4A121A]/40 transition-all duration-300 backdrop-blur-sm shadow-sm hover:shadow-md"
              >
                {/* Circle Icon Container */}
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-14 h-14 rounded-full bg-[#404734]/10 border border-[#C2A675]/40 flex items-center justify-center mb-5 text-[#4A121A] group-hover:bg-[#4A121A] group-hover:text-[#F5F0EB] transition-colors duration-300"
                >
                  <Icon size={22} strokeWidth={1.75} />
                </motion.div>

                <h3 className="text-[11px] tracking-[0.25em] font-semibold text-[#404734] uppercase">
                  {card.title}
                </h3>

                <span className="w-8 h-[1px] bg-[#C2A675]/40 my-4 rounded-full group-hover:bg-[#4A121A]/30 transition-colors duration-300" />

                <p className="text-[#404734] font-serif italic text-lg md:text-xl leading-snug">
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