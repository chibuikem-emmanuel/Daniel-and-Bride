"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

export default function Dashboard() {
  const router = useRouter();

  const [stats, setStats] = useState({
    total_rsvp: 0,
    attending: 0,
    declined: 0,
    expected_guests: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("access");

    if (!token) {
      router.push("/login");
      return;
    }

    loadDashboard();
  }, []);

  async function loadDashboard() {
    try {
      const res = await api.get("rsvp/stats/");
      setStats(res.data);
    } catch {
      router.push("/login");
    }

    setLoading(false);
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="p-5 lg:p-10 lg:ml-64 mt-16 lg:mt-0">

      <h1 className="text-3xl lg:text-4xl font-black text-white">
        Dashboard
      </h1>

      <p className="text-[#8DD2DB] mt-2">
        Welcome back. Here's your wedding RSVP summary.
      </p>

      {/* Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-8">

        <Card
          title="Total RSVPs"
          value={stats.total_rsvp}
          color="text-white"
        />

        <Card
          title="Attending"
          value={stats.attending}
          color="text-green-400"
        />

        <Card
          title="Declined"
          value={stats.declined}
          color="text-red-400"
        />

        <Card
          title="Expected Guests"
          value={stats.expected_guests}
          color="text-[#FFCC47]"
        />

      </div>

      {/* Planning */}

      <div className="mt-8 bg-[#172125] rounded-3xl border border-[#44B6C5]/20 p-8">

        <h2 className="text-2xl text-white font-bold mb-4">
          Wedding Planning Overview
        </h2>

        <p className="text-[#8DD2DB] leading-8">
          Monitor guest attendance, estimate expected guests, coordinate hotel
          bookings, and prepare seating arrangements. Visit the Guests page to
          view every RSVP submitted.
        </p>

      </div>

      {/* Quick Actions */}

      <div className="grid md:grid-cols-2 gap-5 mt-8">

        <div className="rounded-3xl bg-[#172125] border border-[#44B6C5]/20 p-8">
          <h3 className="text-white text-xl font-bold">
            Planning Progress
          </h3>

          <div className="mt-5 bg-[#0E1719] rounded-full h-4 overflow-hidden">

            <div
              className="h-full bg-[#FFCC47]"
              style={{
                width: `${stats.total_rsvp * 10}%`,
              }}
            />

          </div>

          <p className="text-[#8DD2DB] mt-4">
            {stats.total_rsvp} RSVP(s) received.
          </p>

        </div>

        <div className="rounded-3xl bg-[#172125] border border-[#44B6C5]/20 p-8">

          <h3 className="text-white text-xl font-bold">
            Latest Update
          </h3>

          <p className="text-[#8DD2DB] mt-5 leading-8">
            Continue monitoring guest responses from the Guests module.
          </p>

        </div>

      </div>

    </div>
  );
}

function Card({
  title,
  value,
  color,
}: {
  title: string;
  value: number;
  color: string;
}) {
  return (
    <div className="bg-[#172125] rounded-3xl border border-[#44B6C5]/20 p-6">

      <h3 className="uppercase text-xs text-[#8DD2DB]">
        {title}
      </h3>

      <h2 className={`text-5xl font-black mt-4 ${color}`}>
        {value}
      </h2>

    </div>
  );
}