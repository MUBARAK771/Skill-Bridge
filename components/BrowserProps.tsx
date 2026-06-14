"use client";
import { usePathname } from "next/navigation";
import { ArrowRight, Check, CircleArrowRight, Tag } from "lucide-react";
import Link from "next/link";
import PATHS from "@/route"
export interface JobCardProps {
  company: string;
  title: string;
  location: string;
  workType: string;
  salary: string;
  tags: string[];
  applicants: number;
  postedAt: string;
  status: "apply" | "applied";
  href?: string;
}

/** Leave color logic unchanged */
function getAvatarColor(letter: string): string {
  const palette: Record<string, string> = {
    A: "#7C3AED",
    B: "#2563EB",
    C: "#06B6D4",
    D: "#10B981",
    E: "#F59E0B",
    F: "#EF4444",
    G: "#8B5CF6",
    H: "#EC4899",
    I: "#3B82F6",
    J: "#14B8A6",
    K: "#F97316",
    L: "#6366F1",
    M: "#0EA5E9",
    N: "#A855F7",
    O: "#22C55E",
    P: "#2563EB",
    Q: "#EAB308",
    R: "#EF4444",
    S: "#2563EB",
    T: "#06B6D4",
    U: "#10B981",
    V: "#8B5CF6",
    W: "#EC4899",
    X: "#F59E0B",
    Y: "#3B82F6",
    Z: "#14B8A6",
  };

  return palette[letter.toUpperCase()] ?? "#2563EB";
}

export default function JobCard({
  company,
  title,
  salary,
  tags,
  location,
  applicants,
  postedAt,
  workType,
  href,
  status,
}: JobCardProps) {
  const initial = company.charAt(0).toUpperCase();
  const avatarBg = getAvatarColor(initial);
  const Propty = {
    icon: <Tag />,
    color: avatarBg,
  };
  return (
    <div className="relative overflow-hidden rounded-[24px] border border-[#E5E7EB] bg-[#F8FAFC] p-6 shadow-sm">
      <div className="flex items-start justify-between">
        {/* Content */}
        <div className="flex-1 min-w-0 ">
          {/* Header */}
          <div className="flex items-start pb-4 justify-between">
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-xl font-bold flex-shrink-0"
                style={{ backgroundColor: avatarBg }}
              >
                {initial}
              </div>
              <div className="min-w-0 ">
                <h3 className="text-lg sm:text-xl font-medium text-[#111827] truncate">
                  {title}
                </h3>
                {/* Company */}
                <p className="mt-1 text-[12px] sm:text-sm text-muted truncate">
                  {company} · {location} ({workType})
                </p>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex w-100 gap-2 ">
            {tags.map((tag, idx) => {
              const t = tag.toLowerCase();
              let bg = "#e7edff";
              let color = "#2563EB";
              if (idx === 0) {
                if (t === "contract" || t === "part-time" || t === "full-time" || t === "full time") {
                  bg = "#B2E8F2";
                  color = "#064E6A";
                } else if (t === "freelance") {
                  bg = "#D6C2F9";
                  color = "#5B21B6";
                } else {
                  bg = "#e7edff";
                  color = "#184EAB";
                }
              }
              return (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs sm:text-sm font-medium"
                  style={{ background: bg, color }}
                >
                  {tag}
                </span>
              );
            })}
          </div>

          {/* Salary */}
          <h4 className="mt-4 text-[12px] py-1 md:text-xl font-medium text-[#111827]">
            {salary}
          </h4>

          {/* Footer */}
         <p className="mt-1 text-sm text-[#6b7280]">
  {postedAt} . {applicants} apllicants
</p>
        </div>

        <div className="flex flex-col items-end h-48 justify-between gap-2 mt-auto">
          <span
            style={{
              color: Propty.color,
              fontSize:"30px",
              transform: "rotate(280deg)",
            }}
          >
            {Propty.icon}
          </span>
          {status === "apply" ? (
  <Link
    href={href ?? "#"}
    className="flex items-center gap-2 rounded-lg bg-[#2563EB] px-5 py-2 text-base font-semibold text-white hover:bg-[#1d4ed8] transition-all"
  >
    Apply
  </Link>
) : (
  <button
    disabled
    className="flex items-center gap-2 rounded-lg border border-[#2563EB] px-5 py-2 text-base font-semibold text-[#2563EB] cursor-not-allowed opacity-80"
  >
     <Check size={18} />
    Applied
  </button>
)}
        </div>
      </div>
    </div>
  );
}
