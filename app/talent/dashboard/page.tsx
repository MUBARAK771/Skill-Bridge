"use client";

import PATHS from "@/route";
import {
  ArrowRight,
  Bell,
  Bookmark,
  BriefcaseBusiness,
  CalendarDays,
  ChevronRight,
  Clock3,
  FileText,
  HelpCircle,
  MapPin,
  MessageCircle,
  Search,
  Settings,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useState, type ReactNode } from "react";

type RecommendedRole = {
  title: string;
  company: string;
  initials: string;
  location: string;
  employment: string;
  skills: string[];
  match: number;
  salary: string;
  posted: string;
  tone: string;
};

const roles: RecommendedRole[] = [
  {
    title: "Product Designer",
    company: "Northstar Labs",
    initials: "NS",
    location: "Remote · Europe",
    employment: "Full-time",
    skills: ["Figma", "Research", "Prototyping"],
    match: 92,
    salary: "€58k – €72k",
    posted: "2 days ago",
    tone: "bg-[#E9EFFD] text-[#2563EB]",
  },
  {
    title: "Senior UX Researcher",
    company: "Aster Health",
    initials: "AH",
    location: "Berlin · Hybrid",
    employment: "Full-time",
    skills: ["Interviews", "Synthesis", "Strategy"],
    match: 86,
    salary: "€64k – €80k",
    posted: "4 days ago",
    tone: "bg-[#F1EAFE] text-[#7C3AED]",
  },
  {
    title: "Product Designer",
    company: "Lumen",
    initials: "LM",
    location: "Remote · Europe",
    employment: "Contract",
    skills: ["Design systems", "Figma", "Accessibility"],
    match: 83,
    salary: "€420 – €520 / day",
    posted: "1 week ago",
    tone: "bg-[#DFF7FB] text-[#0E7490]",
  },
];

function MetricCard({
  label,
  value,
  detail,
  icon,
  tone,
}: {
  label: string;
  value: string;
  detail: string;
  icon: ReactNode;
  tone: string;
}) {
  return (
    <article className="rounded-xl border border-[#E2E8F0] bg-white p-4 sm:p-5">
      <div className="flex items-center justify-between gap-2">
        <p className="text-xs text-[#64748B]">{label}</p>
        <span className={`flex size-8 items-center justify-center rounded-lg ${tone}`}>{icon}</span>
      </div>
      <p className="mt-4 text-3xl font-semibold leading-none text-[#111827]">{value}</p>
      <p className="mt-2 text-[11px] text-[#64748B]">{detail}</p>
    </article>
  );
}

function SectionHeading({
  title,
  href,
  linkText,
}: {
  title: string;
  href: string;
  linkText: string;
}) {
  return (
    <div className="mb-4 flex items-center justify-between gap-3">
      <h2 className="text-base font-semibold text-[#111827]">{title}</h2>
      <Link href={href} className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#2563EB] hover:underline">
        {linkText} <ArrowRight size={14} />
      </Link>
    </div>
  );
}

