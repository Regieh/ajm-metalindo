
const navBarLinks = [
  { name: "Accueil", url: "/id", dropdown: false },
  { name: "Produits", url: "/id/projects", dropdown: false },
  { name: "Services", url: "/id/services", dropdown: false },
  // { name: "Blog", url: "/id/blog" },
  { name: "Contact", url: "/id/contact", dropdown: false },
];

const footerLinks = [
  {
    section: "Ekosistem",
    links: [
      { name: "Documentation", url: "/id/welcome-to-docs/", icon: '' },
      { name: "Outils et Équipements", url: "/id/projects", icon: '' },
      { name: "Services de Construction", url: "/id/services", icon: '' },
    ],
    class: "",
  },
  {
    section: "Sosial",
    links: [
      { name: "À propos de nous", url: "#", icon: '' },
      // { name: "Blog", url: "/id/blog" },
      { name: "Carrières", url: "#", icon: '' },
      { name: "Clients", url: "#", icon: '' },
    ],
    class: "",
  },
];

const socialLinks = {
  facebook: "#",
  x: "#",
  github: "https://github.com/mearashadowfax/Metalindo",
  google: "#",
  slack: "#",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};