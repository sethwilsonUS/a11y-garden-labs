import Link from "next/link";

function LeafIcon({ className }: { className?: string }) {
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
      <path d="M12 22V12" />
      <path d="M12 12C12 8 8 6 4 6c0 4 2 8 8 6" />
      <path d="M12 12c0-4 4-6 8-6-0 4-2 8-8 6" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-theme mt-auto">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <div className="flex items-center gap-2 text-theme-secondary">
            <LeafIcon className="w-4 h-4 text-accent shrink-0" />
            <span className="font-display font-medium text-sm">
              A11y Garden Labs
            </span>
          </div>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-theme-muted list-none m-0 p-0">
              <li>
                <Link
                  href="/support"
                  className="hover:text-accent transition-colors"
                >
                  Support our work
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-accent transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-accent transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <hr className="garden-divider" />

        <div className="pt-6 text-center">
          <p className="text-xs text-theme-muted leading-relaxed">
            © 2026 A11y Garden Labs. Cultivating accessible tools for digital
            and spiritual life.
          </p>
        </div>
      </div>
    </footer>
  );
}
