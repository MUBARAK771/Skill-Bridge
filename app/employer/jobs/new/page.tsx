"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { useState } from "react";

export default function NewJobPage() {
  const router = useRouter();
  const [jobTitle, setJobTitle] = useState("Product Designer");
  const [employmentType, setEmploymentType] = useState("Full-time");
  const [workArrangement, setWorkArrangement] = useState("Remote");
  const [location, setLocation] = useState("Europe · Remote-friendly");
  const [experienceLevel, setExperienceLevel] = useState("Mid-level");
  const [salary, setSalary] = useState("€6.5k — €7.0k");
  const [skills, setSkills] = useState("Product design, Figma, Prototyping, Research");
  const [roleOverview, setRoleOverview] = useState(
    "Help shape the next generation of tools for independent teams. You'll work closely with product, engineering, and customers to turn complex workflows into clear, useful experiences.",
  );

  function handleContinue(event: React.FormEvent) {
    event.preventDefault();
    router.push("/employer/jobs/review");
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] px-4 pb-12 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1220px]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div />
        </div>

        <div className="pt-8">
          <h1 className="text-[22px] font-medium tracking-[-0.05em] text-[#111827] sm:text-[32px]">Post a new job</h1>
          <p className=" text-sm text-[#64748B] sm:text-base">A clear brief helps the right people see themselves in the role.</p>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#94A3B8] sm:gap-4 sm:text-[11px]">
            <div className="flex items-center gap-2 text-[#2563EB]">
              <span className="rounded-full bg-[#E9EFFD] px-2 py-1 text-[#2563EB]">1</span>
              <span>Basics</span>
            </div>
            <div className="h-px w-12 bg-[#E2E8F0]" />
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-[#F1F5F9] px-2 py-1 text-[#64748B]">2</span>
              <span>Responsibilities</span>
            </div>
            <div className="h-px w-12 bg-[#E2E8F0]" />
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-[#F1F5F9] px-2 py-1 text-[#64748B]">3</span>
              <span>Review</span>
            </div>
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,1.65fr)_320px]">
            <form onSubmit={handleContinue} className="rounded-2xl border border-[#E2E8F0] bg-white p-4 sm:p-6">
              <div className="mb-6 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748B]">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#E7F8F0] px-2 py-1 text-[#0F766E]">
                  <span className="size-2 rounded-full bg-[#16A34A]" />
                  Autosaved
                </span>
              </div>

              <h2 className="text-[19px] font-medium tracking-[-0.04em] text-[#111827]">Start with the essentials</h2>
              <p className="mt-2 text-sm text-[#64748B]">Give people enough context to decide if this could be a good next step.</p>

              <div className="mt-6 space-y-5">
                <label className="block">
                  <span className="mb-2 block text-xs font-medium text-[#475569]">Job title</span>
                  <input
                    value={jobTitle}
                    onChange={(event) => setJobTitle(event.target.value)}
                    className="h-12 w-full rounded-lg border border-[#CBD5E1] bg-white px-3 text-base text-[#111827] outline-none transition focus:border-[#2563EB]"
                  />
                </label>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-xs font-medium text-[#475569]">Employment type</span>
                    <select
                      value={employmentType}
                      onChange={(event) => setEmploymentType(event.target.value)}
                      className="h-12 w-full rounded-lg border border-[#CBD5E1] bg-white px-3 text-base text-[#111827] outline-none transition focus:border-[#2563EB]"
                    >
                      <option>Full-time</option>
                      <option>Part-time</option>
                      <option>Contract</option>
                    </select>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-medium text-[#475569]">Work arrangement</span>
                    <select
                      value={workArrangement}
                      onChange={(event) => setWorkArrangement(event.target.value)}
                      className="h-12 w-full rounded-lg border border-[#CBD5E1] bg-white px-3 text-base text-[#111827] outline-none transition focus:border-[#2563EB]"
                    >
                      <option>Remote</option>
                      <option>Hybrid</option>
                      <option>On-site</option>
                    </select>
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-xs font-medium text-[#475569]">Location</span>
                    <input
                      value={location}
                      onChange={(event) => setLocation(event.target.value)}
                      className="h-12 w-full rounded-lg border border-[#CBD5E1] bg-white px-3 text-base text-[#111827] outline-none transition focus:border-[#2563EB]"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-medium text-[#475569]">Experience level</span>
                    <select
                      value={experienceLevel}
                      onChange={(event) => setExperienceLevel(event.target.value)}
                      className="h-12 w-full rounded-lg border border-[#CBD5E1] bg-white px-3 text-base text-[#111827] outline-none transition focus:border-[#2563EB]"
                    >
                      <option>Mid-level</option>
                      <option>Senior</option>
                      <option>Lead</option>
                    </select>
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-xs font-medium text-[#475569]">Salary range</span>
                  <input
                    value={salary}
                    onChange={(event) => setSalary(event.target.value)}
                    className="h-12 w-full rounded-lg border border-[#CBD5E1] bg-white px-3 text-base text-[#111827] outline-none transition focus:border-[#2563EB]"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-medium text-[#475569]">Core skills</span>
                  <input
                    value={skills}
                    onChange={(event) => setSkills(event.target.value)}
                    className="h-12 w-full rounded-lg border border-[#CBD5E1] bg-white px-3 text-base text-[#111827] outline-none transition focus:border-[#2563EB]"
                  />
                </label>

                <div className="mt-2 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4">
                  <label className="block">
                    <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.14em] text-[#64748B]">The opportunity</span>
                    <textarea
                      value={roleOverview}
                      onChange={(event) => setRoleOverview(event.target.value)}
                      rows={6}
                      className="w-full resize-none rounded-lg border border-[#CBD5E1] bg-white p-3 text-base text-[#111827] outline-none transition focus:border-[#2563EB]"
                    />
                  </label>
                </div>
              </div>

              <div className="mt-8 flex flex-col-reverse justify-end gap-3 sm:flex-row">
                <button type="button" className="inline-flex h-11 items-center justify-center rounded-lg border border-[#E2E8F0] bg-white px-4 text-sm font-semibold text-[#475569] transition hover:bg-[#F8FAFC]">
                  Save draft
                </button>
                <button type="submit" className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#2563EB] px-4 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(37,99,235,0.18)] transition hover:bg-[#2563EB]">
                  Continue to review <ArrowRight size={16} />
                </button>
              </div>
            </form>

            <aside className="rounded-2xl border border-[#DDE7F6] bg-[#F3F8FF] p-4 text-[#475569] sm:p-5">
              <div className="mb-5 flex items-center gap-2 rounded-xl border border-[#D7E7FF] bg-[#EAF3FF] p-2 text-[#2563EB]">
                <Sparkles size={16} />
                <span className="text-xs font-semibold uppercase tracking-[0.14em]">Posting checklist</span>
              </div>

              <h3 className="text-[24px] font-medium tracking-[-0.04em] text-[#111827]">Strong briefs are specific and human.</h3>

              <ul className="mt-6 space-y-3 text-sm text-[#475569]">
                <li className="flex items-start gap-2"><span className="mt-0.5 text-[#16A34A]"><Check size={14} /></span> Role title is clear</li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-[#16A34A]"><Check size={14} /></span> Work arrangement is visible</li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-[#CBD5E1]"><Check size={14} /></span> Responsibilities to add</li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-[#CBD5E1]"><Check size={14} /></span> Application questions</li>
              </ul>

              <div className="mt-6 rounded-xl border border-[#D7E7FF] bg-[#ECF6FF] px-3 py-3 text-sm text-[#2563EB]">
                You&apos;re 48% of the way there.
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
