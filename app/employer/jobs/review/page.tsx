"use client";

import Link from "next/link";
import { ArrowRight, Badge, Briefcase, Check, CircleCheckBig, Icon, MapPin, Star } from "lucide-react";

export default function JobReviewPage() {
  const tags = ["Product thinking", "Figma fluency", "Strong portfolio", "Clear communicator"];

  return (
    <div className="min-h-screen bg-[#F8FAFC] px-4 pb-12 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1220px]">
        <div className="flex flex-col gap-4 px-1 pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div />
        </div>

        <div className="pt-8">
          <h1 className="text-[22px] font-medium tracking-[-0.05em] text-[#111827] sm:text-[32px]">Review and publish</h1>
          <p className=" text-sm text-[#64748B] sm:text-base">This is how your opportunity will appear to candidates.</p>

          <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,1.7fr)_320px]">
            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-4 sm:p-6">
              <div className="mb-5 flex items-center justify-between">
                <span className="rounded-full bg-[rgba(37,99,235,0.18)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#2563EB]">
                  Draft preview
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#64748B]">Last saved just now</span>
              </div>

              <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-[rgba(37,99,235,0.18)] text-sm font-semibold text-[#2563EB]">NS</span>
                  <div>
                    <h2 className="text-[28px] font-medium tracking-[-0.06em] text-[#111827] sm:text-[38px]">Product Designer</h2>
                    <p className="mt-2 text-sm text-[#64748B]">Northstar Labs · Remote · Europe</p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2 text-xs text-[#475569]">
                  <span className="rounded-full border px-2.5 py-1 flex items-center gap-1.5"><Briefcase size={14}/> Full-time</span>
                  <span className="rounded-full border px-2.5 py-1 flex items-center gap-1.5"><MapPin size={14}/> Remote-friendly</span>
                  <span className="rounded-full border px-2.5 py-1 flex items-center gap-1.5"><Star size={14}/> Salary not disclosed</span>
                </div>

                <div className="mt-8 border-t border-[#E2E8F0] pt-6">
                  <h3 className="text-[26px] font-medium tracking-[-0.05em] text-[#111827]">About the role</h3>
                  <p className="mt-3 text-base leading-8 text-[#475569]">
                    Help shape the next generation of tools for independent teams. You&apos;ll work closely with product, engineering, and customers to turn complex workflows into clear, useful experiences.
                  </p>
                </div>

                <div className="mt-8 border-t border-[#E2E8F0] pt-6">
                  <h3 className="text-[22px] font-medium tracking-[-0.04em] text-[#111827]">What we&apos;re looking for</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-[#F1F5F9] px-3 py-1.5 text-xs font-medium text-[#475569]">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <aside className="rounded-2xl border border-[#DDE7F6] bg-[#F3F8FF] p-4 text-[#475569] sm:p-5">
              <h3 className="text-[20px] font-medium tracking-[-0.04em] text-[#111827] sm:text-[24px]">One clear step away.</h3>
              <p className="mt-3 text-sm leading-7 text-[#475569] sm:text-base">Publish when the role, arrangement, and first signal are ready.</p>

              <ul className="mt-6 space-y-3 text-sm text-[#475569]">
                <li className="flex items-center gap-2"><span className="text-[#16A34A]"><Check size={16} /></span> Role essentials</li>
                <li className="flex items-center gap-2"><span className="text-[#16A34A]"><Check size={16} /></span> Candidate-facing preview</li>
                <li className="flex items-center gap-2"><span className="text-[#16A34A]"><Check size={16} /></span> Company context</li>
              </ul>

              <button type="button" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(124,58,237,0.22)] transition hover:bg-[#2563EB]">
                Publish job <ArrowRight size={16} />
              </button>

              <Link href="/employer/jobs/new" className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-[#E2E8F0] bg-white px-4 py-3 text-sm font-semibold text-[#475569] transition hover:bg-[#F8FAFC]">
                Save as draft
              </Link>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
