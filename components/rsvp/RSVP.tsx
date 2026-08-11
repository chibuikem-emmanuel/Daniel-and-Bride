"use client";

import { useState } from "react";
import api from "@/lib/api";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { MapPin, Calendar, Hotel, Users, Phone, Loader2 } from "lucide-react";

export default function RSVP() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    attendance: "",
    guest_count: 1,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleQuickScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await api.post("/rsvp/submit/", formData);
      console.log(response.data);
      alert("RSVP submitted successfully!");

      setFormData({
        full_name: "",
        email: "",
        attendance: "",
        guest_count: 1,
      });

      router.push("/rsvp-success");
    } catch (error: any) {
      console.log(error);
      if (error.response) {
        alert(JSON.stringify(error.response.data));
      } else {
        alert("Unable to connect to server.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="rsvp"
      className="py-24 bg-[#F5F0EB] px-6 relative overflow-hidden border-b border-[#C2A675]/25"
    >
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[20%] left-[-5%] w-[45%] h-[45%] rounded-full bg-[#D4B2A7] blur-[140px] pointer-events-none"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-center mb-16 space-y-2 flex flex-col items-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#404734] bg-[#404734]/10 border border-[#404734]/20 px-4 py-1.5 rounded-full">
            Kindly Reply
          </span>
          <h2 className="text-3xl md:text-5xl font-serif italic text-[#4A121A] tracking-tight mt-4">
            RSVP & Event Guide
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-7 bg-[#EFE8DF] border border-[#C2A675]/35 p-8 md:p-10 space-y-6 rounded-3xl backdrop-blur-md relative shadow-sm"
          >
            <div className="space-y-2">
              <label className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#404734]">
                Full Name
              </label>
              <input
                type="text"
                required
                value={formData.full_name}
                onChange={(e) =>
                  setFormData({ ...formData, full_name: e.target.value })
                }
                className="w-full bg-[#F5F0EB] border border-[#C2A675]/40 p-4 outline-none text-sm text-[#404734] placeholder-[#404734]/40 focus:border-[#4A121A] focus:ring-1 focus:ring-[#4A121A] transition-all rounded-xl font-sans"
                placeholder="e.g. Uzoma Nwachukwu"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#404734]">
                Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-[#F5F0EB] border border-[#C2A675]/40 p-4 outline-none text-sm text-[#404734] placeholder-[#404734]/40 focus:border-[#4A121A] focus:ring-1 focus:ring-[#4A121A] transition-all rounded-xl font-sans"
                placeholder="e.g. uzoma@domain.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#404734]">
                Will you be attending?
              </label>
              <div className="relative">
                <select
                  value={formData.attendance}
                  onChange={(e) =>
                    setFormData({ ...formData, attendance: e.target.value })
                  }
                  className="w-full bg-[#F5F0EB] border border-[#C2A675]/40 p-4 outline-none text-sm text-[#404734] focus:border-[#4A121A] focus:ring-1 focus:ring-[#4A121A] transition-all rounded-xl appearance-none cursor-pointer font-sans"
                >
                  <option value="" className="bg-[#F5F0EB] text-[#404734]/50">
                    Select your attendance status...
                  </option>
                  <option value="yes" className="bg-[#F5F0EB]">
                    Joyfully Accepts (Yes)
                  </option>
                  <option value="no" className="bg-[#F5F0EB]">
                    Regretfully Declines (No)
                  </option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#C2A675] text-xs">
                  ▼
                </div>
              </div>
            </div>

            {formData.attendance === "yes" && (
              <div className="space-y-2">
                <label className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#404734] flex items-center gap-2">
                  <Users size={14} className="text-[#C2A675]" /> Specify Guest Count (Including Yourself)
                </label>
                <div className="relative">
                  <select
                    value={formData.guest_count}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        guest_count: Number(e.target.value),
                      })
                    }
                    className="w-full bg-[#F5F0EB] border border-[#C2A675]/40 p-4 outline-none text-sm text-[#404734] focus:border-[#4A121A] focus:ring-1 focus:ring-[#4A121A] transition-all rounded-xl appearance-none cursor-pointer font-sans"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 People (Plus One)</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#C2A675] text-xs">
                    ▼
                  </div>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#4A121A] text-[#F5F0EB] hover:bg-[#404734] py-4 rounded-full uppercase tracking-[0.25em] text-xs font-semibold transition-colors duration-300 shadow-sm cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 size={16} className="animate-spin text-[#C2A675]" />
                  <span>Submitting...</span>
                </>
              ) : (
                "Submit RSVP"
              )}
            </button>
          </form>

          <div className="lg:col-span-5 space-y-4 w-full">
            <div className="p-6 bg-[#EFE8DF] border border-[#C2A675]/35 rounded-3xl backdrop-blur-sm space-y-4 shadow-sm">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4A121A] border-b border-[#C2A675]/30 pb-3">
                Event Contacts
              </h3>

              <div className="space-y-2 font-sans text-xs text-[#404734]">
                <a href="tel:08104626375" className="flex items-center gap-2 hover:text-[#4A121A]">
                  <Phone size={14} className="text-[#C2A675]" /> 0810 462 6375
                </a>
                <a href="tel:09033052748" className="flex items-center gap-2 hover:text-[#4A121A]">
                  <Phone size={14} className="text-[#C2A675]" /> 0903 305 2748
                </a>
                <a href="tel:08103959630" className="flex items-center gap-2 hover:text-[#4A121A]">
                  <Phone size={14} className="text-[#C2A675]" /> 0810 395 9630
                </a>
              </div>

              <div className="flex flex-col gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => handleQuickScroll("hotels")}
                  className="flex items-center gap-4 bg-[#F5F0EB] border border-[#C2A675]/30 hover:border-[#4A121A]/50 p-4 rounded-xl text-left w-full transition-all group shadow-sm cursor-pointer"
                >
                  <div className="p-2.5 rounded-lg bg-[#404734]/10 text-[#404734] group-hover:bg-[#4A121A] group-hover:text-[#F5F0EB] transition-colors duration-300">
                    <Hotel size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#404734] uppercase tracking-wider">
                      Nearby Lodging
                    </h4>
                    <p className="text-[11px] text-[#404734]/60 mt-0.5 font-sans">
                      Explore accommodations
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => handleQuickScroll("venue")}
                  className="flex items-center gap-4 bg-[#F5F0EB] border border-[#C2A675]/30 hover:border-[#4A121A]/50 p-4 rounded-xl text-left w-full transition-all group shadow-sm cursor-pointer"
                >
                  <div className="p-2.5 rounded-lg bg-[#404734]/10 text-[#404734] group-hover:bg-[#4A121A] group-hover:text-[#F5F0EB] transition-colors duration-300">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#404734] uppercase tracking-wider">
                      Wedding Map
                    </h4>
                    <p className="text-[11px] text-[#404734]/60 mt-0.5 font-sans">
                      Directions & venue map
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}