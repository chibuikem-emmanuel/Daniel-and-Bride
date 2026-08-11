"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const captures = [
  {
    url: "Image1 (3).jpeg",
    aspect: "aspect-[3/4]",
    offset: "lg:mt-0",
    speedFactor: 0.05,
  },
  {
    url: "Image1 (5).jpeg",
    aspect: "aspect-[4/3]",
    offset: "lg:mt-32",
    speedFactor: -0.05,
  },
  {
    url: "Image1 (2).jpeg",
    aspect: "aspect-[1.1/1]",
    offset: "lg:-mt-12",
    speedFactor: 0.08,
  },
  {
    url: "Image1 (1).jpeg",
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
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={containerRef}
      id="gallery"
      className="relative py-32 bg-[#F5F0EB] px-6 overflow-hidden border-b border-[#C2A675]/25"
    >
      {/* Slow-evolving background atmospheric ambient lighting */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-5%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#D4B2A7] filter blur-[150px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1.15, 1, 1.15],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-5%] right-[-5%] w-[55%] h-[55%] rounded-full bg-[#C2A675] filter blur-[150px] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-28 space-y-3 flex flex-col items-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#404734] bg-[#404734]/10 border border-[#404734]/20 px-4 py-1.5 rounded-full">
            Captured Moments
          </span>
          <h2 className="text-3xl md:text-5xl font-serif italic tracking-tight text-[#4A121A] mt-4">
            Our Gallery
          </h2>
        </motion.div>

        {/* Staggered Masonry Collage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
          {captures.map((item, idx) => {
            // Compute distinct scroll parallax speeds for adjacent columns
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const yParallax = useTransform(
              scrollYProgress,
              [0, 1],
              [0, item.speedFactor * 600]
            );

            return (
              <motion.div
                key={idx}
                style={{ y: yParallax }}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: (idx % 2) * 0.15,
                }}
                whileHover={{
                  scale: 1.015,
                  rotate: idx % 2 === 0 ? 0.5 : -0.5,
                  y: item.speedFactor * 300,
                }}
                className={`border border-[#C2A675]/35 bg-[#EFE8DF] p-3.5 rounded-3xl group relative overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:border-[#4A121A]/50 hover:bg-[#F5F0EB] ${item.offset}`}
              >
                <div
                  className={`w-full ${item.aspect} overflow-hidden relative rounded-2xl`}
                >
                  {/* Cinematic Ken Burns Lens Motion */}
                  <motion.img
                    src={item.url}
                    alt="Daniel and Rejoice moment"
                    animate={{
                      scale: [1.02, 1.08, 1.02],
                    }}
                    transition={{
                      duration: 16 + idx * 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 ease-out"
                  />

                  {/* Soft Warm Gradient Shroud */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#404734]/30 via-transparent to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />

                  {/* Micro Ambient Protective Frame Glow */}
                  <div className="absolute inset-0 border border-[#C2A675]/20 pointer-events-none rounded-2xl group-hover:border-[#4A121A]/40 transition-colors duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}