"use client";


import {
  ArrowRight,
  Bell,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  Clock3,
  Inbox,
  Plus,
  Settings,
  Users,
  X,
} from "lucide-react";
import { useContext, useState, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import PATHS from "@/route";
import EmployerDashboardSearchContext from "@/components/EmployerDashboardSearchContext";
type Job = { title: string; department: string; applications: number; status: string };

function MetricCard({
  label,
  value,
  detail,
  icon,
  iconClass,
}: {
  label: string;
  value: string;
  detail: string;
  icon: ReactNode;
  iconClass: string;
}) {
  return (
    <article className="rounded-lg border border-[#E2E8F0] bg-white p-4 sm:p-5">
      <div className="flex items-center justify-between gap-2">
        <p className="text-xs text-[#64748B]">{label}</p>
        <span className={`flex size-8 items-center justify-center rounded-md ${iconClass}`}>{icon}</span>
      </div>
      <p className="mt-4 text-3xl font-semibold leading-none text-[#111827]">{value}</p>
      <p className="mt-2 text-[11px] text-[#64748B]">{detail}</p>
    </article>
  );
}

function AttentionItem({
  initials,
  title,
  detail,
  badge,
  tone,
  icon,
  href,
}: {
  initials?: string;
  title: string;
  detail: string;
  badge: string;
  tone: string;
  icon: ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      className="flex min-h-[66px] items-center gap-3 rounded-lg border border-[#E2E8F0] bg-white px-3 py-3 transition-colors hover:border-[#93C5FD] sm:px-4"
    >
      <span className={`flex size-9 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold ${tone}`}>
        {initials ?? icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-xs font-semibold text-[#111827]">{title}</span>
        <span className="mt-1 block truncate text-[11px] text-[#64748B]">{detail}</span>
      </span>
      <span className="shrink-0 rounded-full bg-[#F1F5F9] px-2.5 py-1 text-[10px] font-medium text-[#475569]">{badge}</span>
      <ArrowRight size={15} className="shrink-0 text-[#94A3B8]" />
    </a>
  );
}

export default function EmployerPage() {
  const search = useContext(EmployerDashboardSearchContext);
  const [showPostJob, setShowPostJob] = useState(false);
  const [newJobTitle, setNewJobTitle] = useState("");
  const [newJobDepartment, setNewJobDepartment] = useState("");
  const [jobs, setJobs] = useState<Job[]>([
    { title: "Product Designer", department: "Design", applications: 34, status: "Open" },
    { title: "Frontend Engineer", department: "Engineering", applications: 28, status: "Open" },
    { title: "Growth Marketing Lead", department: "Growth", applications: 19, status: "Closing soon" },
  ]);


  const visibleJobs = jobs.filter((job) =>
    `${job.title} ${job.department}`.toLowerCase().includes(search.toLowerCase()),
  );

  function handlePostJob(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const title = newJobTitle.trim();
    const department = newJobDepartment.trim();
    if (!title || !department) return;

    setJobs((currentJobs) => [
      { title, department, applications: 0, status: "Open" },
      ...currentJobs,
    ]);
    setNewJobTitle("");
    setNewJobDepartment("");
    setShowPostJob(false);
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111827]">

      <main id="overview" className="min-h-screen px-4 pb-12 pt-24 sm:px-6 lg:px-10 lg:pt-24">
        <div className="mx-auto max-w-[1240px]">
          <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <h1 className="text-3xl my-3 font-medium tracking-tight text-[#111827] sm:text-[36px]">
                Good morning, Northstar.
              </h1>
              <p className="mt-2 text-sm text-[#64748B]">Here&apos;s what needs your team&apos;s attention today.</p>
            </div>
            <Link
              href={"/employer/jobs"}
              className="inline-flex h-11 items-center justify-center gap-3 self-start rounded-lg bg-[#2563EB] px-4 text-xs font-semibold text-white shadow-[0_8px_20px_rgba(37,99,235,0.18)] transition-colors hover:bg-[#1D4ED8] sm:self-auto"
            >
              Post a job <Plus size={17} />
            </Link>
          </section>

          <section className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4" aria-label="Hiring overview">
            <MetricCard label="Active job postings" value={String(jobs.length + 3)} detail="2 closing soon" icon={<BriefcaseBusiness size={17} />} iconClass="bg-[#E9EFFD] text-[#2563EB]" />
            <MetricCard label="New applications" value="18" detail="+6 since yesterday" icon={<Inbox size={17} />} iconClass="bg-[#FFF0DD] text-[#E8882F]" />
            <MetricCard label="To review" value="11" detail="Across 4 open roles" icon={<Users size={17} />} iconClass="bg-[#DFF7FB] text-[#06B6D4]" />
            <MetricCard label="Interviews" value="5" detail="This week" icon={<CalendarDays size={17} />} iconClass="bg-[#F1EAFE] text-[#7C3AED]" />
          </section>

          <section className="mt-8 grid gap-6 xl:grid-cols-[1.95fr]">
            <div>
              <div className="mb-3 flex items-center justify-between gap-3">
                <h2 className="text-base font-semibold text-[#111827]">Needs your attention</h2>
                <Link href={PATHS.EmployerApplications} className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#2563EB] hover:underline">
                  View pipeline <ArrowRight size={14} />
                </Link>
              </div>
              <div className="flex flex-col gap-2">
                <AttentionItem initials="OC" title="Review Olivia Chen" detail="Product Designer · 96% match" badge="New" tone="bg-[#E9EFFD] text-[#2563EB]" icon={<Users size={16} />} href={PATHS.EmployerApplications} />
                <AttentionItem title="Confirm portfolio interview" detail="Jamal Wilson · Tomorrow, 11:00" badge="Today" tone="bg-[#FFF0DD] text-[#E8882F]" icon={<CalendarDays size={16} />} href={PATHS.EmployerInterviews} />
                <AttentionItem title="Product Designer closes soon" detail="2 days left · 34 applicants" badge="Review" tone="bg-[#E7F0FF] text-[#4C83D7]" icon={<Clock3 size={16} />} href={PATHS.MyJobs} />
              </div>
            </div>
          </section>

          <section className="mt-8 grid gap-7 xl:grid-cols-[1.2fr_0.8fr]">
            <div id="jobs">
              <div className="mb-3 flex items-center justify-between gap-3">
                <h2 className="text-base font-semibold text-[#111827]">Active job postings</h2>
                <span className="text-[11px] text-[#64748B]">{jobs.length + 3} total</span>
              </div>
              <div className="overflow-hidden rounded-lg border border-[#E2E8F0] bg-white">
                {visibleJobs.length ? visibleJobs.map((job) => (
                  <div key={job.title} className="flex items-center gap-3 border-b border-[#F1F5F9] px-4 py-3 last:border-b-0 sm:px-5">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-[#E9EFFD] text-[#2563EB]"><BriefcaseBusiness size={15} /></span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-xs font-semibold text-[#111827]">{job.title}</span>
                      <span className="mt-1 block truncate text-[10px] text-[#64748B]">{job.department} · {job.applications} applications</span>
                    </span>
                    <span className={`hidden shrink-0 items-center gap-1 text-[10px] sm:flex ${job.status === "Open" ? "text-[#34856C]" : "text-[#CB7B32]"}`}>
                      {job.status === "Open" ? <Check size={12} /> : <Clock3 size={12} />}{job.status}
                    </span>
                  </div>
                )) : (
                  <p className="px-5 py-8 text-center text-xs text-[#64748B]">No matching jobs found.</p>
                )}
              </div>
            </div>

            <div id="messages">
              <div className="mb-3 flex items-center justify-between gap-3">
                <h2 className="text-base font-semibold text-[#111827]">Recent messages</h2>
                <span className="text-[11px] font-medium text-[#2563EB]">2 unread</span>
              </div>
              <div className="rounded-lg border border-[#E2E8F0] bg-white p-4">
                <div className="flex items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#DFF7FB] text-[10px] font-semibold text-[#0E7490]">JW</span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-semibold text-[#111827]">Jamal Wilson</span>
                    <span className="mt-1 block truncate text-[11px] text-[#64748B]">Thanks for reviewing my portfolio...</span>
                  </span>
                  <span className="text-[10px] text-[#94A3B8]">9:42</span>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-[#F1F5F9] pt-3 text-[10px] text-[#64748B]">
                  <span>Product Designer candidate</span>
                  <span className="size-2 rounded-full bg-[#2563EB]" />
                </div>
              </div>
            </div>
          </section>

          <section id="talents" className="mt-8 rounded-lg border border-[#E2E8F0] bg-white p-4 sm:p-5">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-base font-semibold text-[#111827]">Discover people who could move the work forward</h2>
                <p className="mt-1 text-[11px] text-[#64748B]">Strong matches for your open roles</p>
              </div>
              <Link href={PATHS.EmployerTalents} className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#2563EB] hover:underline">
                Find talents <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {[
                { initials: "OC", name: "Olivia Chen", role: "Senior Product Designer", match: "96%", tone: "bg-[#E9EFFD] text-[#2563EB]" },
                { initials: "JW", name: "Jamal Wilson", role: "UX Researcher", match: "91%", tone: "bg-[#DFF7FB] text-[#0E7490]" },
                { initials: "SM", name: "Sofia Martins", role: "Product Designer", match: "87%", tone: "bg-[#F1EAFE] text-[#7C3AED]" },
              ].map((talent) => (
                <Link key={talent.name} href={PATHS.EmployerTalents} className="flex items-center gap-3 rounded-lg border border-[#E2E8F0] p-3 transition hover:border-[#BFDBFE]">
                  <span className={`flex size-9 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold ${talent.tone}`}>{talent.initials}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-xs font-semibold text-[#111827]">{talent.name}</span>
                    <span className="mt-1 block truncate text-[10px] text-[#64748B]">{talent.role}</span>
                  </span>
                  <span className="rounded-full bg-[#E9EFFD] px-2 py-1 text-[10px] font-semibold text-[#2563EB]">{talent.match}</span>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}