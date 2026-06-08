import CursorEffect from "@/components/CursorEffect";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Share_Tech_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mono",
});

const pretendard = localFont({
  src: [
    {
      path: "./fonts/Pretendard-Regular.woff2",
      weight: "400",
    },
    {
      path: "./fonts/Pretendard-Bold.woff2",
      weight: "700",
    },
  ],
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "DevGrxxn",
  description: "Frontend Developer, Grxxn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-full">
      <body
        className={`${shareTechMono.variable} ${pretendard.variable} font-sans antialiased dark:bg-black min-h-screen dark:text-white`}
      >
        <CursorEffect />
        <Header />
        <main className="flex flex-col items-start gap-6 pt-14">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
