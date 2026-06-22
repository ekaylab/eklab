# eklab (이케이랩) — 웹 개발 프리랜스 소개 랜딩

Single-page Next.js 16. 콘텐츠는 `app/page.tsx` 의 `services[]` / `portfolioItems[]` 배열.

## Commands
- `bun install` / `bun dev` (localhost:3000) — 패키지매니저 = **bun, npm 금지**. `bun.lock`만 추적.
- 변경 검증: `curl -s -o /dev/null -w '%{http_code}' http://localhost:3000` + 렌더 HTML grep.

## Design (의도된 디자인 — generic "AI" 룩으로 되돌리지 말 것)
- 따뜻한 종이/네오브루탈. 크림(`--paper`)+잉크+토마토/포레스트/골드. 하드 오프셋 섀도우, `border-2 border-ink`, 필름 그레인, 카드 미세 회전. 파랑/보라 그라데이션·blob·다크모드 금지.
- 폰트(globals.css `@theme`): `font-display`=Gowun Batang(한글 명조), `font-hand`=Gaegu, body=Pretendard.
- Tailwind v4: 색/폰트는 globals.css `@theme inline` 정의 → `bg-tomato`, `font-display` 등 유틸.
- GOTCHA: globals.css 에서 폰트 `@import url(...)` 가 `@import "tailwindcss"` **앞**에 와야 함. 뒤면 PostCSS 500 ("@import must precede all rules").

## Copy tone
- 비개발자 대상 쉬운 한국어, 따뜻/사람냄새, 1인 개발자 1인칭. 범용(장사 한정 X, 웹 한정 X).
- 금지: 전문용어(퍼널/GA/서버용어), "알아서"(AI 느낌), 영문 폰트.

## SEO
- OG 이미지: `app/opengraph-image.tsx` (next/og, 한글 woff fetch). `metadataBase`+canonical = `app/layout.tsx`. favicon = `app/icon.svg`.
