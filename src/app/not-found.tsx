import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center py-16">
      <h1 className="font-display text-3xl font-bold text-theme-primary mb-4">
        Page not found
      </h1>
      <p className="text-theme-secondary mb-8">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Link href="/" className="btn-primary no-underline">
        Back to home
      </Link>
    </div>
  );
}
