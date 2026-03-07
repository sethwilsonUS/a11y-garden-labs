import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Support A11y Garden Labs — free, open-source accessibility tools. Your support helps cover hosting and development.",
  alternates: { canonical: "/support" },
};

export default function SupportPage() {
  return (
    <>
      <h1 className="font-display text-3xl lg:text-4xl font-bold text-theme-primary mb-8">
        Support A11y Garden Labs
      </h1>

      <div className="space-y-8">
        <p className="text-theme-primary leading-relaxed">
          A11y Garden Labs builds free, open-source tools for accessibility.
          Every project — from A11y Garden to Curio Garden — is available at no
          cost. Your support helps cover hosting, API costs, and development
          time so we can keep building and keep these tools free.
        </p>

        <div>
          <Link
            href="https://ko-fi.com/a11ygardenlabs"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex no-underline"
          >
            Support me on Ko-fi
            <span className="sr-only"> (opens in new tab)</span>
          </Link>
        </div>

        <p className="text-theme-primary leading-relaxed">
          Questions or ideas? Drop us a line at{" "}
          <a
            href="mailto:seth@a11ygardenlabs.dev"
            className="text-accent font-medium hover:underline"
          >
            seth@a11ygardenlabs.dev
          </a>.
        </p>
      </div>
    </>
  );
}
