import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { allPages } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { mdxComponents } from "@/components/mdx-components";

const page = allPages.find((p) => p.slug === "about");

export const metadata: Metadata = {
  title: page?.title,
  description: page?.description,
};

function AboutBanner() {
  return (
    <div
      className="relative mb-12 overflow-hidden rounded-2xl text-center"
      style={{ backgroundColor: "#036b4a" }}
    >
      <div className="flex flex-col items-center px-8 py-12 sm:px-12 sm:py-16">
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="none"
          className="size-16 sm:size-20"
        >
          <g
            stroke="#fff"
            strokeWidth="24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M256 80C172 136 144 196 144 248c0 56 56 96 112 112 56-16 112-56 112-112 0-52-28-112-112-168z" />
            <path d="M256 80v320" />
            <path d="M256 160l-48 48" />
            <path d="M256 160l48 48" />
            <path d="M256 240l-64 48" />
            <path d="M256 240l64 48" />
          </g>
        </svg>

        <h1
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-5"
          style={{ color: "#ffffff", letterSpacing: "-0.03em" }}
        >
          A11y Garden Labs
        </h1>

        <p
          className="mt-3 text-base sm:text-lg"
          style={{ color: "rgba(255, 255, 255, 0.8)" }}
        >
          Cultivating accessible tools for growth and learning
        </p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  if (!page) notFound();

  return (
    <>
      <AboutBanner />
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <MDXContent code={page.mdx} components={mdxComponents} />
      </div>
    </>
  );
}
