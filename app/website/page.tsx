import FeaturedJob from "@/components/FeaturedJobs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PATHS from "@/route";
import { Plus, SearchIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart2,
  CircleArrowRight,
  Cloud,
  Megaphone,
  Music2,
  Palette,
  Shield,
  Smartphone,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

/* ─── Types ─────────────────────────────────────── */
interface Category {
  label: string;
  total: string;
  icon: ReactNode;
}

interface Step {
  step: string;
  title: string;
  desc: string;
  icon: ReactNode;
  color: string;
}

/* ─── Data ───────────────────────────────────────── */
const JobList: Category[] = [
  {
    label: "Development & IT",
    total: "4,200+ jobs",
    icon: <Cloud size={28} />,
  },
  {
    label: "Design & Creative",
    total: "2,100+ jobs",
    icon: <Palette size={28} />,
  },
  {
    label: "Engineering & Architecture",
    total: "1,200+ jobs",
    icon: <Megaphone size={28} />,
  },
  {
    label: "Sales & Marketing",
    total: "4,200+ jobs",
    icon: <BarChart2 size={28} />,
  },
  {
    label: "Data & Analytics",
    total: "2,100+ jobs",
    icon: <Shield size={28} />,
  },
  { label: "HR & Training", total: "1,200+ jobs", icon: <Music2 size={28} /> },
  {
    label: "Writing & Translation",
    total: "1,200+ jobs",
    icon: <Smartphone size={28} />,
  },
  { label: "Mobile Dev.", total: "900+ jobs", icon: <TrendingUp size={28} /> },
];

const HowItWorksSteps: Step[] = [
  {
    step: "01",
    title: "Create Your Profile",
    color: "#2563EB",
    desc: "Build a professional profile with your skills, experience, and portfolio in minutes.",
    icon: (
      /* simple person + star icon built from SVG */

      <svg
        className="bg-primary/8 w-22 h-22 rounded-xl flex items-center justify-center text-primary shrink-0 p-6"
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M51.2725 53.7167C48.9712 50.6698 45.9939 48.1989 42.575 46.4986C39.1562 44.7983 35.3892 43.9151 31.5709 43.9186C27.7526 43.9151 23.9857 44.7983 20.5668 46.4986C17.148 48.1989 14.1706 50.6698 11.8693 53.7167M51.2725 53.7167C55.7631 49.7223 58.9302 44.4572 60.3598 38.6197C61.7894 32.7821 61.4107 26.6479 59.2739 21.0305C57.1371 15.4131 53.3432 10.578 48.3953 7.16634C43.4474 3.7547 37.5793 1.92773 31.5693 1.92773C25.5592 1.92773 19.6911 3.7547 14.7432 7.16634C9.79536 10.578 6.00145 15.4131 3.86466 21.0305C1.72787 26.6479 1.34916 32.7821 2.77875 38.6197C4.20834 44.4572 7.37869 49.7223 11.8693 53.7167M51.2725 53.7167C45.8515 58.5521 38.8351 61.2197 31.5709 61.2093C24.3056 61.2205 17.2912 58.5528 11.8693 53.7167M41.4513 24.1577C41.4513 26.7782 40.4104 29.2913 38.5574 31.1442C36.7045 32.9972 34.1914 34.0382 31.5709 34.0382C28.9505 34.0382 26.4373 32.9972 24.5844 31.1442C22.7315 29.2913 21.6905 26.7782 21.6905 24.1577C21.6905 21.5373 22.7315 19.0241 24.5844 17.1712C26.4373 15.3183 28.9505 14.2773 31.5709 14.2773C34.1914 14.2773 36.7045 15.3183 38.5574 17.1712C40.4104 19.0241 41.4513 21.5373 41.4513 24.1577Z"
          stroke="#2563EB"
          stroke-width="3.85578"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Browse Opportunities",
    color: "#7C3AED",
    desc: "Explore thousands of verified jobs, gigs and internships across Africa and beyond.",
    icon: (
      <svg
        className="bg-secondary/8 w-22 h-22 rounded-xl flex items-center justify-center text-primary shrink-0 p-6"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M61.2125 61.2123L44.0971 44.0968M44.0971 44.0968C48.7294 39.4645 51.3318 33.1817 51.3318 26.6306C51.3318 20.0795 48.7294 13.7967 44.0971 9.16442C39.4647 4.5321 33.182 1.92969 26.6309 1.92969C20.0798 1.92969 13.797 4.5321 9.16467 9.16442C4.53234 13.7967 1.92993 20.0795 1.92993 26.6306C1.92993 33.1817 4.53234 39.4645 9.16467 44.0968C13.797 48.7291 20.0798 51.3315 26.6309 51.3315C33.182 51.3315 39.4647 48.7291 44.0971 44.0968Z"
          stroke="#7C3AED"
          stroke-width="3.86"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Apply & Get Hired",
    color: "#06B6D4",
    desc: "Apply with one click, chat with employers, and land your dream opportunity.",
    icon: (
      <svg
        className="bg-[#B2E8F2] w-22 h-22 rounded-xl flex items-center justify-center text-primary shrink-0 p-6"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M58.7401 38.6504V52.647C58.7401 56.2499 56.1483 59.3522 52.575 59.8265C45.7018 60.7387 38.6903 61.2097 31.5701 61.2097C24.4499 61.2097 17.4384 60.7387 10.5652 59.8265C6.99197 59.3522 4.40011 56.2499 4.40011 52.647V38.6504M58.7401 38.6504C59.5221 37.9708 60.1478 37.13 60.5742 36.1857C61.0005 35.2415 61.2175 34.2161 61.2101 33.1801V20.7214C61.2101 17.1614 58.6808 14.0854 55.1603 13.5584C51.4299 13 47.6808 12.5749 43.9201 12.2839M58.7401 38.6504C58.1012 39.1938 57.3569 39.6219 56.5237 39.9018C48.4755 42.5722 40.0497 43.9289 31.5701 43.9197C22.8494 43.9197 14.4612 42.5068 6.61653 39.9018C5.80393 39.6315 5.05129 39.2065 4.40011 38.6504M4.40011 38.6504C3.61809 37.9708 2.99241 37.13 2.56605 36.1857C2.13969 35.2415 1.92275 34.2161 1.93011 33.1801V20.7214C1.93011 17.1614 4.45939 14.0854 7.97997 13.5584C11.7103 13 15.4594 12.5748 19.2201 12.2839M43.9201 12.2839V9.33969C43.9201 7.37443 43.1394 5.48967 41.7498 4.10003C40.3601 2.71038 38.4754 1.92969 36.5101 1.92969H26.6301C24.6649 1.92969 22.7801 2.71038 21.3905 4.10003C20.0008 5.48967 19.2201 7.37443 19.2201 9.33969V12.2839M43.9201 12.2839C35.699 11.6486 27.4412 11.6486 19.2201 12.2839M31.5701 34.0397H31.5965V34.066H31.5701V34.0397Z"
          stroke="#06B6D4"
          stroke-width="3.86"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
];
const EmployerSteps: Step[] = [
  {
    step: "01",
    title: "Create Employer Profile",
    color: "#2563EB",
    desc: "Sign up and set up your company profile to attract the right talent.",
    icon: HowItWorksSteps[0].icon,
  },
  {
    step: "02",
    title: "Post a Job",
    color: "#7C3AED",
    desc: "Create a job listing with requirements, budget, and project details.",
    icon: <Plus className="bg-secondary/8 w-22 h-22 text-[#7C3AED] rounded-xl flex items-center justify-center shrink-0 p-6" />,
  },
  {
    step: "03",
    title: "Hire top talent",
    color: "#06B6D4",
    desc: "Review applications, connect with skilled professionals, and hire confidently.",
    icon: HowItWorksSteps[2].icon,
  },
];

/* ─── Page ───────────────────────────────────────── */
export default function Website() {
  return (
    <div className="overflow-x-hidden">
      {/* ── Hero ── */}
      <div
        style={{
          background: "url('/HeroImage.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderBottomRightRadius: "40px",
          borderBottomLeftRadius: "40px",
        }}
        className="relative w-full min-h-screen flex flex-col"
      >
        <Header />
        <Hero />
      </div>

      {/* ── Explore by Category ── */}
      <section className="hidden md:flex items-center justify-center flex-col py-10 sm:py-16 px-5 sm:px-8 md:px-16">
        <div className="flex flex-col items-center mb-8 sm:mb-10 text-center">
          <p className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2">
            Explore by Category
          </p>
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl">
            Find work in your field
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-5xl mt-12">
          {JobList.map((item) => (
            <div
              key={item.label}
              style={{ boxShadow: "0px 12px 17px #E5EBFC" }}
              className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-primary/20 hover:border-primary py-7 sm:py-13 px-3 sm:px-6 cursor-pointer hover:shadow-lg transition-all duration-200 group"
            >
              <h3 className="font-semibold text-xs sm:text-sm md:text-[22px] text-center leading-snug">
                {item.label}
              </h3>
              <p className="text-muted text-[11px] sm:text-sm">{item.total}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured Jobs ── */}
      <FeaturedJob />

      {/* ── How It Works ── */}
      <section className="py-14 sm:py-20 px-5 sm:px-8 md:px-16 text-center">
        <h2 className="font-semibold text-2xl sm:text-3xl md:text-[43px] mb-3">
          How It Works
        </h2>
        <p className="text-muted text-sm sm:text-[18px] max-w-md mx-auto mb-12 sm:mb-16">
          Three steps to your next opportunity
        </p>
        {/* Division */}
        <div className="flex justify-center">
          <Tabs defaultValue="account" className="w-full ">
            <TabsList className="bg-[#DEE8FC] w-max mx-auto rounded-lg border border-[#f3f3fe] mb-18 px-14 py-8">
              <TabsTrigger value="account" className="py-5 px-5 cursor-pointer">Talent</TabsTrigger>
              <TabsTrigger value="password" className="py-5 px-5 cursor-pointer">Employer</TabsTrigger>
            </TabsList>

            <TabsContent value="account">
               <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 max-w-4xl mx-auto">
                {HowItWorksSteps.map((s, i) => (
                  <div key={s.step} className="flex flex-col items-center gap-4 relative">
                    {/* Connector line between steps (desktop only) */}
                    {i < HowItWorksSteps.length - 1 && (
                      <span className="hidden" />
                    )}

                    {/* Icon circle */}
                    <div>
                      {s.icon}
                    </div>

                    {/* Step number */}
                    <span style={{color:s.color}} className="text-xs font-bold tracking-widest uppercase">
                      {s.step}
                    </span>

                    <h3 className="font-bold  text-base sm:text-lg md:text-[24.13px]" 
                    style={{color:s.color}}>{s.title}</h3>
                    <p className="text-muted text-sm leading-relaxed max-w-[220px] mx-auto">
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>

            </TabsContent>

            <TabsContent value="password">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 max-w-4xl mx-auto">
                {EmployerSteps.map((s, i) => (
                <div key={s.step} className="flex flex-col items-center gap-4 relative">
                  {/* Connector line between steps (desktop only) */}
                  {i < EmployerSteps.length - 1 && (
                    <span className="hidden" />
                  )}

                  {/* Icon circle */}
                  <div>
                    {s.icon}
                  </div>

                  {/* Step number */}
                  <span style={{color:s.color}} className="text-xs font-bold tracking-widest uppercase">
                    {s.step}
                  </span>

                  <h3 className="font-bold  text-base sm:text-lg md:text-[23.13px]" 
                  style={{color:s.color}}>{s.title}</h3>
                  <p className="text-muted text-sm leading-relaxed max-w-[220px] mx-auto">
                    {s.desc}
                  </p>
                </div>
              ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* ── The Future Network ── */}
{/* ── Future Network Hero ── */}
<section className="mt-16 mx-4 sm:mx-8 md:mx-16 rounded-3xl overflow-hidden  relative flex flex-col items-center pt-10 pb-0 text-center">
  <h2 className="text-[#4B8EF5] font-bold text-2xl sm:text-3xl md:text-4xl leading-tight mb-6 relative z-10 px-6">
    The Future Network For
    <br className="hidden sm:block" /> Skilled Talent
  </h2>

  <div className="relative w-full max-w-full flex justify-center overflow-visible">
  {/* Purple Frame */}
  <img
    src="/purpleFrame.png"
    alt="Job Status"
    className="
      absolute
      right-[3%]
      top-[15%]
      w-[120px]
      md:w-[295px]
      z-20
      object-contain
    "
  />

  {/* Blue Frame */}
  <img
    src="/blueFrame.png"
    alt="Application Status"
    className="
      absolute
      left-[3%]
      top-[50%]
      w-[120px]
      md:w-[295px]
      z-20
      object-contain
    "
  />

  {/* Globe */}
  <img
    src="/Global.svg"
    className="w-full max-w-full h-auto object-contain"
    alt="Global talent network"
  />
</div> 
  
</section>

{/* ── Ready to Get Started? ── */}
<div
  style={{ background: "url('/Mask-group.png'), linear-gradient(135deg, #38BDF8 0%, #818CF8 40%, #A855F7 75%, #9333EA 100%)" }}
  className="text-white w-full min-h-[260px] flex flex-col justify-center gap-9 items-center py-14 px-6 text-center"
>
  <h2 className="font-bold text-3xl md:text-4xl">Ready to get Started?</h2>
  <p className="hidden md:block text-lg opacity-90 max-w-md">
    Join 89,000+ talents and 1,800+ companies already on the platform.
  </p>
  <p className="text-sm opacity-90 md:hidden">
    Join 89,000+ talents already on the platform
  </p>
  <div className="hidden md:flex gap-4 items-center">
    <Link
      className="bg-white px-6 py-3 text-primary font-semibold rounded-xl hover:bg-white/90 transition"
      href={PATHS.GetStarted}
    >
      Sign up as a Talent
    </Link>
    <Link
      className="px-6 py-3 font-semibold rounded-xl border border-white/30 bg-white/15 backdrop-blur-md hover:bg-white/20 transition"
      href={PATHS.GetStarted}
    >
      Post a Job
    </Link>
  </div>
  <Link
    className="bg-white px-6 py-3 text-primary font-semibold rounded-xl md:hidden"
    href={PATHS.GetStarted}
  >
    Sign up Free
  </Link>
</div>
      <Footer />
    </div>
  );
}
