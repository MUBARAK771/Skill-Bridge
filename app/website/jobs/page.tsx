import Header from "@/components/Header";
import FeaturedBrowserJob from "@/components/BrowseJob";
import { Search } from "lucide-react";
import Footer from "@/components/Footer";
export default function JobsPage() {
  return (
    <div>
      <Header />
      <div className="flex flex-col mt-29 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mt-10 gap-10 pb-24">
        <div>
          <h1 className="text-3xl font-semibold sm:text-4xl">
            Browse Opportunities
          </h1>
          <p className="mt-3 text-base text-[#6B7280]">
            965 opportunities available right now
          </p>
        </div>

        <div className="text-muted border border-muted w-full p-4 flex gap-2 items-center pl-5 rounded-xl">
          <Search size={24} />
          <input
            type="text"
            id="search"
            placeholder="Search job, companies, skills......"
            className="outline-none w-full"
          />
        </div>

        <FeaturedBrowserJob />
        
      </div>
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
      top-[45%]
      w-[100px]
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
        <Footer />
    </div>
  );
}
