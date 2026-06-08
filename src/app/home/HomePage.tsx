import ProfileSection from "./_components/ProfileSection";
import { WorkCard } from "./_components/WorkCard";
import { SkillsSection } from "./_components/SkillsSection";

export default function HomePage() {
  return (
    <>
      <ProfileSection />

      <section className="w-full max-w-[1080px] mx-auto flex flex-col mb-28 border-b border-neutral-200">
        <h2 className="font-monoCustom font-bold text-sm text-neutral-400 mb-4">WORK</h2>
        <WorkCard index={1} />
        <WorkCard index={2} />
        <WorkCard index={3} />
      </section>

      <SkillsSection />
    </>
  );
}
