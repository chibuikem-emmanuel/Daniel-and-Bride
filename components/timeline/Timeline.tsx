"use client";

import { motion } from "framer-motion";

const track = [
  {
    epoch: "Part I",
    name: "The Wedding Ceremony",
    hr: "10:00 AM",
    detail:
      "The arrival of guests followed by our exchange of vows, rings, and beautiful spiritual celebrations.",
  },
  {
    epoch: "Part II",
    name: "The Reception Feast",
    hr: "01:00 PM",
    detail:
      "A premium culinary experience paired with traditional cultural honors, speeches, and the cutting of the cake.",
  },
  {
    epoch: "Part III",
    name: "The After Party",
    hr: "07:00 PM",
    detail:
      "Atmospheric lighting shifts, live music arrangements, and an infinite dance sequence to crown the night.",
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="py-24 bg-[#0E1719] px-6 relative overflow-hidden border-b border-[#8DD2DB]/10"
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
        className="absolute top-[30%] left-[-10%] w-[45%] h-[45%] rounded-full bg-[#44B6C5]/5 filter blur-[130px] pointer-events-none"
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
          className="text-center mb-16 space-y-2"
        >
          <span className="text-xs font-black uppercase tracking-wider text-[#FFCC47] bg-[#8DD2DB]/10 px-4 py-1.5 rounded-full">
            The Order of Events
          </span>

          <h2 className="text-3xl md:text-4xl font-sans font-black tracking-tight text-[#FFFFFF] mt-4">
            Wedding Timeline
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
                  "0px 0px 0px rgba(141,210,219,0)",
                  "0px 4px 20px rgba(141,210,219,0.03)",
                  "0px 0px 0px rgba(141,210,219,0)",
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
              className="border border-[#8DD2DB]/20 bg-[#44B6C5]/5 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[#44B6C5]/60 hover:bg-[#44B6C5]/10 transition-all duration-300 group"
            >
              <div className="space-y-1">
                <span className="text-xs font-black text-[#FFCC47] tracking-widest uppercase">
                  {evt.epoch}
                </span>

                <h3 className="text-xl md:text-2xl font-sans font-black text-[#FFFFFF] group-hover:text-[#FFCC47] transition-colors duration-300">
                  {evt.name}
                </h3>

                <p className="text-sm md:text-base text-[#8DD2DB] font-medium leading-relaxed max-w-xl pt-1">
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
                className="bg-[#FFCC47] text-[#0E1719] px-6 py-3 rounded-xl font-sans font-black text-sm tracking-wide whitespace-nowrap self-start md:self-auto shadow-md group-hover:bg-[#44B6C5] group-hover:text-[#FFFFFF] transition-colors duration-300"
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