"use client";

import PATHS from "@/route";
import {
  Bell,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  ChevronDown,
  FileText,
  LayoutDashboard,
  Menu,
  MessageCircle,
  Search,
  Settings,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { label: "Dashboard", target: "dashboard", href: PATHS.EmployerDashboard, icon: LayoutDashboard },
  { label: "Jobs", target: "jobs", href: PATHS.MyJobs, icon: BriefcaseBusiness },
  { label: "Applications", target: "applications", href: PATHS.EmployerApplications, icon: FileText },
  { label: "Find talents", target: "talents", href: PATHS.EmployerTalents, icon: Search },
  { label: "Interviews", target: "interviews", href: PATHS.EmployerInterviews, icon: CalendarDays },
  { label: "Messages", target: "messages", href: PATHS.Messages, icon: MessageCircle },
  { label: "Notifications", target: "notifications", href: PATHS.EmployerNotifications, icon: Bell },
  { label: "Settings", target: "settings", href: PATHS.EmployerSettings, icon: Settings },
];

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  const getIsActive = (target: string) => {
    const currentPath = pathname || PATHS.Employer;

    if (target === "dashboard") {
      return currentPath === PATHS.Employer || currentPath === PATHS.EmployerDashboard;
    }

    return currentPath === `${PATHS.Employer}/${target}` || currentPath.startsWith(`${PATHS.Employer}/${target}/`);
  };

  return (
    <>
      <Link href={PATHS.Employer} className="flex h-16 items-center gap-2 px-6">
        <img src="/logo.svg" alt="Skillbridge" className="w-32" />
      </Link>

      <div className="mx-4 mt-4 flex items-center justify-between rounded-lg border border-[#E2E8F0] bg-white px-3 py-3">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-[#E9EFFD] text-[#2563EB]">
            <Building2 size={18} />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-xs font-semibold text-[#111827]">Northstar Labs</span>
            <span className="mt-0.5 block text-[11px] text-[#64748B]">Employer account</span>
          </span>
        </div>
        <ChevronDown size={15} className="shrink-0 text-[#64748B]" />
      </div>

      <p className="px-6 pb-2 pt-7 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#94A3B8]">
        Workspace
      </p>
      <nav className="flex flex-col gap-3 px-3" aria-label="Employer dashboard">
        {navigation.map(({ label, target, href, icon: Icon }) => {
          const isActive = getIsActive(target);

          return (
            <Link
              key={target || "dashboard"}
              href={href}
              onClick={onNavigate}
              aria-current={isActive ? "page" : undefined}
              className={`flex h-10 items-center gap-3 rounded-lg px-3 text-[13px] transition-colors ${
                isActive
                  ? "bg-[#E9EFFD] font-semibold text-[#2563EB]"
                  : "text-[#64748B] hover:bg-white hover:text-[#111827]"
              }`}
            >
              <Icon size={17} />
              <span className="flex-1">{label}</span>
              {label === "Messages" ? (
                <span className="flex size-5 items-center justify-center rounded-full bg-white text-[10px] text-[#2563EB]">2</span>
              ) : null}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto border-t border-[#E2E8F0] p-4">
        <div className="flex items-center gap-3">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#FFE2C2] text-[10px] font-semibold text-[#A65B14]">NS</span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-xs font-semibold text-[#111827]">Northstar Labs</span>
            <span className="mt-0.5 block text-[11px] text-[#64748B]">Hiring team</span>
          </span>
          <span className="text-[#64748B]" aria-hidden="true">···</span>
        </div>
      </div>
    </>
  );
}

export default function EmployerDashboardNav({
  search,
  onSearchChange,
}: {
  search: string;
  onSearchChange: (value: string) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const routeMap = Object.fromEntries(navigation.map(({ label, target }) => [target, label]));
  const activeTarget = pathname === PATHS.Employer ? "dashboard" : pathname.replace(`${PATHS.Employer}/`, "").split("/")[0] || "";
  const currentLabel = routeMap[activeTarget] || "Dashboard";

  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[244px] flex-col border-r border-[#E2E8F0] bg-[#F8FAFC] lg:flex">
        <SidebarContent />
      </aside>

      {menuOpen ? (
        <button
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
          aria-label="Close navigation menu"
          onClick={() => setMenuOpen(false)}
        />
      ) : null}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[min(82vw,300px)] flex-col border-r border-[#E2E8F0] bg-[#F8FAFC] transition-transform lg:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SidebarContent onNavigate={() => setMenuOpen(false)} />
        <button
          type="button"
          className="absolute right-3 top-5 rounded-md p-1 text-[#64748B]"
          onClick={() => setMenuOpen(false)}
          aria-label="Close navigation menu"
        >
          <X size={20} />
        </button>
      </aside>

      <header className="fixed left-0 right-0 top-0 z-20 flex h-16 items-center justify-between border-b border-[#E2E8F0] bg-white px-4 sm:px-6 lg:left-[244px] lg:px-10">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-md p-2 text-[#64748B] hover:bg-[#F1F5F9] lg:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu size={20} />
          </button>
          <div className="flex items-center gap-2 text-sm text-[#64748B]">
            <Link href={PATHS.Employer} className="font-medium text-[#111827] transition hover:text-[#2563EB]">
              Northstar Labs
            </Link>
            <span className="text-[#94A3B8]">›</span>
            <span className="font-medium text-[#111827]">{currentLabel}</span>
          </div>
        </div>
        <div className="flex items-center gap-3 sm:gap-5">
          <label className="relative hidden sm:block">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
            <input
              type="search"
              value={search}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search"
              className="h-9 w-36 rounded-lg border border-[#E2E8F0] bg-white pl-9 pr-3 text-xs outline-none placeholder:text-[#94A3B8] focus:border-[#2563EB] lg:w-44"
            />
          </label>
          <Link href={PATHS.Messages} title="Messages" className="text-[#64748B] hover:text-[#2563EB]">
            <MessageCircle size={19} />
          </Link>
          <Link href={PATHS.EmployerNotifications} title="Notifications" className="text-[#64748B] hover:text-[#2563EB]">
            <Bell size={19} />
          </Link>
          <span className="flex size-8 items-center justify-center rounded-full bg-[#FFE2C2] text-[10px] font-semibold text-[#A65B14]">NS</span>
        </div>
      </header>
    </>
  );
}