import Link from "next/link";
import Image from "next/image";

type ProjectStatus = "Live" | "In development" | "In exploration";

interface ProjectCardProps {
  name: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  url?: string;
  githubUrl?: string;
  ogImage?: string;
  ogImageAlt?: string;
}

const statusStyles: Record<ProjectStatus, string> = {
  Live: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
  "In development":
    "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
  "In exploration":
    "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
};

export function ProjectCard({
  name,
  tagline,
  description,
  status,
  url,
  githubUrl,
  ogImage,
  ogImageAlt,
}: ProjectCardProps) {
  return (
    <article className="garden-bed p-6 overflow-hidden">
      {ogImage && (
        <div className="-mx-6 -mt-6 mb-5">
          {url ? (
            <Link href={url} target="_blank" rel="noopener noreferrer">
              <Image
                src={ogImage}
                alt={ogImageAlt || `${name} preview`}
                width={1200}
                height={630}
                className="w-full h-auto"
              />
            </Link>
          ) : (
            <Image
              src={ogImage}
              alt={ogImageAlt || `${name} preview`}
              width={1200}
              height={630}
              className="w-full h-auto"
            />
          )}
        </div>
      )}
      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
        <h2 className="font-display font-semibold text-xl text-theme-primary m-0">
          {name}
        </h2>
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full ${statusStyles[status]}`}
        >
          {status}
        </span>
      </div>
      <p className="text-theme-secondary text-sm font-medium mb-2">{tagline}</p>
      <p className="text-theme-primary text-base leading-relaxed mb-4">
        {description}
      </p>
      <div className="flex flex-wrap gap-3">
        {url ? (
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm no-underline"
          >
            Visit site
            <span className="sr-only"> (opens in new tab)</span>
          </Link>
        ) : (
          <span className="text-theme-muted text-sm italic">Coming soon</span>
        )}
        {githubUrl && (
          <Link
            href={githubUrl}
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
