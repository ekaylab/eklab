import { ImageResponse } from "next/og";

export const alt = "이케이랩 — 필요한 거, 제대로 만들어 드릴게요";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#201a17";
const PAPER = "#f3ecdd";
const TOMATO = "#df5234";

export default async function Image() {
  const [gowun, pretendard] = await Promise.all([
    fetch(
      "https://cdn.jsdelivr.net/npm/@fontsource/gowun-batang@5.2.5/files/gowun-batang-korean-700-normal.woff"
    ).then((r) => r.arrayBuffer()),
    fetch(
      "https://cdn.jsdelivr.net/npm/pretendard@1.3.9/dist/web/static/woff/Pretendard-Bold.woff"
    ).then((r) => r.arrayBuffer()),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: PAPER,
          padding: 56,
          fontFamily: "Pretendard",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            border: `6px solid ${INK}`,
            padding: 56,
            justifyContent: "space-between",
          }}
        >
          {/* brand */}
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                display: "flex",
                width: 56,
                height: 56,
                border: `4px solid ${INK}`,
                borderRadius: 12,
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                fontFamily: "Gowun",
                fontSize: 34,
                color: INK,
              }}
            >
              E
              <div
                style={{
                  position: "absolute",
                  right: -7,
                  bottom: -7,
                  width: 16,
                  height: 16,
                  borderRadius: 9,
                  backgroundColor: TOMATO,
                }}
              />
            </div>
            <div style={{ display: "flex", fontSize: 32, fontFamily: "Gowun", color: INK }}>
              이케이랩
            </div>
          </div>

          {/* headline */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Gowun",
              color: INK,
              fontSize: 90,
              lineHeight: 1.18,
            }}
          >
            <div style={{ display: "flex" }}>
              <span>필요한 거,&nbsp;</span>
              <span style={{ color: TOMATO }}>제대로</span>
            </div>
            <div style={{ display: "flex" }}>만들어 드릴게요.</div>
          </div>

          {/* services */}
          <div style={{ display: "flex", fontSize: 28, color: "#6f6553" }}>
            홈페이지 · 쇼핑몰 · 예약·주문 · 봇·자동화 · SEO
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Gowun", data: gowun, style: "normal", weight: 700 },
        { name: "Pretendard", data: pretendard, style: "normal", weight: 700 },
      ],
    }
  );
}
