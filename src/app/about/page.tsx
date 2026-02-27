import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About the founder and A11y Garden Labs — a small studio cultivating accessible tools for digital and spiritual life.",
};

export default function AboutPage() {
  return (
    <>
      <h1 className="font-display text-3xl lg:text-4xl font-bold text-theme-primary mb-12">
        About
      </h1>

      <section className="mb-12">
        <h2 className="font-display text-xl font-bold text-theme-primary mb-4">
          About Me
        </h2>
        <div className="space-y-4 text-theme-primary leading-relaxed">
          <p>
            I&apos;m a full-stack developer who happens to be legally blind.
            I build tools born from lived experience — tools that help people
            like me navigate the web, explore information, and find communities
            where we belong.
          </p>
          <p>
            I&apos;ve been accepted to Candler School of Theology, where I
            hope to explore the intersection of faith and accessibility.
            Making the web work for everyone is not just a technical goal;
            it&apos;s a matter of dignity.
          </p>
          <p>
            I&apos;m passionate about building in public, sharing what I learn,
            and creating tools that others can use and improve.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-display text-xl font-bold text-theme-primary mb-4">
          About A11y Garden Labs
        </h2>
        <div className="space-y-4 text-theme-primary leading-relaxed">
          <p className="font-medium text-theme-secondary">
            A11y Garden Labs exists to design, build, and share tools that make
            the web — and the world — more accessible for blind and visually
            impaired people, and for anyone who benefits from inclusive design.
          </p>
          <p>
            A11y Garden Labs is a small, experiment-friendly studio focused on
            accessibility, education, and connection. We create open,
            human-centered tools that help people explore information, test and
            improve website accessibility, and find communities of faith where
            they can fully belong. From developer-facing audit tools to
            listening-friendly knowledge apps, our work is grounded in lived
            experience of visual impairment and a belief that access is a matter
            of dignity, not convenience.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-xl font-bold text-theme-primary mb-4">
          Values
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-theme-primary leading-relaxed">
          <li>Accessibility first</li>
          <li>Open source</li>
          <li>Dignity over convenience</li>
          <li>Faith-informed service</li>
          <li>Building in public</li>
        </ul>
      </section>
    </>
  );
}
