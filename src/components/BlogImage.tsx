import Image from "next/image";

type Rounding = "full" | "ultra" | "aggressive" | "moderate" | "subtle" | "none";

const radiusValues: Record<Rounding, string> = {
  full: "9999px",
  ultra: "6rem",
  aggressive: "3rem",
  moderate: "1.5rem",
  subtle: "0.5rem",
  none: "0",
};

interface BlogImageProps {
  src: string;
  alt: string;
  rounded?: Rounding;
  width?: number;
  height?: number;
  maxWidth?: number;
  caption?: string;
}

export function BlogImage({
  src,
  alt,
  rounded = "moderate",
  width = 1200,
  height = 800,
  maxWidth,
  caption,
}: BlogImageProps) {
  const isGif = src.endsWith(".gif");

  const image = (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={maxWidth ? `${maxWidth}px` : "(max-width: 768px) 100vw, 768px"}
      style={{
        width: "100%",
        height: "auto",
        display: "block",
        margin: 0,
        borderRadius: radiusValues[rounded],
        overflow: "hidden",
      }}
      quality={85}
      unoptimized={isGif}
    />
  );

  const wrapperStyle: React.CSSProperties = {
    margin: "2rem 0",
    ...(maxWidth && { maxWidth: `${maxWidth}px`, marginInline: "auto" }),
  };

  if (caption) {
    return (
      <figure style={wrapperStyle}>
        {image}
        <figcaption className="mt-2 text-center text-sm text-theme-muted">
          {caption}
        </figcaption>
      </figure>
    );
  }

  return <div style={wrapperStyle}>{image}</div>;
}
