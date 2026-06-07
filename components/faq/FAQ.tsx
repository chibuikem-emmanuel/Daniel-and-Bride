"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const rows = [
  { 
    q: "What is the dress code for the wedding?", 
    a: "We would love to see our guests in formal luxury attire. We recommend deep, elegant tones, minimalist styles, or elegant traditional attire to match our celebration's aesthetic." 
  },
  { 
    q: "Can I bring a plus-one or extra guest?", 
    a: "Due to limited seating constraints at our venue, invitations are strictly reserved for names explicitly stated on your invitation card. We appreciate your understanding!" 
  },
  { 
    q: "Is parking available at the venue location?", 
    a: "Yes, fully secured on-site parking is available for all confirmed guests at the main entrance, with security personnel guiding vehicles throughout the event." 
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-[#0E1719] px-6 relative overflow-hidden border-b border-[#8DD2DB]/10">
      
      {/* Background soft ambient continuous pulse layer */}
      <motion.div 
        animate={{ scale: [1, 1.08, 1], opacity: [0.03, 0.05, 0.03] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[15%] w-[45%] h-[45%] rounded-full bg-[#44B6C5] filter blur-[120px] pointer-events-none"
      />

      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Continuous Floating Header */}
        <motion.div 
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="text-center mb-16 space-y-2"
        >
          <span className="text-xs font-black uppercase tracking-wider text-[#FFCC47] bg-[#8DD2DB]/10 px-4 py-1.5 rounded-full">
            Common Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-black tracking-tight text-[#FFFFFF] mt-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* Accordion Layout Grid Stack */}
        <div className="space-y-4 max-w-2xl mx-auto">
          {rows.map((item, index) => {
            const active = openIdx === index;
            return (
              <motion.div 
                key={index} 
                animate={{ 
                  boxShadow: active 
                    ? "0px 4px 20px rgba(68,182,197,0.06)" 
                    : ["0px 0px 0px rgba(141,210,219,0)", "0px 2px 12px rgba(141,210,219,0.02)", "0px 0px 0px rgba(141,210,219,0)"]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
                className={`border bg-[#44B6C5]/5 px-6 rounded-2xl transition-colors duration-500 ${
                  active ? "border-[#44B6C5]/40 bg-[#44B6C5]/10" : "border-[#8DD2DB]/15 hover:border-[#8DD2DB]/30"
                }`}
              >
                <button 
                  onClick={() => setOpenIdx(active ? null : index)} 
                  className="w-full flex items-center justify-between py-5 text-left focus:outline-none group"
                >
                  <h3 className="text-base font-sans font-bold text-[#FFFFFF] tracking-wide pr-4 group-hover:text-[#FFCC47] transition-colors duration-300">
                    {item.q}
                  </h3>
                  
                  {/* Icon with rotational switch and subtle active scaling pulse */}
                  <motion.div
                    animate={active ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown 
                      size={16} 
                      className={`text-[#FFCC47] transition-transform duration-500 ease-out ${active ? "rotate-180" : ""}`} 
                    />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {active && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: "auto", opacity: 1 }} 
                      exit={{ height: 0, opacity: 0 }} 
                      transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                    >
                      <div className="pb-6 text-sm text-[#8DD2DB] font-medium leading-relaxed border-t border-[#8DD2DB]/10 pt-4">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}