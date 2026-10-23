"use client";
import { SectionHeader } from "./section-header";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/language";

const EducationSection = () => {
  const { t } = useLanguage();

  return (
    <SectionWrapper className="flex flex-col items-center justify-center py-20 z-10">
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="education"
          title={t.education.title}
          desc={t.education.desc}
          className="mb-12 md:mb-20 mt-0"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.education.entries.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card className={cn(
                "h-full bg-card text-card-foreground border-border",
                "hover:border-primary/20 transition-colors duration-300",
                "shadow-sm hover:shadow-md"
              )}>
                <CardHeader className="pb-3 space-y-2">
                  <Badge variant="secondary" className="w-fit font-mono text-xs font-normal">
                    {edu.period}
                  </Badge>
                  <CardTitle className="text-lg font-bold tracking-tight">
                    {edu.title}
                  </CardTitle>
                  <div className="text-sm font-medium text-muted-foreground">
                    {edu.school}
                  </div>
                </CardHeader>
                {edu.description.length > 0 && (
                  <CardContent>
                    <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-muted-foreground leading-relaxed">
                      {edu.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </CardContent>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default EducationSection;
