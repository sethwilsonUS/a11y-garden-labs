#!/usr/bin/env node

import { readFileSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";
import { z } from "zod";

const __dirname = dirname(fileURLToPath(import.meta.url));
const contentDir = join(__dirname, "..", "content", "blog");

const postSchema = z.object({
  title: z.string(),
  date: z.string(),
  description: z.string().optional(),
  image: z.string().optional(),
  imageAlt: z.string().optional(),
  tags: z.array(z.string()).optional(),
  published: z.boolean().default(true),
  content: z.string(),
});

function getAllMdxFiles(dir, files = []) {
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      getAllMdxFiles(fullPath, files);
    } else if (entry.name.endsWith(".mdx")) {
      files.push(fullPath);
    }
  }
  return files;
}

let hasErrors = false;
const mdxFiles = getAllMdxFiles(contentDir);

for (const filePath of mdxFiles) {
  try {
    const raw = readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    const doc = { ...data, content };
    postSchema.parse(doc);
  } catch (err) {
    hasErrors = true;
    const relPath = filePath.replace(join(__dirname, "..") + "/", "");
    console.error(`❌ ${relPath}:`, err.message);
  }
}

if (hasErrors) {
  process.exit(1);
}

console.log(`✓ Validated ${mdxFiles.length} post(s)`);
