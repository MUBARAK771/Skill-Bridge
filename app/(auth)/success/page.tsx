"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

export default function SuccessPage() {
  const router = useRouter();

  useEffect(() => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;

    const defaults = {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 100,
    };

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const particleCount = 50 * (timeLeft / duration);

      // Left side
      confetti({
        ...defaults,
        particleCount,
        origin: {
          x: randomInRange(0.1, 0.3),
          y: Math.random() * 0.3,
        },
      });

      // Right side
      confetti({
        ...defaults,
        particleCount,
        origin: {
          x: randomInRange(0.7, 0.9),
          y: Math.random() * 0.3,
        },
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  const handleContinue = () => {
    const storedUser = JSON.parse(localStorage.getItem("sb_user") || "null");
    const target = storedUser?.role === "employer" ? "/employer" : "/talent/dashboard";
    router.push(target);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-5 backdrop-blur-sm"
      style={{
        background:
          "#DEE8FC33",
      }}
    >
      <div className="flex w-full max-w-3xl flex-col items-center text-center gap-6">
        {/* Success Icon */}
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#2563EB] shadow-lg sm:h-24 sm:w-24">
          <CheckCircle2
            className="h-10 w-10 text-white sm:h-12 sm:w-12"
            strokeWidth={2.5}
          />
        </div>

        <div className="space-y-3">
          <h1 className="text-2xl font-medium leading-tight text-gray-900 sm:text-3xl md:text-4xl">
            Congratulations, your account has been successfully created.
          </h1>


          <p className="text-sm text-gray-500 sm:text-base">
            Get started and explore amazing talents.
          </p>
        </div>

        <button
          onClick={handleContinue}
          className="mt-3 w-full max-w-xl rounded-xl bg-[#2563EB] py-3.5 text-base font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-blue-700"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}