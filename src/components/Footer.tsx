import Link from "next/link";
import { Moon, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const complianceLinks = [
    { href: "/support", label: "Contact & Support" },
    { href: "/privacy", label: "Privacy Policy (COPPA Compliant)" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/delete-account", label: "Manage / Delete Account" },
  ];

  return (
    <footer className="relative border-t border-glass-border bg-background-dark/80">
      {/* Subtle top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Left — Branding */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Moon className="w-5 h-5 text-primary-gold" fill="currentColor" />
              <span className="text-lg font-bold text-text-main">
                Pillow <span className="gradient-text">Tales</span>
              </span>
            </div>
            <p className="text-sm text-text-muted max-w-xs">
              Premium, calming bedtime stories that turn screen time into sleepy
              time. Made with{" "}
              <Heart className="inline w-3.5 h-3.5 text-primary-gold" fill="currentColor" />{" "}
              for little dreamers.
            </p>
          </div>

          {/* Right — Compliance Links */}
          <div className="flex flex-col gap-2.5">
            <span className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">
              Legal
            </span>
            {complianceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-muted hover:text-primary-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-glass-border flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-text-muted">
            © {currentYear} Pillow Tales. All rights reserved.
          </p>
          <p className="text-xs text-text-muted">
            Designed for dreamers everywhere ✨
          </p>
        </div>
      </div>
    </footer>
  );
}