export default function TalentDashboardPage() {
  const [search, setSearch] = useState("");
  const [savedRoles, setSavedRoles] = useState<string[]>(["Aster Health"]);
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  const filteredRoles = roles.filter((role) =>
    `${role.title} ${role.company} ${role.skills.join(" ")}`.toLowerCase().includes(search.toLowerCase()),
  );

  function toggleSaved(company: string) {
    setSavedRoles((current) =>
      current.includes(company) ? current.filter((role) => role !== company) : [...current, company],
    );
  }

  return (
    <div className="mx-auto max-w-[1240px]">
      <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="mb-2 text-xs font-medium text-[#64748B]">{formattedDate}</p>
          <h1 className="text-3xl font-medium tracking-tight text-[#111827] sm:text-[36px]">
            Good morning, Maya.
          </h1>
          <p className="mt-2 text-sm text-[#64748B]">
            Here&apos;s a focused view of what could move your career forward today.
          </p>
        </div>
        <Link
          href={PATHS.TalentOpportunities}
          className="inline-flex h-11 items-center justify-center gap-2 self-start rounded-lg bg-[#2563EB] px-4 text-xs font-semibold text-white shadow-[0_8px_20px_rgba(37,99,235,0.18)] transition hover:bg-[#1D4ED8] sm:self-auto"
        >
          Explore opportunities <ArrowRight size={16} />
        </Link>
      </section>

      <section id="profile" className="mt-7 flex flex-col gap-4 rounded-xl border border-[#DDE7F6] bg-white p-4 sm:flex-row sm:items-center sm:p-5">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#E9EFFD] text-[#2563EB]">
          <Sparkles size={20} />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm font-semibold text-[#111827]">Your profile is 82% complete</p>
            <span className="text-sm font-semibold text-[#2563EB]">82%</span>
          </div>
          <p className="mt-1 text-xs text-[#64748B]">Add two portfolio projects to help employers see more of your work.</p>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#E9EFFD]" role="progressbar" aria-label="Profile completeness" aria-valuenow={82} aria-valuemin={0} aria-valuemax={100}>
            <div className="h-full w-[82%] rounded-full bg-[#2563EB]" />
          </div>
        </div>
        <Link href={PATHS.TalentProfile} className="inline-flex h-9 shrink-0 items-center justify-center rounded-lg border border-[#E2E8F0] px-3 text-xs font-semibold text-[#334155] transition hover:border-[#93C5FD] hover:text-[#2563EB]">
          Complete profile
        </Link>
      </section>

      <section className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4" aria-label="Career overview">
        <MetricCard label="Applications sent" value="8" detail="+2 this month" icon={<FileText size={17} />} tone="bg-[#E9EFFD] text-[#2563EB]" />
        <MetricCard label="Under review" value="4" detail="2 new updates" icon={<Clock3 size={17} />} tone="bg-[#FFF0DD] text-[#E8882F]" />
        <MetricCard label="Interviews" value="2" detail="Next one this week" icon={<CalendarDays size={17} />} tone="bg-[#DFF7FB] text-[#06B6D4]" />
        <MetricCard label="Saved roles" value={String(13 + savedRoles.length)} detail="3 added this week" icon={<Bookmark size={17} />} tone="bg-[#F1EAFE] text-[#7C3AED]" />
      </section>

      <div className="mt-8 grid items-start gap-8 xl:grid-cols-[minmax(0,1.55fr)_minmax(290px,0.85fr)]">
        <section id="recommended">
          <SectionHeading title="Recommended for you" href={PATHS.TalentOpportunities} linkText="View all" />
          <label className="relative mb-3 block">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search roles, companies, or skills"
              className="h-10 w-full rounded-lg border border-[#E2E8F0] bg-white pl-9 pr-3 text-xs text-[#334155] outline-none placeholder:text-[#94A3B8] focus:border-[#2563EB]"
            />
          </label>
          <div className="flex flex-col gap-3">
            {filteredRoles.length ? filteredRoles.map((role) => {
              const isSaved = savedRoles.includes(role.company);
              return (
                <article key={`${role.company}-${role.title}`} className="rounded-xl border border-[#E2E8F0] bg-white p-4 transition hover:border-[#BFDBFE] sm:p-5">
                  <div className="flex items-start gap-3">
                    <span className={`flex size-10 shrink-0 items-center justify-center rounded-lg text-xs font-semibold ${role.tone}`}>
                      {role.initials}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-sm font-semibold text-[#111827]">{role.title}</h3>
                      <p className="mt-1 text-xs text-[#64748B]">{role.company}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleSaved(role.company)}
                      aria-label={`${isSaved ? "Remove saved" : "Save"} ${role.title}`}
                      aria-pressed={isSaved}
                      className={`flex size-8 shrink-0 items-center justify-center rounded-lg transition ${isSaved ? "bg-[#E9EFFD] text-[#2563EB]" : "text-[#94A3B8] hover:bg-[#F1F5F9] hover:text-[#2563EB]"}`}
                    >
                      <Bookmark size={17} className={isSaved ? "fill-current" : ""} />
                    </button>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[11px] text-[#64748B]">
                    <span className="inline-flex items-center gap-1.5"><MapPin size={13} />{role.location}</span>
                    <span className="inline-flex items-center gap-1.5"><BriefcaseBusiness size={13} />{role.employment}</span>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#F1F5F9] pt-3">
                    <div className="flex flex-wrap gap-1.5">
                      {role.skills.map((skill) => (
                        <span key={skill} className="rounded-full bg-[#F1F5F9] px-2.5 py-1 text-[10px] text-[#475569]">{skill}</span>
                      ))}
                    </div>
                    <span className="rounded-full bg-[#E9EFFD] px-2.5 py-1 text-[10px] font-semibold text-[#2563EB]">{role.match}% match</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-[11px]">
                    <span className="font-semibold text-[#111827]">{role.salary}</span>
                    <span className="text-[#94A3B8]">Posted {role.posted}</span>
                  </div>
                </article>
              );
            }) : (
              <p className="rounded-xl border border-[#E2E8F0] bg-white px-4 py-8 text-center text-xs text-[#64748B]">
                No opportunities match that search. Try another role or skill.
              </p>
            )}
          </div>
        </section>

        <div className="flex flex-col gap-7">
          <section aria-labelledby="calendar-heading">
            <SectionHeading title="Next on your calendar" href={PATHS.TalentApplications} linkText="View applications" />
            <article className="rounded-xl border border-[#E2E8F0] bg-white p-4 sm:p-5">
              <div className="flex gap-3">
                <div className="flex h-14 w-12 shrink-0 flex-col items-center justify-center rounded-lg bg-[#E9EFFD] text-[#2563EB]">
                  <span className="text-[10px] font-semibold uppercase">Nov</span>
                  <span className="text-xl font-semibold leading-tight">14</span>
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-[#7C3AED]">Interview</p>
                  <h3 id="calendar-heading" className="mt-1 text-sm font-semibold text-[#111827]">Portfolio conversation</h3>
                  <p className="mt-1 text-xs text-[#64748B]">Aster Health · 10:30 – 11:15</p>
                </div>
              </div>
              <div className="mt-4 flex gap-2 rounded-lg bg-[#F8FAFC] p-3 text-[11px] leading-5 text-[#64748B]">
                <Sparkles size={15} className="mt-0.5 shrink-0 text-[#7C3AED]" />
                Bring 2–3 projects that show how you think through ambiguity.
              </div>
            </article>
          </section>

          <section id="applications">
            <SectionHeading title="Recent applications" href={PATHS.TalentApplications} linkText="View all" />
            <div className="divide-y divide-[#F1F5F9] rounded-xl border border-[#E2E8F0] bg-white px-4">
              {[
                { company: "Aster Health", role: "Senior UX Researcher", status: "Interview", tone: "bg-[#F1EAFE] text-[#7C3AED]" },
                { company: "Northstar Labs", role: "Product Designer", status: "In review", tone: "bg-[#E9EFFD] text-[#2563EB]" },
                { company: "Lumen", role: "Product Designer", status: "Submitted", tone: "bg-[#F1F5F9] text-[#475569]" },
              ].map((application) => (
                <div key={application.company} className="flex items-center gap-3 py-3.5">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-[#F1F5F9] text-[10px] font-semibold text-[#475569]">
                    {application.company.slice(0, 2).toUpperCase()}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-xs font-semibold text-[#111827]">{application.role}</span>
                    <span className="mt-1 block truncate text-[10px] text-[#64748B]">{application.company}</span>
                  </span>
                  <span className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-medium ${application.tone}`}>{application.status}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <section className="mt-8">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="text-base font-semibold text-[#111827]">Keep your momentum</h2>
          <span className="text-[11px] text-[#64748B]">Small steps add up</span>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { title: "Make your profile work harder", detail: "Complete your portfolio", href: "#profile", icon: <Sparkles size={17} />, tone: "bg-[#E9EFFD] text-[#2563EB]" },
            { title: "Explore new matches", detail: "12 roles fit your preferences", href: PATHS.TalentOpportunities, icon: <BriefcaseBusiness size={17} />, tone: "bg-[#F1EAFE] text-[#7C3AED]" },
            { title: "Check your messages", detail: "2 new conversations", href: PATHS.TalentMessages, icon: <MessageCircle size={17} />, tone: "bg-[#DFF7FB] text-[#0E7490]" },
          ].map((item) => (
            <Link key={item.title} href={item.href} className="flex items-center gap-3 rounded-xl border border-[#E2E8F0] bg-white p-4 transition hover:border-[#BFDBFE]">
              <span className={`flex size-9 shrink-0 items-center justify-center rounded-lg ${item.tone}`}>{item.icon}</span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-xs font-semibold text-[#111827]">{item.title}</span>
                <span className="mt-1 block truncate text-[11px] text-[#64748B]">{item.detail}</span>
              </span>
              <ChevronRight size={16} className="shrink-0 text-[#94A3B8]" />
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-4" aria-label="Workspace updates">
        <article id="messages" className="rounded-xl border border-[#E2E8F0] bg-white p-4">
          <div className="flex items-center gap-2 text-[#2563EB]"><MessageCircle size={16} /><h2 className="text-xs font-semibold text-[#111827]">Recent message</h2></div>
          <p className="mt-3 text-xs font-medium text-[#111827]">Jamal Wilson</p>
          <p className="mt-1 truncate text-[11px] text-[#64748B]">Thanks for sharing your portfolio — let&apos;s find a time to talk.</p>
        </article>
        <article id="notifications" className="rounded-xl border border-[#E2E8F0] bg-white p-4">
          <div className="flex items-center gap-2 text-[#06B6D4]"><Bell size={16} /><h2 className="text-xs font-semibold text-[#111827]">Notifications</h2></div>
          <p className="mt-3 text-xs font-medium text-[#111827]">Your application is moving forward</p>
          <p className="mt-1 text-[11px] text-[#64748B]">Aster Health invited you to interview.</p>
        </article>
        <article id="settings" className="rounded-xl border border-[#E2E8F0] bg-white p-4">
          <div className="flex items-center gap-2 text-[#7C3AED]"><Settings size={16} /><h2 className="text-xs font-semibold text-[#111827]">Account settings</h2></div>
          <p className="mt-3 text-xs font-medium text-[#111827]">Your preferences are up to date</p>
          <p className="mt-1 text-[11px] text-[#64748B]">Remote roles · Europe · Product design</p>
        </article>
        <article id="help" className="rounded-xl border border-[#E2E8F0] bg-white p-4">
          <div className="flex items-center gap-2 text-[#64748B]"><HelpCircle size={16} /><h2 className="text-xs font-semibold text-[#111827]">Need a hand?</h2></div>
          <p className="mt-3 text-xs font-medium text-[#111827]">We&apos;re here to help</p>
          <Link href={PATHS.Home} className="mt-1 inline-flex items-center gap-1 text-[11px] text-[#2563EB] hover:underline">
            Visit SkillBridge <ArrowRight size={12} />
          </Link>
        </article>
      </section>
    </div>
  );
}
