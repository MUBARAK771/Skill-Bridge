"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";

function maskEmail(email: string) {
  const [name, domain] = email.split("@");
  if (!name || !domain) return email;
  return `${name.slice(0, Math.min(3, name.length))}***@${domain}`;
}

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="flex flex-col items-center text-center">
      <Link href="/">
        <img src="/Log-logo.svg" alt="Skillbridge" className="w-36 mb-8" />
      </Link>

      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        Forgot Password?
      </h1>
      <p className="text-sm text-gray-500 mb-8">
        {submitted ? (
          <>
            If an account exists for <strong>{maskEmail(email)}</strong>,
            instructions to reset your password will be sent.
          </>
        ) : (
          "Enter your email address and we’ll send you a link to reset your password."
        )}
      </p>

      {submitted ? (
        <div className="w-full">
          <p className="text-sm font-medium text-gray-700">
            Didn’t receive an email?{" "}
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="font-semibold text-[#2563EB] hover:underline"
            >
              Send again
            </button>
          </p>
          <Link
            href="/login"
            className="mt-8 inline-block text-sm font-semibold text-[#2563EB] hover:underline"
          >
            Remember your password? Sign in
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col gap-2 text-left">
            <label htmlFor="reset-email" className="text-sm font-medium text-gray-700">
              Email Address
            </label>
            <Input
              id="reset-email"
              type="email"
              required
              placeholder="Enter Email Address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="h-11 rounded-md border-gray-400 px-3"
            />
          </div>

          <div className="mt-2 text-right">
            <Link
              href="/login"
              className="text-xs font-medium text-[#2563EB] hover:underline"
            >
              Remember your password? Sign in
            </Link>
          </div>

          <button
            type="submit"
            className="mt-12 w-full rounded-xl bg-[#2563EB] py-4 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Send Reset Link
          </button>

          <p className="mt-5 text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link href="/get-started" className="font-semibold text-[#2563EB] hover:underline">
              Sign up here
            </Link>
          </p>
        </form>
      )}
    </div>
  );
}