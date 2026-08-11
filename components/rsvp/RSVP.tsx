"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Send, CheckCircle, AlertCircle } from "lucide-react";

export default function RSVPForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "yes",
    guests: "1",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error" | null

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    try {
      // Replace with your actual backend endpoint URL
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Server error");

      setStatus("success");
      setFormData({ name: "", email: "", attending: "yes", guests: "1" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-[#F5F0EB] px-6 relative border-b border-[#C2A675]/25">
      <div className="max-w-xl mx-auto bg-[#EFE8DF] border border-[#C2A675]/40 p-8 md:p-10 rounded-2xl shadow-sm backdrop-blur-sm">
        
        <div className="text-center mb-8 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#404734] bg-[#404734]/10 border border-[#404734]/20 px-4 py-1.5 rounded-full">
            RSVP
          </span>
          <h2 className="text-3xl md:text-4xl font-serif italic text-[#4A121A] pt-2">
            Are You Attending?
          </h2>
          <p className="text-xs text-[#404734]/80 font-sans tracking-wide">
            Please respond to help us finalize our preparations.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-[#404734] mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Chibuikem Emmanuel"
              className="w-full bg-[#F5F0EB] border border-[#C2A675]/40 rounded-lg px-4 py-3 text-sm text-[#404734] focus:outline-none focus:border-[#4A121A] transition-colors"
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-[#404734] mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. name@example.com"
              className="w-full bg-[#F5F0EB] border border-[#C2A675]/40 rounded-lg px-4 py-3 text-sm text-[#404734] focus:outline-none focus:border-[#4A121A] transition-colors"
            />
          </div>

          {/* Attendance Selection */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-[#404734] mb-2">
                Attendance
              </label>
              <select
                name="attending"
                value={formData.attending}
                onChange={handleChange}
                className="w-full bg-[#F5F0EB] border border-[#C2A675]/40 rounded-lg px-4 py-3 text-sm text-[#404734] focus:outline-none focus:border-[#4A121A] cursor-pointer transition-colors"
              >
                <option value="yes">Joyfully Accepts</option>
                <option value="no">Regretfully Declines</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-[#404734] mb-2">
                Guests
              </label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full bg-[#F5F0EB] border border-[#C2A675]/40 rounded-lg px-4 py-3 text-sm text-[#404734] focus:outline-none focus:border-[#4A121A] cursor-pointer transition-colors"
              >
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
              </select>
            </div>
          </div>

          {/* Submit Button with Preloader Spinner */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-6 bg-[#4A121A] hover:bg-[#380d14] text-[#F5F0EB] font-serif italic text-base py-3.5 px-6 rounded-full border border-[#C2A675]/40 flex items-center justify-center gap-2 transition-all duration-300 shadow-md cursor-pointer disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-[#C2A675]" />
                <span>Sending RSVP...</span>
              </>
            ) : (
              <>
                <span>Confirm RSVP</span>
                <Send size={15} className="text-[#C2A675]" />
              </>
            )}
          </button>
        </form>

        {/* Status Alerts */}
        <AnimatePresence>
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-6 p-4 rounded-lg bg-[#404734]/15 border border-[#404734]/30 text-[#404734] text-xs flex items-center gap-3 font-sans"
            >
              <CheckCircle size={18} className="text-[#404734] flex-shrink-0" />
              <span>Thank you! Your RSVP response has been recorded successfully.</span>
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-6 p-4 rounded-lg bg-[#4A121A]/10 border border-[#4A121A]/30 text-[#4A121A] text-xs flex items-center gap-3 font-sans"
            >
              <AlertCircle size={18} className="text-[#4A121A] flex-shrink-0" />
              <span>
                Server is waking up or experiencing downtime. Please wait a moment and try again.
              </span>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}