import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistMono = localFont({
  src: [
    {
      path: "./fonts/GeistMono-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/GeistMono-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/GeistMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/GeistMono-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/GeistMono-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/GeistMono-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/GeistMono-Black.ttf",
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
        className={`${geistMono.variable} font-sans antialiased dark:bg-black min-h-screen dark:text-white`}
      >
        <Header />
        <main className="flex items-start justify-center pt-6 gap-6 h-full">
          <div className="max-w-4xl w-full">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
