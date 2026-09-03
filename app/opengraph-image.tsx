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


// import { ImageResponse } from "next/og";
// import { site } from "@/lib/site";

// export const size = { width: 1200, height: 630 };
// export const contentType = "image/png";

// // Tripp Energy and Mobility — horizontal color logo, embedded as a base64
// // data URI so it renders reliably regardless of runtime (Edge/Node) and
// // doesn't depend on a filesystem read at request time.
// const LOGO_SRC =
//   "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjIwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8IS0tIEljb24sIHNjYWxlZCBhbmQgcG9zaXRpb25lZCBsZWZ0IC0tPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwLDApIj4KICAgIDxnPgogICAgICAgIDxsaW5lIHgxPSI1OC43IiB5MT0iODUuMCIgeDI9IjQ2LjQiIHkyPSI4MC41IiBzdHJva2U9IiNGMkE5M0IiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgICAgIDxsaW5lIHgxPSI3NC44IiB5MT0iNjQuMCIgeDI9IjY3LjMiIHkyPSI1My4zIiBzdHJva2U9IiNGMkE5M0IiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgICAgIDxsaW5lIHgxPSIxMDAuMCIgeTE9IjU2LjAiIHgyPSIxMDAuMCIgeTI9IjQzLjAiIHN0cm9rZT0iI0YyQTkzQiIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgICAgPGxpbmUgeDE9IjEyNS4yIiB5MT0iNjQuMCIgeDI9IjEzMi43IiB5Mj0iNTMuMyIgc3Ryb2tlPSIjRjJBOTNCIiBzdHJva2Utd2lkdGg9IjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogICAgICA8bGluZSB4MT0iMTQxLjMiIHkxPSI4NS4wIiB4Mj0iMTUzLjYiIHkyPSI4MC41IiBzdHJva2U9IiNGMkE5M0IiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgICAgIDwvZz4KICAgIDxwYXRoIGQ9Ik0gNTYgMTIyIEEgNDQgNDQgMCAwIDEgMTQ0IDEyMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRjJBOTNCIiBzdHJva2Utd2lkdGg9IjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogICAgPHBhdGggZD0iTSAxOCAxMjIgTCAxNDQgMTIyIEMgMTYyIDEyMiAxNjggMTA4IDE3OCA4OCBTIDE4NiA2NiAxOTAgNTgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBCNkU0RiIgc3Ryb2tlLXdpZHRoPSI5IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgIDxwYXRoIGQ9Ik0gMTggMTIyIEwgMTQ0IDEyMiBDIDE2MiAxMjIgMTY4IDEwOCAxNzggODggUyAxODYgNjYgMTkwIDU4IiBmaWxsPSJub25lIiBzdHJva2U9IiNGMkE5M0IiIHN0cm9rZS13aWR0aD0iMi40IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1kYXNoYXJyYXk9IjEwIDkiLz4KICA8L2c+CgogIDwhLS0gV29yZG1hcmsgLS0+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjMyLDApIj4KICAgIDx0ZXh0IHg9IjAiIHk9IjEwOCIgZm9udC1mYW1pbHk9IkhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNjIiIGZvbnQtd2VpZ2h0PSI3MDAiIGZpbGw9IiMxQjJBNEEiPlRyaXBwPC90ZXh0PgogICAgPHRleHQgeD0iMCIgeT0iMTQ4IiBmb250LWZhbWlseT0iSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNyIgZm9udC13ZWlnaHQ9IjUwMCIgbGV0dGVyLXNwYWNpbmc9IjEiIGZpbGw9IiMwQjZFNEYiPkVuZXJneSBhbmQgTW9iaWxpdHk8L3RleHQ+CiAgPC9nPgo8L3N2Zz4K";

// export default function OpengraphImage() {
//   return new ImageResponse(
//     (
//       <div
//         style={{
//           width: "100%",
//           height: "100%",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           padding: "80px",
//           background: "#1B2A4A",
//           backgroundImage:
//             "radial-gradient(circle at 85% 20%, rgba(26,107,114,0.55), transparent 45%), radial-gradient(circle at 10% 90%, rgba(139,105,20,0.35), transparent 40%)",
//         }}
//       >
//         {/* eslint-disable-next-line @next/next/no-img-element */}
//         <img
//           src={LOGO_SRC}
//           width={310}
//           height={100}
//           alt="Tripp Energy and Mobility"
//           style={{ objectFit: "contain" }}
//         />
//         <div
//           style={{
//             display: "flex",
//             marginTop: 36,
//             maxWidth: 880,
//             fontSize: 58,
//             fontWeight: 700,
//             lineHeight: 1.15,
//             color: "#ffffff",
//           }}
//         >
//           {site.tagline}
//         </div>
//         <div
//           style={{
//             display: "flex",
//             marginTop: 32,
//             fontSize: 26,
//             color: "rgba(255,255,255,0.65)",
//           }}
//         >
//           {site.domain} · {site.legalForm}
//         </div>
//       </div>
//     ),
//     size
//   );
// }

