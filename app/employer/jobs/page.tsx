"use client";

import EmployerHeader from "@/components/EmployerHeader";
import Footer from "@/components/Footer";
import { Tag } from "lucide-react";

type JobStatus = "Active" | "Closed" | "Draft";

interface Job {
  id: string;
  title: string;
  company?: string;
  type: string;
  location: string;
  skills: string[];
  applicants: number;
  status: JobStatus;
  avatarLabel: string;
  avatarColor: string;
}

const JOBS: Job[] = [
  {
    id: "1",
    title: "Frontend Developer",
    type: "Full Time",
    location: "Enugu",
    skills: ["React", "Vue", "Typescript"],
    applicants: 34,
    status: "Active",
    avatarLabel: "DO",
    avatarColor: "#14B8A6",
  },
  {
    id: "2",
    title: "Backend Developer",
    company: "TechPoint",
    type: "Lagos (Remote)",
    location: "",
    skills: ["Node.js", "AWS", "Python"],
    applicants: 15,
    status: "Active",
    avatarLabel: "T",
    avatarColor: "#7C3AED",
  },
  {
    id: "3",
    title: "UI/UX DESIGNER",
    type: "Contract",
    location: "Kano (Remote)",
    skills: ["Branding", "Figma", "UX Research"],
    applicants: 10,
    status: "Closed",
    avatarLabel: "DO",
    avatarColor: "#2563EB",
  },
];

const STATUS_STYLES: Record<JobStatus, string> = {
  Active: "bg-[#D1FAE5] text-[#047857]",
  Closed: "bg-[#FEE2E2] text-[#B91C1C]",
  Draft: "bg-[#FEF3C7] text-[#92400E]",
};

export default function MyJobs() {
  return (
    <div>
      <EmployerHeader />
      <div className="mt-27 mb-12 ml-17 mr-17">
        <h1 className="text-[24px] font-semibold">Job Listing</h1>
        <p className="text-muted text-sm mb-8">
          Discover verified professionals across Africa
        </p>

        <div className="flex flex-col gap-5">
          {JOBS.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl border border-[#E2E8F0] p-7"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-sm shrink-0"
                    style={{ backgroundColor: job.avatarColor }}
                  >
                    {job.avatarLabel}
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">{job.title}</h2>
                    <p className="text-sm text-muted">
                      {job.company ? `${job.company} · ` : ""}
                      {job.type}
                      {job.location ? ` · ${job.location}` : ""}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  aria-label="Edit job"
                  className="text-[#14B8A6] hover:text-[#0F766E] transition-colors"
                >
                  <Tag style={{transform:"rotate(270deg)"}} />
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                {job.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-[#DBEAFE] text-[#1D4ED8]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-end">
                <div>
                  <p className="text-2xl font-bold text-[#2563EB] leading-none">
                    {job.applicants}
                  </p>
                  <p className="text-sm text-muted mb-2">Applicants</p>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${STATUS_STYLES[job.status]}`}
                  >
                    {job.status}
                  </span>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    className="border border-[#2563EB] text-[#2563EB] font-semibold text-sm px-6 py-2.5 rounded-lg hover:bg-[#EFF6FF] transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="bg-[#2563EB] text-white font-semibold text-sm px-6 py-2.5 rounded-lg hover:bg-[#1D4ED8] transition-colors"
                  >
                    View Applicants
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
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
      <Footer />
    </div>
  );
}