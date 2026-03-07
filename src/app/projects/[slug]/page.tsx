import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { allProjects } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { mdxComponents } from "@/components/mdx-components";

export function generateStaticParams() {
  return allProjects
    .filter((p) => p.published)
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.tagline,
    alternates: { canonical: `/projects/${slug}` },
  };
}

const statusStyles: Record<string, string> = {
  Live: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
  "In development":
    "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
  "In exploration":
    "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);

  if (!project || !project.published) {
    notFound();
  }

  return (
    <article>
      <Link
        href="/projects"
        className="text-theme-muted text-sm hover:text-accent mb-6 inline-block"
      >
        <span aria-hidden="true">&larr;</span> Back to projects
      </Link>

      {project.ogImage && (
        <div className="mb-8 rounded-lg overflow-hidden">
          <Image
            src={project.ogImage}
            alt={project.ogImageAlt || `${project.name} preview`}
            width={1200}
            height={630}
            className="w-full h-auto"
          />
        </div>
      )}

      <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
        <h1 className="font-display text-3xl lg:text-4xl font-bold text-theme-primary">
          {project.name}
        </h1>
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full mt-2 ${statusStyles[project.status]}`}
        >
          {project.status}
        </span>
      </div>

      <p className="text-theme-secondary text-lg font-medium mb-6">
        {project.tagline}
      </p>

      <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
        <MDXContent code={project.mdx} components={mdxComponents} />
      </div>

      <div className="flex flex-wrap gap-3">
        {project.url && (
          <Link
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm no-underline"
          >
            Visit site
            <span className="sr-only"> (opens in new tab)</span>
          </Link>
        )}
        {project.githubUrl && (
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm no-underline"
          >
            GitHub
            <span className="sr-only"> (opens in new tab)</span>
          </Link>
        )}
      </div>
    </article>
  );
}
