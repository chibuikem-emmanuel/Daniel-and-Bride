"use client";

import { motion } from "framer-motion";

const track = [
  {
    epoch: "Part I",
    name: "Traditional Marriage",
    hr: "3:00 PM",
    date: "Saturday, October 30, 2026",
    detail:
      "Cultural rites, family introductions, and traditional festivities at No. 4 Ubani Ukoma Close, Ogborhill, Aba.",
  },
  {
    epoch: "Part II",
    name: "Church Solemnization",
    hr: "10:00 AM",
    date: "Saturday, November 14, 2026",
    detail:
      "The holy solemnization of matrimony and exchange of vows at Rhema University Auditorium, Aba.",
  },
  {
    epoch: "Part III",
    name: "Wedding Reception",
    hr: "Following Ceremony",
    date: "Saturday, November 14, 2026",
    detail:
      "A grand celebratory feast, cutting of the cake, cultural displays, and dancing at the same venue.",
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="py-24 bg-[#F5F0EB] px-6 relative overflow-hidden border-b border-[#C2A675]/25"
    >
      {/* Background ambient continuous fluid blur layer */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[30%] left-[-10%] w-[45%] h-[45%] rounded-full bg-[#D4B2A7]/20 filter blur-[130px] pointer-events-none"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Continuous Floating Header */}
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-center mb-16 space-y-2 flex flex-col items-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#404734] bg-[#404734]/10 border border-[#404734]/20 px-4 py-1.5 rounded-full">
            The Order of Events
          </span>

          <h2 className="text-3xl md:text-5xl font-serif italic text-[#4A121A] mt-4 tracking-tight">
            Order of Events
          </h2>
        </motion.div>

        {/* Timeline Stack */}
        <div className="space-y-6">
          {track.map((evt, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              animate={{
                boxShadow: [
                  "0px 0px 0px rgba(194,166,117,0)",
                  "0px 6px 20px rgba(194,166,117,0.12)",
                  "0px 0px 0px rgba(194,166,117,0)",
                ],
              }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                boxShadow: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                },
              }}
              className="border border-[#C2A675]/35 bg-[#EFE8DF] p-6 md:p-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[#4A121A]/50 hover:bg-[#F5F0EB] transition-all duration-300 group shadow-sm"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-[#C2A675] tracking-[0.2em] uppercase">
                    {evt.epoch}
                  </span>
                  <span className="text-xs text-[#404734]/60">•</span>
                  <span className="text-xs font-medium text-[#404734]/80">
                    {evt.date}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-serif italic text-[#4A121A] group-hover:text-[#404734] transition-colors duration-300">
                  {evt.name}
                </h3>

                <p className="text-sm md:text-base text-[#404734]/80 font-sans leading-relaxed max-w-xl pt-1">
                  {evt.detail}
                </p>
              </div>

              {/* Continuous Breathing Time Badge */}
              <motion.div
                animate={{ scale: [1, 1.03, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
                className="bg-[#404734] text-[#F5F0EB] border border-[#C2A675]/30 px-6 py-3 rounded-full font-serif italic text-sm tracking-wide whitespace-nowrap self-start md:self-auto shadow-sm group-hover:bg-[#4A121A] transition-colors duration-300"
              >
                {evt.hr}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}