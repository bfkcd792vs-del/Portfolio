"use client";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="about" className="flex flex-col items-center justify-center min-h-[120vh] py-20 z-10">
      <div className="w-full max-w-3xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="about"
          title={t.about.title}
          className="mb-12 md:mb-20 mt-0"
        />
        <div className="flex flex-col gap-6">
          {t.about.paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-base md:text-lg leading-relaxed text-muted-foreground"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
