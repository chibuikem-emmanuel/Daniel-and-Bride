"use client";

import { motion } from "framer-motion";

export default function Story() {
  return (
    <section
      id="story"
      className="relative py-24 md:py-32 bg-[#0E1719] px-6 overflow-hidden border-b border-[#8DD2DB]/10"
    >
      <motion.div
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] rounded-full bg-[#44B6C5]/5 blur-[120px] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          animate={{ rotate: [0, 0.5, -0.5, 0] }}
          transition={{
            duration: 1,
            ease: "easeOut",
            rotate: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="lg:col-span-5 relative"
        >
          <div className="absolute -inset-3 border border-[#44B6C5]/20 rounded-3xl pointer-events-none" />

          <div className="relative overflow-hidden aspect-[4/5] bg-[#0E1719]/40 border border-[#8DD2DB]/30 p-2 rounded-2xl shadow-xl">
            <img
              src="Image1 (4).jpeg"
              alt="Joshua and Divine portrait"
              className="w-full h-full object-cover opacity-90 rounded-xl transition-all duration-500 hover:scale-105"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 1,
            delay: 0.1,
            ease: "easeOut",
            y: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="lg:col-span-7 flex flex-col justify-center space-y-6"
        >
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-[#FFCC47] bg-[#8DD2DB]/10 px-4 py-1.5 rounded-full">
              Our Journey
            </span>

            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mt-4">
              Where Love Meets Destiny
            </h2>
          </div>

          <div className="space-y-4 text-[#8DD2DB] text-base leading-relaxed">
            <p>
              Our story didn’t follow a traditional path. What began as a casual
              conversation about art, design, and culture quickly turned into
              hours of uncovering shared dreams and values.
            </p>

            <p>
              Over time, that initial connection deepened into something
              beautiful and unbreakable. This day marks the beginning of our
              forever.
            </p>
          </div>

          <div className="pt-6 border-t border-[#8DD2DB]/20 flex items-center justify-between">
            <div>
              <p className="text-3xl font-serif text-[#FFCC47]">
                Joshua
                <span className="text-base text-[#8DD2DB] mx-1"> & </span>
                Divine
              </p>

              <p className="text-xs uppercase tracking-widest font-black text-[#8DD2DB]/60 mt-1">
                Lagos, Nigeria
              </p>
            </div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-12 h-12 rounded-full border border-[#8DD2DB]/30 bg-[#44B6C5]/5 flex items-center justify-center text-[#FFCC47] text-lg"
            >
              ⚭
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
