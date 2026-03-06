import { ImageResponse } from "next/og";
import { allPosts } from "content-collections";
import { loadOgFonts } from "../../og-fonts";

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
  const fonts = loadOgFonts();
  const hasFont = fonts.length > 0;

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
            backgroundColor: "#036b4a",
            fontFamily: hasFont ? "Fraunces, sans-serif" : "sans-serif",
          }}
        >
          <div
            style={{
              fontSize: "56px",
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            A11y Garden Labs
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "rgba(255, 255, 255, 0.7)",
              marginTop: "12px",
              fontFamily: hasFont ? "DM Sans, sans-serif" : "sans-serif",
            }}
          >
            Blog
          </div>
        </div>
      ),
      { ...size, fonts },
    );
  }

  const title =
    post.title.length > 60 ? post.title.slice(0, 57) + "..." : post.title;
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
          background:
            "linear-gradient(145deg, #171717 0%, #1a2420 50%, #171717 100%)",
          fontFamily: hasFont ? "Fraunces, sans-serif" : "sans-serif",
          padding: "60px",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background:
              "linear-gradient(90deg, #059669 0%, #34d399 50%, #059669 100%)",
          }}
        />

        <div
          style={{
            fontSize: "56px",
            fontWeight: 700,
            color: "#f0ede6",
            lineHeight: 1.2,
            marginBottom: "16px",
            letterSpacing: "-0.03em",
          }}
        >
          {title}
        </div>

        {description && (
          <div
            style={{
              fontSize: "24px",
              color: "#a8b89e",
              lineHeight: 1.4,
              fontFamily: hasFont ? "DM Sans, sans-serif" : "sans-serif",
            }}
          >
            {description}
          </div>
        )}

        {/* Brand footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "32px",
            gap: "12px",
          }}
        >
          {/* Small leaf icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="none"
            width="28"
            height="28"
          >
            <g
              stroke="#34d399"
              strokeWidth="28"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M256 80C172 136 144 196 144 248c0 56 56 96 112 112 56-16 112-56 112-112 0-52-28-112-112-168z" />
              <path d="M256 80v320" />
            </g>
          </svg>
          <div
            style={{
              fontSize: "18px",
              color: "#516247",
              fontFamily: hasFont ? "DM Sans, sans-serif" : "sans-serif",
            }}
          >
            A11y Garden Labs
          </div>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
