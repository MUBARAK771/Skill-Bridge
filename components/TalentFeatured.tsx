import PATHS from "@/route";
import { CircleArrowRight } from "lucide-react";
import Link from "next/link";
import JobCard, { TalentCardProps } from "./TalentProps";

const jobs: TalentCardProps[] = [
  {
    company: "PayStack",
    Name: "Frontend Developer",
    salary: "₦100k–₦160k / mo",
    tags: ["Remote", "Full-time"],
    postedAt: "2 days ago",
    href: PATHS.Jobs,
  },
  {    company: "Figma",
    Name: "UX / UI Designer",
    salary: "₦100k–₦55k / mo",
    tags: ["Remote", "Part-time", "Senior"],
    postedAt: "10 days ago",
    href: PATHS.Jobs,
  },
  {
    company: "Twitter",
    Name: "Content Writer",
    salary: "₦45k–₦120k / mo",
    tags: ["Remote", "3 mos"],
    postedAt: "10 days ago",
    href: PATHS.Jobs,
  },
  {
    company: "TechCabal",
    Name: "Content Writer",
    salary: "₦100–₦200k / mo",
    tags: ["Remote", "Others"],
    postedAt: "10 days ago",
    href: PATHS.Jobs,
  },
  {
    company: "Andela",
    Name: "Backend Engineer",
    salary: "₦120k–₦180k / mo",
    tags: ["Remote", "Full-time", "Senior"],
    postedAt: "1 day ago",
    href: PATHS.Jobs,
  },
  {
    company: "Flutterwave",
    Name: "Product Manager",
    salary: "₦90k–₦140k / mo",
    tags: ["Hybrid", "Full-time"],
    postedAt: "3 days ago",
    href: PATHS.Jobs,
  },
]

export default function FeaturedTalentJob() {
  return (
    <section className="flex flex-col px-5 sm:px-8 md:px-6 lg:px-4 xl:px-2 mt-10 gap-8 pb-16">

      {/* Section Header */}
      <div className="flex flex-row items-center justify-between">
        <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl">Featured Jobs</h2>
        <button className="border py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg border-primary shrink-0">
          <Link
            className="flex gap-2 font-medium text-primary items-center text-xs sm:text-sm"
            href={PATHS.Jobs}
          >
            View all Jobs
            <CircleArrowRight size={14} />
          </Link>
        </button>
      </div>

      {/* Job Cards Grid — 1 col mobile, 2 col md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {jobs.map((job, i) => (
          <JobCard key={i} {...job} />
        ))}
      </div>
    </section>
  )
}