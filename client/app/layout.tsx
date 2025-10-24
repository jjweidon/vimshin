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
  title: "vimshin - Vim 고수가 되는 길",
  description: "Vim을 처음 배우는 사용자부터 숙련자까지, 실습 중심으로 Vim 명령어를 학습할 수 있는 웹 기반 학습 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0D1117] text-[#C9D1D9]`}
      >
        {children}
      </body>
    </html>
  );
}
