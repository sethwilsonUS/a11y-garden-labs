import { ImageResponse } from "next/og";

export const alt = "A11y Garden Labs — Cultivating accessible tools for digital and spiritual life.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
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
            fontSize: 56,
            fontWeight: 700,
            color: "#f0ede6",
            marginBottom: 16,
            textAlign: "center",
          }}
        >
          A11y Garden Labs
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#a8b89e",
            textAlign: "center",
          }}
        >
          Cultivating accessible tools for digital and spiritual life.
        </div>
        <div
          style={{
            width: 80,
            height: 80,
            marginTop: 40,
            borderRadius: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#059669",
          }}
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.5"
          >
            <path d="M12 2C6.5 6 4 11 4 15c0 3.5 3.5 6 8 7 4.5-1 8-3.5 8-7 0-4-2.5-9-8-13z" />
          </svg>
        </div>
      </div>
    ),
    { ...size }
  );
}
