"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, Users, LogOut, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState(false);

  function logout() {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    router.push("/login");
  }

  return (
    <>
      {/* Mobile Top Bar */}

      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-[#111B1E] border-b border-[#44B6C5]/10 flex items-center justify-between px-5 z-50">

        <h2 className="text-[#FFCC47] font-bold">
          Wedding Admin
        </h2>

        <button onClick={() => setOpen(!open)}>
          {open ? (
            <X className="text-white" />
          ) : (
            <Menu className="text-white" />
          )}
        </button>

      </div>

      {/* Sidebar */}

      <aside
        className={`
        fixed lg:static
        top-16 lg:top-0
        left-0
        z-40
        w-64
        h-[calc(100vh-4rem)]
        lg:h-screen
        bg-[#111B1E]
        border-r border-[#44B6C5]/10
        transition-transform duration-300

        ${
          open
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }
      `}
      >
        <div className="p-8">

          <h1 className="text-2xl font-black text-[#FFCC47]">
            Wedding Admin
          </h1>

          <p className="text-xs text-[#8DD2DB] mt-1">
            Joshua & Divine
          </p>

        </div>

        <nav className="px-4 space-y-2">

          <Link
            href="/dashboard"
            onClick={() => setOpen(false)}
            className={`flex items-center gap-3 rounded-xl p-4 transition ${
              pathname === "/dashboard"
                ? "bg-[#44B6C5]/15 text-[#FFCC47]"
                : "text-white hover:bg-[#44B6C5]/10"
            }`}
          >
            <LayoutDashboard size={18} />
            Dashboard
          </Link>

          <Link
            href="/dashboard/guests"
            onClick={() => setOpen(false)}
            className={`flex items-center gap-3 rounded-xl p-4 transition ${
              pathname === "/dashboard/guests"
                ? "bg-[#44B6C5]/15 text-[#FFCC47]"
                : "text-white hover:bg-[#44B6C5]/10"
            }`}
          >
            <Users size={18} />
            Guests
          </Link>

        </nav>

        <div className="absolute bottom-5 left-4 right-4">

          <button
            onClick={logout}
            className="w-full rounded-xl bg-red-500/10 py-3 flex items-center justify-center gap-2 text-red-400 hover:bg-red-500/20 transition"
          >
            <LogOut size={18} />
            Logout
          </button>

        </div>
      </aside>
    </>
  );
}