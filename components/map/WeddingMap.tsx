"use client";

import { motion } from "framer-motion";

export default function WeddingMap() {
  return (
    <section
      id="venue"
      className="py-24 bg-[#0E1719] px-6 relative overflow-hidden border-b border-[#8DD2DB]/10"
    >
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.03, 0.05, 0.03],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#44B6C5] blur-[140px] pointer-events-none"
      />

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.02, 0.04, 0.02],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] left-[-10%] w-[45%] h-[45%] rounded-full bg-[#8DD2DB] blur-[130px] pointer-events-none"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-center mb-16 space-y-2"
        >
          <span className="text-xs font-black uppercase tracking-wider text-[#FFCC47] bg-[#8DD2DB]/10 px-4 py-1.5 rounded-full">
            Location Details
          </span>

          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mt-4">
            The Venue
          </h2>
        </motion.div>

        {/* Map Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          animate={{
            y: [0, -2, 0],
          }}
          className="w-full p-3 bg-[#44B6C5]/5 border border-[#8DD2DB]/20 rounded-3xl backdrop-blur-sm hover:border-[#44B6C5]/60 transition-colors duration-500"
        >
          <div className="w-full h-[450px] overflow-hidden rounded-2xl relative bg-white border border-[#8DD2DB]/20">
            <iframe
              src="https://maps.google.com/maps?q=rhema%20university%20aba&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Wedding Venue Map"
              className="w-full h-full opacity-95 hover:opacity-100 transition-opacity duration-500"
            />

            <div className="absolute inset-0 border border-[#0E1719]/10 rounded-2xl pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}