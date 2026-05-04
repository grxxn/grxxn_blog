import Image from "next/image";
import ProfileSection from "./_components/ProfileSection";
import { WorkCard } from "./_components/WorkCard";

export default function HomePage() {
  return (
    <>
      <ProfileSection />

      {/* TODO: API 연동 계획 */}
      <section className="w-full flex flex-col gap-9">
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </section>
    </>
  );
}
