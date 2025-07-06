import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import Footer from "@/components/Footer";

const notoSans = localFont({
  src: [
    {
      path: "./fonts/NotoSansKR-Thin.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/NotoSansKR-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/NotoSansKR-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/NotoSansKR-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/NotoSansKR-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/NotoSansKR-Black.woff",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-noto",
  display: "swap",
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
        className={`${notoSans.variable} font-sans antialiased dark:bg-black h-full dark:text-white`}
      >
        <Header />
        <main className="flex items-start justify-center pt-6 gap-6 h-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
