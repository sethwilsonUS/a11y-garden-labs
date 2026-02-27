import Link from "next/link";
import { allPosts } from "content-collections";
import { PostCard } from "@/components/PostCard";

const publishedPosts = allPosts
  .filter((p) => p.published)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const latestPosts = publishedPosts.slice(0, 3);

export default function HomePage() {
  return (
    <>
      <section className="mb-16 pattern-leaves rounded-2xl p-8 sm:p-10">
        <h1 className="font-display text-4xl lg:text-5xl font-bold text-theme-primary mb-4">
          A11y Garden Labs
        </h1>
        <p className="text-xl text-theme-secondary font-medium mb-4">
          Cultivating accessible tools for digital and spiritual life.
        </p>
        <p className="text-theme-primary leading-relaxed">
          A11y Garden Labs is a small, experiment-friendly studio building open,
          human-centered tools that make the web — and the world — more
          accessible for blind and visually impaired people, and for anyone who
          benefits from inclusive design.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl font-bold text-theme-primary mb-6">
          Our Gardens
        </h2>
        <div className="grid gap-6 md:grid-cols-2 mb-6">
          <article className="garden-bed p-6">
            <h3 className="font-display font-semibold text-lg text-theme-primary mb-2">
              A11y Garden
            </h3>
            <p className="text-theme-secondary text-sm mb-4">
              A friendly accessibility audit tool for everyday developers.
            </p>
            <Link
              href="https://a11ygarden.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent font-medium hover:underline"
            >
              Visit site
              <span className="sr-only"> (opens in new tab)</span>
            </Link>
          </article>
          <article className="garden-bed p-6">
            <h3 className="font-display font-semibold text-lg text-theme-primary mb-2">
              Curio Garden
            </h3>
            <p className="text-theme-secondary text-sm mb-4">
              A listening-first way to wander through knowledge.
            </p>
            <Link
              href="https://curiogarden.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent font-medium hover:underline"
            >
              Visit site
              <span className="sr-only"> (opens in new tab)</span>
            </Link>
          </article>
        </div>
        <Link
          href="/projects"
          className="text-accent font-medium hover:underline"
        >
          See all projects →
        </Link>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl font-bold text-theme-primary mb-6">
          Latest
        </h2>
        <div className="space-y-6 mb-6">
          {latestPosts.map((post) => (
            <PostCard
              key={post.slug}
              title={post.title}
              date={post.date}
              description={post.description}
              slug={post.slug}
              tags={post.tags}
              image={post.image}
              imageAlt={post.imageAlt}
            />
          ))}
        </div>
        <Link href="/blog" className="text-accent font-medium hover:underline">
          Read all posts →
        </Link>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold text-theme-primary mb-4">
          Support Our Work
        </h2>
        <p className="text-theme-primary leading-relaxed mb-4">
          These are free, open tools. Any support helps cover hosting and API
          costs so we can keep building.
        </p>
        <Link
          href="/support"
          className="btn-primary inline-block no-underline"
        >
          Support us
        </Link>
      </section>
    </>
  );
}
