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


export type ProjectText = {
  category: string;
  title: string;
  content: ReactNode;
};

export type Project = {
  id: string;
  src: string;
  screenshots: string[];
  github?: string;
  skills: {
    frontend: Skill[];
    backend: Skill[];
  };
  fr: ProjectText;
  en: ProjectText;
};

const Body = ({ children }: { children: ReactNode }) => (
  <div className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto space-y-4">
    {children}
  </div>
);

const projects: Project[] = [
  {
    id: "henryot-planning",
    src: `${BASE_PATH}/henryot-planning/1.png`,
    screenshots: ["1.png"],
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.python],
    },
    fr: {
      category: "Projet industriel",
      title: "Devis, temps réels et plan de charge pour une PME de mobilier haut de gamme",
      content: (
        <Body>
          <p>
            Projet industriel de Mines Nancy mené en équipe de trois (2026-2027, en cours) pour une PME de mobilier haut de gamme, avec trois ateliers successifs : menuiserie, finitions et tapisserie. Le chiffrage se fait sous Excel, la gestion sous un ERP, et les heures réellement passées ne sont pas relevées.
          </p>
          <p>
            Deux questions sans réponse : combien coûte réellement une affaire, par rapport à ce qui avait été budgété ? Et peut-on en accepter une nouvelle dans trois mois, ou faut-il sous-traiter ? Nous avons construit trois outils qui forment une boucle.
          </p>
          <p>
            <strong>Devis.</strong> Reprise du fichier de chiffrage Excel, avec des temps estimés par opération et par atelier, à deux niveaux : par type de pièce, puis par élément réutilisable pour estimer une pièce sur mesure. Les prix fournisseurs sont reliés au fichier pour automatiser le chiffrage des matières.
          </p>
          <p>
            <strong>Remontée des temps.</strong> Saisie des heures par opération sur tablette, directement en atelier. Elle reprend exactement les catégories du devis, ce qui permet de comparer estimé et réel, d&apos;obtenir un coût de revient fiable et de recalibrer les temps du devis.
          </p>
          <p>
            <strong>Plan de charge.</strong> Une capacité par atelier (personnes × temps de travail) et pour certaines machines, alimentée par les temps du devis. Un ordonnancement à capacité finie, validé sur un jeu de test et un jeu de stress, indique si une affaire peut être prise en interne.
          </p>
          <p>
            Mon fil conducteur : un outil doit rester viable et efficace dans la durée, sans ajouter de complexité pour ceux qui l&apos;utilisent au quotidien. D&apos;où des outils simples (Excel, Python), des catégories de temps communes du devis à l&apos;atelier, et une saisie pensée pour être adoptée par les compagnons.
          </p>
        </Body>
      ),
    },
    en: {
      category: "Industrial project",
      title: "Quoting, actual hours and capacity planning for a high-end furniture SME",
      content: (
        <Body>
          <p>
            A Mines Nancy industrial project carried out by a team of three (2026-2027, ongoing) for a high-end furniture SME with three successive workshops: joinery, finishing and upholstery. Quotes are built in Excel, operations run on an ERP, and the hours actually worked are not recorded.
          </p>
          <p>
            Two open questions: what does a job really cost compared with its budget? And can a new job be accepted three months out, or should it be subcontracted? We built three tools that form a loop.
          </p>
          <p>
            <strong>Quoting.</strong> The Excel costing file was rebuilt with estimated times per operation and per workshop, at two levels: by type of piece, then by reusable element to estimate a custom piece. Supplier prices are linked to the file to automate material costing.
          </p>
          <p>
            <strong>Time tracking.</strong> Hours are logged per operation on a tablet, directly in the workshop. The categories match the quote exactly, so estimated and actual hours can be compared, giving a reliable cost price and recalibrating the quoted times.
          </p>
          <p>
            <strong>Capacity plan.</strong> Capacity per workshop (people × working time) and for some machines, fed by the quoted times. Finite-capacity scheduling, validated on a test set and a stress set, shows whether a job can be taken in-house.
          </p>
          <p>
            My guiding principle: a tool must stay viable and effective over time without adding complexity for the people who use it every day. Hence simple tools (Excel, Python), time categories shared from quote to shopfloor, and data entry designed to be adopted by the craftsmen.
          </p>
        </Body>
      ),
    },
  },
  {
    id: "pantilt-face-tracker",
    src: `${BASE_PATH}/pantilt-face-tracker/1.png`,
    screenshots: ["1.png"],
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.opencv, PROJECT_SKILLS.raspberrypi],
    },
    fr: {
      category: "Robotique embarquée",
      title: "Caméra suiveuse de visage (Pan/Tilt)",
      content: (
        <Body>
          <p>
            Une caméra pan/tilt sur Raspberry Pi Zero 2W qui détecte un visage
            dans le flux vidéo et pilote deux moteurs pas à pas pour le
            recentrer en continu, sans interface graphique (headless, SSH).
          </p>
          <p>
            Contrainte principale : 512 Mo de RAM sans GPU, donc pas de modèle
            lourd type YOLO. Détection par cascade Haar/LBP OpenCV en 320×240,
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
            Projet en cours : README, schéma de câblage et code seront publiés
            sur GitHub une fois les tests moteur et vision validés.
          </p>
        </Body>
      ),
    },
    en: {
      category: "Embedded robotics",
      title: "Face-tracking camera (Pan/Tilt)",
      content: (
        <Body>
          <p>
            A pan/tilt camera on a Raspberry Pi Zero 2W that detects a face in
            the video stream and drives two stepper motors to keep it
            centred, with no graphical interface (headless, over SSH).
          </p>
          <p>
            Main constraint: 512 MB of RAM and no GPU, so no heavy model such
            as YOLO. Detection uses OpenCV Haar/LBP cascades at 320×240, with a
            lightweight DNN fallback planned for difficult cases.
          </p>
          <p>
            The 28BYJ-48 motors need about 1 ms between steps, which clashes
            with the video capture loop. The architecture therefore separates
            a dedicated motor-control thread (proportional control on the
            pixel error, with a dead zone and smoothing to avoid jitter) from
            the vision loop, which only writes the target position.
          </p>
          <p className="text-neutral-500 dark:text-neutral-500 italic">
            Ongoing project: the README, wiring diagram and code will be
            published on GitHub once the motor and vision tests are validated.
          </p>
        </Body>
      ),
    },
  },
  {
    id: "reach-tournament-manager",
    src: `${BASE_PATH}/reach-tournament-manager/1.png`,
    screenshots: ["1.png"],
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.access, PROJECT_SKILLS.vba],
    },
    fr: {
      category: "Base de données",
      title: "Gestionnaire de tournois Reach",
      content: (
        <Body>
          <p>
            Conception et développement, en binôme, d&apos;un système de
            gestion de tournois pour un jeu de cartes stratégique sous
            Microsoft Access. Le projet couvre le cycle complet : modélisation
            entité-relation (joueurs, saisons, tournois, classements,
            performances), passage au modèle relationnel, puis développement
            d&apos;une interface de gestion complète.
          </p>
          <p>
            Le modèle gère des relations many-to-many complexes (un joueur
            peut s&apos;inscrire à plusieurs tournois, être classé sur
            plusieurs saisons, avoir des performances par tournoi) via des
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
        </Body>
      ),
    },
    en: {
      category: "Database",
      title: "Reach tournament manager",
      content: (
        <Body>
          <p>
            Designed and built, as a pair, a tournament management system for
            a strategy card game in Microsoft Access. The project covers the
            full cycle: entity-relationship modelling (players, seasons,
            tournaments, rankings, results), translation into a relational
            model, then development of a complete management interface.
          </p>
          <p>
            The model handles complex many-to-many relationships (a player can
            enter several tournaments, be ranked across several seasons and
            have results per tournament) through dedicated association tables.
          </p>
          <p>
            Key features: player and tournament registration through dynamic
            forms (cascading filtered drop-downs), rankings by season and by
            tournament, a password-protected admin area to approve
            registrations and enter results, and input validation through
            macros (field checks, blocking incomplete or invalid entries).
          </p>
        </Body>
      ),
    },
  },
  {
    id: "portfolio-website",
    src: `${BASE_PATH}/portfolio-website/1.png`,
    screenshots: ["1.png"],
    skills: {
      frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.typescript, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.framer],
      backend: [],
    },
    fr: {
      category: "Développement web",
      title: "Portfolio personnel (ce site)",
      content: (
        <Body>
          <p>
            Le site que vous êtes en train de consulter. Développé avec Next.js
            (App Router) et TypeScript, mis en forme avec Tailwind CSS et
            shadcn/ui, animé avec Framer Motion, et intégrant une scène 3D
            interactive (le clavier de compétences) réalisée sous Spline.
          </p>
          <p>
            Construit par itérations successives (structure des sections,
            contenu, animations, corrections), avec un coup de main ponctuel de
            Claude Code sur certaines de ces itérations.
          </p>
          <p>
            Déployé sur Vercel, avec redéploiement automatique à chaque mise à
            jour du code.
          </p>
        </Body>
      ),
    },
    en: {
      category: "Web development",
      title: "Personal portfolio (this site)",
      content: (
        <Body>
          <p>
            The site you are reading. Built with Next.js (App Router) and
            TypeScript, styled with Tailwind CSS and shadcn/ui, animated with
            Framer Motion, and featuring an interactive 3D scene (the skills
            keyboard) made in Spline.
          </p>
          <p>
            Built through successive iterations (section structure, content,
            animations, fixes), with occasional help from Claude Code on some
            of them.
          </p>
          <p>
            Deployed on Vercel, redeployed automatically on every code update.
          </p>
        </Body>
      ),
    },
  },
];

export default projects;
