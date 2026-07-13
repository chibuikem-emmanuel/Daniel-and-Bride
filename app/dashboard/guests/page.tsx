"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

interface Guest {
  id: number;
  full_name: string;
  email: string;
  attendance: "yes" | "no";
  guest_count: number;
  created_at: string;
}

export default function GuestsPage() {
  const router = useRouter();

  const [guests, setGuests] = useState<Guest[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchGuests();
  }, []);

  const fetchGuests = async () => {
    try {
      const res = await api.get("rsvp/guests/");
      setGuests(res.data);
    } catch (err) {
      console.error(err);
      alert("Unable to load guests.");
    } finally {
      setLoading(false);
    }
  };

  const filteredGuests = useMemo(() => {
    return guests.filter((guest) => {
      const matchesSearch =
        guest.full_name.toLowerCase().includes(search.toLowerCase()) ||
        guest.email.toLowerCase().includes(search.toLowerCase());

      const matchesFilter =
        filter === "all" || guest.attendance === filter;

      return matchesSearch && matchesFilter;
    });
  }, [guests, search, filter]);

  return (
    <div className="min-h-screen bg-[#0E1719] text-white p-8">

      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">

        <div>
          <button
            onClick={() => router.push("/dashboard")}
            className="mb-5 px-5 py-2 rounded-lg border border-[#44B6C5]/30 hover:border-[#FFCC47] transition"
          >
            ← Back to Dashboard
          </button>

          <h1 className="text-4xl font-black">
            RSVP Guests
          </h1>

          <p className="text-[#8DD2DB]/70 mt-2">
            View everyone that has responded to your wedding invitation.
          </p>
        </div>

        <div className="bg-[#172125] border border-[#44B6C5]/20 rounded-2xl px-8 py-6 text-center min-w-[170px]">
          <p className="text-[#8DD2DB] text-sm uppercase tracking-widest">
            Total Responses
          </p>

          <h2 className="text-5xl font-black mt-2 text-[#FFCC47]">
            {filteredGuests.length}
          </h2>
        </div>
      </div>

      {/* Search & Filter */}

      <div className="grid md:grid-cols-2 gap-5 mb-8">

        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-[#172125] border border-[#44B6C5]/20 rounded-xl px-5 py-4 outline-none focus:border-[#44B6C5]"
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="bg-[#172125] border border-[#44B6C5]/20 rounded-xl px-5 py-4 outline-none"
        >
          <option value="all">All Guests</option>
          <option value="yes">Attending</option>
          <option value="no">Not Attending</option>
        </select>

      </div>

      {/* Table */}

      <div className="overflow-x-auto rounded-2xl border border-[#44B6C5]/20">

        <table className="w-full">

          <thead className="bg-[#172125]">

            <tr className="text-left">

              <th className="p-5">Name</th>

              <th className="p-5">Email</th>

              <th className="p-5">Attendance</th>

              <th className="p-5">Guests</th>

              <th className="p-5">Date</th>

            </tr>

          </thead>

          <tbody>

            {loading ? (

              <tr>
                <td
                  colSpan={5}
                  className="text-center py-12 text-[#8DD2DB]"
                >
                  Loading guests...
                </td>
              </tr>

            ) : filteredGuests.length === 0 ? (

              <tr>
                <td
                  colSpan={5}
                  className="text-center py-12 text-[#8DD2DB]"
                >
                  No RSVP responses found.
                </td>
              </tr>

            ) : (

              filteredGuests.map((guest) => (

                <tr
                  key={guest.id}
                  className="border-t border-[#44B6C5]/10 hover:bg-[#172125]/60 transition"
                >
                  <td className="p-5 font-semibold">
                    {guest.full_name}
                  </td>

                  <td className="p-5">
                    {guest.email}
                  </td>

                  <td className="p-5">

                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        guest.attendance === "yes"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {guest.attendance === "yes"
                        ? "Attending"
                        : "Declined"}
                    </span>

                  </td>

                  <td className="p-5">
                    {guest.guest_count}
                  </td>

                  <td className="p-5">
                    {new Date(
                      guest.created_at
                    ).toLocaleDateString()}
                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}