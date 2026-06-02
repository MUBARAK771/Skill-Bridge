"use client";
import PATHS from "@/route"
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Header(){
    const navList =[
        {label:"Home", path:PATHS.Home},
        {label:"Browse Jobs", path:PATHS.Jobs},
        {label:"Talents", path:PATHS.Talent},
        {label:"About", path:PATHS.About},
    ]
      const pathname = usePathname();
    return(
        <div className="bg-transparent absolute w-full h-16 p-9 md:px-8 lg:px-16 flex items-center sticky top-0 justify-between  z-50">
            {/* Logo */}
            <div>
            <Link href={PATHS.Home}>
                <img src="/logo.svg" alt="Skillbridge" className="w-39" />
            </Link>
            </div>
            <nav className="hidden md:flex items-center gap-10">
        {navList.map((item) => {
          const isActive = pathname === item.path;

          return (
            <Link
              key={item.label}
              href={item.path}
              className={`text-[14px] font-medium transition-all ${
                isActive
                  ? "text-primary bg-card-foreground rounded-sm border py-2 px-7 font-semibold border-primary"
                  : "text-muted font-medium hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
        
      </nav>
      {/* Buttons */}
        <div className="hidden md:flex gap-7">
            <Link href={PATHS.Login} className="px-6 py-2.5 text-primary rounded-lg border border-primary hover:bg-card-foreground transition text-sm font-semibold shadow-sm">
        Log in
      </Link>
      <Link href={PATHS.GetStarted} className="px-6 py-2.5 rounded-lg bg-primary hover:bg-secondary-foreground transition text-white text-sm font-semibold shadow-sm">
        Get Started
      </Link>
        </div>
        <Menu className="md:hidden" />
        </div>
    )
}