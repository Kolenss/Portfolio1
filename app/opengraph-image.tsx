import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo";

export const alt = `${siteConfig.name} portfolio preview`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fbfaf7",
          color: "#191919",
          padding: 64,
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 78,
              height: 78,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid #191919",
              borderRadius: 18,
              fontSize: 30,
              fontWeight: 800,
            }}
          >
            CM
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ fontSize: 30, fontWeight: 800 }}>{siteConfig.name}</div>
            <div style={{ fontSize: 22, color: "#6f6a62" }}>Portfolio</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ maxWidth: 900, fontSize: 72, fontWeight: 800, lineHeight: 1.05 }}>
            Full-stack developer and AI engineer.
          </div>
          <div style={{ maxWidth: 820, fontSize: 28, lineHeight: 1.4, color: "#4f4a43" }}>
            Building practical web, AI-enabled, and hardware-connected software from the
            Philippines.
          </div>
        </div>

        <div style={{ display: "flex", gap: 14, fontSize: 22, fontWeight: 700 }}>
          {["Next.js", "React", "TypeScript", "AI Engineering"].map((skill) => (
            <div
              key={skill}
              style={{
                border: "1px solid #d6cec1",
                borderRadius: 999,
                padding: "12px 20px",
                background: "#ffffff",
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
