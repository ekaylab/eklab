import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://eklab.kr"),
  alternates: {
    canonical: "/",
  },
  title: "이케이랩 | EKLab - 웹 개발 프리랜스 서비스",
  description:
    "이케이랩(EKLab) — 회사 소개 사이트, 온라인 쇼핑몰, 예약·주문 시스템, 봇·업무 자동화, 검색 노출(SEO)까지. 웹 개발부터 서버 운영까지 직접 만들고 끝까지 챙기는 1인 개발 파트너입니다.",
  keywords: [
    "웹 개발",
    "프리랜스",
    "외주",
    "홈페이지 제작",
    "회사 소개 사이트",
    "온라인 쇼핑몰",
    "예약 시스템",
    "주문 시스템",
    "업무 자동화",
    "SEO",
    "검색 노출",
    "서버 운영",
    "Next.js",
    "React",
    "이케이랩",
    "EKLab",
  ],
  authors: [{ name: "이케이랩", url: "https://eklab.kr" }],
  creator: "이케이랩",
  openGraph: {
    title: "이케이랩 | EKLab - 웹 개발 프리랜스 서비스",
    description:
      "필요한 거, 제대로 만들어 드릴게요. 홈페이지·쇼핑몰·예약·자동화·SEO까지 직접 만드는 웹 개발 파트너입니다.",
    url: "https://eklab.kr",
    type: "website",
    locale: "ko_KR",
    siteName: "이케이랩",
  },
  twitter: {
    card: "summary_large_image",
    title: "이케이랩 | EKLab - 웹 개발 프리랜스 서비스",
    description:
      "필요한 거, 제대로 만들어 드릴게요. 홈페이지·쇼핑몰·예약·자동화·SEO까지 직접 만드는 웹 개발 파트너입니다.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
