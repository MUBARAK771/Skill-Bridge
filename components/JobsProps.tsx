"use client";

import { ArrowRight, CircleArrowRight, Tag } from "lucide-react";
import Link from "next/link";

export interface JobCardProps {
  company: string;
  location?: string;
  title: string;
  salary: string;
  tags: string[];
  applicants?: string;
  postedAt?: string;
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
  location = "Lagos (Remote)",
  title,
  salary,
  tags,
  applicants = "34 applicants",
  postedAt = "2h ago",
  href = "/",
}: JobCardProps) {
  const initial = company.charAt(0).toUpperCase();
  const avatarBg = getAvatarColor(initial);
  const Propty = {
    icon: <Tag />,
    color: avatarBg,
  };
  return (
    <div className="w-full rounded-[24px] border border-[#e5e7eb] bg-[#f8fafc] p-5 shadow-sm">
      <div className="flex items-start gap-4">
        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-xl font-bold flex-shrink-0"
                style={{ backgroundColor: avatarBg }}
              >
                {initial}
              </div>
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl font-semibold text-[#111827] truncate">
                  {title}
                </h3>
                {/* Company */}
                <p className="mt-1 text-[12px] sm:text-sm text-muted truncate">
                  {company} · {location}
                </p>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex w-100 gap-2 mt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg text-xs sm:text-sm font-medium"
                style={{
                  background: "#e7edff",
                  color: "#2563EB",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Salary */}
          <h4 className="mt-4 text-[12px] md:text-xl font-semibold text-[#111827]">
            {salary}
          </h4>

          {/* Footer */}
          <p className="mt-1 text-sm text-[#6b7280]">
            {applicants} · {postedAt}
          </p>
        </div>

        {/* Button */}
        <Link
          href={href}
          className=" flex sm:flex items-center gap-2 rounded-lg border border-[#2563EB] px-5 py-2 mt-auto text-base font-semibold text-[#2563EB] hover:bg-card-foreground transition-all"
        >
          View
          <CircleArrowRight size={18} />
        </Link>
        <span
              style={{
                color: Propty.color,
                transform: "rotate(280deg)",
                float: "right",
              }}
            >
              {Propty.icon}
            </span>
      </div>
    </div>
  );
}
