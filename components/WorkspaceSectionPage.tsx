"use client";

import {
  ArrowRight,
  Bell,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  CheckCheck,
  Clock3,
  FileText,
  MapPin,
  MessageCircle,
  Search,
  Send,
  Settings,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useState, type FormEvent } from "react";

type Audience = "employer" | "talent";
type Section =
  | "applications"
  | "talents"
  | "interviews"
  | "messages"
  | "notifications"
  | "settings"
  | "opportunities"
  | "profile"
  | "help";

type WorkspaceRow = {
  name: string;
  title: string;
  detail: string;
  status: string;
  action: string;
  location?: string;
  employment?: string;
};

type PageConfig = {
  title: string;
  description: string;
  icon: typeof Users;
  stats: { label: string; value: string; detail: string }[];
  tabs: string[];
  rows: WorkspaceRow[];
};

const configs: Record<Audience, Partial<Record<Section, PageConfig>>> = {
  employer: {
    applications: {
      title: "Applications",
      description: "Review candidates and keep every hiring process moving.",
      icon: FileText,
      stats: [
        { label: "Total applications", value: "82", detail: "Across 4 active roles" },
        { label: "New to review", value: "18", detail: "+6 since yesterday" },
        { label: "Interview stage", value: "5", detail: "This week" },
      ],
      tabs: ["All", "New", "Reviewing", "Interview"],
      rows: [
        { name: "Olivia Chen", title: "Product Designer", detail: "96% match · Applied 2h ago", status: "New", action: "Review" },
        { name: "Jamal Wilson", title: "UX Researcher", detail: "91% match · Applied yesterday", status: "Interview", action: "View application" },
        { name: "Sofia Martins", title: "Product Designer", detail: "87% match · Applied yesterday", status: "Reviewing", action: "Continue review" },
        { name: "Daniel Kim", title: "Frontend Engineer", detail: "84% match · Applied 2 days ago", status: "New", action: "Review" },
      ],
    },
    talents: {
      title: "Find talents",
      description: "Discover skilled people who fit your open roles.",
      icon: Users,
      stats: [
        { label: "Suggested matches", value: "24", detail: "Based on your open roles" },
        { label: "Saved profiles", value: "8", detail: "Ready to revisit" },
        { label: "Invitations sent", value: "12", detail: "4 responses this week" },
      ],
      tabs: ["All", "Product design", "Research", "Engineering"],
      rows: [
        { name: "Olivia Chen", title: "Senior Product Designer", detail: "96% match · 8 years experience", status: "Product design", action: "Invite" },
        { name: "Jamal Wilson", title: "UX Researcher", detail: "91% match · 6 years experience", status: "Research", action: "Invite" },
        { name: "Sofia Martins", title: "Product Designer", detail: "87% match · 5 years experience", status: "Product design", action: "Invite" },
        { name: "Daniel Kim", title: "Senior Frontend Engineer", detail: "84% match · 7 years experience", status: "Engineering", action: "Invite" },
      ],
    },
    interviews: {
      title: "Interviews",
      description: "Coordinate conversations and prepare for every next step.",
      icon: CalendarDays,
      stats: [
        { label: "Upcoming", value: "5", detail: "Scheduled this week" },
        { label: "Needs confirmation", value: "2", detail: "Waiting on your team" },
        { label: "Completed", value: "8", detail: "This month" },
      ],
      tabs: ["All", "Upcoming", "Needs confirmation", "Past"],
      rows: [
        { name: "Jamal Wilson", title: "Portfolio conversation", detail: "Tomorrow · 11:00–11:45 · Google Meet", status: "Needs confirmation", action: "Confirm" },
        { name: "Olivia Chen", title: "Design team introduction", detail: "Thursday · 14:00–14:30 · Google Meet", status: "Upcoming", action: "View details" },
        { name: "Daniel Kim", title: "Technical interview", detail: "Friday · 10:00–11:00 · Video call", status: "Upcoming", action: "View details" },
        { name: "Sofia Martins", title: "Portfolio review", detail: "Completed Monday · 14:00 · Google Meet", status: "Completed", action: "View notes" },
      ],
    },
  },
  talent: {
    opportunities: {
      title: "Find opportunities",
      description: "Explore roles that fit your skills, interests, and next career step.",
      icon: BriefcaseBusiness,
      stats: [
        { label: "Recommended roles", value: "24", detail: "Matched to your profile" },
        { label: "Strong matches", value: "8", detail: "More than 85% match" },
        { label: "Saved roles", value: "14", detail: "3 added this week" },
      ],
      tabs: ["All roles", "Remote", "Full-time", "Saved"],
      rows: [
        { name: "Northstar Labs", title: "Product Designer", detail: "92% match · €58k–€72k · Posted 2 days ago", status: "Remote", action: "Apply", location: "Europe · Remote", employment: "Full-time" },
        { name: "Aster Health", title: "Senior UX Researcher", detail: "86% match · €64k–€80k · Posted 4 days ago", status: "Hybrid", action: "Apply", location: "Berlin · Hybrid", employment: "Full-time" },
        { name: "Lumen", title: "Product Designer", detail: "83% match · €420–€520 / day · Posted 1 week ago", status: "Remote", action: "Apply", location: "Europe · Remote", employment: "Contract" },
        { name: "Common Ground", title: "Product Design Lead", detail: "81% match · €70k–€88k · Posted 3 days ago", status: "Hybrid", action: "Apply", location: "Amsterdam · Hybrid", employment: "Full-time" },
      ],
    },
    applications: {
      title: "My applications",
      description: "Follow your applications and see what is happening at every stage.",
      icon: FileText,
      stats: [
        { label: "Applications sent", value: "8", detail: "+2 this month" },
        { label: "Under review", value: "4", detail: "2 new updates" },
        { label: "Interviews", value: "2", detail: "Next one this week" },
      ],
      tabs: ["All", "Submitted", "In review", "Interview"],
      rows: [
        { name: "Aster Health", title: "Senior UX Researcher", detail: "Applied 5 days ago · Recruiter viewed your profile", status: "Interview", action: "View details" },
        { name: "Northstar Labs", title: "Product Designer", detail: "Applied 1 week ago · Updated yesterday", status: "In review", action: "View details" },
        { name: "Lumen", title: "Product Designer", detail: "Applied 9 days ago · Application received", status: "Submitted", action: "View details" },
        { name: "Common Ground", title: "Product Design Lead", detail: "Applied 2 weeks ago · Recruiter reviewing", status: "In review", action: "View details" },
      ],
    },
  },
};

