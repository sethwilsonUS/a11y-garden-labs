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

export default defineConfig({
  content: [posts],
});
