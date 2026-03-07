import type { Metadata } from "next";
import { allProjects } from "content-collections";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Our Gardens — accessibility-focused tools, AI-generated poetry, and cozy games for everyone.",
  alternates: { canonical: "/projects" },
};

const publishedProjects = allProjects
  .filter((p) => p.published)
  .sort((a, b) => a.order - b.order);

export default function ProjectsPage() {
  return (
    <>
      <h1 className="font-display text-3xl lg:text-4xl font-bold text-theme-primary mb-12">
        Our Gardens
      </h1>

      <div className="space-y-8">
        {publishedProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            name={project.name}
            tagline={project.tagline}
            description={project.content}
            status={project.status}
            url={project.url}
            githubUrl={project.githubUrl}
            ogImage={project.ogImage}
            ogImageAlt={project.ogImageAlt}
            slug={project.slug}
          />
        ))}
      </div>
    </>
  );
}
