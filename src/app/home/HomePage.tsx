import ProfileSection from "./_components/ProfileSection";
import { WorkCard } from "./_components/WorkCard";
import { SkillsSection } from "./_components/SkillsSection";

export default function HomePage() {
  return (
    <>
      <ProfileSection />

      {/* TODO: API 연동 계획 */}
      <section className="w-full flex flex-col gap-9 mb-28">
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </section>

      <SkillsSection />
    </>
  );
}
