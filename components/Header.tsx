"use client";

import PATHS from "@/route";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navList = [
    { label: "Home", path: PATHS.Home },
    { label: "Browse Jobs", path: PATHS.Jobs },
    { label: "Talents", path: PATHS.Talent },
    { label: "About", path: PATHS.About },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16 flex items-center justify-between">
        {/* Logo */}
        <Link href={PATHS.Home}>
          <img src="/logo.svg" alt="Skillbridge" className="w-32 md:w-40" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navList.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.label}
                href={item.path}
                className={`text-sm transition-all ${
                  isActive
                    ? "text-primary bg-card-foreground rounded-md border border-primary px-6 py-2 font-semibold"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href={PATHS.Login}
            className="px-5 py-2.5 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10"
          >
            Log in
          </Link>

          <Link
            href={PATHS.GetStarted}
            className="px-5 py-2.5 bg-primary text-white rounded-lg font-medium hover:opacity-90"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-white border-t shadow-lg px-5 py-5 flex flex-col gap-4">
          {navList.map((item) => (
            <Link
              key={item.label}
              href={item.path}
              onClick={() => setIsOpen(false)}
              className={`py-2 ${
                pathname === item.path
                  ? "text-primary font-semibold"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <div className="flex flex-col gap-3 pt-3">
            <Link
              href={PATHS.Login}
              className="w-full text-center px-5 py-3 border border-primary text-primary rounded-lg"
            >
              Log in
            </Link>

            <Link
              href={PATHS.GetStarted}
              className="w-full text-center px-5 py-3 bg-primary text-white rounded-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

