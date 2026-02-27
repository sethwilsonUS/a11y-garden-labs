import { ImageResponse } from "next/og";
import { allPosts } from "content-collections";

export const alt = "Blog post preview";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #171717 0%, #1a2420 50%, #171717 100%)",
            fontFamily: "sans-serif",
            padding: 60,
          }}
        >
          <div
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: "#f0ede6",
            }}
          >
            A11y Garden Labs
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#909f86",
              marginTop: 16,
            }}
          >
            Blog
          </div>
        </div>
      ),
      { ...size }
    );
  }

  const title = post.title.length > 60 ? post.title.slice(0, 57) + "..." : post.title;
  const description = (post.description || "").slice(0, 120);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(135deg, #171717 0%, #1a2420 50%, #171717 100%)",
          fontFamily: "sans-serif",
          padding: 60,
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#f0ede6",
            lineHeight: 1.2,
            marginBottom: 16,
          }}
        >
          {title}
        </div>
        {description && (
          <div
            style={{
              fontSize: 24,
              color: "#a8b89e",
              lineHeight: 1.4,
            }}
          >
            {description}
          </div>
        )}
        <div
          style={{
            fontSize: 18,
            color: "#909f86",
            marginTop: 24,
          }}
        >
          A11y Garden Labs
        </div>
      </div>
    ),
    { ...size }
  );
}
