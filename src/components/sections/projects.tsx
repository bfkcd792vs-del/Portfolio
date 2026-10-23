"use client";
import Image from "next/image";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
  useModal,
} from "../ui/animated-modal";
import { FloatingDock } from "../ui/floating-dock";

import SmoothScroll from "../smooth-scroll";
import projects, { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./section-header";
import { useLanguage } from "@/contexts/language";

import SectionWrapper from "../ui/section-wrapper";

const ProjectsSection = () => {
  const { t } = useLanguage();
  return (
    <SectionWrapper id="projects" className="max-w-7xl mx-auto md:h-[130vh]">
      <SectionHeader id='projects' title={t.projects.title} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8">
        {projects.map((project, index) => (
          <Modall key={project.src} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};
const CloseButton = () => {
  const { setOpen } = useModal();
  const { t } = useLanguage();
  return (
    <button
      onClick={() => setOpen(false)}
      className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28"
    >
      {t.projects.close}
    </button>
  );
};
const Modall = ({ project }: { project: Project }) => {
  const { lang } = useLanguage();
  const text = project[lang];
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-transparent flex justify-center group/modal-btn">
          <div
            className="relative w-[400px] h-auto rounded-lg overflow-hidden"
            style={{ aspectRatio: "3/2" }}
          >
            <Image
              className="absolute w-full h-full top-0 left-0 hover:scale-[1.05] transition-all"
              src={project.src}
              alt={text.title}
              width={300}
              height={300}
            />
            <div className="absolute w-full h-1/2 bottom-0 left-0 bg-gradient-to-t from-black via-black/85 to-transparent pointer-events-none">
              <div className="flex flex-col h-full items-start justify-end p-6">
                <div className="text-lg text-left">{text.title}</div>
                <div className="text-xs bg-white text-black rounded-lg w-fit px-2">
                  {text.category}
                </div>
              </div>
            </div>
          </div>
        </ModalTrigger>
        <ModalBody className="md:max-w-4xl md:max-h-[80%] overflow-auto">
          <SmoothScroll isInsideModal={true}>
            <ModalContent>
              <ProjectContents project={project} />
            </ModalContent>
          </SmoothScroll>
          <ModalFooter className="gap-4">
            <CloseButton />
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
};
export default ProjectsSection;

const ProjectContents = ({ project }: { project: Project }) => {
  const { lang, t } = useLanguage();
  const text = project[lang];
  const tools = [...project.skills.frontend, ...project.skills.backend];
  return (
    <>
      <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
        {text.title}
      </h4>
      {tools.length > 0 && (
        <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 text-3xl mb-8">
          <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">
            {t.projects.tools}
          </p>
          <FloatingDock items={tools} />
        </div>
      )}
      {/* <div className="flex justify-center items-center">
        {project.screenshots.map((image, idx) => (
          <motion.div
            key={"images" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover={{
              scale: 1.1,
              rotate: 0,
              zIndex: 100,
            }}
            whileTap={{
              scale: 1.1,
              rotate: 0,
              zIndex: 100,
            }}
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={`${project.src.split("1.png")[0]}${image}`}
              alt="screenshots"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div> */}
      {text.content}
    </>
  );
};
