"use client"
import PATHS from "@/route";
import { CircleArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import JobCard, { JobCardProps } from "./BrowserProps";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const jobs: JobCardProps[] = [
  {
    company: "Paystack",
    title: "Frontend Developer",
    location: "Lagos",
    workType: "Remote",
    salary: "₦350k–500k/mo",
    tags: ["Full-time", "React", "TypeScript"],
    applicants: 34,
    postedAt: "2h ago",
    status: "apply",
    href: PATHS.Jobs,
  },
  {
    company: "TechPoint Africa",
    title: "Content Writer",
    location: "Remote",
    workType: "Remote",
    salary: "₦80k–120k/mo",
    tags: ["Freelance", "SEO", "Editing"],
    applicants: 58,
    postedAt: "1d ago",
    status: "apply",
    href: PATHS.Jobs,
  },
  {
    company: "TechPoint Africa",
    title: "Content Writer",
    location: "Remote",
    workType: "Remote",
    salary: "₦80k–120k/mo",
    tags: ["Freelance", "SEO", "Editing"],
    applicants: 58,
    postedAt: "1d ago",
    status: "apply",
    href: PATHS.Jobs,
  },
  {
    company: "Flutterwave",
    title: "UI/UX Designer",
    location: "Abuja",
    workType: "Remote",
    salary: "₦200k–300k/mo",
    tags: ["Contract", "Figma", "Research"],
    applicants: 21,
    postedAt: "5h ago",
    status: "applied",
    href: PATHS.Jobs,
  },
  {
    company: "Konga",
    title: "Digital Marketer",
    location: "Lagos",
    workType: "Hybrid",
    salary: "₦150k–200k/mo",
    tags: ["Part-time", "Meta Ads", "Analytics"],
    applicants: 34,
    postedAt: "3d ago",
    status: "apply",
    href: PATHS.Jobs,
  },
  {
    company: "Afrobeat TV",
    title: "Video Editor",
    location: "Remote",
    workType: "Remote",
    salary: "₦50k–100k/mo",
    tags: ["Freelance", "Premier Pro", "Motion"],
    applicants: 58,
    postedAt: "1d ago",
    status: "apply",
    href: PATHS.Jobs,
  },
  {
    company: "Flutterwave",
    title: "UI/UX Designer",
    location: "Abuja",
    workType: "Remote",
    salary: "₦200k–300k/mo",
    tags: ["Contract", "Figma", "Research"],
    applicants: 21,
    postedAt: "5h ago",
    status: "applied",
    href: PATHS.Jobs,
  },
  {
    company: "TechPoint Africa",
    title: "Content Writer",
    location: "Remote",
    workType: "Remote",
    salary: "₦80k–120k/mo",
    tags: ["Freelance", "SEO", "Editing"],
    applicants: 58,
    postedAt: "1d ago",
    status: "apply",
    href: PATHS.Jobs,
  },
  {
    company: "TechPoint Africa",
    title: "Content Writer",
    location: "Remote",
    workType: "Remote",
    salary: "₦80k–120k/mo",
    tags: ["Freelance", "SEO", "Editing"],
    applicants: 58,
    postedAt: "1d ago",
    status: "apply",
    href: PATHS.Jobs,
  },
  {
    company: "Flutterwave",
    title: "UI/UX Designer",
    location: "Abuja",
    workType: "Remote",
    salary: "₦200k–300k/mo",
    tags: ["Contract", "Figma", "Research"],
    applicants: 21,
    postedAt: "5h ago",
    status: "applied",
    href: PATHS.Jobs,
  },
  {
    company: "Flutterwave",
    title: "UI/UX Designer",
    location: "Abuja",
    workType: "Remote",
    salary: "₦200k–300k/mo",
    tags: ["Contract", "Figma", "Research"],
    applicants: 21,
    postedAt: "5h ago",
    status: "applied",
    href: PATHS.Jobs,
  },
  {
    company: "TechPoint Africa",
    title: "Content Writer",
    location: "Remote",
    workType: "Remote",
    salary: "₦80k–120k/mo",
    tags: ["Freelance", "SEO", "Editing"],
    applicants: 58,
    postedAt: "1d ago",
    status: "apply",
    href: PATHS.Jobs,
  },
  {
    company: "Konga",
    title: "Digital Marketer",
    location: "Lagos",
    workType: "Hybrid",
    salary: "₦150k–200k/mo",
    tags: ["Part-time", "Meta Ads", "Analytics"],
    applicants: 34,
    postedAt: "3d ago",
    status: "apply",
    href: PATHS.Jobs,
  },
  {
    company: "Afrobeat TV",
    title: "Video Editor",
    location: "Remote",
    workType: "Remote",
    salary: "₦50k–100k/mo",
    tags: ["Freelance", "Premier Pro", "Motion"],
    applicants: 58,
    postedAt: "1d ago",
    status: "apply",
    href: PATHS.Jobs,
  },
  {
    company: "TechPoint Africa",
    title: "Content Writer",
    location: "Remote",
    workType: "Remote",
    salary: "₦80k–120k/mo",
    tags: ["Freelance", "SEO", "Editing"],
    applicants: 58,
    postedAt: "1d ago",
    status: "apply",
    href: PATHS.Jobs,
  },
  {
    company: "TechPoint Africa",
    title: "Content Writer",
    location: "Remote",
    workType: "Remote",
    salary: "₦80k–120k/mo",
    tags: ["Freelance", "SEO", "Editing"],
    applicants: 58,
    postedAt: "1d ago",
    status: "apply",
    href: PATHS.Jobs,
  },
];

export default function FeaturedBrowserJob() {
     const pathname = usePathname();
  return (
    <section className="flex flex-col px-0 sm:px-2 md:px-6 lg:px-0 xl:px-0 mt-10 gap-8 pb-16">

      {/* Section Header */}
      
      <Tabs defaultValue="All" className="w-full shadow-none ">
  <TabsList
    className="mb-9 bg-transparent h-auto shadow-none w-full flex flex-nowrap overflow-x-auto px-1 py-2 sm:py-7 justify-start gap-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    aria-label="Job Type Filter"
  >
    <TabsTrigger value="All" className="py-3 px-4 sm:py-5 sm:px-5 cursor-pointer focus:bg-[#DEE8FC] text-sm sm:text-base shrink-0">All</TabsTrigger>
    <TabsTrigger value="full-time" className="py-3 px-4 sm:py-5 sm:px-5 cursor-pointer focus:bg-[#DEE8FC] text-sm sm:text-base shrink-0">Full-time</TabsTrigger>
    <TabsTrigger value="contract" className="py-3 px-4 sm:py-5 sm:px-5 cursor-pointer focus:bg-[#DEE8FC] text-sm sm:text-base shrink-0">Contract</TabsTrigger>
    <TabsTrigger value="freelance" className="py-3 px-4 sm:py-5 sm:px-5 cursor-pointer focus:bg-[#DEE8FC] text-sm sm:text-base shrink-0">Freelance</TabsTrigger>
    <TabsTrigger value="part-time" className="py-3 px-4 sm:py-5 sm:px-5 cursor-pointer focus:bg-[#DEE8FC] text-sm sm:text-base shrink-0">Part-time</TabsTrigger>
  </TabsList>
  <TabsContent value="All">{/* Job Cards Grid — 1 col mobile, 2 col md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-9 gap-x-14">
        {jobs.map((job, i) => (
          <JobCard key={i} {...job} />
        ))}
      </div></TabsContent>
  <TabsContent value="full-time">Full-time jobs will be displayed here.</TabsContent>
  <TabsContent value="contract">Contract jobs will be displayed here.</TabsContent>
  <TabsContent value="freelance">Freelance jobs will be displayed here.</TabsContent>
  <TabsContent value="part-time">Part-time jobs will be displayed here.</TabsContent>
</Tabs>

      
    </section>
  )
}