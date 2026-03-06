import Link from "next/link";

export function KofiButton() {
  return (
    <Link
      href="https://ko-fi.com/a11ygardenlabs"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 btn-primary gap-2 shadow-lg hover:shadow-xl transition-shadow no-underline"
    >
      <KofiIcon />
      Support Me
      <span className="sr-only"> on Ko-fi (opens in new tab)</span>
    </Link>
  );
}

function KofiIcon() {
  return (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 12.5C5 8.36 8.13 5 12 5s7 3.36 7 7.5c0 4.14-3.13 7.5-7 7.5S5 16.64 5 12.5Z"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        fill="currentColor"
      />
    </svg>
  );
}
