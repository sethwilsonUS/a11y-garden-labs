import Link from "next/link";
import Image from "next/image";

interface PostCardProps {
  title: string;
  date: string;
  description?: string;
  slug: string;
  tags?: string[];
  image?: string;
  imageAlt?: string;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function PostCard({
  title,
  date,
  description,
  slug,
  tags,
  image,
  imageAlt,
}: PostCardProps) {
  return (
    <article className="garden-bed p-6 overflow-hidden">
      {image && (
        <Link href={`/blog/${slug}`} className="block mb-4 -mx-6 -mt-6">
          <Image
            src={image}
            alt={imageAlt || title}
            width={800}
            height={400}
            className="w-full h-48 object-cover"
          />
        </Link>
      )}
      <h2 className="font-display font-semibold text-xl text-theme-primary m-0 mb-2">
        <Link
          href={`/blog/${slug}`}
          className="text-theme-primary hover:text-accent transition-colors no-underline"
        >
          {title}
        </Link>
      </h2>
      <time
        dateTime={date}
        className="text-theme-muted text-sm block mb-2"
      >
        {formatDate(date)}
      </time>
      {description && (
        <p className="text-theme-secondary text-base leading-relaxed mb-3">
          {description}
        </p>
      )}
      {tags && tags.length > 0 && (
        <ul className="flex flex-wrap gap-2 list-none m-0 p-0">
          {tags.map((tag) => (
            <li key={tag}>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-accent">
                {tag}
              </span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
