import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevGrxxn",
  description: "Frontend Developer, Grxxn",
};

export default function ResumeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-center w-full pt-6">
      <div className="max-w-4xl w-full">{children}</div>
    </div>
  );
}
