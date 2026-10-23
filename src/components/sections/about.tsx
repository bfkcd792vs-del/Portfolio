"use client";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language";
import Image from "next/image";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="about" className="flex flex-col items-center justify-center min-h-[120vh] py-20 z-10">
      <div className="w-full max-w-5xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="about"
          title={t.about.title}
          className="mb-12 md:mb-20 mt-0"
        />
        <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-center md:items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="shrink-0 w-56 md:w-72 md:sticky md:top-28"
        >
          <Image
            src="/assets/victor-feneis.webp"
            alt="Victor Feneis"
            width={640}
            height={795}
            sizes="(max-width: 768px) 224px, 288px"
            className="w-full h-auto rounded-2xl border border-border shadow-lg object-cover"
          />
        </motion.div>
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
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
