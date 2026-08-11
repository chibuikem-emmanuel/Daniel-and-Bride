"use client";

import { motion } from "framer-motion";

export default function Story() {
  return (
    <section
      id="story"
      className="relative py-24 md:py-32 bg-[#F5F0EB] px-6 overflow-hidden border-b border-[#C2A675]/25"
    >
      {/* Background Soft Glow */}
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
        className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] rounded-full bg-[#D4B2A7]/20 blur-[120px] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Side: Editorial Image Card */}
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
          <div className="absolute -inset-3 border border-[#C2A675]/30 rounded-3xl pointer-events-none" />

          <div className="relative overflow-hidden aspect-[4/5] bg-[#EFE8DF] border border-[#C2A675]/40 p-2.5 rounded-2xl shadow-xl">
            <img
              src="Image1 (4).jpeg"
              alt="Daniel and Rejoice portrait"
              className="w-full h-full object-cover rounded-xl transition-all duration-500 hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Right Side: Editorial Content */}
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#404734] bg-[#404734]/10 border border-[#404734]/20 px-4 py-1.5 rounded-full">
              Our Journey
            </span>

            <h2 className="text-3xl md:text-5xl font-serif italic text-[#4A121A] tracking-tight mt-4">
              Where Love Meets Destiny
            </h2>
          </div>

          <div className="space-y-4 text-[#404734]/85 font-sans text-base md:text-lg leading-relaxed">
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

          <div className="pt-6 border-t border-[#C2A675]/30 flex items-center justify-between">
            <div>
              <p className="text-2xl md:text-3xl font-serif italic text-[#4A121A]">
                Dan'sJoy2026✨
                <span className="text-base text-[#C2A675] font-serif not-italic mx-1.5"> </span>
                
              </p>

              <p className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#404734]/70 mt-1">
                Aba, Nigeria
              </p>
            </div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-12 h-12 rounded-full border border-[#C2A675]/40 bg-[#404734]/10 flex items-center justify-center text-[#4A121A] text-lg font-serif"
            >
              ⚭
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}