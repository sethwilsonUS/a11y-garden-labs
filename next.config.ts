import type { NextConfig } from "next";
import { withContentCollections } from "@content-collections/next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/opengraph-image": ["./public/fonts/**/*"],
    "/twitter-image": ["./public/fonts/**/*"],
    "/blog/[slug]/opengraph-image": ["./public/fonts/**/*"],
    "/blog/[slug]/twitter-image": ["./public/fonts/**/*"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "a11ygarden.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "curiogarden.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "infinitepoetry.ai",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "starship-alexandria.vercel.app",
        pathname: "/**",
      },
    ],
  },
};

export default withContentCollections(nextConfig);
