import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#1B2A4A",
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(26,107,114,0.55), transparent 45%), radial-gradient(circle at 10% 90%, rgba(139,105,20,0.35), transparent 40%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 30,
            fontWeight: 700,
            color: "#ffffff",
          }}
        >
          Tripp <span style={{ color: "#2C8790" }}>Energy and Mobility</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 36,
            maxWidth: 880,
            fontSize: 58,
            fontWeight: 700,
            lineHeight: 1.15,
            color: "#ffffff",
          }}
        >
          {site.tagline}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 26,
            color: "rgba(255,255,255,0.65)",
          }}
        >
          {site.domain} · {site.legalForm}
        </div>
      </div>
    ),
    size
  );
}
