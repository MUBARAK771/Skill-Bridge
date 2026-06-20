"use client";

import EmployerHeader from "@/components/EmployerHeader";
import Footer from "@/components/Footer";
import PATHS from "@/route";
import {
  CircleArrowRight,
  MessageCircle,
  MoreHorizontal,
  Pencil,
  Plus,
  Star,
  Tag,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

/* ────────────────────────────────────────────────────────── */
/*  Sub-components                                            */
/* ────────────────────────────────────────────────────────── */

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex-1 rounded-2xl border border-primary bg-white px-4 sm:px-10 py-18 flex flex-col items-center gap-5">
      <span className="text-2xl sm:text-4xl font-bold text-[#2563EB]">
        {value}
      </span>
      <span className="text-xs sm:text-xl text-[#64748B] text-center leading-snug">
        {label}
      </span>
    </div>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={
            i < rating
              ? "fill-primary text-primary"
              : "fill-white text-primary"
          }
        />
      ))}
    </div>
  );
}

interface ApplicantProps {
  initials: string;
  name: string;
  role: string;
  location: string;
  tags: string[];
  rating: number;
  gigs: number;
  avatarColor: string;
}

function ApplicantCard({
  initials,
  name,
  role,
  location,
  tags,
  rating,
  gigs,
  avatarColor,
}: ApplicantProps) {
  return (
    <div className="flex-1 min-w-0 rounded-2xl border border-[#E2E8F0] shadow-sm p-4 sm:p-5 flex flex-col gap-3">
      {/* Header row */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-3 min-w-0">
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
            style={{ backgroundColor: avatarColor }}
          >
            {initials}
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-[#111827] text-sm leading-tight truncate">
              {name}
            </p>
            <p className="text-xs text-[#64748B] truncate mt-0.5">
              {role} · {location}
            </p>
          </div>
        </div>
        <button className="flex-shrink-0 text-[#06B6D4] hover:text-[#06B6D4] transition mt-0.5">
          <Tag size={24} style={{transform:"rotate(280deg"}} />
        </button>
      </div>

      {/* Skill tags */}
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#E9EFFD] text-[#2563EB]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Rating + gigs */}
      <div className="flex items-start gap-2 flex-col">
        <StarRating rating={rating}  />
        <span className="text-xs text-[#64748B]">{gigs} gigs</span>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto pt-1 gap-2">
        <span className="text-xs font-semibold text-[#2563EB] bg-[#DEE8FC] px-3 py-1 rounded-full whitespace-nowrap">
          Available Now
        </span>
        <Link
          href="#"
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#2563EB] text-white text-xs font-semibold hover:bg-[#1d4ed8] transition whitespace-nowrap"
        >
          <MessageCircle size={12} />
          Message
        </Link>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────── */
/*  Page                                                      */
/* ────────────────────────────────────────────────────────── */

const applicants: ApplicantProps[] = [
  {
    initials: "DO",
    name: "David OnyekaChukwu",
    role: "Frontend Developer",
    location: "Enugu",
    tags: ["React", "Vue", "TypeScript"],
    rating: 4,
    gigs: 25,
    avatarColor: "#06B6D4",
  },
  {
    initials: "AC",
    name: "Amara Chisom",
    role: "Product Designer",
    location: "Abuja",
    tags: ["Branding", "Figma", "Illustrator"],
    rating: 3,
    gigs: 10,
    avatarColor: "#7C3AED",
  },
];

export default function EmployerPage() {
  const [bannerVisible, setBannerVisible] = useState(true);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <EmployerHeader />

      {/* ── Page body ─────────────────────────────────────── */}
      <main className=" sm:px-6 lg:px-8 pt-20 pb-20">

        {/* ── Email verification banner ── */}
        {bannerVisible && (
          <div className="flex items-center justify-between mt-4 py-2.5 px-4 rounded-xl bg-card-foreground  gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                className="flex-shrink-0"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 9.75C0 4.365 4.365 0 9.75 0C15.135 0 19.5 4.365 19.5 9.75C19.5 15.135 15.135 19.5 9.75 19.5C4.365 19.5 0 15.135 0 9.75ZM9.75 6a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9.75 6Zm0 6.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z"
                  fill="#2563EB"
                />
              </svg>
              <p className="text-xs sm:text-sm text-[#334155] truncate">
                Just a reminder that to access all the features of BridgeSkill,
                you'll need to{" "}
                <Link href="#" className="text-[#2563EB] border-b border-[#2563EB]">
                  verify your email address.
                </Link>
              </p>
            </div>
            <button
              onClick={() => setBannerVisible(false)}
              className="flex-shrink-0 text-[#2563EB] border border-[#2563EB] cursor-pointer rounded-full p-0.5"
            >
              <X size={12} />
            </button>
          </div>
        )}

        {/* ── Greeting + Post a Job ── */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-8">
          <h1 className="text-xl sm:text-2xl font-semibold text-[#111827]">
            Good Evening, Abdur-Roqeeb
          </h1>
          <Link
            href="#"
            className="inline-flex items-center gap-2 bg-[#2563EB] text-white px-5 py-4 rounded-xl font-semibold text-sm hover:bg-[#1d4ed8] transition shadow-sm self-start sm:self-auto"
          >
            <span className="w-5 h-5 text-center border border-white border-2 rounded-full flex items-center justify-center flex-shrink-0">
              <Plus size={11} />
            </span>
            Post a Job
          </Link>
        </div>

        {/* ── Stat cards row ── */}
        <div className="flex gap-3 sm:gap-5 mt-14 px-30">
          <StatCard value="3" label="Active Jobs" />
          <StatCard value="15" label="Total Applicants" />
          <StatCard value="2" label="Hired" />
        </div>

        {/* ── Job card + Post a Job placeholder ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-row-2 gap-5 mt-7">

          {/* Active job card */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-5 flex flex-col gap-5">
            {/* Card header */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <span
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white text-lg font-bold flex-shrink-0"
                  style={{ backgroundColor: "#EBA925" }}
                >
                  K
                </span>
                <div>
                  <h2 className="font-semibold text-[#111827] text-base leading-tight">
                    Digital Marketer
                  </h2>
                  <p className="text-xs text-[#64748B] mt-0.5">Konga</p>
                </div>
              </div>
              <button className="text-[#64748B] hover:text-[#111827] transition p-1">
                <MoreHorizontal size={18} />
              </button>
            </div>

            {/* Type badge */}
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#B2E8F2] text-[#05899F]">
                Part-time
              </span>
            </div>

            {/* CTA */}
            <Link
              href={PATHS.Jobs}
              className="mt-auto w-full text-center py-3 rounded-xl bg-[#2563EB] text-white font-semibold text-sm hover:bg-[#1d4ed8] transition"
            >
              Fill in Draft
            </Link>
          </div>
        
          {/* Post a Job card */}
          <Link
            href="#"
            className="bg-[#EEF3FD] rounded-2xl border border-[#C7D9FB] flex flex-col items-center justify-center gap-3 py-12 sm:py-16 px-5 hover:bg-[#DEE8FC] transition group"
          >
            <div className="w-9 h-9 border-2 border-[#2563EB] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Plus size={18} className="text-[#2563EB]" />
            </div>
            <p className="text-[#2563EB] font-bold text-xl">Post a Job</p>
          </Link>
        </div>

        {/* ── Recent Applicants ── */}
        <section className="mt-12">
          {/* Section header */}
          <div className="flex items-start justify-between gap-4 mb-5">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#111827]">
                Recent Applicants
              </h2>
              <p className="text-sm text-[#64748B] mt-0.5">
                Discover verified professionals across Africa
              </p>
            </div>
            <Link
              href="#"
              className="flex-shrink-0 flex items-center gap-1.5 border border-[#2563EB] text-[#2563EB] px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold hover:bg-[#E9EFFD] transition"
            >
              View all
              <CircleArrowRight size={15} />
            </Link>
          </div>

          {/* Applicant cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {applicants.map((a) => (
              <ApplicantCard key={a.name} {...a} />
            ))}
          </div>
        </section>

        {/* ── Future Network Globe ── */}
        <section className="mt-16 mx-4 sm:mx-8 md:mx-16 rounded-3xl overflow-hidden  relative flex flex-col items-center pt-10 pb-0 text-center">
        <h2 className="text-[#4B8EF5] font-bold text-2xl sm:text-3xl md:text-4xl leading-tight mb-6 relative z-10 px-6">
          The Future Network For
          <br className="hidden sm:block" /> Skilled Talent
        </h2>

        <div className="relative w-full max-w-full flex justify-center overflow-visible">
          {/* Purple Frame */}
          <img
            src="/purpleFrame.png"
            alt="Job Status"
            className="
      absolute
      right-[3%]
      top-[15%]
      w-[120px]
      md:w-[295px]
      z-20
      object-contain
    "
          />

          {/* Blue Frame */}
          <img
            src="/blueFrame.png"
            alt="Application Status"
            className="
      absolute
      left-[3%]
      top-[50%]
      w-[120px]
      md:w-[295px]
      z-20
      object-contain
    "
          />

          {/* Globe */}
          <img
            src="/Global.svg"
            className="w-full max-w-full h-auto object-contain"
            alt="Global talent network"
          />
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
}
