"use client";

import { motion } from "framer-motion";

const lodging = [
  {
    title: "Luxury City Royal",
    fee: "12k – 33k NGN",
    desc: "Premium quarters featuring high-end suites, premium amenities, and beautiful comfort for your stay.",
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop",
    link: "https://www.google.com/search?q=Luxury+City+Royal+Aba+hotel",
  },
  {
    title: "City Global Suite",
    fee: "9k – 15k NGN",
    desc: "Clean, comfortable corporate lodgings tailored perfectly for traveling out-of-town wedding guests.",
    url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=600&auto=format&fit=crop",
    link: "https://www.google.com/search?q=City+Global+Hotels+Aba",
  },
  {
    title: "Sky Drop Inn",
    fee: "3.5k – 6.3k NGN",
    desc: "A warm, minimal baseline setup optimized for a cozy, uncomplicated overnight stay.",
    url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop",
    link: "https://www.google.com/search?q=Sky+Drop+Hotel+Aba",
  },
];

export default function Hotels() {
  return (
    <section
      id="hotels"
      className="py-24 bg-[#F5F0EB] px-6 relative overflow-hidden border-b border-[#C2A675]/25"
    >
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] left-[25%] w-[50%] h-[50%] rounded-full bg-[#D4B2A7] blur-[140px] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-center mb-16 flex flex-col items-center space-y-2"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#404734] bg-[#404734]/10 border border-[#404734]/20 px-4 py-1.5 rounded-full">
            Nearby Accommodations
          </span>

          <h2 className="text-3xl md:text-5xl font-serif italic text-[#4A121A] tracking-tight mt-4">
            Where to Stay
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {lodging.map((h, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
              }}
              animate={{
                y: [0, -4, 0],
              }}
              className="bg-[#EFE8DF] border border-[#C2A675]/35 rounded-3xl flex flex-col justify-between group hover:border-[#C2A675]/60 transition-all duration-500 backdrop-blur-sm overflow-hidden p-3 shadow-sm hover:shadow-md"
            >
              <div>
                <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden relative mb-5 bg-[#F5F0EB] border border-[#C2A675]/20">
                  <motion.img
                    src={h.url}
                    alt={h.title}
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 12 + idx * 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4A121A]/30 via-transparent to-transparent" />
                </div>

                <div className="px-3 space-y-2.5">
                  <h3 className="text-xl font-serif italic text-[#4A121A]">
                    {h.title}
                  </h3>

                  <p className="text-xs text-[#404734]/80 leading-relaxed font-sans">
                    {h.desc}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-[#C2A675]/30 px-3 pb-2">
                <span className="text-lg font-serif italic text-[#4A121A] block text-center mb-4">
                  {h.fee}
                </span>

                <a
                  href={h.link}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full text-center bg-[#4A121A] text-[#F5F0EB] hover:bg-[#404734] py-3 rounded-full text-xs uppercase tracking-[0.2em] font-semibold transition-colors duration-300 shadow-sm"
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