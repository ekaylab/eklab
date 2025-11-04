import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "이케이랩 | EKLab - 웹 개발 프리랜스 서비스",
  description: "이케이랩(EKLab)에서 전문적인 웹 개발 서비스를 제공합니다. 웹사이트 개발, 웹 애플리케이션 개발, UI/UX 구현 등 다양한 웹 프로젝트를 진행합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
