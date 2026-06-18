const config = {
  title: "Victor Feneis | Ingénieur Génie Industriel & Supply Chain",
  description: {
    long: "Engineering student at Mines Nancy (Industrial Engineering & Materials), interested in logistics and shopfloor process improvement. I enjoy mapping material flows, identifying risks that could impact quality, and turning observations into practical actions with production and logistics teams.",
    short:
      "Victor Feneis — Industrial Engineering student at Mines Nancy, focused on Supply Chain and Operations.",
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
