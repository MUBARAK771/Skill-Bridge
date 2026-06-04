"use client";
import { useRouter } from "next/navigation";
import { CheckCircle2 } from "lucide-react";

export default function SuccessPage() {
  const router = useRouter();

  return (
    <>   
    <div className="flex absolute flex-col items-center top-0 h-screen bg-[#DEE8FC33] backdrop-blur-md w-full left-0 justify-center text-center gap-7">
      {/* Check Icon */}
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center"
        style={{ background: "#2563EB" }}
      >
        <CheckCircle2 size={40} color="white" strokeWidth={2} />
      </div>

      <div>
        <h1 className="text-4xl w-190 font-bold text-gray-900 leading-snug">
          Congratulations, your account has been successfully created.
        </h1>
        <p className="text-sm text-gray-500 mt-2">
          Get Started and Explore Talents
        </p>
      </div>

      <button
        onClick={() => router.push("/")}
        className="w-150 pointer py-3.5 rounded-lg text-white text-lg font-semibold mt-2"
        style={{ background: "#2563EB", cursor:"pointer" }}
      >
        Get Started
      </button>
    </div>
    </>
  );
}
