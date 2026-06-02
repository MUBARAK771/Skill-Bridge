import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-6 py-16 text-center">
      <div className="w-full max-w-xl rounded-[32px] border border-primary/15 bg-white/90 p-10 shadow-xl">
        <p className="text-sm uppercase tracking-[0.35em] text-primary mb-4">Page not found</p>
        <h1 className="font-bold text-5xl sm:text-6xl mb-6">404</h1>
        <p className="text-muted text-base sm:text-lg leading-8 mb-10">
          Sorry, we couldn’t find the page you were looking for. Please check the URL or go back home.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
