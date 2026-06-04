import { CircleArrowRight } from "lucide-react";
import Link from "next/link";
import StatCard from "./CardProps";
import PATHS from "@/route";

export default function Hero() {
  return (
    <div
      style={{
        borderBottomRightRadius: "50px",
        borderBottomLeftRadius: "50px",
        background: "linear-gradient(to bottom, #FFFFFF00, #0d235275, #000000b4)",
      }}
      className="w-full h-screen flex flex-col items-center justify-center gap-8 sm:gap-10 md:gap-14 h-full pt-24 sm:pt-32 pb-10 sm:pb-14 px-4"
    >
      <h1
  className="
    block md:hidden
    text-3xl text-center font-semibold leading-none
    bg-gradient-to-r from-[#5B5BF7] via-[#6C63FF] to-[#7A5CFF]
    bg-clip-text text-transparent
  "
>
  Bridging Talent With Opportunity
</h1>
      {/* Tagline */}
      <p className="text-background text-sm sm:text-xl md:text-2xl text-center max-w-md sm:max-w-lg md:max-w-2xl leading-relaxed">
  Connecting skilled Africans with companies, creators, and opportunities worldwide.
</p>

      {/* CTA Button */}
      <Link
        href={PATHS.GetStarted}
        className="bg-primary text-white px-6 sm:px-8 py-3 rounded-full flex gap-2 items-center font-semibold text-sm sm:text-base hover:bg-secondary-foreground transition-all duration-200 shadow-lg"
      >
        Get Started <CircleArrowRight size={18} />
      </Link>

      {/* Stats Cards — 2 cols on mobile, 4 on lg */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl">
        <StatCard label="12,450+" sub="Jobs Posted" />
        <StatCard label="89,300+" sub="Talent Registered" />
        <StatCard label="4,200+" sub="Successful Hires" />
        <StatCard label="1,800+" sub="Companies" />
      </div>
    </div>
  )
}