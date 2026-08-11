"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#F5F0EB] flex flex-col justify-between px-6 py-12 overflow-hidden border-b border-[#C2A675]/25">
      {/* Animated Background Image Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1, x: "0%", y: "0%" }}
          animate={{
            scale: [1, 1.12, 1.05, 1],
            x: ["0%", "-2%", "2%", "0%"],
            y: ["0%", "-1%", "1%", "0%"],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          src="Image1 (3).jpeg"
          alt="Dan and Rejoice"
          className="w-full h-full object-cover object-center filter grayscale-[15%] contrast-[1.02]"
        />

        {/* Soft, Light Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F0EB]/50 via-[#F5F0EB]/30 to-[#F5F0EB]/80" />
        <div className="absolute inset-0 bg-[#F5F0EB]/20 backdrop-blur-[0.5px]" />
      </div>

      {/* Floating Sparkle Elements */}
      <motion.div
        animate={{
          y: [-10, 10, -10],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-16 right-[15%] text-[#C2A675]/60 z-10 hidden md:block"
      >
        <Sparkles size={28} />
      </motion.div>

      {/* Ambient Warm Radial Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[10%] left-[20%] w-[60%] h-[50%] rounded-full bg-[#D4B2A7] blur-[160px] pointer-events-none z-0"
      />

      <div className="max-w-4xl mx-auto w-full pt-16 pb-8 relative z-10 text-center flex flex-col items-center justify-center flex-1 space-y-8">
        {/* Families Announcement Tag & Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-3 max-w-2xl"
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-[#404734] bg-[#F5F0EB]/85 border border-[#404734]/25 px-5 py-1.5 rounded-full inline-block backdrop-blur-md shadow-sm transition-shadow hover:shadow-md cursor-default"
          >
            Wedding Invitation
          </motion.span>

          <p className="text-xs md:text-sm font-sans text-[#404734] tracking-wide pt-2 leading-relaxed font-medium drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">
            The Families of <br />
            <strong className="text-[#4A121A] font-serif font-semibold italic text-sm md:text-base">
              Mr. Agha Arusi Nnachi
            </strong>{" "}
            <span className="text-[11px] block md:inline text-[#404734]/90">
              (Ekoli Edda, Ebonyi State)
            </span>{" "}
            <br />
            & <br />
            <strong className="text-[#4A121A] font-serif font-semibold italic text-sm md:text-base">
              Pst. Okebugwu Ubani-Ukoma
            </strong>{" "}
            <span className="text-[11px] block md:inline text-[#404734]/90">
              (Ahiaba Mbu, Abia State)
            </span>
          </p>

          <p className="text-xs uppercase tracking-[0.22em] font-semibold text-[#404734] pt-2 drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">
            Cordially Invite You to the Solemnization of Holy Matrimony Between
          </p>
        </motion.div>

        {/* Main Couple Names */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-1 drop-shadow-md"
        >
          <motion.h1
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif italic text-[#4A121A] tracking-tight leading-none cursor-default"
          >
            Ihechi Ubani-Ukoma Rejoice
          </motion.h1>
          <p className="text-2xl md:text-3xl font-serif italic text-[#404734] py-1">
            &
          </p>
          <motion.h1
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif italic text-[#4A121A] tracking-tight leading-none cursor-default"
          >
            Dan Agha Arusi
          </motion.h1>
        </motion.div>

        {/* Date & Location Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl pt-4"
        >
          {/* Traditional Marriage Card */}
          <motion.div
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-[#EFE8DF]/90 border border-[#C2A675]/40 p-5 rounded-2xl text-left space-y-2 backdrop-blur-md shadow-sm hover:shadow-md transition-all"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A121A] block">
              Traditional Marriage
            </span>
            <div className="flex items-center gap-2 text-xs font-sans text-[#404734] font-medium">
              <Calendar size={14} className="text-[#C2A675] flex-shrink-0" />
              <span>Saturday, 30th October 2026 • 3:00 PM</span>
            </div>
            <div className="flex items-start gap-2 text-xs font-sans text-[#404734]">
              <MapPin size={14} className="text-[#C2A675] flex-shrink-0 mt-0.5" />
              <span>No. 4 Ubani Ukoma Close, Ogborhill, Aba</span>
            </div>
          </motion.div>

          {/* Church Wedding Card */}
          <motion.div
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-[#EFE8DF]/90 border border-[#C2A675]/40 p-5 rounded-2xl text-left space-y-2 backdrop-blur-md shadow-sm hover:shadow-md transition-all"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A121A] block">
              Church Ceremony & Reception
            </span>
            <div className="flex items-center gap-2 text-xs font-sans text-[#404734] font-medium">
              <Calendar size={14} className="text-[#C2A675] flex-shrink-0" />
              <span>Saturday, 14th November 2026 • 10:00 AM</span>
            </div>
            <div className="flex items-start gap-2 text-xs font-sans text-[#404734]">
              <MapPin size={14} className="text-[#C2A675] flex-shrink-0 mt-0.5" />
              <span>Rhema University Nigeria, 153 Aba-Owerri Rd, Aba</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Colours Palette Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-2"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#404734] mb-3 drop-shadow-sm">
            Colours of the Day
          </p>
          <div className="flex items-center justify-center gap-2 md:gap-3 flex-wrap">
            {["Burgundy", "Gold", "Dusty Rose", "Beige", "Olive Green"].map(
              (color, index) => (
                <motion.div
                  key={color}
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-2 cursor-default"
                >
                  <span className="text-xs font-serif italic text-[#4A121A] font-semibold bg-[#F5F0EB]/70 px-2.5 py-0.5 rounded-md backdrop-blur-xs">
                    {color}
                  </span>
                  {index < 4 && <span className="text-[#C2A675]">•</span>}
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}