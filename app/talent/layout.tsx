"use client";

import PATHS from "@/route";
import {
  Bell,
  BriefcaseBusiness,
  CircleUser,
  FileText,
  HelpCircle,
  LayoutDashboard,
  Menu,
  MessageCircle,
  Search,
  Settings,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";

const workspaceLinks = [
  { label: "Dashboard", href: PATHS.TalentDashboard, icon: LayoutDashboard },
  { label: "Find opportunities", href: PATHS.TalentOpportunities, icon: Search },
  { label: "My applications", href: PATHS.TalentApplications, icon: FileText },
  { label: "My profile", href: PATHS.TalentProfile, icon: CircleUser },
  { label: "Messages", href: PATHS.TalentMessages, icon: MessageCircle, count: "2" },
];

const supportLinks = [
  { label: "Notifications", href: PATHS.TalentNotifications, icon: Bell },
  { label: "Settings", href: PATHS.TalentSettings, icon: Settings },
  { label: "Help center", href: PATHS.TalentHelp, icon: HelpCircle },
];

function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <>
      <Link href={PATHS.Home} className="flex h-16 items-center px-6">
        <img src="/logo.svg" alt="SkillBridge" className="w-32" />
      </Link>

      <div className="mx-4 mt-4 flex items-center gap-3 rounded-lg border border-[#E2E8F0] bg-white px-3 py-3">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-[#E9EFFD] text-[#2563EB]">
          <CircleUser size={18} />
        </span>
        <span className="min-w-0">
          <span className="block truncate text-xs font-semibold text-[#111827]">Talent workspace</span>
          <span className="mt-0.5 block text-[11px] text-[#64748B]">Personal profile</span>
        </span>
      </div>

      <p className="px-6 pb-2 pt-7 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#94A3B8]">
        Workspace
      </p>
      <nav className="flex flex-col gap-2 px-3" aria-label="Talent dashboard">
        {workspaceLinks.map(({ label, href, icon: Icon, count }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={label}
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
              {count ? (
                <span className="flex size-5 items-center justify-center rounded-full bg-[#E9EFFD] text-[10px] font-medium text-[#2563EB]">
                  {count}
                </span>
              ) : null}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto border-t border-[#E2E8F0] p-4">
        <nav className="mb-4 flex flex-col gap-1" aria-label="Support">
          {supportLinks.map(({ label, href, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                onClick={onNavigate}
                aria-current={isActive ? "page" : undefined}
                className={`flex h-9 items-center gap-3 rounded-lg px-3 text-xs transition ${isActive ? "bg-[#E9EFFD] font-medium text-[#2563EB]" : "text-[#64748B] hover:bg-white hover:text-[#111827]"}`}
              >
                <Icon size={16} /> {label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3 border-t border-[#E2E8F0] pt-4">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#DFF7FB] text-[10px] font-semibold text-[#0E7490]">MS</span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-xs font-semibold text-[#111827]">Maya Singh</span>
            <span className="mt-0.5 block truncate text-[11px] text-[#64748B]">Product designer</span>
          </span>
          <span className="text-[#64748B]" aria-hidden="true">···</span>
        </div>
      </div>
    </>
  );
}

function IconButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="relative flex size-9 items-center justify-center rounded-lg text-[#64748B] transition hover:bg-[#F1F5F9] hover:text-[#2563EB]"
    >
      {children}
    </Link>
  );
}

export default function TalentLayout({ children }: Readonly<{ children: ReactNode }>) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const activePage = [...workspaceLinks, ...supportLinks].find((item) => item.href === pathname);
  const pageTitle = activePage?.label ?? "Dashboard";

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111827]">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[244px] flex-col border-r border-[#E2E8F0] bg-[#F8FAFC] lg:flex">
        <Sidebar />
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
        <Sidebar onNavigate={() => setMenuOpen(false)} />
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
            <Link href={PATHS.TalentDashboard} className="font-medium text-[#111827] transition hover:text-[#2563EB]">
              Maya Singh
            </Link>
            <span className="text-[#94A3B8]">›</span>
            <span className="font-medium text-[#111827]">{pageTitle}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            href={PATHS.TalentOpportunities}
            className="hidden h-9 items-center gap-2 rounded-lg border border-[#E2E8F0] px-3 text-xs text-[#64748B] transition hover:border-[#93C5FD] hover:text-[#2563EB] sm:flex"
          >
            <Search size={15} /> Search opportunities <span className="text-[10px] text-[#94A3B8]">⌘ K</span>
          </Link>
          <IconButton href={PATHS.TalentMessages} label="Messages">
            <MessageCircle size={18} />
            <span className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-[#2563EB]" />
          </IconButton>
          <IconButton href={PATHS.TalentNotifications} label="Notifications">
            <Bell size={18} />
          </IconButton>
          <span className="flex size-8 items-center justify-center rounded-full bg-[#DFF7FB] text-[10px] font-semibold text-[#0E7490]">MS</span>
        </div>
      </header>

      <div className="lg:pl-[244px]">
        <main className="min-h-screen px-4 pb-12 pt-24 sm:px-6 lg:px-10">
          {children}
        </main>
      </div>
    </div>
  );
}
