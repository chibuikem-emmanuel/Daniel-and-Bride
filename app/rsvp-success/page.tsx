"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function RSVPSuccess() {
  return (
    <main className="min-h-screen bg-[#0E1719] flex items-center justify-center px-6">
      <div className="max-w-lg w-full bg-[#44B6C5]/5 border border-[#8DD2DB]/20 rounded-3xl p-10 text-center">

        <CheckCircle
          className="mx-auto text-[#44B6C5]"
          size={70}
        />

        <h1 className="text-4xl font-black text-white mt-6">
          RSVP Submitted!
        </h1>

        <p className="text-[#8DD2DB] mt-5 leading-relaxed">
          Thank you for responding to our wedding invitation.
          <br /><br />
          We have successfully received your RSVP and can't wait to celebrate
          this special day with you.
        </p>

        <Link
          href="/"
          className="inline-block mt-8 bg-[#FFCC47] text-[#0E1719] px-8 py-4 rounded-xl font-black hover:opacity-90 transition"
        >
          Return Home
        </Link>

      </div>
    </main>
  );
}