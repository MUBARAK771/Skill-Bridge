"use client"
import PATHS from "@/route";
import { CircleArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import JobCard, { BrowseJobCardProps } from "./BrowserProps";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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


export default function FeaturedBrowserJob() {
     const pathname = usePathname();
  return (
    <section className="flex flex-col px-5 sm:px-8 md:px-6 lg:px-4 xl:px-2 mt-10 gap-8 pb-16">

      {/* Section Header */}
      
      <Tabs defaultValue="All" className="w-full shadow-none ">
  <TabsList className="mb-9 bg-transparent h-30 shadow-none w-[50%] px-7  py-7 justify-start" aria-label="Job Type Filter">
    <TabsTrigger value="All" className="py-5 px-5 cursor-pointer focus:bg-[#DEE8FC]">All</TabsTrigger>
    <TabsTrigger value="full-time" className="py-5 px-5 cursor-pointer focus:bg-[#DEE8FC]">Full-time</TabsTrigger>
    <TabsTrigger value="contract" className="py-5 px-5 cursor-pointer focus:bg-[#DEE8FC]">Contract</TabsTrigger>
    <TabsTrigger value="freelance" className="py-5 px-5 cursor-pointer focus:bg-[#DEE8FC]">Freelance</TabsTrigger>
    <TabsTrigger value="part-time" className="py-5 px-5 cursor-pointer focus:bg-[#DEE8FC]">Part-time</TabsTrigger>
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