const conversations = [
  { name: "Jamal Wilson", role: "UX Researcher candidate", time: "9:42", preview: "Thanks for reviewing my portfolio. I’d love to share a little more about the research process." },
  { name: "Olivia Chen", role: "Product Designer candidate", time: "Yesterday", preview: "I’ve added a case study to my portfolio that might be useful for the team." },
  { name: "Sofia Martins", role: "Product Designer candidate", time: "Monday", preview: "Thank you for the update. Thursday afternoon works well for me." },
];

function PageHeading({ title, description }: { title: string; description: string }) {
  return (
    <header className=" pb-12">
      {/* <p className=" text-xs font-medium text-[#64748B]">Workspace</p> */}
      <h1 className="text-3xl font-medium tracking-tight text-[#111827] sm:text-[32px]">{title}</h1>
      <p className="mt-2 text-sm text-[#64748B]">{description}</p>
    </header>
  );
}

function MessagePage({ audience }: { audience: Audience }) {
  const [selected, setSelected] = useState(0);
  const [reply, setReply] = useState("");
  const [sent, setSent] = useState<string[]>([]);
  const person = conversations[selected];

  function sendReply(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = reply.trim();
    if (!message) return;
    setSent((current) => [...current, message]);
    setReply("");
  }

  return (
    <>
      <PageHeading title="Messages" description="Keep conversations with your hiring network in one place." />
      <div className="grid min-h-[480px] m-90 overflow-hidden rounded-xl border border-[#E2E8F0] bg-white lg:grid-cols-[300px_1fr]">
        <aside className="border-b border-[#E2E8F0] lg:border-b-0 lg:border-r">
          <div className="border-b border-[#E2E8F0] p-4">
            <label className="relative block">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
              <input aria-label="Search conversations" placeholder="Search conversations" className="h-9 w-full rounded-lg border border-[#E2E8F0] pl-9 pr-3 text-xs outline-none focus:border-[#2563EB]" />
            </label>
          </div>
          {conversations.map((thread, index) => (
            <button key={thread.name} type="button" onClick={() => setSelected(index)} className={`w-full border-b border-[#F1F5F9] p-4 text-left transition hover:bg-[#F8FAFC] ${selected === index ? "bg-[#E9EFFD]/50" : ""}`}>
              <span className="flex items-center justify-between gap-2">
                <span className="truncate text-xs font-semibold text-[#111827]">{audience === "talent" && index === 0 ? "Northstar Labs" : thread.name}</span>
                <span className="shrink-0 text-[10px] text-[#94A3B8]">{thread.time}</span>
              </span>
              <span className="mt-1 block text-[10px] text-[#64748B]">{thread.role}</span>
              <span className="mt-2 block truncate text-[11px] text-[#64748B]">{thread.preview}</span>
            </button>
          ))}
        </aside>
        <section className="flex min-h-[420px] flex-col">
          <div className="border-b border-[#E2E8F0] px-5 py-4">
            <p className="text-sm font-semibold text-[#111827]">{person.name}</p>
            <p className="mt-1 text-[11px] text-[#64748B]">{person.role}</p>
          </div>
          <div className="flex flex-1 flex-col gap-3 p-5">
            <p className="max-w-[85%] self-start rounded-xl rounded-tl-sm bg-[#F1F5F9] p-3 text-xs leading-5 text-[#475569]">{person.preview}</p>
            {sent.map((message, index) => (
              <p key={`${index}-${message}`} className="max-w-[85%] self-end rounded-xl rounded-tr-sm bg-[#E9EFFD] p-3 text-xs leading-5 text-[#1D4ED8]">{message}</p>
            ))}
          </div>
          <form onSubmit={sendReply} className="flex gap-2 border-t border-[#E2E8F0] p-4">
            <input value={reply} onChange={(event) => setReply(event.target.value)} aria-label="Write a message" placeholder="Write a message..." className="h-10 min-w-0 flex-1 rounded-lg border border-[#E2E8F0] px-3 text-xs outline-none focus:border-[#2563EB]" />
            <button type="submit" className="inline-flex h-10 items-center gap-2 rounded-lg bg-[#2563EB] px-3 text-xs font-semibold text-white hover:bg-[#1D4ED8]"><Send size={14} /><span className="hidden sm:inline">Send</span></button>
          </form>
        </section>
      </div>
    </>
  );
}

