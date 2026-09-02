import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiTailwindcss,
  SiTypescript,
  SiSocketdotio,
  SiSupabase,
  SiOpencv,
  SiTensorflow,
  SiSolidity,
  SiFastapi,
  SiRedis,
  SiRaspberrypi,
  SiMicrosoftaccess,
  SiVisualbasic,
} from "react-icons/si";
import { SiGo } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: React.ReactNode;
};

export const PROJECT_SKILLS: Record<string, Skill> = {
  react: {
    title: "React",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  go: {
    title: "Go",
    bg: "black",
    fg: "white",
    icon: <SiGo />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  fastapi: {
    title: "FastAPI",
    bg: "black",
    fg: "white",
    icon: <SiFastapi />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  redis: {
    title: "Redis",
    bg: "black",
    fg: "white",
    icon: <SiRedis />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  tensorflow: {
    title: "TensorFlow",
    bg: "black",
    fg: "white",
    icon: <SiTensorflow />,
  },
  opencv: {
    title: "OpenCV",
    bg: "black",
    fg: "white",
    icon: <SiOpencv />,
  },
  solidity: {
    title: "Solidity",
    bg: "black",
    fg: "white",
    icon: <SiSolidity />,
  },
  socketio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  typescript: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  framer: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  raspberrypi: {
    title: "Raspberry Pi",
    bg: "black",
    fg: "white",
    icon: <SiRaspberrypi />,
  },
  access: {
    title: "Microsoft Access",
    bg: "black",
    fg: "white",
    icon: <SiMicrosoftaccess />,
  },
  vba: {
    title: "VBA",
    bg: "black",
    fg: "white",
    icon: <SiVisualbasic />,
  },
};


export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  live: string;
  github?: string;
  skills: {
    frontend: Skill[];
    backend: Skill[];
  };
  content: ReactNode;
};

const projects: Project[] = [
  {
    id: "pantilt-face-tracker",
    category: "Robotique embarquée",
    title: "Caméra suiveuse de visage (Pan/Tilt)",
    src: `${BASE_PATH}/pantilt-face-tracker/1.png`,
    screenshots: ["1.png"],
    live: "#",
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.opencv, PROJECT_SKILLS.raspberrypi],
    },
    content: (
      <div className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto space-y-4">
        <p>
          Une caméra pan/tilt sur Raspberry Pi Zero 2W qui détecte un visage
          dans le flux vidéo et pilote deux moteurs pas à pas pour le
          recentrer en continu, sans interface graphique (headless, SSH).
        </p>
        <p>
          Contrainte principale : 512 Mo de RAM sans GPU, donc pas de modèle
          lourd type YOLO — détection par cascade Haar/LBP OpenCV en 320×240,
          avec un fallback DNN léger prévu pour les cas difficiles.
        </p>
        <p>
          Le pilotage des moteurs 28BYJ-48 impose un délai d&apos;environ 1 ms
          entre chaque pas, incompatible avec la boucle de capture vidéo :
          l&apos;architecture sépare donc un thread dédié au contrôle moteur
          (asservissement proportionnel sur l&apos;erreur en pixels, zone
          morte et lissage pour éviter le tremblement) de la boucle de
          vision, qui ne fait qu&apos;écrire la consigne de position.
        </p>
        <p className="text-neutral-500 dark:text-neutral-500 italic">
          Projet en cours — README, schéma de câblage et code seront publiés
          sur GitHub une fois les tests moteur et vision validés.
        </p>
      </div>
    ),
  },
  {
    id: "reach-tournament-manager",
    category: "Base de données",
    title: "Gestionnaire de tournois — Reach",
    src: `${BASE_PATH}/reach-tournament-manager/1.png`,
    screenshots: ["1.png"],
    live: "#",
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.access, PROJECT_SKILLS.vba],
    },
    content: (
      <div className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto space-y-4">
        <p>
          Conception et développement, en binôme, d&apos;un système de
          gestion de tournois pour un jeu de cartes stratégique sous
          Microsoft Access. Le projet couvre le cycle complet : modélisation
          entité-relation (joueurs, saisons, tournois, classements,
          performances), passage au modèle relationnel, puis développement
          d&apos;une interface de gestion complète.
        </p>
        <p>
          Le modèle gère des relations many-to-many complexes — un joueur
          peut s&apos;inscrire à plusieurs tournois, être classé sur
          plusieurs saisons, avoir des performances par tournoi — via des
          tables d&apos;association dédiées.
        </p>
        <p>
          Fonctionnalités clés : inscription des joueurs et des tournois via
          formulaires dynamiques (menus déroulants filtrés en cascade),
          consultation des classements par saison et par tournoi, espace
          administrateur protégé par mot de passe pour valider les
          inscriptions et saisir les résultats, et sécurisation des saisies
          via macros (validation des champs, blocage des entrées
          incomplètes ou parasites).
        </p>
      </div>
    ),
  },
];

export default projects;
