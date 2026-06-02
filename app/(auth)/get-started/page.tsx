"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Briefcase, UserCircle2 } from "lucide-react";

export default function GetStartedPage() {
  const [role, setRole] = useState<"employer" | "talent" | null>(null);
  const router = useRouter();

  function handleContinue() {
    if (!role) return;
    router.push(`/signup?role=${role}`);
  }

  return (
    <div className="flex flex-col items-center text-center">
      {/* Logo */}
      <Link href="/"><img src="/Log-logo.svg" alt="Skillbridge" className="w-36 mb-6" /></Link>

      <h1 className="text-3xl font-bold text-primary mb-1">
        Welcome to BridgeSkill
      </h1>
      <p className="text-2sm text-muted mb-10">Which describes you best?</p>

      {/* Role Cards */}
      <div className="flex gap-5 mb-10 w-full">
        {/* Employer */}
        <button
          onClick={() => setRole("employer")}
          className="flex-1 flex flex-col items-center gap-3 py-7  rounded-2xl border-2 transition-all"
          style={{
            borderColor: role === "employer" ? "#2563EB" : "#E5E7EB",
            background: role === "employer" ? "#EFF6FF" : "#F9FAFB",
          }}
        >
          <div
            className="w-29 h-29 rounded-xl flex flex-col gap-4 p-4 items-center justify-center"
            style={{ background: "#DBEAFE" }}
          >
            <svg width="90" height="82" viewBox="0 0 81 92" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40.5 46C53.2828 46 63.6429 35.7039 63.6429 23C63.6429 10.2961 53.2828 0 40.5 0C27.7172 0 17.3571 10.2961 17.3571 23C17.3571 35.7039 27.7172 46 40.5 46ZM57.821 51.8578L49.1786 86.25L43.3929 61.8125L49.1786 51.75H31.8214L37.6071 61.8125L31.8214 86.25L23.179 51.8578C10.2877 52.4688 0 62.9445 0 75.9V83.375C0 88.1367 3.88728 92 8.67857 92H72.3214C77.1127 92 81 88.1367 81 83.375V75.9C81 62.9445 70.7123 52.4688 57.821 51.8578Z" fill="#2563EB" />
            </svg>
            <span
              className="text-sm font-semibold"
              style={{ color: "#2563EB" }}
            >
              Employer
            </span>
          </div>
        </button>

        {/* Talent */}
        <button
          onClick={() => setRole("talent")}
          className="flex-1 flex flex-col items-center gap-3 py-7  rounded-2xl border-2 transition-all"
          style={{
            borderColor: role === "talent" ? "#7C3AED" : "#E5E7EB",
            background: role === "talent" ? "#f2ebfd71" : "#F9FAFB",
          }}
        >
          <div
            className="w-29 h-29 rounded-xl flex flex-col gap-4 p-4 items-center justify-center"
            style={{ background: "#F2EBFD" }}
          >

            <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_4126_7086)">
                <path d="M55.6875 35.4375C55.6875 43.8412 48.9037 50.625 40.5 50.625C32.0963 50.625 25.3125 43.8412 25.3125 35.4375C25.3125 27.0338 32.0963 20.25 40.5 20.25C48.9037 20.25 55.6875 27.0338 55.6875 35.4375Z" fill="#7C3AED" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M81 40.5C81 62.8763 62.8763 81 40.5 81C18.1237 81 0 62.8763 0 40.5C0 18.1237 18.1237 0 40.5 0C62.8763 0 81 18.1237 81 40.5ZM20.25 69.6094C21.06 68.2627 28.9069 55.6875 40.4494 55.6875C51.9412 55.6875 59.8387 68.2931 60.6487 69.6094C65.3562 66.3541 69.2025 62.0041 71.8569 56.9335C74.5112 51.8629 75.8942 46.2234 75.8869 40.5C75.8869 20.9081 60.0412 5.0625 40.4494 5.0625C20.8575 5.0625 5.01188 20.9081 5.01188 40.5C5.01188 52.5488 11.0363 63.2306 20.25 69.6094Z" fill="#7C3AED" />
              </g>
              <defs>
                <clipPath id="clip0_4126_7086">
                  <rect width="81" height="81" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <span
              className="text-sm font-semibold"
              style={{ color: "#7C3AED" }}
            >
              Talent
            </span>
          </div>
        </button>
      </div>

      {/* Continue */}
      <button
        onClick={handleContinue}
        disabled={!role}
        className="w-full py-3.5 rounded-lg text-white text-sm font-semibold transition-opacity"
        style={{
          background: "#2563EB",
          opacity: role ? 1 : 0.4,
          cursor:"pointer",
        }}
      >
        Continue
      </button>

      <p className="text-sm text-gray-500 mt-5">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold" style={{ color: "#2563EB" }}>
          Login here
        </Link>
      </p>
    </div>
  );
}