function NotificationPage({ audience }: { audience: Audience }) {
  const [readAll, setReadAll] = useState(false);
  const items = audience === "employer"
    ? [
      { title: "New application from Olivia Chen", detail: "Product Designer · 2 hours ago", icon: <Users size={17} /> },
      { title: "Interview reminder", detail: "Jamal Wilson · Tomorrow at 11:00", icon: <CalendarDays size={17} /> },
      { title: "Your job is getting noticed", detail: "Product Designer received 12 new views · Yesterday", icon: <BriefcaseBusiness size={17} /> },
    ]
    : [
      { title: "Aster Health invited you to interview", detail: "Senior UX Researcher · 1 hour ago", icon: <CalendarDays size={17} /> },
      { title: "Your profile was viewed", detail: "Northstar Labs · Yesterday", icon: <Users size={17} /> },
      { title: "New roles match your profile", detail: "12 product design roles · This week", icon: <BriefcaseBusiness size={17} /> },
    ];

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <PageHeading title="Notifications" description="Stay up to date with activity in your workspace." />
        <button type="button" onClick={() => setReadAll(true)} className="mb-7 inline-flex h-9 items-center gap-2 rounded-lg border border-[#E2E8F0] bg-white px-3 text-xs font-medium text-[#475569] hover:border-[#93C5FD] hover:text-[#2563EB]">
          <CheckCheck size={15} /> Mark all as read
        </button>
      </div>
      <section className="overflow-hidden rounded-xl border border-[#E2E8F0] bg-white">
        {items.map((item, index) => (
          <article key={item.title} className="flex items-start gap-3 border-b border-[#F1F5F9] p-4 last:border-b-0 sm:p-5">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#E9EFFD] text-[#2563EB]">{item.icon}</span>
            <span className="min-w-0 flex-1">
              <span className="block text-xs font-semibold text-[#111827]">{item.title}</span>
              <span className="mt-1 block text-[11px] text-[#64748B]">{item.detail}</span>
            </span>
            {!readAll && index === 0 ? <span className="mt-1 size-2 shrink-0 rounded-full bg-[#2563EB]" aria-label="Unread" /> : <Check size={15} className="mt-1 shrink-0 text-[#94A3B8]" aria-label="Read" />}
          </article>
        ))}
      </section>
    </>
  );
}

