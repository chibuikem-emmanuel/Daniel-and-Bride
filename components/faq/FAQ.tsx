"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const rows = [
  {
    q: "What is the dress code and color palette for the wedding?",
    a: "Our designated palette features Burgundy, Gold, Dusty Rose, Beige, and Olive Green. We kindly request formal luxury or elegant traditional attire matching these classic tones."
  },
  {
    q: "When and where is the Traditional Marriage ceremony?",
    a: "The Traditional Marriage takes place on Saturday, 30th October 2026 at 3:00 PM. It will be hosted at No. 4 Ubani Ukoma Close, Off Egege Ebenma Street, Ogborhill, Aba North."
  },
  {
    q: "When and where is the Church Wedding & Reception?",
    a: "The Church Solemnization takes place on Saturday, 14th November 2026 at 10:00 AM Prompt at Apostolic Foundation Church (LWM Int'l), Rhema University Nigeria, 153 Aba-Owerri Road, Aba. The reception follows immediately at the same venue."
  },
  {
    q: "Can I bring a plus-one or extra guest?",
    a: "Due to seating constraints at our venue, invitations are strictly reserved for confirmed guests who RSVP. We appreciate your understanding!"
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section
      id="faq"
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
        className="absolute top-[20%] left-[-5%] w-[45%] h-[45%] rounded-full bg-[#D4B2A7] blur-[140px] pointer-events-none"
      />

      <div className="max-w-3xl mx-auto relative z-10">
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
            Common Questions
          </span>

          <h2 className="text-3xl md:text-5xl font-serif italic text-[#4A121A] tracking-tight mt-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-4 max-w-2xl mx-auto">
          {rows.map((item, index) => {
            const active = openIdx === index;

            return (
              <div
                key={index}
                className={`border bg-[#EFE8DF] px-6 rounded-2xl transition-all duration-300 shadow-sm ${
                  active
                    ? "border-[#C2A675]/60 bg-[#EFE8DF]"
                    : "border-[#C2A675]/35 hover:border-[#C2A675]/50"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(active ? null : index)}
                  className="w-full flex items-center justify-between py-5 text-left focus:outline-none group"
                >
                  <h3 className="text-base font-serif italic text-[#4A121A] tracking-wide pr-4 group-hover:text-[#404734] transition-colors duration-300">
                    {item.q}
                  </h3>

                  <ChevronDown
                    size={18}
                    className={`text-[#404734] transition-transform duration-300 flex-shrink-0 ${
                      active ? "rotate-180 text-[#4A121A]" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {active && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 text-xs md:text-sm text-[#404734]/80 font-sans leading-relaxed border-t border-[#C2A675]/30 pt-4">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}