"use client";

import { useState } from "react";
import EmployerHeader from "@/components/EmployerHeader";
import Footer from "@/components/Footer";

const JOB_TYPES = ["Remote", "Full-time", "Contract", "Freelance", "Part-time"];
const TOTAL_STEPS = 3;

export default function PostJob() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    jobTitle: "",
    location: "",
    salaryRange: "",
    skills: "",
    jobType: "Remote",
    description: "",
    requirements: "",
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const goNext = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  const goBack = () => setStep((s) => Math.max(s - 1, 1));

  const handlePublish = () => {
    // hook this up to your actual submit logic
    console.log("Publishing job:", formData);
  };

  const skillsList = formData.skills
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  return (
    <div>
      <EmployerHeader />
      <div className="mt-27 mb-12 ml-17 mr-17">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-[24px] font-semibold">Post a New Job</h1>
            <p className="text-muted font-medium text-sm">
              Step {step} of {TOTAL_STEPS}
            </p>
          </div>

          {/* Circular step progress */}
          <div className="relative w-[88px] h-[88px]">
            <svg viewBox="0 0 88 88" className="w-full h-full -rotate-90">
              <circle
                cx="44"
                cy="44"
                r="38"
                fill="none"
                stroke="#DBEAFE"
                strokeWidth="8"
              />
              <circle
                cx="44"
                cy="44"
                r="38"
                fill="none"
                stroke="#2563EB"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 38}`}
                strokeDashoffset={`${2 * Math.PI * 38 * (1 - step / TOTAL_STEPS)}`}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-[10px] text-muted">Status</span>
              <span className="text-xs font-semibold">
                {step} of {TOTAL_STEPS}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-2xl border border-[#E2E8F0] p-10">
          {/* STEP 1 — Job Details */}
          {step === 1 && (
            <>
              <h2 className="text-[24px] font-semibold mb-6">Job Details</h2>

              <div className="mb-5">
                <label
                  htmlFor="jobTitle"
                  className="block text-sm font-semibold mb-2"
                >
                  Job Title
                </label>
                <input
                  id="jobTitle"
                  type="text"
                  value={formData.jobTitle}
                  onChange={(e) => updateField("jobTitle", e.target.value)}
                  placeholder="e.g Frontend Developer"
                  className="w-full px-4 py-3 text-sm rounded-lg border border-[#CBD5E1] bg-white text-[#334155] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="location"
                  className="block text-sm font-semibold mb-2"
                >
                  Location
                </label>
                <input
                  id="location"
                  type="text"
                  value={formData.location}
                  onChange={(e) => updateField("location", e.target.value)}
                  placeholder="e.g Lagos/Remote"
                  className="w-full px-4 py-3 text-sm rounded-lg border border-[#CBD5E1] bg-white text-[#334155] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="salaryRange"
                  className="block text-sm font-semibold mb-2"
                >
                  Salary Range
                </label>
                <input
                  id="salaryRange"
                  type="text"
                  value={formData.salaryRange}
                  onChange={(e) => updateField("salaryRange", e.target.value)}
                  placeholder="e.g 300k - 500k"
                  className="w-full px-4 py-3 text-sm rounded-lg border border-[#CBD5E1] bg-white text-[#334155] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="skillsTags"
                  className="block text-sm font-semibold mb-2"
                >
                  Skills/Tags
                </label>
                <input
                  id="skillsTags"
                  type="text"
                  value={formData.skills}
                  onChange={(e) => updateField("skills", e.target.value)}
                  placeholder="e.g React, Typescript"
                  className="w-full px-4 py-3 text-sm rounded-lg border border-[#CBD5E1] bg-white text-[#334155] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30"
                />
              </div>

              <div className="mb-8">
                <p className="text-sm font-semibold mb-3">Job Type</p>
                <div className="flex flex-wrap gap-3">
                  {JOB_TYPES.map((type) => {
                    const isActive = formData.jobType === type;
                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() => updateField("jobType", type)}
                        className={`px-6 py-2.5 rounded-lg text-sm font-medium border transition-colors ${
                          isActive
                            ? "border-[#2563EB] bg-[#EFF6FF] text-[#2563EB]"
                            : "border-[#CBD5E1] bg-white text-[#334155] hover:bg-[#F8FAFC]"
                        }`}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
              </div>

              <button
                type="button"
                onClick={goNext}
                className="inline-flex items-center gap-2 bg-[#2563EB] text-white font-semibold text-sm px-6 py-3 rounded-lg hover:bg-[#1D4ED8] transition-colors"
              >
                Next
                <span aria-hidden="true">→</span>
              </button>
            </>
          )}

          {/* STEP 2 — Job Description */}
          {step === 2 && (
            <>
              <h2 className="text-[24px] font-semibold mb-6">
                Job Description
              </h2>

              <div className="mb-6">
                <label
                  htmlFor="description"
                  className="block text-sm font-semibold mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => updateField("description", e.target.value)}
                  placeholder="Describe the role, responsibility and what you're looking for..."
                  rows={8}
                  className="w-full px-4 py-3 text-sm rounded-lg border border-[#CBD5E1] bg-white text-[#334155] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 resize-none"
                />
              </div>

              <div className="mb-8">
                <label
                  htmlFor="requirements"
                  className="block text-sm font-semibold mb-2"
                >
                  Requirements
                </label>
                <textarea
                  id="requirements"
                  value={formData.requirements}
                  onChange={(e) => updateField("requirements", e.target.value)}
                  placeholder="List the key requirements.."
                  rows={8}
                  className="w-full px-4 py-3 text-sm rounded-lg border border-[#CBD5E1] bg-white text-[#334155] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 resize-none"
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={goBack}
                  className="inline-flex items-center gap-2 border border-[#2563EB] text-[#2563EB] font-semibold text-sm px-6 py-3 rounded-lg hover:bg-[#EFF6FF] transition-colors"
                >
                  <span aria-hidden="true">←</span>
                  Back
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="inline-flex items-center gap-2 bg-[#2563EB] text-white font-semibold text-sm px-6 py-3 rounded-lg hover:bg-[#1D4ED8] transition-colors"
                >
                  Next
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </>
          )}

          {/* STEP 3 — Review & Publish */}
          {step === 3 && (
            <>
              <h2 className="text-[24px] font-semibold mb-6">
                Review &amp; Publish
              </h2>

              <div className="border border-[#E2E8F0] rounded-xl p-6 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#2563EB] text-white flex items-center justify-center font-bold text-lg">
                    P
                  </div>
                  <div>
                    <p className="font-semibold text-base">
                      {formData.jobTitle || "Untitled Role"}
                    </p>
                    <p className="text-sm text-muted">
                      Paystack · {formData.location || "Location not set"}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#D1FAE5] text-[#047857]">
                    {formData.jobType}
                  </span>
                  {skillsList.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-[#DBEAFE] text-[#1D4ED8]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <p className="text-sm font-semibold">
                  {formData.salaryRange
                    ? `₦${formData.salaryRange}/mo`
                    : "Salary not set"}
                </p>
              </div>

              <div className="flex items-center gap-3 bg-[#EFF6FF] text-sm text-[#1E3A8A] rounded-lg px-4 py-3 mb-8">
                <span aria-hidden="true">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="flex-shrink-0"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 9.75C0 4.365 4.365 0 9.75 0C15.135 0 19.5 4.365 19.5 9.75C19.5 15.135 15.135 19.5 9.75 19.5C4.365 19.5 0 15.135 0 9.75ZM9.75 6a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9.75 6Zm0 6.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z"
                      fill="#2563EB"
                    />
                  </svg>
                </span>
                Your job will be reviewed and published within 24 hours
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={goBack}
                  className="inline-flex items-center gap-2 border border-[#2563EB] text-[#2563EB] font-semibold text-sm px-6 py-3 rounded-lg hover:bg-[#EFF6FF] transition-colors"
                >
                  <span aria-hidden="true">←</span>
                  Back
                </button>
                <button
                  type="button"
                  onClick={handlePublish}
                  className="inline-flex items-center gap-2 bg-[#2563EB] text-white font-semibold text-sm px-6 py-3 rounded-lg hover:bg-[#1D4ED8] transition-colors"
                >
                  Publish Job
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      {/* ── Future Network Globe ── */}
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
      <Footer />
    </div>
  );
}
