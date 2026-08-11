"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function BrideToast() {
  return (
    <section className="py-24 bg-[#F5F0EB] px-6 relative overflow-hidden border-b border-[#C2A675]/25">
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
        className="absolute top-[20%] left-[30%] w-[40%] h-[40%] rounded-full bg-[#D4B2A7] blur-[140px] pointer-events-none"
      />

      <div className="max-w-3xl mx-auto relative z-10 text-center space-y-6">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#404734] bg-[#404734]/10 border border-[#404734]/20 px-4 py-1.5 rounded-full inline-block">
          Toast From The Bride
        </span>

        <div className="bg-[#EFE8DF] border border-[#C2A675]/35 p-8 md:p-12 rounded-3xl backdrop-blur-md shadow-sm relative">
          <Quote size={32} className="text-[#C2A675]/50 mx-auto mb-6" />
          
          <p className="text-base md:text-xl font-serif italic text-[#4A121A] leading-relaxed">
            “I thank God for you, for giving me a man whose love makes me feel safe, cherished, and inspired to grow. 
            Your laughter fills my heart, your leadership strengthens me, and your love fuels my soul. 
            So today, with a grateful heart, I choose you; your hand, your heart, and this beautiful journey God has entrusted to us. 
            To us, to forever, and to a lifetime of doing life together.”
          </p>

          <div className="mt-8 pt-6 border-t border-[#C2A675]/30">
            <h4 className="text-lg font-serif italic text-[#4A121A]">Rejoice Ubani-Ukoma</h4>
            <p className="text-xs uppercase tracking-[0.2em] text-[#404734] font-semibold mt-1">#Dan'sJoy2026✨</p>
          </div>
        </div>
      </div>
    </section>
  );
}