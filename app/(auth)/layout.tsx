export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      {/* ── Left Panel ── */}
      <div
        className="hidden lg:flex flex-col justify-between w-[42%] min-h-screen "
        style={{ background: "#FFFF" }}
      >
        {/* Arch / Pill Shape */}
        <div className="flex-1 flex items-start justify-center">
          <div className="hidden lg:flex flex-col justify-between w-[90%]  bg-white">
            <div className="flex-1 flex items-start justify-center relative">
              <div className="relative w-[620px] h-[520px] rounded-b-[360px] overflow-hidden border-6 border-primary border-t-0 shadow-lg">
                <img
                  src="/sign.jpg"
                  alt="Authentication illustration"
                  className="object-cover w-full h-full"
                />

                <div className="absolute top-2 right-0 w-50 ">
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
                </div>

                <div className="absolute bottom-12 left-10 w-50 ">
                  <img
                    src="/blueFrame.png"
                    alt="Application Status"
                    
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Card */}
        <div
          className="rounded-2xl h-30 shadow-lg flex gap-2 flex-col items-center justify-center p-9"
          style={{ background: "#DEE8FC33", margin: "0 6px 29px 89px" }}
        >
          <h1 className="font-semibold text-primary text-lg">
            Connecting Talent With Opportunity
          </h1>
          <p className="text-center text-base w-115">
            Discover jobs, hire professionals, and grow your network in one
            platform.
          </p>
        </div>
      </div>

      {/* ── Right Panel ── */}
      <div className="flex-1 flex items-center justify-center bg-white min-h-screen px-6 py-12">
        <div className="w-full max-w-[420px]">{children}</div>
      </div>
    </div>
  );
}
