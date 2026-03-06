import Link from "next/link";

export function SupportCTA() {
  return (
    <aside
      aria-label="Support A11y Garden Labs"
      className="not-prose my-10 rounded-2xl border border-theme bg-theme-secondary p-6 sm:p-8"
    >
      <p className="text-theme-primary mb-4 text-base leading-relaxed">
        A11y Garden Labs builds free, open-source tools for accessibility. If
        our mission resonates with you, consider supporting the work.
      </p>
      <Link
        href="https://ko-fi.com/a11ygardenlabs"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary inline-flex no-underline"
      >
        Support on Ko-fi
        <span className="sr-only"> (opens in new tab)</span>
      </Link>
    </aside>
  );
}
