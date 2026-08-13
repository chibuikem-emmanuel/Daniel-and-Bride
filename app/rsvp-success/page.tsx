"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Heart, ArrowLeft } from "lucide-react";

export default function RSVPSuccess() {
  return (
    <main className="min-h-screen bg-[#F5F0EB] flex items-center justify-center px-6 relative overflow-hidden border-b border-[#C2A675]/25">
      {/* Ambient background glow */}
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
        className="absolute top-[20%] left-[10%] w-[50%] h-[50%] rounded-full bg-[#D4B2A7] blur-[140px] pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-xl w-full bg-[#EFE8DF] border border-[#C2A675]/35 rounded-3xl p-8 md:p-12 text-center relative z-10 shadow-sm backdrop-blur-md my-12"
      >
        {/* Animated Icon Badge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
          className="w-20 h-20 mx-auto rounded-full bg-[#404734]/10 border border-[#404734]/20 flex items-center justify-center mb-6 text-[#4A121A]"
        >
          <CheckCircle2 size={38} className="text-[#4A121A]" />
        </motion.div>

        {/* Tagline Badge */}
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#404734] bg-[#404734]/10 border border-[#404734]/20 px-4 py-1.5 rounded-full inline-block">
          RSVP Received
        </span>

        {/* Header */}
        <h1 className="text-3xl md:text-5xl font-serif italic text-[#4A121A] tracking-tight mt-4">
          We Can't Wait!
        </h1>

        <div className="w-12 h-[1px] bg-[#C2A675]/60 mx-auto my-6" />

        {/* Message */}
        <p className="text-[#404734] font-sans text-sm md:text-base leading-relaxed max-w-md mx-auto">
          Thank you for responding to our wedding invitation. Your RSVP has been
          successfully recorded and we look forward to celebrating this joyful occasion with you.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto bg-[#4A121A] text-[#F5F0EB] hover:bg-[#404734] px-8 py-4 rounded-full uppercase tracking-[0.25em] text-xs font-semibold transition-colors duration-300 shadow-sm flex items-center justify-center gap-2 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>Return Home</span>
          </Link>
        </div>

        {/* Subtle Footer Note */}
        <div className="mt-10 pt-6 border-t border-[#C2A675]/25 flex items-center justify-center gap-2 text-[11px] font-sans text-[#404734]/70 uppercase tracking-widest">
          <Heart size={12} className="text-[#4A121A] fill-[#4A121A]/20" />
          <span>See you at the celebration</span>
        </div>
      </motion.div>
    </main>
  );
}