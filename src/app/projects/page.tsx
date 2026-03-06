import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Our Gardens — accessibility-focused tools, AI-generated poetry, and cozy games for everyone.",
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
          githubUrl="https://github.com/sethwilsonUS/a11y-garden"
          ogImage="https://a11ygarden.org/opengraph-image"
          ogImageAlt="A11y Garden — Nurture a More Accessible Web"
        />

        <ProjectCard
          name="Curio Garden"
          tagline="A listening-first way to wander through knowledge."
          description="Curio Garden turns long-form reference content into accessible, high-quality audio experiences. Users can search by topic, queue up listening sessions, and explore ideas — all within an interface designed from the ground up to work beautifully with screen readers and keyboard navigation."
          status="Live"
          url="https://curiogarden.org"
          githubUrl="https://github.com/sethwilsonUS/world-garden"
          ogImage="https://curiogarden.org/opengraph-image"
          ogImageAlt="Curio Garden — Listen to Wikipedia"
        />

        <ProjectCard
          name="Infinite Poetry"
          tagline="AI-generated poems on a variety of topics in a variety of styles."
          description="Infinite Poetry uses AI to generate original poems across dozens of poetic forms — from sonnets and villanelles to haiku and terza rima. Each poem can be paired with an AI-generated illustration. Browse the archive, discover new styles, and explore the intersection of language models and literary tradition."
          status="Live"
          url="https://infinitepoetry.ai"
          githubUrl="https://github.com/sethwilsonUS/aipoetry"
          ogImage="https://infinitepoetry.ai/opengraph-image.jpg"
          ogImageAlt="Infinite Poetry — AI-generated verse"
        />

        <ProjectCard
          name="Starship Alexandria"
          tagline="A cozy roguelike about recovering lost literature."
          description="Starship Alexandria is a browser-based roguelike set in a post-apocalyptic future where classic literature has been lost. Players explore the ruins of Earth from a library ship in orbit, recovering fragments of beloved books, encountering NPCs with stories to tell, and rebuilding humanity's literary heritage one expedition at a time."
          status="Live"
          url="https://starship-alexandria.vercel.app"
          githubUrl="https://github.com/sethwilsonUS/starship-alexandria"
          ogImage="https://starship-alexandria.vercel.app/images/og.png"
          ogImageAlt="Starship Alexandria — a library ship orbits Earth while astronauts recover lost books from the ruins below"
        />
      </div>
    </>
  );
}
