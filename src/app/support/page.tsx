import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Support A11y Garden Labs — free, open-source accessibility tools. Your support helps cover hosting and development.",
};

export default function SupportPage() {
  const kofiUsername = process.env.NEXT_PUBLIC_KOFI_USERNAME;

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

        {kofiUsername ? (
          <div>
            <Link
              href={`https://ko-fi.com/${kofiUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex no-underline"
            >
              Support us on Ko-fi
              <span className="sr-only"> (opens in new tab)</span>
            </Link>
          </div>
        ) : (
          <div className="garden-bed p-6">
            <p className="text-theme-primary leading-relaxed mb-4">
              We&apos;re setting up donation options. In the meantime, you can:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-theme-primary">
              <li>Star our repos on GitHub</li>
              <li>Share our projects with someone who might benefit</li>
              <li>Report accessibility issues you find</li>
              <li>Spread the word</li>
            </ul>
            <p className="text-theme-secondary text-sm mt-4">
              We&apos;ll have Ko-fi and other options soon!
            </p>
          </div>
        )}
      </div>
    </>
  );
}
