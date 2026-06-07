"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const captures = [
  {
    url: "https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=1974&auto=format&fit=crop",
    aspect: "aspect-[3/4]", 
    offset: "lg:mt-0",
    speedFactor: 0.05, 
  },
  {
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    aspect: "aspect-[4/3]", 
    offset: "lg:mt-32", 
    speedFactor: -0.05, 
  },
  {
    url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1974&auto=format&fit=crop",
    aspect: "aspect-[1.1/1]", 
    offset: "lg:-mt-12", 
    speedFactor: 0.08, 
  },
  {
    url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1974&auto=format&fit=crop",
    aspect: "aspect-[3/4]", 
    offset: "lg:mt-16", 
    speedFactor: -0.08, 
  },
];

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position relative to the gallery section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section 
      ref={containerRef}
      id="gallery" 
      className="relative py-32 bg-[#0E1719] px-6 overflow-hidden border-b border-[#8DD2DB]/10"
    >
      
      {/* Slow-evolving background atmospheric lighting */}
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.04, 0.07, 0.04]
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-5%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#44B6C5] filter blur-[150px] pointer-events-none"
      />
      <motion.div 
        animate={{ 
          scale: [1.15, 1, 1.15],
          opacity: [0.03, 0.06, 0.03]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-5%] right-[-5%] w-[55%] h-[55%] rounded-full bg-[#8DD2DB] filter blur-[150px] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Entrance Revelations Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-28 space-y-3"
        >
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#FFCC47] bg-[#8DD2DB]/10 px-4 py-1.5 rounded-full">
            Captured Moments
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tight text-[#FFFFFF] mt-4">
            Our Gallery
          </h2>
        </motion.div>

        {/* Staggered Masonry Collage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
          {captures.map((item, idx) => {
            // Compute distinct scroll parallax speeds for adjacent columns
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const yParallax = useTransform(scrollYProgress, [0, 1], [0, item.speedFactor * 600]);

            return (
              <motion.div
                key={idx}
                style={{ y: yParallax }}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: (idx % 2) * 0.15 }}
                whileHover={{ 
                  scale: 1.015,
                  rotate: idx % 2 === 0 ? 0.5 : -0.5,
                  y: item.speedFactor * 300 // preserves structural composition offsets slightly during execution
                }}
                className={`border border-[#8DD2DB]/20 bg-[#44B6C5]/5 p-3.5 rounded-3xl group relative overflow-hidden shadow-2xl transition-colors duration-500 hover:border-[#44B6C5]/60 hover:bg-[#44B6C5]/10 ${item.offset}`}
              >
                <div className={`w-full ${item.aspect} overflow-hidden relative rounded-2xl`}>
                  
                  {/* Cinematic Ken Burns Lens Motion */}
                  <motion.img 
                    src={item.url} 
                    alt="Joshua and Divine moment" 
                    animate={{ 
                      scale: [1.02, 1.08, 1.02],
                    }}
                    transition={{
                      duration: 16 + idx * 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 ease-out" 
                  />
                  
                  {/* Dynamic Dark Gradient Shroud - lifts on cursor interaction */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1719]/40 via-transparent to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Micro Ambient Protective Frame Glow */}
                  <div className="absolute inset-0 border border-[#8DD2DB]/10 pointer-events-none rounded-2xl group-hover:border-[#FFCC47]/40 transition-colors duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}