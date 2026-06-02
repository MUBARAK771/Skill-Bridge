"use client"
import PATHS from "@/route";
import { CircleArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import JobCard, { BrowseJobCardProps } from "./BrowserProps";

const jobs: BrowseJobCardProps[] = [
  {
    company: "PayStack",
    title: "Frontend Developer",
    salary: "₦100k–₦160k / mo",
    tags: ["Remote", "Full-time"],
    postedAt: "2 days ago",
    href: PATHS.Jobs,
  },
  {
    company: "Figma",
    title: "UX / UI Designer",
    salary: "₦100k–₦55k / mo",
    tags: ["Remote", "Part-time", "Senior"],
    postedAt: "10 days ago",
    href: PATHS.Jobs,
  },
  {
    company: "Twitter",
    title: "Content Writer",
    salary: "₦45k–₦120k / mo",
    tags: ["Remote", "3 mos"],
    postedAt: "10 days ago",
    href: PATHS.Jobs,
  },
  {
    company: "TechCabal",
    title: "Content Writer",
    salary: "₦100–₦200k / mo",
    tags: ["Remote", "Others"],
    postedAt: "10 days ago",
    href: PATHS.Jobs,
  },
  {
    company: "Andela",
    title: "Backend Engineer",
    salary: "₦120k–₦180k / mo",
    tags: ["Remote", "Full-time", "Senior"],
    postedAt: "1 day ago",
    href: PATHS.Jobs,
  },
  {
    company: "Flutterwave",
    title: "Product Manager",
    salary: "₦90k–₦140k / mo",
    tags: ["Hybrid", "Full-time"],
    postedAt: "3 days ago",
    href: PATHS.Jobs,
  },
]
const navList =[
        {label:"All", path:"All"},
        {label:"Full-time", path:"Full-time"},
        {label:"Contract", path:"Contract"},
        {label:"Freelance", path:"Freelance"},
        {label:"Part-time", path: "Part-time"},
    ]


export default function FeaturedBrowserJob() {
     const pathname = usePathname();
  return (
    <section className="flex flex-col px-5 sm:px-8 md:px-6 lg:px-4 xl:px-2 mt-10 gap-8 pb-16">

      {/* Section Header */}
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

      {/* Job Cards Grid — 1 col mobile, 2 col md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-9 gap-x-14">
        {jobs.map((job, i) => (
          <JobCard key={i} {...job} />
        ))}
      </div>
    </section>
  )
}