function SettingsPage({ audience }: { audience: Audience }) {
  const [saved, setSaved] = useState(false);
  const [emailUpdates, setEmailUpdates] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(false);

  function saveSettings(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaved(true);
  }

  return (
    <>
      <PageHeading title="Settings" description="Manage your account, preferences, and workspace notifications." />
      <form onSubmit={saveSettings} className="max-w-3xl space-y-5">
        <section className="rounded-xl border border-[#E2E8F0] bg-white p-5 sm:p-6">
          <h2 className="text-sm font-semibold text-[#111827]">Account details</h2>
          <p className="mt-1 text-xs text-[#64748B]">Update the information associated with your account.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <label className="text-xs font-medium text-[#475569]">Name<input defaultValue={audience === "employer" ? "Northstar Labs" : "Maya Singh"} className="mt-2 h-10 w-full rounded-lg border border-[#E2E8F0] px-3 text-sm font-normal text-[#111827] outline-none focus:border-[#2563EB]" /></label>
            <label className="text-xs font-medium text-[#475569]">Email address<input type="email" defaultValue={audience === "employer" ? "hiring@northstarlabs.com" : "maya@example.com"} className="mt-2 h-10 w-full rounded-lg border border-[#E2E8F0] px-3 text-sm font-normal text-[#111827] outline-none focus:border-[#2563EB]" /></label>
            {audience === "employer" ? <label className="text-xs font-medium text-[#475569] sm:col-span-2">Company website<input defaultValue="northstarlabs.com" className="mt-2 h-10 w-full rounded-lg border border-[#E2E8F0] px-3 text-sm font-normal text-[#111827] outline-none focus:border-[#2563EB]" /></label> : null}
          </div>
        </section>
        <section className="rounded-xl border border-[#E2E8F0] bg-white p-5 sm:p-6">
          <h2 className="text-sm font-semibold text-[#111827]">Notifications</h2>
          <p className="mt-1 text-xs text-[#64748B]">Choose which updates you receive by email.</p>
          <label className="mt-5 flex items-center justify-between gap-3 border-b border-[#F1F5F9] py-3 text-xs text-[#334155]">
            <span><span className="block font-medium">Important activity</span><span className="mt-1 block text-[11px] text-[#64748B]">Messages, applications, and interview updates</span></span>
            <input type="checkbox" checked={emailUpdates} onChange={(event) => setEmailUpdates(event.target.checked)} className="size-4 accent-[#2563EB]" />
          </label>
          <label className="flex items-center justify-between gap-3 py-3 text-xs text-[#334155]">
            <span><span className="block font-medium">Weekly digest</span><span className="mt-1 block text-[11px] text-[#64748B]">A weekly summary of your workspace</span></span>
            <input type="checkbox" checked={weeklyDigest} onChange={(event) => setWeeklyDigest(event.target.checked)} className="size-4 accent-[#2563EB]" />
          </label>
        </section>
        <div className="flex items-center gap-3">
          <button type="submit" className="inline-flex h-10 items-center gap-2 rounded-lg bg-[#2563EB] px-4 text-xs font-semibold text-white hover:bg-[#1D4ED8]">Save changes <Check size={14} /></button>
          {saved ? <span role="status" className="text-xs font-medium text-[#15803D]">Settings saved.</span> : null}
        </div>
      </form>
    </>
  );
}

