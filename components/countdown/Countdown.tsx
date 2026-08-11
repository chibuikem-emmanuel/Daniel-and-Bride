"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Countdown() {
  // Target: Church Ceremony on Saturday, November 14, 2026 at 10:00 AM
  const weddingDate = new Date("2026-11-14T10:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      };
    };

    // Initial sync
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  const blocks = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HRS", value: timeLeft.hours },
    { label: "MINS", value: timeLeft.minutes },
    { label: "SECS", value: timeLeft.seconds },
  ];

  return (
    <section className="relative py-20 bg-[#EFE8DF] text-center px-6 border-y border-[#C2A675]/25">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        
        {/* Left Heading Label */}
        <div className="text-center md:text-left space-y-1">
          <p className="uppercase tracking-[0.25em] text-xs font-bold text-[#C2A675]">
            The Wedding Countdown
          </p>
          <h2 className="text-2xl md:text-3xl font-serif italic text-[#4A121A]">
            Counting Down The Moments
          </h2>
        </div>

        {/* Minimal Editorial Digital Layout */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
          {blocks.map((item, index) => (
            <div key={item.label} className="flex items-baseline gap-4 sm:gap-6">
              <div className="flex flex-col items-center min-w-[3rem]">
                <span className="text-3xl md:text-4xl font-serif font-light text-[#404734] tracking-tight">
                  {isMounted ? String(item.value).padStart(2, "0") : "00"}
                </span>
                <span className="uppercase text-[9px] tracking-[0.2em] font-semibold text-[#404734]/60 mt-1">
                  {item.label}
                </span>
              </div>
              {index < blocks.length - 1 && (
                <span className="text-xl font-serif text-[#C2A675]/60 self-start mt-1">
                  :
                </span>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}