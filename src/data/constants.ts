/* =========================
   SKILLS
========================= */

export enum SkillNames {
  POWERBI = "Power Bi",
  EXCEL = "Excel",
  SQL = "SQL",
  PYTHON = "Python",
  POWER_AUTOMATE = "Power Automate",
  TERMINAL = "Terminal",
  VSCODE = "VS Code",
  GIT = "Git/Github",
  N8N = "nn",
  API = "API",
  VBA = "VBA",
  RASPBERRY_PI = "RaspberryPi",
  SOLIDWORKS = "SolidWorks",
  MATLAB = "MATLAB",
  AI = "IA",
  ERP = "ERP",
  CURA = "Cura",
  VESTA = "VESTA",
  DOCKER = "Docker",
  MICROSOFT = "microsoft",
  POWERPOINT = "PowePoint",
  VISIO = "Visio",
  ADOBE = "Adobe",
  PREMIERE_PRO = "Premiere Pro",
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
  [SkillNames.POWERBI]: {
    id: 1,
    name: "Power Bi",
    label: "Power BI",
    shortDescription: "Interactive dashboards & business reporting.",
    color: "#F2C811",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
  },
  [SkillNames.EXCEL]: {
    id: 2,
    name: "Excel",
    label: "Excel",
    shortDescription: "Advanced modelling, pivot analysis & complex formulas.",
    color: "#217346",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
  },
  [SkillNames.SQL]: {
    id: 3,
    name: "SQL",
    label: "SQL",
    shortDescription: "Database querying & data extraction.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  [SkillNames.PYTHON]: {
    id: 4,
    name: "Python",
    label: "Python",
    shortDescription: "Scripting, data processing & computer vision.",
    color: "#3776AB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.POWER_AUTOMATE]: {
    id: 5,
    name: "Power Automate",
    label: "Power Automate",
    shortDescription: "Workflow automation & Office 365 integrations.",
    color: "#0066FF",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  },
  [SkillNames.TERMINAL]: {
    id: 6,
    name: "Terminal",
    label: "Terminal",
    shortDescription: "Command-line & system scripting.",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.VSCODE]: {
    id: 7,
    name: "VS Code",
    label: "VS Code",
    shortDescription: "Code editing & dev environment.",
    color: "#007ACC",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  [SkillNames.GIT]: {
    id: 8,
    name: "Git/Github",
    label: "Git / GitHub",
    shortDescription: "Version control & collaboration.",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.N8N]: {
    id: 9,
    name: "nn",
    label: "n8n",
    shortDescription: "Workflow automation & no-code integrations.",
    color: "#EA4B71",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.API]: {
    id: 10,
    name: "API",
    label: "API",
    shortDescription: "REST integrations & data exchange.",
    color: "#61DAFB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },
  [SkillNames.VBA]: {
    id: 11,
    name: "VBA",
    label: "VBA",
    shortDescription: "Excel automation & macro scripting.",
    color: "#8B4FBE",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
  },
  [SkillNames.RASPBERRY_PI]: {
    id: 12,
    name: "RaspberryPi",
    label: "Raspberry Pi",
    shortDescription: "Embedded computing & IoT projects.",
    color: "#C51A4A",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg",
  },
  [SkillNames.SOLIDWORKS]: {
    id: 13,
    name: "SolidWorks",
    label: "SolidWorks",
    shortDescription: "3D CAD modelling & mechanical design.",
    color: "#FF0000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg",
  },
  [SkillNames.MATLAB]: {
    id: 14,
    name: "MATLAB",
    label: "MATLAB",
    shortDescription: "Numerical computing & engineering simulation.",
    color: "#E16737",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",
  },
  [SkillNames.AI]: {
    id: 15,
    name: "IA",
    label: "AI",
    shortDescription: "Prompt engineering & AI-assisted workflows.",
    color: "#10B981",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  [SkillNames.ERP]: {
    id: 16,
    name: "ERP",
    label: "ERP",
    shortDescription: "Business data management & process integration.",
    color: "#FF6B35",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  },
  [SkillNames.CURA]: {
    id: 17,
    name: "Cura",
    label: "Cura",
    shortDescription: "3D print slicing & rapid prototyping.",
    color: "#0096D6",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
  },
  [SkillNames.VESTA]: {
    id: 18,
    name: "VESTA",
    label: "VESTA",
    shortDescription: "Crystal structure visualisation.",
    color: "#4A90D9",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 19,
    name: "Docker",
    label: "Docker",
    shortDescription: "Containerized deployment.",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.MICROSOFT]: {
    id: 20,
    name: "microsoft",
    label: "Microsoft",
    shortDescription: "Windows & Office 365 ecosystem.",
    color: "#00A4EF",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
  },
  [SkillNames.POWERPOINT]: {
    id: 21,
    name: "PowePoint",
    label: "PowerPoint",
    shortDescription: "Structured presentations & storytelling.",
    color: "#D24726",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
  },
  [SkillNames.VISIO]: {
    id: 22,
    name: "Visio",
    label: "Visio",
    shortDescription: "Process mapping & BPMN diagrams.",
    color: "#3955A3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
  },
  [SkillNames.ADOBE]: {
    id: 23,
    name: "Adobe",
    label: "Adobe",
    shortDescription: "Adobe Creative Suite — design & video.",
    color: "#FF0000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
  },
  [SkillNames.PREMIERE_PRO]: {
    id: 24,
    name: "Premiere Pro",
    label: "Premiere Pro",
    shortDescription: "Video editing & post-production.",
    color: "#9999FF",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-plain.svg",
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
    startDate: "Mar 2024",
    endDate: "Jul 2024",
    title: "Engineering Intern – Materials / Thermo-mechanical Behavior",
    company: "Stellantis – Belchamp Technical Center",
    description: [
      "Contributed to the development and analysis of a new automotive component, considering usage constraints and performance requirements.",
      "Set up and monitored experimental tests (thermal and mechanical), instrumented test setups and analyzed results.",
      "Processed and summarized experimental data to support understanding of material behavior and technical decision-making.",
    ],
    skills: [
      SkillNames.EXCEL,
      SkillNames.PYTHON,
      SkillNames.MATLAB,
    ],
  },
  {
    id: 2,
    startDate: "Apr 2023",
    endDate: "Apr 2023",
    title: "1st Place – BMW France National Apprentice Mechanic Competition",
    company: "BMW France",
    description: [
      "Assessment on electrical systems understanding, troubleshooting and mechanical fault diagnosis.",
      "Ranked 1st nationally among apprentice mechanics across all BMW France dealerships.",
    ],
    skills: [],
  },
  {
    id: 3,
    startDate: "Sep 2018",
    endDate: "Sep 2022",
    title: "Automotive Mechanic Apprenticeship",
    company: "Garage Feneis, Sessenheim",
    description: [
      "4-year work-study apprenticeship covering diagnosis and maintenance across mechanical and electronic systems.",
      "Customer reception, technical advice, and personal buy/sell activity on used vehicles.",
    ],
    skills: [],
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
