import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Grxxn's Blog",
  description: "Frontend Developer, Grxxn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-black h-full dark:text-white`}
      >
        <Header />
        <div className="flex items-start p-4 gap-10 min-h-full">
          <ProfileCard />
          {/* <div className="border border-black/[.09] rounded-xl flex-1"> */}
          {children}
          {/* </div> */}
        </div>
      </body>
    </html>
  );
}
