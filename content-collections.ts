import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";

const posts = defineCollection({
  name: "posts",
  directory: "content/blog",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    tags: z.array(z.string()).optional(),
    published: z.boolean().default(true),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    const meta = (document as { _meta?: { path?: string; filePath?: string } })
      ._meta;
    const slug =
      meta?.path ??
      (meta?.filePath
        ? meta.filePath.replace(/^content\/blog\//, "").replace(/\.mdx$/, "")
        : "");
    return {
      ...document,
      mdx,
      slug,
    };
  },
});

const pages = defineCollection({
  name: "pages",
  directory: "content/pages",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    const meta = (document as { _meta?: { path?: string; filePath?: string } })
      ._meta;
    const slug =
      meta?.path ??
      (meta?.filePath
        ? meta.filePath.replace(/^content\/pages\//, "").replace(/\.mdx$/, "")
        : "");
    return {
      ...document,
      mdx,
      slug,
    };
  },
});

const projectStatus = z.enum(["Live", "In development", "In exploration"]);

const projects = defineCollection({
  name: "projects",
  directory: "content/projects",
  include: "**/*.mdx",
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    status: projectStatus,
    url: z.string().optional(),
    githubUrl: z.string().optional(),
    ogImage: z.string().optional(),
    ogImageAlt: z.string().optional(),
    order: z.number().default(0),
    published: z.boolean().default(true),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    const meta = (document as { _meta?: { path?: string; filePath?: string } })
      ._meta;
    const slug =
      meta?.path ??
      (meta?.filePath
        ? meta.filePath
            .replace(/^content\/projects\//, "")
            .replace(/\.mdx$/, "")
        : "");
    const summary = document.content.split(/\n\s*\n/)[0].trim();
    return {
      ...document,
      mdx,
      slug,
      summary,
    };
  },
});

export default defineConfig({
  content: [posts, pages, projects],
});
