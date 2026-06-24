"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      className="py-24 bg-[#0E1719] px-6 relative overflow-hidden border-b border-[#8DD2DB]/10"
    >
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.02, 0.04, 0.02],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-5%] left-[20%] w-[45%] h-[45%] rounded-full bg-[#44B6C5] blur-[130px] pointer-events-none"
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-center mb-16"
        >
          <span className="text-xs font-black uppercase tracking-wider text-[#FFCC47] bg-[#8DD2DB]/10 px-4 py-1.5 rounded-full">
            Love & Support
          </span>

          <h2 className="text-3xl md:text-4xl font-black text-white mt-4">
            Financial Contributions
          </h2>

          <p className="text-sm text-[#8DD2DB]/80 max-w-md mx-auto mt-4 leading-relaxed">
            Your presence is the greatest gift. If you would like to bless us
            with a financial contribution, the details are below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.8,
          }}
          animate={{
            y: [0, -3, 0],
          }}
          className="bg-[#44B6C5]/5 border border-[#8DD2DB]/20 p-8 md:p-10 rounded-3xl backdrop-blur-md max-w-xl mx-auto text-center space-y-6 relative overflow-hidden"
        >
          <motion.div
            animate={{
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-3xl shadow-[0_0_30px_rgba(141,210,219,0.12)] pointer-events-none"
          />

          <div className="relative z-10 space-y-4">
            <div>
              <p className="text-[10px] uppercase tracking-widest font-black text-[#8DD2DB]">
                Bank Name
              </p>

              <h4 className="text-lg font-black text-white mt-1">
                GTBank (Guaranty Trust Bank)
              </h4>
            </div>

            <div className="border-t border-[#8DD2DB]/10 pt-4">
              <p className="text-[10px] uppercase tracking-widest font-black text-[#8DD2DB]">
                Account Name
              </p>

              <h4 className="text-lg font-black text-white mt-1">
                Joshua & Divine Wedding Project
              </h4>
            </div>

            <div className="border-t border-[#8DD2DB]/10 pt-4">
              <p className="text-[10px] uppercase tracking-widest font-black text-[#8DD2DB] mb-3">
                Account Number
              </p>

              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-3 bg-[#0E1719] border border-[#8DD2DB]/20 hover:border-[#FFCC47]/50 px-5 py-3 rounded-xl transition-all duration-300"
              >
                <span className="text-xl font-black tracking-wider text-[#FFCC47]">
                  {accountNumber}
                </span>

                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.div
                      key="check"
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.6 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Check size={16} className="text-[#8DD2DB]" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="copy"
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.6 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Copy size={16} className="text-[#8DD2DB]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>

            <AnimatePresence>
              {copied && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="text-xs uppercase tracking-widest font-black text-[#FFCC47]"
                >
                  Account number copied!
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
