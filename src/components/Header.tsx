"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/support", label: "Support" },
];

function LeafLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2C6.5 6 4 11 4 15c0 3.5 3.5 6 8 7 4.5-1 8-3.5 8-7 0-4-2.5-9-8-13z" />
      <path d="M12 2v20" />
      <path d="M12 8l-3 3" />
      <path d="M12 8l3 3" />
      <path d="M12 13l-4 3" />
      <path d="M12 13l4 3" />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const navList = (
    <ul className="flex flex-col md:flex-row items-stretch md:items-center gap-0.5 md:gap-1 list-none m-0 p-0">
      {navLinks.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-3 md:px-3 md:py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap min-h-[44px] md:min-h-0 flex items-center ${
              isActive(link.href)
                ? "bg-[var(--accent-bg)] text-accent font-semibold"
                : "text-theme-secondary hover:text-theme-primary hover:bg-theme-tertiary"
            }`}
            aria-current={isActive(link.href) ? "page" : undefined}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-theme bg-theme-nav backdrop-blur-xl transition-colors duration-300">
      <nav
        className="container mx-auto px-4"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2.5 font-display text-xl font-semibold text-theme-primary hover:text-accent transition-colors"
            aria-label="A11y Garden Labs — Home"
          >
            <LeafLogo className="w-7 h-7 text-accent shrink-0" />
            <span className="hidden sm:inline">A11y Garden Labs</span>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {navList}
            <ThemeToggle />
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl min-w-[44px] min-h-[44px] flex items-center justify-center text-theme-primary hover:bg-theme-tertiary transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div
            id="mobile-nav"
            className="md:hidden py-4 border-t border-theme"
          >
            {navList}
          </div>
        )}
      </nav>
    </header>
  );
}
