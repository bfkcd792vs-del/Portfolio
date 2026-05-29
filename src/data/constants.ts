/* =========================
   SKILLS
========================= */

export enum SkillNames {
  PYTHON = "python",
  SQL = "sql",
  DOCKER = "docker",
  LINUX = "linux",
  GIT = "git",
  POWERBI = "powerbi",
  EXCEL = "excel",
  VBA = "vba",
  ERP = "erp",
  ADOBE = "adobe",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.PYTHON]: {
    id: 1,
    name: "python",
    label: "Python",
    shortDescription: "Automatisation, analyse de données et pipelines de données.",
    color: "#3776AB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },

  [SkillNames.SQL]: {
    id: 2,
    name: "sql",
    label: "SQL",
    shortDescription: "Modélisation de données et requêtes sur bases relationnelles.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },

  [SkillNames.DOCKER]: {
    id: 3,
    name: "docker",
    label: "Docker",
    shortDescription: "Auto-hébergement et déploiement de services conteneurisés.",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },

  [SkillNames.LINUX]: {
    id: 4,
    name: "linux",
    label: "Linux",
    shortDescription: "Administration serveur et automatisation système.",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },

  [SkillNames.GIT]: {
    id: 5,
    name: "git",
    label: "Git",
    shortDescription: "Versioning et collaboration sur projets techniques.",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },

  [SkillNames.POWERBI]: {
    id: 6,
    name: "powerbi",
    label: "Power BI",
    shortDescription: "Dashboards de pilotage, KPIs et visualisation de données décisionnelles.",
    color: "#F2C811",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
  },

  [SkillNames.EXCEL]: {
    id: 7,
    name: "excel",
    label: "Excel Avancé",
    shortDescription: "TCD, Power Query, modélisation et automatisation des flux de données.",
    color: "#217346",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  },

  [SkillNames.VBA]: {
    id: 8,
    name: "vba",
    label: "VBA",
    shortDescription: "Macros et automatisation Excel pour l'industrie.",
    color: "#8B4FBE",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
  },

  [SkillNames.ERP]: {
    id: 9,
    name: "erp",
    label: "ERP",
    shortDescription: "Utilisation et intégration ERP (Proconcept) en contexte achats.",
    color: "#FF6B35",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  },

  [SkillNames.ADOBE]: {
    id: 10,
    name: "adobe",
    label: "Adobe",
    shortDescription: "Suite Adobe pour la création de supports visuels et présentations.",
    color: "#FF0000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
  },
};

/* =========================
   EXPERIENCE
========================= */

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Sep 2025",
    endDate: "Fév 2026",
    title: "Stage Transformation Achats",
    company: "G&F Châtelain – Chanel Horlogerie & Joaillerie",
    description: [
      "Automatisation de l'analyse de risques fournisseurs avec classification et dashboard Power BI.",
      "Conception de plusieurs dashboards de pilotage achats (dépenses, performance fournisseurs, qualité).",
      "Mise en place de chaînes de synchronisation Excel → Power BI → base de données.",
      "Formalisation des processus achats et mise en conformité du référentiel fournisseurs.",
    ],
    skills: [
      SkillNames.POWERBI,
      SkillNames.EXCEL,
      SkillNames.SQL,
      SkillNames.ERP,
    ],
  },
  {
    id: 2,
    startDate: "Mar 2025",
    endDate: "Août 2025",
    title: "Stage Assistant Ingénieur R&D",
    company: "Stellantis – Centre Technique de Belchamp",
    description: [
      "Étude approfondie d'un prototype de disque de frein à revêtement dur (hard coating).",
      "Caractérisation, suivi des protocoles d'essais et traitement des données expérimentales.",
      "Rédaction de rapports techniques et contribution aux revues d'avancement projet.",
    ],
    skills: [
      SkillNames.EXCEL,
      SkillNames.PYTHON,
      SkillNames.GIT,
    ],
  },
  {
    id: 3,
    startDate: "2018",
    endDate: "2023",
    title: "Apprenti Mécanicien Automobile",
    company: "Garage Feneis (Peugeot/Citroën) & Garage André",
    description: [
      "5 ans d'alternance en diagnostic et maintenance sur l'ensemble des organes mécaniques et électroniques.",
      "Réception clientèle, conseil technique et activité personnelle d'achat-revente de véhicules.",
      "1ère place — Concours national des apprentis mécaniciens BMW France (avril 2023).",
    ],
    skills: [
      SkillNames.LINUX,
      SkillNames.GIT,
    ],
  },
];

/* =========================
   THEME DISCLAIMERS
========================= */

export const themeDisclaimers = {
  light: [
    "Mode clair activé ☀️",
    "Les yeux plissent légèrement",
    "Luminosité à fond",
  ],
  dark: [
    "Bienvenue dans l'obscurité 🌙",
    "Dark mode, évidemment 🖤",
    "Tes yeux te remercient",
  ],
};
