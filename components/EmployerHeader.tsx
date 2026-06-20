"use client";

import PATHS from "@/route";
import { Bell, Menu, Search, CircleUser, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const employerNav = [
  { label: "Overview", path: PATHS.Employer },
  { label: "My Jobs", path: "/employer/jobs" },
  { label: "Browse Talents", path: PATHS.Talent },
  { label: "Messages", path: "/employer/messages" },
];

export default function EmployerHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-[#E5E7EB] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-[auto_1fr_auto] items-center h-16 gap-4">

        {/* Logo */}
        <Link href={PATHS.Employer} className="flex-shrink-0">
          <img src="/logo.svg" alt="BridgeSkill" className="w-28 sm:w-36" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 justify-center">
          {employerNav.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.label}
                href={item.path}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? "border border-[#2563EB] text-[#2563EB] bg-transparent"
                    : "text-[#64748B] hover:text-[#2563EB]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Search + Icons */}
        <div className="hidden md:flex items-center gap-3 justify-end">
          <div className="relative w-full">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]"
            />
            <input
              type="text"
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              placeholder="Search by company, skill..."
              className="w-full pl-8 pr-3 py-2 text-xs rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] text-[#334155] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30"
            />
          </div>
          <button className="relative p-2 rounded-full hover:bg-[#F1F5F9] transition">
            <Bell size={22} className="text-[#64748B]" />
            {/* <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#2563EB] rounded-full" /> */}
          </button>
          <button className="w-9 h-9 rounded-full flex items-center justify-center transition">
            <CircleUser size={22} className="text-[#2563EB]" />
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md text-[#64748B] hover:bg-[#F1F5F9]"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-[#E5E7EB] ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-3">
          {/* Mobile search */}
          <div className="relative">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]"
            />
            <input
              type="text"
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              placeholder="Search by company, skill..."
              className="w-full pl-8 pr-3 py-2.5 text-sm rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] text-[#334155] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30"
            />
          </div>

          {/* Mobile nav links */}
          {employerNav.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.label}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`py-2.5 px-3 rounded-lg text-sm font-medium transition ${
                  isActive
                    ? "text-[#2563EB] bg-[#E9EFFD] font-semibold"
                    : "text-[#64748B] hover:text-[#2563EB] hover:bg-[#F8FAFC]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          {/* Mobile icons row */}
          <div className="flex items-center gap-3 pt-2 border-t border-[#F1F5F9] mt-1">
            <button className="relative p-2 rounded-full hover:bg-[#F1F5F9] transition">
              <Bell size={28} className="text-[#64748B]" />
              {/* <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#2563EB] rounded-full" /> */}
            </button>
            <button className="w-9 h-9 rounded-full flex items-center justify-center transition">
              <CircleUser size={18} className="text-[#2563EB]" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
