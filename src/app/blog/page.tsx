import type { Metadata } from "next";
import { allPosts } from "content-collections";
import { PostCard } from "@/components/PostCard";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on accessibility, faith, and building in public.",
};

const publishedPosts = allPosts
  .filter((p) => p.published)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export default function BlogPage() {
  return (
    <>
      <h1 className="font-display text-3xl lg:text-4xl font-bold text-theme-primary mb-12">
        Blog
      </h1>

      <ul className="list-none m-0 p-0 space-y-6">
        {publishedPosts.map((post) => (
          <li key={post.slug}>
            <PostCard
              title={post.title}
              date={post.date}
              description={post.description}
              slug={post.slug}
              tags={post.tags}
              image={post.image}
              imageAlt={post.imageAlt}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
