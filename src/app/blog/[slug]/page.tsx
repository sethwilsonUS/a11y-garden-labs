import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { allPosts } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function generateStaticParams() {
  return allPosts
    .filter((p) => p.published)
    .map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description || "",
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <article>
      <Link
        href="/blog"
        className="text-theme-muted text-sm hover:text-accent mb-6 inline-block"
      >
        ← Back to blog
      </Link>
      <h1 className="font-display text-3xl lg:text-4xl font-bold text-theme-primary mb-2">
        {post.title}
      </h1>
      <time
        dateTime={post.date}
        className="text-theme-muted text-sm block mb-4"
      >
        {formatDate(post.date)}
      </time>
      {post.tags && post.tags.length > 0 && (
        <ul className="flex flex-wrap gap-2 list-none m-0 p-0 mb-8">
          {post.tags.map((tag) => (
            <li key={tag}>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-accent">
                {tag}
              </span>
            </li>
          ))}
        </ul>
      )}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <MDXContent code={post.mdx} />
      </div>
    </article>
  );
}