function ProfilePage() {
  const [saved, setSaved] = useState(false);
  return (
    <>
      <PageHeading title="My profile" description="Help employers understand your experience, skills, and the work you want to do." />
      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
        <form onSubmit={(event) => { event.preventDefault(); setSaved(true); }} className="rounded-xl border border-[#E2E8F0] bg-white p-5 sm:p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-xs font-medium text-[#475569]">Full name<input defaultValue="Maya Singh" className="mt-2 h-10 w-full rounded-lg border border-[#E2E8F0] px-3 text-sm font-normal text-[#111827] outline-none focus:border-[#2563EB]" /></label>
            <label className="text-xs font-medium text-[#475569]">Professional title<input defaultValue="Product designer" className="mt-2 h-10 w-full rounded-lg border border-[#E2E8F0] px-3 text-sm font-normal text-[#111827] outline-none focus:border-[#2563EB]" /></label>
            <label className="text-xs font-medium text-[#475569]">Location<input defaultValue="Berlin, Germany" className="mt-2 h-10 w-full rounded-lg border border-[#E2E8F0] px-3 text-sm font-normal text-[#111827] outline-none focus:border-[#2563EB]" /></label>
            <label className="text-xs font-medium text-[#475569]">Availability<select defaultValue="Open to opportunities" className="mt-2 h-10 w-full rounded-lg border border-[#E2E8F0] bg-white px-3 text-sm font-normal text-[#111827] outline-none focus:border-[#2563EB]"><option>Open to opportunities</option><option>Available soon</option><option>Not looking right now</option></select></label>
            <label className="text-xs font-medium text-[#475569] sm:col-span-2">About<textarea defaultValue="Product designer who turns complex workflows into clear, useful experiences. I enjoy working across research, prototyping, and design systems." rows={4} className="mt-2 w-full rounded-lg border border-[#E2E8F0] p-3 text-sm font-normal leading-6 text-[#111827] outline-none focus:border-[#2563EB]" /></label>
            <label className="text-xs font-medium text-[#475569] sm:col-span-2">Skills<input defaultValue="Product design, Figma, Research, Prototyping, Design systems" className="mt-2 h-10 w-full rounded-lg border border-[#E2E8F0] px-3 text-sm font-normal text-[#111827] outline-none focus:border-[#2563EB]" /></label>
          </div>
          <div className="mt-5 flex items-center gap-3">
            <button type="submit" className="inline-flex h-10 items-center gap-2 rounded-lg bg-[#2563EB] px-4 text-xs font-semibold text-white hover:bg-[#1D4ED8]">Save profile <Check size={14} /></button>
            {saved ? <span role="status" className="text-xs font-medium text-[#15803D]">Profile saved.</span> : null}
          </div>
        </form>
        <aside className="rounded-xl border border-[#DDE7F6] bg-white p-5">
          <div className="flex items-center justify-between text-xs font-semibold text-[#111827]"><span>Profile completeness</span><span className="text-[#2563EB]">82%</span></div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#E9EFFD]"><div className="h-full w-[82%] rounded-full bg-[#2563EB]" /></div>
          <p className="mt-4 text-xs leading-5 text-[#64748B]">Add a couple of portfolio projects to give employers a better view of your work.</p>
          <div className="mt-5 space-y-3 border-t border-[#F1F5F9] pt-4 text-xs">
            <p className="flex items-center gap-2 text-[#15803D]"><Check size={14} /> Contact details</p>
            <p className="flex items-center gap-2 text-[#15803D]"><Check size={14} /> Skills and experience</p>
            <p className="flex items-center gap-2 text-[#64748B]"><Clock3 size={14} /> Portfolio projects</p>
          </div>
        </aside>
      </div>
    </>
  );
}

