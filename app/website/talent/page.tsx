import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TalentPage from "@/components/TalentPage";

export default function talentPage() {
  return (
    <div>
      <Header />
      <TalentPage />
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
      <Footer/>
    </div>
  );
}
