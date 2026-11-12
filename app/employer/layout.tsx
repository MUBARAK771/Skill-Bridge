'use client';

import EmployerDashboardNav from "@/components/EmployerDashboardNav";
import EmployerDashboardSearchContext from "@/components/EmployerDashboardSearchContext";
import { useState, type ReactNode } from "react";

export default function EmployerLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111827]">
      <EmployerDashboardSearchContext.Provider value={search}>
        <EmployerDashboardNav search={search} onSearchChange={setSearch} />
        <div className="lg:pl-[244px]">{children}</div>
      </EmployerDashboardSearchContext.Provider>
    </div>
  );
}
