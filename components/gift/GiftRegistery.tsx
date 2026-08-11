"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";

export default function GiftRegistry() {
  const [copied, setCopied] = useState(false);

  const accountNumber = "1234567890";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(accountNumber);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 3000);
    } catch (error) {
      console.error("Copy failed", error);
    }
  };

  return (
    <section
      id="registry"
      className="py-24 bg-[#F5F0EB] px-6 relative overflow-hidden border-b border-[#C2A675]/25"
    >
      {/* Background Soft Glow */}
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
        className="absolute top-[30%] right-[-5%] w-[45%] h-[45%] rounded-full bg-[#D4B2A7] blur-[140px] pointer-events-none"
      />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#404734] bg-[#404734]/10 border border-[#404734]/20 px-4 py-1.5 rounded-full">
            Love & Support
          </span>

          <h2 className="text-3xl md:text-5xl font-serif italic text-[#4A121A] mt-4 tracking-tight">
            Financial Contributions
          </h2>

          <p className="text-sm md:text-base text-[#404734]/80 font-sans max-w-md mx-auto mt-4 leading-relaxed">
            Your presence is the greatest gift. If you would like to bless us
            with a financial contribution, the details are below.
          </p>
        </motion.div>

        {/* Registry Card */}
        <div className="bg-[#EFE8DF] border border-[#C2A675]/35 p-8 md:p-10 rounded-3xl backdrop-blur-md max-w-xl mx-auto text-center space-y-6 shadow-sm">
          <div className="space-y-4">
            <div>
              <p className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-semibold text-[#404734]">
                Bank Name
              </p>

              <h4 className="text-lg md:text-xl font-serif italic text-[#4A121A] mt-1">
                GTBank (Guaranty Trust Bank)
              </h4>
            </div>

            <div className="border-t border-[#C2A675]/30 pt-4">
              <p className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-semibold text-[#404734]">
                Account Name
              </p>

              <h4 className="text-lg md:text-xl font-serif italic text-[#4A121A] mt-1">
                Dan & Rejoice Wedding Project
              </h4>
            </div>

            <div className="border-t border-[#C2A675]/30 pt-4">
              <p className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-semibold text-[#404734] mb-3">
                Account Number
              </p>

              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-3 bg-[#F5F0EB] border border-[#C2A675]/40 hover:border-[#4A121A]/50 px-6 py-3.5 rounded-full transition-all duration-300 shadow-sm group"
              >
                <span className="text-xl font-serif italic tracking-wider text-[#4A121A]">
                  {accountNumber}
                </span>

                {copied ? (
                  <Check size={16} className="text-[#404734]" />
                ) : (
                  <Copy size={16} className="text-[#404734]/70 group-hover:text-[#4A121A] transition-colors" />
                )}
              </button>
            </div>

            {copied && (
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#4A121A] pt-1">
                Account number copied!
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}