import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  company: ["About Us", "Services", "Case Study", "Blogs", "Team"],
  services: [
    "Risk Mitigation",
    "Tax Planning",
    "Financial Forecasting",
    "Acquisitions Advisory",
    "Cash Flow Management",
    "Investment Strategies",
  ],
  support: [
    "FAQ",
    "Reviews",
    "Privacy Policy",
    "Terms & Conditions",
    "License",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-black text-muted">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Left Big Links */}
          <div className="space-y-4">
            {footerLinks.company.map((item) => (
              <Link
                key={item}
                href="#"
                className="block text-3xl md:text-2xl font-semibold tracking-tight hover:text-muted transition"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div className="space-y-5">
            {footerLinks.services.map((item) => (
              <Link
                key={item}
                href="#"
                className="block text-sm text-muted hover:text-white transition"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Support */}
          <div className="space-y-5">
            {footerLinks.support.map((item) => (
              <Link
                key={item}
                href="#"
                className="block text-sm text-muted hover:text-white transition"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col justify-between">
            <div className="space-y-4 text-sm text-muted">
              <p>
                3517 W. Gray St. Utica,
                <br />
                Pennsylvania 57867
              </p>

              <p>hello@example.com</p>

              <p>(225) 555-0118</p>
            </div>

            <Link
              href="#"
              className="inline-flex text-background items-center gap-1 border-b border-background w-25 text-sm mt-10 hover:text-neutral-400 transition"
            >
              Contact Us
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Socials */}
          <div className="flex items-center gap-4">
            {[
              {
                href: "#",
                svg: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-current">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12 7v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5A4.5 4.5 0 0 0 23 3z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                href: "#",
                svg: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-current">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                href: "#",
                svg: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-current">
                    <rect x="2" y="5" width="20" height="14" rx="4" stroke="currentColor" strokeWidth="1.2" />
                    <polygon points="10,8 16,12 10,16" fill="currentColor" />
                  </svg>
                ),
              },
              {
                href: "#",
                svg: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-current">
                    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.2" />
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.2" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                  </svg>
                ),
              },
            ].map((social, index) => {
              return (
                <Link
                  key={index}
                  href={social.href}
                  className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-white hover:text-black transition"
                >
                  {social.svg}
                </Link>
              );
            })}
          </div>

          {/* Bottom Text */}
          <div className="flex items-center gap-2 text-sm text-neutral-400">
            <p>© {new Date().getFullYear()}</p>
            <span>•</span>
            <p>Designed by xxzlt.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}