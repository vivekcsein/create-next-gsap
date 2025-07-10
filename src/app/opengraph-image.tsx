import { ImageResponse } from "next/og";
import { Lora } from "next/font/google";
// export const runtime = "edge";
export const alt = "A beginner template";
export const size = {
  width: 1200,
  height: 600,
};

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  weight: ["700"],
  variable: "--font-Lora",
});

export const contentType = "image/png";

// Image generation
export default async function OGImage({}: { params: { slug: string } }) {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 40,
          fontWeight: 600,
          fontFamily: `${lora.variable}`,
        }}
      >
        <h1 style={{ marginTop: 20, color: "#eeaaaa", fontSize: "6rem" }}>
          {/* put your heading */}
        </h1>
        <h3 style={{ marginTop: 0, color: "#ffddff" }}>
          {/* put your details */}
        </h3>
      </div>
    )
  );
}
