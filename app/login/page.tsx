"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

export default function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await api.post("login/", form);

      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);

      router.push("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Invalid username or password.");
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-[#0E1719] flex items-center justify-center px-6">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-[#152125] border border-[#44B6C5]/20 rounded-3xl p-8 space-y-6"
      >
        <div className="text-center">
          <h1 className="text-3xl font-black text-white">
            Wedding Dashboard
          </h1>

          <p className="text-[#8DD2DB] mt-2">
            Couple Login
          </p>
        </div>

        <div>
          <label className="text-xs uppercase text-[#8DD2DB]">
            Username
          </label>

          <input
            required
            value={form.username}
            onChange={(e) =>
              setForm({
                ...form,
                username: e.target.value,
              })
            }
            className="mt-2 w-full p-4 rounded-xl bg-[#0E1719] border border-[#44B6C5]/20 text-white outline-none"
          />
        </div>

        <div>
          <label className="text-xs uppercase text-[#8DD2DB]">
            Password
          </label>

          <input
            type="password"
            required
            value={form.password}
            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value,
              })
            }
            className="mt-2 w-full p-4 rounded-xl bg-[#0E1719] border border-[#44B6C5]/20 text-white outline-none"
          />
        </div>

        <button
          className="w-full py-4 rounded-xl bg-[#FFCC47] text-black font-bold"
        >
          {loading ? "Signing In..." : "Login"}
        </button>
      </form>
    </div>
  );
}