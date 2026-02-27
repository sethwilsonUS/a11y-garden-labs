# Writing Blog Posts in MDX

This guide covers how to write and format blog posts for A11y Garden Labs. Posts live in `content/blog/` as `.mdx` files.

## Frontmatter (Required)

Every post must start with YAML frontmatter between `---` delimiters:

```yaml
---
title: "Your Post Title"
date: "2026-02-27"
description: "A short summary for the blog list and SEO (1–2 sentences)."
published: true
---
```

### Optional Frontmatter Fields

| Field      | Type     | Description                                                                 |
| ---------- | -------- | --------------------------------------------------------------------------- |
| `image`    | string   | URL for the **thumbnail** shown on the blog index and home page "Latest" section. |
| `imageAlt` | string   | Alt text for the thumbnail (required for accessibility when `image` is set). |
| `tags`     | string[] | Tags for the post, e.g. `["accessibility", "reflection"]`.                  |
| `published`| boolean  | Set to `false` to hide a draft. Defaults to `true`.                         |

**Yes — the frontmatter `image` is what appears as the thumbnail** on the blog list and home page. The `imageAlt` should describe the thumbnail for screen readers.

---

## Image Dimensions

### Frontmatter Images (Thumbnails)

- **Recommended:** 800×400 px (2:1 aspect ratio)
- **Minimum:** 400×200 px
- Thumbnails are displayed at ~full card width with a fixed height (~192px). A 2:1 ratio crops well.
- Use `fit=crop` in query params if your image host supports it: `?w=800&h=400&fit=crop`

### In-Post Images (Body Content)

- **Recommended:** 800×450 px or 1200×675 px (16:9)
- **Max width:** Content is constrained to ~768px; images wider than ~800px will be scaled down.
- Use descriptive alt text for every image: `![Description of what's shown](url)`

### Image Sources

- **External:** Add the hostname to `next.config.ts` under `images.remotePatterns` (e.g. `images.unsplash.com`).
- **Local:** Place images in `public/blog/` and reference as `/blog/your-image.jpg`.

---

## Markdown Formatting

### Headings

```markdown
## Section Heading (h2)
### Subsection (h3)
#### Smaller (h4)
```

Use one `#` (h1) per page — the post title is the h1. Start body content with `##` for the first section.

### Text

- **Bold:** `**bold text**`
- *Italic:* `*italic text*`
- [Links](https://example.com): `[link text](url)`
- Inline `code`: wrap in backticks

### Lists

```markdown
- Unordered item
- Another item

1. Ordered item
2. Another item
```

### Blockquotes

```markdown
> This is a blockquote.
> Multiple lines work too.
```

---

## Code Blocks

Use fenced code blocks with a language identifier for syntax highlighting:

````markdown
```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
```

```bash
npm run build
```

```tsx
export default function Page() {
  return <h1>Hello</h1>;
}
```
````

Common language IDs: `javascript`, `typescript`, `tsx`, `jsx`, `bash`, `json`, `css`, `html`, `python`, `sql`.

---

## Images in the Body

Use standard Markdown image syntax:

```markdown
![Alt text describing the image](https://example.com/image.jpg)
```

- **Always include alt text** — it's required for accessibility.
- For local images: `![Alt text](/blog/my-photo.jpg)`
- Images are styled by the prose classes (rounded corners, responsive).

---

## MDX: React in Markdown

MDX lets you embed React components. For example:

```mdx
import { MyComponent } from "@/components/MyComponent";

## My Section

Here's a custom component:

<MyComponent prop="value" />
```

Keep it simple unless you need custom interactivity. Standard Markdown covers most blog content.

---

## File Naming and Slugs

- **Filename** = URL slug. `welcome-to-a11y-garden-labs.mdx` → `/blog/welcome-to-a11y-garden-labs`
- Use lowercase, hyphens, no spaces.
- Changing the filename changes the URL (old links will break).

### Drafts

Work-in-progress posts go in `content/blog/drafts/`. That folder is gitignored, so drafts never reach the repo. When ready to publish, move the file to `content/blog/` and set `published: true` in frontmatter.

---

## Example Post

````md
---
title: "My First Post"
date: "2026-02-27"
description: "A brief summary for the blog list."
image: "https://images.unsplash.com/photo-xxx?w=800&h=400&fit=crop"
imageAlt: "Green plants in soft light"
tags: ["accessibility", "announcement"]
published: true
---

![Green plants in soft light](https://images.unsplash.com/photo-xxx?w=800&h=400&fit=crop)

Your opening paragraph here.

## First Section

Content with **bold** and `code`.

## Code Example

```javascript
console.log("Hello, world!");
```

## Wrapping Up

Final thoughts.
````

---

---

## Accessibility

We aim for WCAG 2.2 AA across the site. Most accessibility is handled automatically (semantic HTML, focus management, contrast), but authors should follow these practices:

### Images

- **Always provide alt text** for every image — both frontmatter `imageAlt` and in-body `![alt](url)`.
- Describe what matters: purpose and content, not decoration. "Green plants in soft light" is better than "image" or "photo."
- For purely decorative images, use empty alt: `![](url)` — but prefer images that add meaning.

### Headings

- Use a logical hierarchy: one `##` (h2) per major section, `###` for subsections. The post title is the h1.
- Don't skip levels (e.g. h2 → h4). Screen reader users often navigate by headings.

### Links

- Use descriptive link text. Avoid "click here" or "read more" — the link text should make sense on its own.
- Example: `[A11y Garden audit tool](/projects)` instead of `[Click here](/projects)`.

### What's Handled for You

- Semantic structure (headings, lists, blockquotes) is preserved.
- Code blocks get syntax highlighting and proper markup.
- Images are responsive and constrained to the content width.
- Focus and reduced-motion preferences are respected site-wide.

---

## Validation

Run `npm run content:validate` to check frontmatter and schema before committing. Invalid posts will fail the build.
