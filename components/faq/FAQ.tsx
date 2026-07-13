"use client";

import { useState } from "react";
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
    <section
      id="faq"
      className="py-24 bg-[#0E1719] px-6 border-b border-[#8DD2DB]/10"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-2">
          <span className="text-xs font-black uppercase tracking-wider text-[#FFCC47] bg-[#8DD2DB]/10 px-4 py-1.5 rounded-full">
            Common Questions
          </span>

          <h2 className="text-3xl md:text-4xl font-sans font-black tracking-tight text-[#FFFFFF] mt-4">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 max-w-2xl mx-auto">
          {rows.map((item, index) => {
            const active = openIdx === index;

            return (
              <div
                key={index}
                className={`border bg-[#44B6C5]/5 px-6 rounded-2xl transition-all duration-300 ${
                  active
                    ? "border-[#44B6C5]/40 bg-[#44B6C5]/10"
                    : "border-[#8DD2DB]/15 hover:border-[#8DD2DB]/30"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(active ? null : index)}
                  className="w-full flex items-center justify-between py-5 text-left focus:outline-none group"
                >
                  <h3 className="text-base font-sans font-bold text-[#FFFFFF] tracking-wide pr-4 group-hover:text-[#FFCC47] transition-colors duration-300">
                    {item.q}
                  </h3>

                  <ChevronDown
                    size={16}
                    className={`text-[#FFCC47] transition-transform duration-300 ${
                      active ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {active && (
                  <div className="pb-6 text-sm text-[#8DD2DB] font-medium leading-relaxed border-t border-[#8DD2DB]/10 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
