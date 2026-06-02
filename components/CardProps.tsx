'use client'

interface StatCardProps {
  label: string
  sub?: string
}

export default function StatCard({ label, sub }: StatCardProps) {
  return (
    <div className=" rounded-xl backdrop-blur-md bg-white/10 border border-white/20 p-4 sm:px-9 py-9 shadow-lg ">
      <p className="text-lg sm:text-[22px] text-white text-center font-bold tracking-wide">
        {label}
      </p>
      {sub && (
        <p className="text-[11px] sm:text-xs text-white/80 mt-1 text-center">
          {sub}
        </p>
      )}
    </div>
  )
}