"use client";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { useLanguage } from "@/contexts/language";
import { SKILLS } from "@/data/constants";

const SkillsSection = () => {
  const { t, lang } = useLanguage();
  return (
    <SectionWrapper id="skills" className="w-full py-16 md:py-0 md:h-[150dvh] md:pointer-events-none">
      <SectionHeader id="skills" title={t.skills.title} desc={t.skills.desc} />
      {/* Sur mobile, le clavier 3D n'est pas chargé : grille statique à la place */}
      <div className="md:hidden grid grid-cols-2 gap-3 px-4 max-w-md mx-auto">
        {Object.values(SKILLS).map((skill) => (
          <div
            key={skill.id}
            className="rounded-lg border border-border bg-card/80 p-3"
            style={{ borderLeft: `3px solid ${skill.color}` }}
          >
            <div className="text-sm font-bold text-card-foreground">
              {lang === "fr" ? skill.labelFr ?? skill.label : skill.label}
            </div>
            <div className="text-xs font-sans text-muted-foreground mt-1">
              {lang === "fr" ? skill.shortDescriptionFr : skill.shortDescription}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
