"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff, ChevronDown } from "lucide-react";
import { Suspense } from "react";

const STATES = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue",
  "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu",
  "FCT Abuja", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina",
  "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo",
  "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara",
];

function SignupForm() {
  const searchParams = useSearchParams();
  const role = searchParams.get("role") || "talent";
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", password: "",
    state: "", emailUpdates: false, agreed: false,
  });

  function set(key: string, value: string | boolean) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.agreed) return;
    localStorage.setItem("sb_user", JSON.stringify({ ...form, role }));
    router.push("/success");
  }

  const heading =
    role === "employer" ? "Sign up to hire Talent" : "Sign up as Talent";

  return (
    <div className="flex flex-col items-center text-center">
      {/* Logo */}
            <Link href="/"><img src="/Log-logo.svg" alt="Skillbridge" className="w-36 mb-6" /></Link>


      <h1
        className="text-xl font-bold mb-8"
        style={{ color: "#2563EB" }}
      >
        {heading}
      </h1>

      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
        {/* First + Last Name */}
        <div className="flex gap-3">
          <div className="flex flex-col gap-1 text-left flex-1">
            <label className="text-sm font-medium text-gray-700">First Name</label>
            <input
              required
              placeholder="First Name"
              value={form.firstName}
              onChange={(e) => set("firstName", e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-500 transition"
            />
          </div>
          <div className="flex flex-col gap-1 text-left flex-1">
            <label className="text-sm font-medium text-gray-700">Last Name</label>
            <input
              required
              placeholder="Last Name"
              value={form.lastName}
              onChange={(e) => set("lastName", e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-500 transition"
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1 text-left">
          <label className="text-sm font-medium text-gray-700">Work email address</label>
          <input
            type="email"
            required
            placeholder="example@gmail.com"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-500 transition"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1 text-left">
          <label className="text-sm font-medium text-gray-700">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              required
              minLength={8}
              placeholder="Password (8 or more characters)"
              value={form.password}
              onChange={(e) => set("password", e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-11 text-sm outline-none focus:border-blue-500 transition"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* State */}
        <div className="flex flex-col gap-1 text-left">
          <label className="text-sm font-medium text-gray-700">State</label>
          <div className="relative">
            <select
              required
              value={form.state}
              onChange={(e) => set("state", e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-10 text-sm outline-none focus:border-blue-500 transition appearance-none bg-white"
            >
              <option value="" disabled>Lagos</option>
              {STATES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <ChevronDown
              size={16}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
          </div>
        </div>

        {/* Checkboxes */}
        <div className="flex flex-col gap-3 text-left">
          <label className="flex items-start gap-2 text-sm text-gray-500 cursor-pointer">
            <input
              type="checkbox"
              className="accent-blue-600 mt-0.5 shrink-0"
              checked={form.emailUpdates}
              onChange={(e) => set("emailUpdates", e.target.checked)}
            />
            Send me emails with tips on how to find talent that fits my needs.
          </label>

          <label className="flex items-start gap-2 text-sm text-gray-500 cursor-pointer">
            <input
              type="checkbox"
              className="accent-blue-600 mt-0.5 shrink-0"
              required
              checked={form.agreed}
              onChange={(e) => set("agreed", e.target.checked)}
            />
            <span>
              Yes, I understand and agree to the{" "}
              <Link href="#" className="underline" style={{ color: "#2563EB" }}>
                BridgeSkill Terms of Service
              </Link>
              , including the{" "}
              <Link href="#" className="underline" style={{ color: "#2563EB" }}>
                User Agreement
              </Link>{" "}
              and{" "}
              <Link href="#" className="underline" style={{ color: "#2563EB" }}>
                Privacy Policy
              </Link>
              .
            </span>
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3.5 rounded-lg text-white text-sm font-semibold flex items-center justify-center gap-2 mt-1"
          style={{ background: "#2563EB" }}
        >
          Create Account →
        </button>
      </form>

      <p className="text-sm text-gray-500 mt-5">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold" style={{ color: "#2563EB" }}>
          Log in
        </Link>
      </p>
    </div>
  );
}

export default function SignupPage() {
  return (
    <Suspense>
      <SignupForm />
    </Suspense>
  );
}
