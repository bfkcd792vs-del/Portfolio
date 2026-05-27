const config = {
  title: "Victor Feneis | Ingénieur Génie Industriel & Supply Chain",
  description: {
    long: "Portfolio de Victor Feneis, étudiant ingénieur à l'École des Mines de Nancy, spécialisé en gestion industrielle, supply chain et analyse de données. Expériences chez Stellantis (R&D) et G&F Châtelain – Chanel (Transformation Achats). Passionné d'automatisation et de pilotage par la donnée.",
    short:
      "Victor Feneis — Ingénieur Génie Industriel, orienté Supply Chain, Achats et Data.",
  },
  keywords: [
    "Victor Feneis",
    "portfolio",
    "ingénieur génie industriel",
    "supply chain",
    "achats",
    "data analyst",
    "power bi",
    "lean manufacturing",
    "mines de nancy",
    "stellantis",
    "chanel",
    "python",
    "sql",
    "excel",
    "automatisation",
    "docker",
  ],
  author: "Victor Feneis",
  email: "victor.feneis@gmail.com",
  site: "https://github.com/bfkcd792vs-del/Portfolio",
  githubUsername: "bfkcd792vs-del",
  githubRepo: "Portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/victor-feneis-866265279",
    github: "https://github.com/bfkcd792vs-del",
  },
};
export { config };
