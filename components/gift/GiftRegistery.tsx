"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check } from "lucide-react";

export default function GiftRegistry() {
  const [copied, setCopied] = useState(false);
  const accountNumber = "1234567890"; // Replace with your actual account number

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(accountNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error("Failed to copy destination account number details", err);
    }
  };

  return (
    <section id="registry" className="py-24 bg-[#0E1719] px-6 relative overflow-hidden border-b border-[#8DD2DB]/10">
      
      {/* Slow-pulsing background ambient deep aqua lighting */}
      <motion.div 
        animate={{ scale: [1, 1.12, 1], opacity: [0.02, 0.04, 0.02] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-5%] left-[20%] w-[45%] h-[45%] rounded-full bg-[#44B6C5] filter blur-[130px] pointer-events-none"
      />

      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Continuous Floating Header */}
        <motion.div 
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="text-center mb-16 space-y-2"
        >
          <span className="text-xs font-black uppercase tracking-wider text-[#FFCC47] bg-[#8DD2DB]/10 px-4 py-1.5 rounded-full">
            Love & Support
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-black tracking-tight text-[#FFFFFF] mt-4">
            Financial Contributions
          </h2>
          <p className="text-sm text-[#8DD2DB]/80 font-medium max-w-md mx-auto pt-2 leading-relaxed">
            Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a financial contribution, details are provided below.
          </p>
        </motion.div>

        {/* Account Details Display Card with Continuous Subtle Glow Loop */}
       <motion.div
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.1 }}
  transition={{
    duration: 0.8
  }}
  className="bg-[#44B6C5]/5 border border-[#8DD2DB]/20 p-8 md:p-10 rounded-3xl backdrop-blur-md max-w-xl mx-auto text-center space-y-6 relative overflow-hidden"
>
  <motion.div
    animate={{
      boxShadow: [
        "0px 0px 0px rgba(141,210,219,0)",
        "0px 4px 25px rgba(141,210,219,0.05)",
        "0px 0px 0px rgba(141,210,219,0)"
      ]
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className="absolute inset-0 rounded-3xl pointer-events-none"
  />
          {/* Internal content grid alignment */}
          <div className="space-y-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-[#8DD2DB]">Bank Name</p>
              <h4 className="text-lg font-sans font-black text-[#FFFFFF] mt-1">GTBank (Guaranty Trust Bank)</h4>
            </div>
            
            <div className="border-t border-[#8DD2DB]/10 pt-4">
              <p className="text-[10px] font-black uppercase tracking-widest text-[#8DD2DB]">Account Name</p>
              <h4 className="text-lg font-sans font-black text-[#FFFFFF] mt-1">Joshua & Divine Wedding Project</h4>
            </div>

            <div className="border-t border-[#8DD2DB]/10 pt-4 flex flex-col items-center">
              <p className="text-[10px] font-black uppercase tracking-widest text-[#8DD2DB] mb-1">Account Number</p>
              
              {/* Interactive Micro Copy Clipboard Element */}
              <div 
                onClick={handleCopy}
                className="inline-flex items-center gap-3 bg-[#0E1719] border border-[#8DD2DB]/20 hover:border-[#FFCC47]/50 px-5 py-3 rounded-xl cursor-pointer group transition-all duration-300 active:scale-[0.98]"
              >
                <span className="text-xl font-sans font-black text-[#FFCC47] tracking-wider selection:bg-transparent">
                  {accountNumber}
                </span>
                
                <div className="w-4 h-4 text-[#8DD2DB] group-hover:text-[#FFCC47] transition-colors relative flex items-center justify-center">
                  <AnimatePresence mode="wait" initial={false}>
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
                        <Copy size={14} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          {/* Toast Notification In-Card Feedback Message */}
          <div className="h-4 flex items-center justify-center">
            <AnimatePresence>
              {copied && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="text-[10px] text-[#FFCC47] uppercase font-black tracking-widest"
                >
                  Account details copied to clipboard!
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}