function HelpPage() {
  return (
    <>
      <PageHeading title="Help center" description="Find answers and get the most out of your SkillBridge workspace." />
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
        <section className="divide-y divide-[#E2E8F0] rounded-xl border border-[#E2E8F0] bg-white px-5">
          {[
            { question: "How do I update my profile?", answer: "Open My profile from the sidebar, edit the details you want to change, then select Save profile." },
            { question: "How can I manage notifications?", answer: "Visit Settings to choose which important updates and weekly digests you receive by email." },
            { question: "Where can I see application updates?", answer: "Open My applications to follow each role and review its latest status." },
            { question: "How do I contact an employer?", answer: "Use Messages in your workspace to continue a conversation with a hiring team." },
          ].map((item) => (
            <details key={item.question} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-medium text-[#111827]">
                {item.question}<ArrowRight size={15} className="shrink-0 text-[#64748B] transition group-open:rotate-90" />
              </summary>
              <p className="mt-3 max-w-2xl text-xs leading-6 text-[#64748B]">{item.answer}</p>
            </details>
          ))}
        </section>
        <aside className="rounded-xl border border-[#DDE7F6] bg-white p-5">
          <span className="flex size-9 items-center justify-center rounded-lg bg-[#E9EFFD] text-[#2563EB]"><MessageCircle size={17} /></span>
          <h2 className="mt-4 text-sm font-semibold text-[#111827]">Still need a hand?</h2>
          <p className="mt-2 text-xs leading-5 text-[#64748B]">Our support team can help with account questions and workspace issues.</p>
          <a href="mailto:support@skillbridge.com" className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#2563EB] hover:underline">Contact support <ArrowRight size={14} /></a>
        </aside>
      </div>
    </>
  );
}

export default function WorkspaceSectionPage({ audience, section }: { audience: Audience; section: Section }) {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [updatedRows, setUpdatedRows] = useState<Record<string, string>>({});
  const [savedRows, setSavedRows] = useState<string[]>(["Aster Health"]);
  const [expandedRows, setExpandedRows] = useState<string[]>([]);
  const config = configs[audience][section];

  if (section === "messages") return <MessagePage audience={audience} />;
  if (section === "notifications") return <NotificationPage audience={audience} />;
  if (section === "settings") return <SettingsPage audience={audience} />;
  if (section === "profile") return <ProfilePage />;
  if (section === "help") return <HelpPage />;
  if (!config) return null;

  const Icon = config.icon;
  const tabs = config.tabs.map((tab) => tab === "All roles" || tab === "All" ? "All" : tab);
  const visibleRows = config.rows.filter((row) => {
    const rowStatus = updatedRows[row.name] ?? row.status;
    const matchesTab = activeTab === "All"
      || (section === "opportunities" && activeTab === "Saved" && savedRows.includes(row.name))
      || (section === "opportunities" && activeTab === "Remote" && row.location?.toLowerCase().includes("remote") === true)
      || (section === "opportunities" && activeTab === "Full-time" && row.employment === "Full-time")
      || (section === "interviews" && activeTab === "Past" && row.status === "Completed")
      || (section === "interviews" && activeTab === "Needs confirmation" && rowStatus === "Needs confirmation")
      || (section === "interviews" && activeTab === "Upcoming" && (rowStatus === "Upcoming" || rowStatus === "Confirmed"))
      || (section === "applications" && activeTab === "Reviewing" && (rowStatus === "Reviewing" || rowStatus === "Reviewed"))
      || (section === "talents" && row.status.toLowerCase().includes(activeTab.toLowerCase()))
      || (section !== "opportunities" && section !== "interviews" && section !== "talents" && rowStatus.toLowerCase().includes(activeTab.toLowerCase()));
    const matchesQuery = `${row.name} ${row.title} ${row.detail} ${row.location ?? ""}`.toLowerCase().includes(query.toLowerCase());
    return matchesTab && matchesQuery;
  });

  function handleAction(row: WorkspaceRow) {
    if (row.action === "View details" || row.action === "View notes") {
      setExpandedRows((current) =>
        current.includes(row.name) ? current.filter((name) => name !== row.name) : [...current, row.name],
      );
    } else if (section === "opportunities") {
      setUpdatedRows((current) => ({ ...current, [row.name]: "Applied" }));
    } else if (section === "talents") {
      setUpdatedRows((current) => ({ ...current, [row.name]: "Invited" }));
    } else if (section === "applications") {
      setUpdatedRows((current) => ({ ...current, [row.name]: "Reviewed" }));
    } else if (section === "interviews") {
      setUpdatedRows((current) => ({ ...current, [row.name]: "Confirmed" }));
    }
  }

  function toggleSaved(name: string) {
    setSavedRows((current) =>
      current.includes(name) ? current.filter((saved) => saved !== name) : [...current, name],
    );
  }

  return (
    <>
      <PageHeading title={config.title} description={config.description} />
      {/* <section className="grid gap-3 sm:grid-cols-3" aria-label={`${config.title} overview`}>
        {config.stats.map((stat, index) => (
          <article key={stat.label} className="rounded-xl border border-[#E2E8F0] bg-white p-4 sm:p-5">
            <div className="flex items-center justify-between gap-2">
              <p className="text-xs text-[#64748B]">{stat.label}</p>
              <span className={`flex size-8 items-center justify-center rounded-lg ${index === 0 ? "bg-[#E9EFFD] text-[#2563EB]" : index === 1 ? "bg-[#F1EAFE] text-[#7C3AED]" : "bg-[#DFF7FB] text-[#06B6D4]"}`}><Icon size={16} /></span>
            </div>
            <p className="mt-4 text-2xl font-semibold leading-none text-[#111827]">
              {section === "opportunities" && stat.label === "Saved roles" ? 13 + savedRows.length : stat.value}
            </p>
            <p className="mt-2 text-[11px] text-[#64748B]">{stat.detail}</p>
          </article>
        ))}
      </section>
      <section className="mt-7">
        <div className="flex flex-col gap-3 border-b border-[#E2E8F0] pb-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-1">
            {tabs.map((tab) => (
              <button key={tab} type="button" onClick={() => setActiveTab(tab)} aria-pressed={activeTab === tab} className={`rounded-lg px-3 py-2 text-xs font-medium transition ${activeTab === tab ? "bg-[#E9EFFD] text-[#2563EB]" : "text-[#64748B] hover:bg-white hover:text-[#111827]"}`}>
                {tab}
              </button>
            ))}
          </div>
          <label className="relative block sm:w-64">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
            <input aria-label={`Search ${config.title.toLowerCase()}`} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search this page" className="h-9 w-full rounded-lg border border-[#E2E8F0] bg-white pl-9 pr-3 text-xs outline-none focus:border-[#2563EB]" />
          </label>
        </div>
        <div className="mt-4 overflow-hidden rounded-xl border border-[#E2E8F0] bg-white">
          {visibleRows.length ? visibleRows.map((row) => {
            const status = updatedRows[row.name] ?? row.status;
            const completed = status === "Applied" || status === "Invited" || status === "Confirmed" || status === "Reviewed";
            const detailsOpen = expandedRows.includes(row.name);
            return (
              <article key={row.name} className="flex flex-col gap-3 border-b border-[#F1F5F9] p-4 last:border-b-0 sm:flex-row sm:items-center sm:p-5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#E9EFFD] text-xs font-semibold text-[#2563EB]">{row.name.slice(0, 2).toUpperCase()}</span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold text-[#111827]">{row.name}</span>
                  <span className="mt-1 block text-xs text-[#475569]">{row.title}</span>
                  <span className="mt-1 block text-[11px] text-[#64748B]">{row.detail}</span>
                  {row.location ? <span className="mt-2 inline-flex items-center gap-1 text-[10px] text-[#64748B]"><MapPin size={12} />{row.location}</span> : null}
                  {detailsOpen ? <span className="mt-2 block text-[11px] leading-5 text-[#475569]">Keep track of this {audience === "employer" ? "candidate and the next step in your hiring process" : "opportunity and follow its latest updates"} in your workspace.</span> : null}
                </span>
                <span className={`inline-flex w-fit items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-medium ${completed || status === "Interview" ? "bg-[#E9EFFD] text-[#2563EB]" : status === "New" ? "bg-[#DFF7FB] text-[#0E7490]" : "bg-[#F1F5F9] text-[#475569]"}`}>
                  {completed ? <Check size={12} /> : null}{status}
                </span>
                {section === "opportunities" ? (
                  <button type="button" onClick={() => toggleSaved(row.name)} aria-pressed={savedRows.includes(row.name)} className={`h-9 shrink-0 rounded-lg border px-3 text-xs font-medium transition ${savedRows.includes(row.name) ? "border-[#BFDBFE] bg-[#E9EFFD] text-[#2563EB]" : "border-[#E2E8F0] text-[#64748B] hover:border-[#93C5FD] hover:text-[#2563EB]"}`}>
                    {savedRows.includes(row.name) ? "Saved" : "Save"}
                  </button>
                ) : null}
                <button type="button" disabled={completed} onClick={() => handleAction(row)} className={`inline-flex h-9 shrink-0 items-center justify-center gap-2 rounded-lg px-3 text-xs font-semibold transition ${completed ? "cursor-default border border-[#E2E8F0] text-[#64748B]" : "bg-[#2563EB] text-white hover:bg-[#1D4ED8]"}`}>
                  {completed ? (status === "Applied" ? "Applied" : status === "Invited" ? "Invited" : status === "Reviewed" ? "Reviewed" : "Confirmed") : detailsOpen ? "Hide details" : row.action}
                  {completed ? <Check size={13} /> : detailsOpen ? <Check size={13} /> : <ArrowRight size={13} />}
                </button>
              </article>
            );
          }) : (
            <p className="px-5 py-12 text-center text-xs text-[#64748B]">No results found. Try a different search or filter.</p>
          )}
        </div>
      </section> */}
      {/* {audience === "employer" && section === "applications" ? (
        <p className="mt-4 text-[11px] text-[#64748B]">Review a candidate to move their application into your hiring pipeline.</p>
      ) : null}
      {audience === "talent" && section === "opportunities" ? (
        <p className="mt-4 text-[11px] text-[#64748B]">Your profile and selected skills are used to recommend relevant roles.</p>
      ) : null} */}
    </>
  );
}
