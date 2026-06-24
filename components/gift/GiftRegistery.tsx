"use client";

import { useState } from "react";
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
      className="py-24 bg-[#0E1719] px-6 border-b border-[#8DD2DB]/10"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
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
        </div>

        {/* Registry Card */}
        <div className="bg-[#44B6C5]/5 border border-[#8DD2DB]/20 p-8 md:p-10 rounded-3xl backdrop-blur-md max-w-xl mx-auto text-center space-y-6">
          <div className="space-y-4">
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
                className="inline-flex items-center gap-3 bg-[#0E1719] border border-[#8DD2DB]/20 hover:border-[#FFCC47]/50 px-5 py-3 rounded-xl transition-colors duration-300"
              >
                <span className="text-xl font-black tracking-wider text-[#FFCC47]">
                  {accountNumber}
                </span>

                {copied ? (
                  <Check size={16} className="text-[#8DD2DB]" />
                ) : (
                  <Copy size={16} className="text-[#8DD2DB]" />
                )}
              </button>
            </div>

            {copied && (
              <p className="text-xs uppercase tracking-widest font-black text-[#FFCC47]">
                Account number copied!
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}