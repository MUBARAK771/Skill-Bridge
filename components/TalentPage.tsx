import PATHS from "@/route";
import Link from "next/link";
import { Pencil, Star, Tag } from "lucide-react";
import SearchPage from "./Search";

interface TalentProfile {
  name: string;
  role: string;
  location: string;
  skills: string[];
  rating: number;
  gigs: string;
  availability: "Available Now" | "Busy";
  href: string;
  avatarBg: string;
}

const talentProfiles: TalentProfile[] = [
  {
    name: "David OnyekaChukwu",
    role: "Frontend Developer",
    location: "Enugu",
    skills: ["React", "Vue", "Typescript"],
    rating: 4,
    gigs: "25 gigs",
    availability: "Available Now",
    href: PATHS.Talent,
    avatarBg: "linear-gradient(135deg, #06B6D4, #2563EB)",
  },
  {
    name: "Amara Chisom",
    role: "Product Designer",
    location: "Abuja",
    skills: ["Branding", "Figma", "Illustrator"],
    rating: 3,
    gigs: "10 gigs",
    availability: "Available Now",
    href: PATHS.Talent,
    avatarBg: "linear-gradient(135deg, #A855F7, #7C3AED)",
  },
  {
    name: "Lawal Abdur-Roqeeb",
    role: "Backend Developer",
    location: "Ibadan",
    skills: ["Node.js", "AWS", "Python"],
    rating: 5,
    gigs: "20 gigs",
    availability: "Busy",
    href: PATHS.Talent,
    avatarBg: "linear-gradient(135deg, #2563EB, #1D4ED8)",
  },
  {
    name: "Shina Lawal",
    role: "Graphic Designer",
    location: "Abuja",
    skills: ["Branding", "Figma", "Illustrator"],
    rating: 3,
    gigs: "10 gigs",
    availability: "Available Now",
    href: PATHS.Talent,
    avatarBg: "linear-gradient(135deg, #F87171, #EF4444)",
  },
  {
    name: "David OnyekaChukwu",
    role: "Frontend Developer",
    location: "Enugu",
    skills: ["React", "Vue", "Typescript"],
    rating: 4,
    gigs: "25 gigs",
    availability: "Available Now",
    href: PATHS.Talent,
    avatarBg: "linear-gradient(135deg, #06B6D4, #2563EB)",
  },
  {
    name: "Amara Chisom",
    role: "Product Designer",
    location: "Abuja",
    skills: ["Branding", "Figma", "Illustrator"],
    rating: 3,
    gigs: "10 gigs",
    availability: "Available Now",
    href: PATHS.Talent,
    avatarBg: "linear-gradient(135deg, #A855F7, #7C3AED)",
  },
  {
    name: "Lawal Abdur-Roqeeb",
    role: "Backend Developer",
    location: "Ibadan",
    skills: ["Node.js", "AWS", "Python"],
    rating: 5,
    gigs: "20 gigs",
    availability: "Busy",
    href: PATHS.Talent,
    avatarBg: "linear-gradient(135deg, #2563EB, #1D4ED8)",
  },
  {
    name: "Shina Lawal",
    role: "Graphic Designer",
    location: "Abuja",
    skills: ["Branding", "Figma", "Illustrator"],
    rating: 3,
    gigs: "10 gigs",
    availability: "Available Now",
    href: PATHS.Talent,
    avatarBg: "linear-gradient(135deg, #F87171, #EF4444)",
  },
];

function TalentCard({
  name, role, location, skills, rating, gigs, availability, href, avatarBg,
}: TalentProfile) {
  const initials = name
    .split(" ")
    .map((part) => part.charAt(0).toUpperCase())
    .slice(0, 2)
    .join("");

  return (
    <div className="relative overflow-hidden rounded-[32px] border border-[#E5E7EB] bg-[#F8FAFC] p-6 shadow-sm">
      {/* Edit icon */}
      <button className="absolute right-5 top-5 text-[#06B6D4] hover:text-[#0891B2] transition-colors">
        <Tag size={27}
        style={{
              color: " #2563EB",
              transform: "rotate(280deg)",
            }} />
      </button>

      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div
          className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl text-lg font-bold text-white"
          style={{ background: avatarBg }}
        >
          {initials}
        </div>

        <div className="min-w-0 flex-1 pr-6">
          {/* Name */}
          <h3 className="text-base font-semibold text-[#111827] leading-snug">{name}</h3>
          {/* Role · Location */}
          <p className="mt-1 text-xs text-[#6B7280]">
            {role} · {location}
          </p>
        </div>
      </div>
      <div>
                  {/* Skills */}
          <div className="mt-3 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[#E5E7EB] bg-[#e7edff] px-3 py-1 text-xs font-medium text-[#2563EB]"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Stars + gigs on same row */}
          <div className="mt-4 flex items-start flex-col gap-3">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={15}
                  fill={index < rating ? "#2563EB" : " none "}
                  className={index < rating ? "text-[#2563EB]" : "text-[#2563EB]"}
                />
              ))}
            </div>
          </div>
      </div>

      {/* Footer */}
      <div className="mt-3 flex items-center justify-between">
         <div className="flex-col flex items-start gap-4">
            <span className="text-sm font-medium text-muted">{gigs}</span>
        <span
          className={`rounded-full px-4 py-1.5 text-xs font-semibold ${
            availability === "Busy"
              ? "bg-[#e7edff] text-[#2563EB]"
              : "bg-[#e7edff] text-[#2563EB]"
          }`}
        >
          {availability}
        </span>
         </div>

        <Link
          href={href}
          className="rounded-sm bg-[#2563EB] px-3 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1D4ED8]"
        >
          Explore Talent
        </Link>
      </div>
    </div>
  );
}

export default function TalentPage() {
  return (
    <section className="flex flex-col mt-29 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mt-10 gap-10 pb-0">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-semibold sm:text-5xl text-[#111827]">Our Talents</h1>
        <p className="mt-3 text-base text-[#6B7280]">
          Discover verified professionals across Africa
        </p>
      </div>

      {/* Search */}
      <div className="w-full ">
        <SearchPage />
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:gap-8">
        {talentProfiles.map((talent, index) => (
          <TalentCard key={index} {...talent} />
        ))}
      </div>
    </section>
  );
}