"use client";

import { useState } from "react";
import { MapPin, Calendar, Hotel, Users } from "lucide-react";
import api from "@/lib/api";

import { useRouter } from "next/navigation";






export default function RSVP() {

  const router = useRouter();


 const [formData, setFormData] = useState({
  full_name: "",
  email: "",
  attendance: "",
  guest_count: 1,
});

const attendance = formData.attendance;

  const handleQuickScroll = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };



  const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  try {
    const response = await api.post("/rsvp/submit/", formData);

    console.log(response.data);

    router.push("/rsvp-success");

    setFormData({
      full_name: "",
      email: "",
      attendance: "",
      guest_count: 1,
    });

  } catch (error) {
    console.error(error);

    alert("Something went wrong.");
  }
};

  return (
    <section
      id="rsvp"
      className="py-24 bg-[#0E1719] px-6 border-b border-[#8DD2DB]/10"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-2">
          <span className="text-xs font-black uppercase tracking-wider text-[#FFCC47] bg-[#8DD2DB]/10 px-4 py-1.5 rounded-full">
            Kindly Reply
          </span>

          <h2 className="text-3xl md:text-4xl font-sans font-black tracking-tight text-[#FFFFFF] mt-4">
            RSVP & Event Guide
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* RSVP Form */}
          <form
           onSubmit={handleSubmit}
            className="lg:col-span-7 bg-[#44B6C5]/5 border border-[#8DD2DB]/20 p-8 md:p-10 space-y-6 rounded-3xl backdrop-blur-md"
          >
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-[#8DD2DB]">
                Full Name
              </label>

           <input
                  type="text"
                  required
                  value={formData.full_name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      full_name: e.target.value,
                    })
                  }
                  placeholder="e.g. Uzoma Nwachukwu"
                  className="w-full bg-[#0E1719] border border-[#8DD2DB]/20 p-4 outline-none text-sm text-white rounded-xl"
                />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-[#8DD2DB]">
                Email Address
              </label>

            <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                placeholder="e.g. john@gmail.com"
                className="w-full bg-[#0E1719] border border-[#8DD2DB]/20 p-4 outline-none text-sm text-white rounded-xl"
              />
            </div>

            {/* Attendance */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-[#8DD2DB]">
                Will you be attending?
              </label>

              <div className="relative">
                <select
                  required
                 value={formData.attendance}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      attendance: e.target.value,
                    })
                  }
                  className="w-full bg-[#0E1719] border border-[#8DD2DB]/20 p-4 outline-none text-sm text-[#FFFFFF] focus:border-[#44B6C5] focus:ring-1 focus:ring-[#44B6C5] transition-all rounded-xl appearance-none cursor-pointer"
                >
                  <option value="">
                    Select your attendance status...
                  </option>

                  <option value="yes">
                    Joyfully Accepts (Yes)
                  </option>

                  <option value="no">
                    Regretfully Declines (No)
                  </option>
                </select>

                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#8DD2DB]/60 text-xs">
                  ▼
                </div>
              </div>
            </div>

            {/* Guest Count */}
            {formData.attendance === "yes" && (
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-[#8DD2DB] flex items-center gap-2">
                  <Users size={14} />
                  Specify Guest Count (Including Yourself)
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
                    className="w-full bg-[#0E1719] border border-[#8DD2DB]/20 p-4 outline-none text-sm text-[#FFFFFF] focus:border-[#44B6C5] focus:ring-1 focus:ring-[#44B6C5] transition-all rounded-xl appearance-none cursor-pointer"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 People (Plus One)</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                  </select>

                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#8DD2DB]/60 text-xs">
                    ▼
                  </div>
                </div>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#FFCC47] text-[#0E1719] py-4 rounded-xl uppercase tracking-widest text-xs font-black hover:opacity-95 transition-all duration-300"
            >
              Submit RSVP
            </button>
          </form>

          {/* Sidebar */}
          <div className="lg:col-span-5 space-y-4 w-full">
            <div className="p-6 bg-[#44B6C5]/5 border border-[#8DD2DB]/10 rounded-3xl backdrop-blur-sm space-y-4">
              <h3 className="text-sm font-black uppercase tracking-widest text-[#FFFFFF] border-b border-[#8DD2DB]/10 pb-3">
                Event Logistics
              </h3>

              <p className="text-xs text-[#8DD2DB]/70 leading-relaxed">
                Need to arrange lodging or double-check dates? Use these
                interactive cards to view specific schedules and tracks.
              </p>

              <div className="flex flex-col gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => handleQuickScroll("hotels")}
                  className="flex items-center gap-4 bg-[#0E1719] border border-[#8DD2DB]/10 hover:border-[#FFCC47]/40 p-4 rounded-xl text-left w-full transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-[#FFCC47]/10 text-[#FFCC47]">
                    <Hotel size={18} />
                  </div>

                  <div>
                    <h4 className="text-xs font-black text-[#FFFFFF] uppercase tracking-wider">
                      Nearby Lodging
                    </h4>

                    <p className="text-[11px] text-[#8DD2DB]/50 mt-0.5">
                      Explore accommodation options
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => handleQuickScroll("venue")}
                  className="flex items-center gap-4 bg-[#0E1719] border border-[#8DD2DB]/10 hover:border-[#FFCC47]/40 p-4 rounded-xl text-left w-full transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-[#44B6C5]/10 text-[#44B6C5]">
                    <MapPin size={18} />
                  </div>

                  <div>
                    <h4 className="text-xs font-black text-[#FFFFFF] uppercase tracking-wider">
                      Wedding Map
                    </h4>

                    <p className="text-[11px] text-[#8DD2DB]/50 mt-0.5">
                      View directions & location
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => handleQuickScroll("timeline")}
                  className="flex items-center gap-4 bg-[#0E1719] border border-[#8DD2DB]/10 hover:border-[#FFCC47]/40 p-4 rounded-xl text-left w-full transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-[#8DD2DB]/10 text-[#8DD2DB]">
                    <Calendar size={18} />
                  </div>

                  <div>
                    <h4 className="text-xs font-black text-[#FFFFFF] uppercase tracking-wider">
                      Event Timeline
                    </h4>

                    <p className="text-[11px] text-[#8DD2DB]/50 mt-0.5">
                      Check arrival & itinerary times
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