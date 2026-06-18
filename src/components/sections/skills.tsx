"use client";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { useLanguage } from "@/contexts/language";

const SkillsSection = () => {
  const { t } = useLanguage();
  return (
    <SectionWrapper id="skills" className="w-full h-screen md:h-[150dvh] pointer-events-none">
      <SectionHeader id="skills" title={t.skills.title} desc={t.skills.desc} />
    </SectionWrapper>
  );
};

export default SkillsSection;
