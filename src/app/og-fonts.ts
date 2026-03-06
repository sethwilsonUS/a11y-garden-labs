import { readFileSync } from "node:fs";
import { join } from "node:path";

type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type OgFont = {
  name: string;
  data: ArrayBuffer;
  weight: FontWeight;
  style: "normal";
};

let cached: OgFont[] | null = null;

export function loadOgFonts(): OgFont[] {
  if (cached) return cached;

  try {
    const fontsDir = join(process.cwd(), "public", "fonts");

    const fraunces = readFileSync(join(fontsDir, "Fraunces-Bold.ttf"));
    const dmSans = readFileSync(join(fontsDir, "DMSans-Regular.ttf"));

    cached = [
      {
        name: "Fraunces",
        data: fraunces.buffer as ArrayBuffer,
        weight: 700,
        style: "normal",
      },
      {
        name: "DM Sans",
        data: dmSans.buffer as ArrayBuffer,
        weight: 400,
        style: "normal",
      },
    ];

    return cached;
  } catch {
    return [];
  }
}
