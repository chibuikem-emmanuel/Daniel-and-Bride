"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Hotel, Users, CheckCircle } from "lucide-react";

export default function RSVP() {
  const [attendance, setAttendance] = useState("");
  const [guestCount, setGuestCount] = useState("1");

  const handleQuickScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="rsvp" className="py-24 bg-[#0E1719] px-6 relative overflow-hidden border-b border-[#8DD2DB]/10">
      
      {/* Background ambient continuous fluid blur layer */}
      <motion.div 
        animate={{ scale: [1, 1.15, 1], opacity: [0.03, 0.06, 0.03] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[10%] w-[50%] h-[50%] rounded-full bg-[#44B6C5] filter blur-[130px] pointer-events-none"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Continuous Floating Header */}
        <motion.div 
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="text-center mb-16 space-y-2"
        >
          <span className="text-xs font-black uppercase tracking-wider text-[#FFCC47] bg-[#8DD2DB]/10 px-4 py-1.5 rounded-full">
            Kindly Reply
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-black tracking-tight text-[#FFFFFF] mt-4">
            RSVP & Event Guide
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main RSVP Form Container */}
        <motion.form
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.1 }}
  animate={{
    boxShadow: [
      "0px 0px 0px rgba(68,182,197,0)",
      "0px 4px 30px rgba(68,182,197,0.05)",
      "0px 0px 0px rgba(68,182,197,0)",
    ],
  }}
  transition={{
    duration: 0.8,
    boxShadow: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }}
  className="lg:col-span-7 bg-[#44B6C5]/5 border border-[#8DD2DB]/20 p-8 md:p-10 space-y-6 rounded-3xl backdrop-blur-md relative"
>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-[#8DD2DB]">Full Name</label>
              <input 
                type="text" 
                required
                className="w-full bg-[#0E1719] border border-[#8DD2DB]/20 p-4 outline-none text-sm text-[#FFFFFF] focus:border-[#44B6C5] focus:ring-1 focus:ring-[#44B6C5] transition-all rounded-xl" 
                placeholder="e.g. Uzoma Nwachukwu" 
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-[#8DD2DB]">Email Address</label>
              <input 
                type="email" 
                required
                className="w-full bg-[#0E1719] border border-[#8DD2DB]/20 p-4 outline-none text-sm text-[#FFFFFF] focus:border-[#44B6C5] focus:ring-1 focus:ring-[#44B6C5] transition-all rounded-xl" 
                placeholder="e.g. uzoma@domain.com" 
              />
            </div>

            {/* Attendance Choice Selector */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-[#8DD2DB]">Will you be attending?</label>
              <div className="relative">
                <select 
                  required
                  value={attendance}
                  onChange={(e) => setAttendance(e.target.value)}
                  className="w-full bg-[#0E1719] border border-[#8DD2DB]/20 p-4 outline-none text-sm text-[#FFFFFF] focus:border-[#44B6C5] focus:ring-1 focus:ring-[#44B6C5] transition-all rounded-xl appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#0E1719] text-[#8DD2DB]/50">Select your attendance status...</option>
                  <option value="yes" className="bg-[#0E1719]">Joyfully Accepts (Yes)</option>
                  <option value="no" className="bg-[#0E1719]">Regretfully Declines (No)</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#8DD2DB]/60 text-xs">▼</div>
              </div>
            </div>

            {/* Dynamic Guest Count Input Configuration */}
            {attendance === "yes" && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="space-y-2 overflow-hidden"
              >
                <label className="text-xs font-black uppercase tracking-widest text-[#8DD2DB] flex items-center gap-2">
                  <Users size={14} /> Specify Guest Count (Including Yourself)
                </label>
                <div className="relative">
                  <select 
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full bg-[#0E1719] border border-[#8DD2DB]/20 p-4 outline-none text-sm text-[#FFFFFF] focus:border-[#44B6C5] focus:ring-1 focus:ring-[#44B6C5] transition-all rounded-xl appearance-none cursor-pointer"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 People (Plus One)</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#8DD2DB]/60 text-xs">▼</div>
                </div>
              </motion.div>
            )}

            {/* Submit Button with Continuous Dynamic Shimmer Effect */}
            <motion.button 
              type="submit" 
              animate={{ 
                backgroundPosition: ["0% 50%", "200% 50%", "0% 50%"],
                scale: [1, 1.015, 1]
              }}
              transition={{ 
                backgroundPosition: { duration: 6, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              style={{
                backgroundImage: "linear-gradient(90deg, #FFCC47 0%, #FFE082 25%, #FFCC47 50%, #FFE082 75%, #FFCC47 100%)",
                backgroundSize: "200% auto"
              }}
              className="w-full text-[#0E1719] py-4 rounded-xl uppercase tracking-widest text-xs font-black hover:opacity-95 shadow-md transition-all duration-300 transform active:scale-95"
            >
              Submit RSVP
            </motion.button>
          </motion.form>

          {/* Side Context Quick-Navigation Controls */}
          <div className="lg:col-span-5 space-y-4 w-full">
            <div className="p-6 bg-[#44B6C5]/5 border border-[#8DD2DB]/10 rounded-3xl backdrop-blur-sm space-y-4">
              <h3 className="text-sm font-black uppercase tracking-widest text-[#FFFFFF] border-b border-[#8DD2DB]/10 pb-3">
                Event Logistics
              </h3>
              
              <p className="text-xs text-[#8DD2DB]/70 leading-relaxed">
                Need to arrange lodging or double-check dates? Use these interactive cards to view specific schedules and tracks.
              </p>

              <div className="flex flex-col gap-3 pt-2">
                {/* View Hotels Trigger */}
                <button
                  type="button"
                  onClick={() => handleQuickScroll("hotels")}
                  className="flex items-center gap-4 bg-[#0E1719] border border-[#8DD2DB]/10 hover:border-[#FFCC47]/40 p-4 rounded-xl text-left w-full transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-[#FFCC47]/10 text-[#FFCC47] group-hover:scale-110 transition-transform">
                    <Hotel size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-[#FFFFFF] uppercase tracking-wider">Nearby Lodging</h4>
                    <p className="text-[11px] text-[#8DD2DB]/50 mt-0.5">Explore accommodation options</p>
                  </div>
                </button>

                {/* View Map Trigger */}
                <button
                  type="button"
                  onClick={() => handleQuickScroll("venue")}
                  className="flex items-center gap-4 bg-[#0E1719] border border-[#8DD2DB]/10 hover:border-[#FFCC47]/40 p-4 rounded-xl text-left w-full transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-[#44B6C5]/10 text-[#44B6C5] group-hover:scale-110 transition-transform">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-[#FFFFFF] uppercase tracking-wider">Wedding Map</h4>
                    <p className="text-[11px] text-[#8DD2DB]/50 mt-0.5">View directions & location</p>
                  </div>
                </button>

                {/* View Timeline Trigger */}
                <button
                  type="button"
                  onClick={() => handleQuickScroll("timeline")}
                  className="flex items-center gap-4 bg-[#0E1719] border border-[#8DD2DB]/10 hover:border-[#FFCC47]/40 p-4 rounded-xl text-left w-full transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-[#8DD2DB]/10 text-[#8DD2DB] group-hover:scale-110 transition-transform">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-[#FFFFFF] uppercase tracking-wider">Event Timeline</h4>
                    <p className="text-[11px] text-[#8DD2DB]/50 mt-0.5">Check arrival & itinerary times</p>
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