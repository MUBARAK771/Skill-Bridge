"use client";

import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Check, Clock3, MoreHorizontal, Plus } from "lucide-react";
import { useState } from "react";

const jobs = [
  { title: "Product Designer", location: "Remote · Full-time", status: "Live", applicants: 34, updated: "Updated 2h ago", tone: "purple" },
  { title: "Growth Marketing Lead", location: "London · Full-time", status: "Live", applicants: 21, updated: "Updated yesterday", tone: "blue" },
  { title: "Customer Operations Manager", location: "Remote · Full-time", status: "Draft", applicants: 0, updated: "Edited 3d ago", tone: "orange" },
  { title: "Senior Frontend Engineer", location: "Amsterdam · Full-time", status: "Paused", applicants: 6, updated: "Updated 1w ago", tone: "green" },
];

const tabs = ["All jobs", "Active", "Drafts", "Paused", "Closed"];

function StatusBadge({ status }: { status: string }) {
  const palette = {
    Live: "bg-[#DCFCE7] text-[#166534]",
    Draft: "bg-[#FEF3C7] text-[#92400E]",
    Paused: "bg-[#F1F5F9] text-[#475569]",
  } as const;

  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-medium ${palette[status as keyof typeof palette] ?? "bg-[#F1F5F9] text-[#475569]"}`}>
      {status === "Live" ? <Check size={12} /> : status === "Draft" ? <Clock3 size={12} /> : null}
      {status}
    </span>
  );
}

export default function EmployerJobsPage() {
  const [activeTab, setActiveTab] = useState("All jobs");

  const filteredJobs = jobs.filter((job) => {
    if (activeTab === "Active") return job.status === "Live";
    if (activeTab === "Drafts") return job.status === "Draft";
    if (activeTab === "Paused") return job.status === "Paused";
    if (activeTab === "Closed") return job.status === "Closed";
    return true;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] px-4 pb-12 pt-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1220px]">
        < div className="flex flex-col gap-4 border-b border-[#E2E8F0] bg-[#F8FAFC] pb-5">
          <div className="flex flex-col-reverse gap-4 sm:flex-row-reverse sm:items-end sm:justify-between sm:items-end">
            <div className="">
              <Link
                href="/employer/jobs/new"
                className="inline-flex h-11 items-center justify-center gap-3 self-start rounded-lg bg-[#2563EB] px-4 text-xs font-semibold text-white shadow-[0_8px_20px_rgba(37,99,235,0.18)] transition-colors hover:bg-[#1D4ED8] sm:self-auto"
              >
                Post a job <Plus size={16} />
              </Link>
            </div>
            <div className="pt-2">
            <h1 className="text-[22px] font-medium tracking-[-0.06em] text-[#111827] sm:text-[32px]">Jobs</h1>
            <p className=" text-base text-[#64748B]">Keep every opportunity clear, current, and moving.</p>
          </div>
          </div>

          
        </div>

        <div className="pt-8">

          <div className="mt-7 flex overflow-hidden w-500 items-center gap-2 border-b border-[#E2E8F0] pb-3 xl:w-full">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                aria-pressed={activeTab === tab}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  activeTab === tab ? "bg-[#E9EFFD] text-[#2563EB]" : "text-[#64748B] hover:bg-white hover:text-[#111827]"
                }`}
              >
                {tab}
                {activeTab === tab ? <span className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-[#2563EB] align-middle" /> : null}
              </button>
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border border-[#E2E8F0] bg-white shadow-[0_1px_0_rgba(15,23,42,0.02)]">
            <div className="hidden grid-cols-[1.4fr_0.7fr_0.55fr_0.6fr_0.3fr] gap-3 border-b border-[#E2E8F0] bg-[#F8FAFC] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#64748B] sm:grid">
              <span>Role</span>
              <span>Status</span>
              <span>Applicants</span>
              <span>Last updated</span>
              <span className="text-right"> </span>
            </div>

            <div>
              {filteredJobs.length ? filteredJobs.map((job) => (
                <div key={job.title} className="grid gap-3 border-b border-[#E2E8F0] px-4 py-4 last:border-b-0 sm:grid-cols-[1.4fr_0.7fr_0.55fr_0.6fr_0.3fr] sm:items-center sm:px-5">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className={`flex size-10 shrink-0 items-center justify-center rounded-lg text-sm font-semibold ${
                      job.tone === "purple" ? "bg-[#E9E3FF] text-[#6D28D9]" :
                      job.tone === "blue" ? "bg-[#DBEAFE] text-[#2563EB]" :
                      job.tone === "orange" ? "bg-[#FDE7C8] text-[#B45309]" : "bg-[#DCFCE7] text-[#166534]"
                    }`}>
                      {job.title.slice(0,2).toUpperCase().replace(/\s/g, "")}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-[#111827]">{job.title}</p>
                      <p className="mt-1 text-xs text-[#64748B]">{job.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-2 sm:block">
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-[#64748B] sm:hidden">Status</span>
                    <StatusBadge status={job.status} />
                  </div>

                  <div className="flex items-center justify-between gap-2 text-sm text-[#475569] sm:block">
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-[#64748B] sm:hidden">Applicants</span>
                    {job.status === "Draft" ? "-" : `${job.applicants} applicants`}
                  </div>

                  <div className="flex items-center justify-between gap-2 text-sm text-[#475569] sm:block">
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-[#64748B] sm:hidden">Updated</span>
                    {job.updated}
                  </div>

                  <button type="button" className="justify-self-end rounded-md p-1 text-[#64748B] transition-colors hover:bg-[#F1F5F9] hover:text-[#111827]" aria-label={`More options for ${job.title}`}>
                    <MoreHorizontal size={16} />
                  </button>
                </div>
              )) : (
                <p className="px-5 py-10 text-center text-sm text-[#64748B]">No jobs in this category yet.</p>
              )}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 rounded-xl border border-dashed border-[#CBD5E1] bg-white px-4 py-4 text-[#64748B] sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-full bg-[#EEF2FF] text-[#4F46E5]">
                <BriefcaseBusiness size={16} />
              </span>
              <div>
                <p className="text-sm font-medium text-[#111827]">Your job pipeline is on track.</p>
                <p className="text-xs text-[#64748B]">2 roles are ready for review this week.</p>
              </div>
            </div>
            <Link href="/employer/jobs/new" className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB]">
              Review roles <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
