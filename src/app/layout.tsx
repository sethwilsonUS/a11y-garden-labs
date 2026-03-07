import type { Metadata } from "next";
import { Fraunces, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SkipLink } from "@/components/SkipLink";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { KofiButton } from "@/components/KofiButton";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.a11ygardenlabs.dev"),
  title: {
    default: "A11y Garden Labs",
    template: "%s | A11y Garden Labs",
  },
  description:
    "Cultivating accessible tools for growth and learning.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "A11y Garden Labs",
    description: "Cultivating accessible tools for growth and learning.",
    url: "https://www.a11ygardenlabs.dev",
    siteName: "A11y Garden Labs",
    locale: "en_US",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable} ${jetbrainsMono.variable} light`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          href="/feed.xml"
          title="A11y Garden Labs Blog RSS"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "A11y Garden Labs",
              url: "https://www.a11ygardenlabs.dev",
              logo: "https://www.a11ygardenlabs.dev/icon.png",
              founder: {
                "@type": "Person",
                name: "Seth Wilson",
                jobTitle: "Founder & Developer",
              },
              description:
                "A small, experiment-friendly studio building open, human-centered tools that make the web more accessible for blind and visually impaired people.",
              sameAs: [
                "https://github.com/sethwilsonUS",
                "https://ko-fi.com/a11ygardenlabs",
              ],
            }),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (!theme) {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  document.documentElement.classList.remove('light', 'dark');
                  document.documentElement.classList.add(theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-theme-primary text-theme-primary antialiased transition-colors duration-300 min-h-screen flex flex-col">
        <ThemeProvider>
          <SkipLink />
          <Header />
          <main id="main" className="flex-1 pt-16 container mx-auto px-4 py-12 max-w-3xl" tabIndex={-1}>
            {children}
          </main>
          <Footer />
          <KofiButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
