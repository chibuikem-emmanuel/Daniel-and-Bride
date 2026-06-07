"use client";

import { motion } from "framer-motion";

const lodging = [
  { 
    title: "Luxury City Royal", 
    fee: "12k – 33k NGN", 
    desc: "Premium quarters featuring high-end suites, premium amenities, and beautiful comfort for your stay.", 
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop",
    link: "https://www.google.com/search?q=Luxury+City+Royal+Aba+hotel" 
  },
  { 
    title: "City Global Suite", 
    fee: "9k – 15k NGN", 
    desc: "Clean, comfortable corporate lodgings tailored perfectly for traveling out-of-town wedding guests.", 
    url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=600&auto=format&fit=crop",
    link: "https://www.google.com/search?q=City+Global+Hotels+Aba" 
  },
  { 
    title: "Sky Drop Inn", 
    fee: "3.5k – 6.3k NGN", 
    desc: "A warm, minimal baseline setup optimized for a cozy, uncomplicated overnight stay.", 
    url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop",
    link: "https://www.google.com/search?q=Sky+Drop+Hotel+Aba" 
  }
];

export default function Hotels() {
  return (
    <section id="hotels" className="py-24 bg-[#0E1719] px-6 relative overflow-hidden border-b border-[#8DD2DB]/10">
      
      {/* Slow-rotating background atmospheric lighting */}
      <motion.div 
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-20%] left-[25%] w-[50%] h-[50%] rounded-full bg-[#44B6C5]/5 filter blur-[140px] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Continuous Floating Header */}
        <motion.div 
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="text-center mb-16 space-y-2"
        >
          <span className="text-xs font-black uppercase tracking-wider text-[#FFCC47] bg-[#8DD2DB]/10 px-4 py-1.5 rounded-full">
            Nearby Accommodations
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-black tracking-tight text-[#FFFFFF] mt-4">
            Where to Stay
          </h2>
        </motion.div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {lodging.map((h, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              animate={{ 
                boxShadow: ["0px 0px 0px rgba(141,210,219,0)", "0px 4px 25px rgba(141,210,219,0.04)", "0px 0px 0px rgba(141,210,219,0)"],
                y: [0, -4, 0]
              }}
              transition={{ 
                initial: { duration: 0.6, delay: idx * 0.1 },
                boxShadow: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: idx * 0.15 }
              }}
              className="bg-[#44B6C5]/5 border border-[#8DD2DB]/15 rounded-3xl flex flex-col justify-between group hover:border-[#44B6C5]/40 hover:bg-[#44B6C5]/10 transition-all duration-500 backdrop-blur-sm overflow-hidden p-3"
            >
              <div>
                {/* Visual Imagery Container */}
                <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden relative mb-5 bg-[#0E1719] border border-[#8DD2DB]/10">
                  <motion.img 
                    src={h.url}
                    alt={h.title}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{
                      duration: 12 + idx * 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1719]/50 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Text Content */}
                <div className="px-3 space-y-2.5">
                  <h3 className="text-xl font-sans font-black text-[#FFFFFF] group-hover:text-[#FFCC47] transition-colors duration-300">
                    {h.title}
                  </h3>
                  <p className="text-sm text-[#8DD2DB]/80 font-medium leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              </div>
              
              {/* Action Blocks */}
              <div className="mt-8 pt-5 border-t border-[#8DD2DB]/10 px-3 pb-2">
                <span className="text-xl font-sans font-black text-[#FFCC47] block text-center mb-4 tracking-tight">
                  {h.fee}
                </span>
                <a 
                  href={h.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="block w-full text-center bg-[#8DD2DB]/10 text-[#8DD2DB] border border-[#8DD2DB]/20 py-3 rounded-xl text-xs uppercase tracking-widest font-black hover:bg-[#FFCC47] hover:text-[#0E1719] hover:border-[#FFCC47] hover:shadow-md transition-all duration-300"
                >
                  View Details
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}