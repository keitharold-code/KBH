import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", background: "#0B0B0C", color: "#F5F1E8",
          display: "flex", flexDirection: "column", justifyContent: "center", padding: 96,
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", width: 96, height: 96, border: "2px solid #B08D57", color: "#B08D57", fontSize: 34, alignItems: "center", justifyContent: "center", letterSpacing: 4 }}>
          KBH
        </div>
        <div style={{ marginTop: 56, fontSize: 28, letterSpacing: 10, textTransform: "uppercase", color: "#B08D57" }}>
          Kingdom Business Holdings
        </div>
        <div style={{ marginTop: 28, height: 1, width: 96, background: "#B08D57" }} />
        <div style={{ marginTop: 28, fontSize: 68, fontWeight: 300 }}>{site.tagline}</div>
      </div>
    ),
    size,
  );
}
