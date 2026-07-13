"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";

export default function StatisticsPage() {
  const [stats, setStats] = useState({
    total_rsvp: 0,
    attending: 0,
    declined: 0,
    expected_guests: 0,
  });

  useEffect(() => {
    loadStats();
  }, []);

  async function loadStats() {
    const res = await api.get("rsvp/stats/");
    setStats(res.data);
  }

  return (
    <div>

      <h1 className="text-3xl text-white font-bold mb-8">
        Statistics
      </h1>

      <div className="space-y-5 text-xl text-white">

        <p>Total RSVPs: {stats.total_rsvp}</p>

        <p>Attending: {stats.attending}</p>

        <p>Declined: {stats.declined}</p>

        <p>Expected Guests: {stats.expected_guests}</p>

      </div>

    </div>
  );
}