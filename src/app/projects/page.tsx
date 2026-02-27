import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Our Gardens — A11y Garden and Curio Garden. Accessibility-focused tools for everyone.",
};

export default function ProjectsPage() {
  return (
    <>
      <h1 className="font-display text-3xl lg:text-4xl font-bold text-theme-primary mb-12">
        Our Gardens
      </h1>

      <div className="space-y-8">
        <ProjectCard
          name="A11y Garden"
          tagline="A friendly accessibility audit tool for everyday developers."
          description="A11y Garden helps developers and teams understand, prioritize, and improve the accessibility of their websites through approachable reports, clear language, and a focus on real users — not just checkboxes. Instead of walls of technical warnings, A11y Garden translates findings into human-readable summaries, simple letter grades, and visual cues that help teams see their progress over time."
          status="Live"
          url="https://a11ygarden.org"
        />

        <ProjectCard
          name="Curio Garden"
          tagline="A listening-first way to wander through knowledge."
          description="Curio Garden turns long-form reference content into accessible, high-quality audio experiences. Users can search by topic, queue up listening sessions, and explore ideas — all within an interface designed from the ground up to work beautifully with screen readers and keyboard navigation."
          status="Live"
          url="https://curiogarden.org"
        />
      </div>
    </>
  );
}
