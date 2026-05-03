import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
// import "globals.css";

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
        className="font-sans antialiased dark:bg-black min-h-screen dark:text-white"
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
