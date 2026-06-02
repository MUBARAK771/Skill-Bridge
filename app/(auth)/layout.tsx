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
          <div
            className="w-[590px] h-[480px]"
            style={{
              borderRadius: "0px 0px 360px 360px",
              border: "2px solid #2563EB",
              borderTop: "none",
              marginLeft: "50px",
              backgroundSize:"cover",
              // backgroundPosition:"center",
              background: "url('/sign.jpg')",
            }}
          />
        </div>

        {/* Bottom Card */}
        <div
          className="rounded-2xl h-30 shadow-lg flex gap-2 flex-col items-center justify-center p-9"
          style={{ background: "#DEE8FC33", margin: "0 6px 29px 89px" }}
        >
        <h1 className="font-semibold text-primary text-lg">Connecting Talent With Opportunity</h1>
        <p className="text-center text-base w-115">Discover jobs, hire professionals, and grow your network in one platform.</p>
      </div>
      </div>

      {/* ── Right Panel ── */}
      <div className="flex-1 flex items-center justify-center bg-white min-h-screen px-6 py-12">
        <div className="w-full max-w-[420px]">{children}</div>
      </div>
    </div>
  );
}
