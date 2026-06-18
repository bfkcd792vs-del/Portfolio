export const translations = {
  fr: {
    hero: {
      greeting: "Bonjour, je suis",
      subtitle: "Génie Industriel & Supply Chain",
      hireMe: "Me contacter",
      resume: "CV",
    },
    experience: {
      title: "Expérience",
      desc: "Mon parcours professionnel.",
      entries: [
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
        },
      ],
    },
    skills: {
      title: "Compétences",
      desc: "De l'analyse de données au pilotage terrain.",
    },
    contact: {
      title: "TRAVAILLONS ENSEMBLE",
      cardTitle: "Formulaire de contact",
      cardDesc: "Contactez-moi directement à",
      cardDescSuffix: "ou laissez vos coordonnées ici.",
    },
    contactForm: {
      fullName: "Nom complet",
      namePlaceholder: "Votre nom",
      emailAddress: "Adresse email",
      message: "Votre message",
      messagePlaceholder: "Parlez-moi de votre projet ou de votre idée...",
      privacy: "Je ne partagerai jamais vos données.",
      send: "Envoyer",
      sending: "Envoi en cours...",
      successTitle: "Message envoyé",
      successDesc: "Merci pour votre message, je reviendrai vers vous rapidement.",
      errorTitle: "Une erreur est survenue",
      errorDesc: "Veuillez vérifier vos informations et réessayer.",
    },
  },
  en: {
    hero: {
      greeting: "Hi, I am",
      subtitle: "Industrial Engineering & Supply Chain",
      hireMe: "Hire Me",
      resume: "Resume",
    },
    experience: {
      title: "Experience",
      desc: "My professional journey.",
      entries: [
        {
          id: 1,
          startDate: "Sep 2025",
          endDate: "Feb 2026",
          title: "Purchasing Transformation Intern",
          company: "G&F Châtelain – Chanel Watchmaking & Jewelry",
          description: [
            "Automated supplier risk analysis with classification and Power BI dashboard.",
            "Designed purchasing management dashboards (spending, supplier performance, quality).",
            "Set up synchronization chains from Excel to Power BI to database.",
            "Formalized purchasing processes and brought supplier repository into compliance.",
          ],
        },
        {
          id: 2,
          startDate: "Mar 2025",
          endDate: "Aug 2025",
          title: "R&D Engineering Intern",
          company: "Stellantis – Belchamp Technical Center",
          description: [
            "In-depth study of a hard-coated brake disc prototype.",
            "Characterization, test protocol monitoring and experimental data processing.",
            "Technical report writing and contribution to project progress reviews.",
          ],
        },
        {
          id: 3,
          startDate: "2018",
          endDate: "2023",
          title: "Automotive Mechanic Apprentice",
          company: "Garage Feneis (Peugeot/Citroën) & Garage André",
          description: [
            "5 years of work-study in diagnosis and maintenance across mechanical and electronic systems.",
            "Customer reception, technical advice, and personal buy/sell activity on used vehicles.",
            "1st place — BMW France national apprentice mechanic competition (April 2023).",
          ],
        },
      ],
    },
    skills: {
      title: "Skills",
      desc: "From data analysis to shopfloor operations.",
    },
    contact: {
      title: "LET'S WORK TOGETHER",
      cardTitle: "Contact Form",
      cardDesc: "Please contact me directly at",
      cardDescSuffix: "or drop your info here.",
    },
    contactForm: {
      fullName: "Full Name",
      namePlaceholder: "Your name",
      emailAddress: "Email Address",
      message: "Your Message",
      messagePlaceholder: "Tell me about your project or idea...",
      privacy: "I'll never share your data with anyone else.",
      send: "Send Message",
      sending: "Sending...",
      successTitle: "Message sent",
      successDesc: "Thanks for reaching out! I'll get back to you soon.",
      errorTitle: "Something went wrong",
      errorDesc: "Please check your details and try again.",
    },
  },
};

export type Lang = "fr" | "en";
export type Translations = typeof translations.fr;
