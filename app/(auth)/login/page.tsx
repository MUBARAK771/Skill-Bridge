"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const router = useRouter();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    // Store mock session
    localStorage.setItem("sb_session", JSON.stringify({ email, remember }));
    router.push("/");
  }

  return (
    <div className="flex flex-col items-center text-center">
      {/* Logo */}
      <Link href="/"><img src="/Log-logo.svg" alt="Skillbridge" className="w-36 mb-6" /></Link>

      <h1 className="text-2xl font-bold text-gray-900 mb-1">Welcome Back</h1>
      <p className="text-sm text-gray-500 mb-8">
        Login to continue managing your Skillbridge dashboard
      </p>

      <form onSubmit={handleLogin} className="w-full flex flex-col gap-5">
        {/* Email */}
        <div className="flex flex-col gap-1.5 text-left">
          <label className="text-sm font-medium text-gray-700">
            Email Address
          </label>
          <Input
            type="email"
            placeholder="Enter Email Address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-gray-300 rounded-lg px-4 py-3 text-sm"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1.5 text-left">
          <label className="text-sm font-medium text-gray-700">Password</label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-gray-300 rounded-lg px-4 py-3 pr-11 text-sm"
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

        {/* Remember + Forgot */}
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm text-gray-500 cursor-pointer">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="accent-blue-600"
            />
            Remember Me
          </label>
          <Link
            href="#"
            className="text-sm font-medium"
            style={{ color: "#2563EB" }}
          >
            Forget Password?
          </Link>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3.5 rounded-lg text-white text-sm font-semibold mt-1"
          style={{ background: "#2563EB" }}
        >
          Login
        </button>
      </form>

      <p className="text-sm text-gray-500 mt-6">
        Don&apos;t have an account?{" "}
        <Link
          href="/get-started"
          className="font-semibold"
          style={{ color: "#2563EB" }}
        >
          Sign up here
        </Link>
      </p>
    </div>
  );
}
