
const navBarLinks = [
  { name: "Accueil", url: "/id" },
  { name: "Produits", url: "/id/projects" },
  { name: "Services", url: "/id/services" },
  // { name: "Blog", url: "/id/blog" },
  { name: "Contact", url: "/id/contact" },
];

const footerLinks = [
  {
    section: "Ekosistem",
    links: [
      { name: "Documentation", url: "/id/welcome-to-docs/", icon: '' },
      { name: "Outils et Équipements", url: "/id/projects", icon: '' },
      { name: "Services de Construction", url: "/id/services", icon: '' },
    ],
  },
  {
    section: "Sosial",
    links: [
      { name: "À propos de nous", url: "#", icon: '' },
      // { name: "Blog", url: "/id/blog" },
      { name: "Carrières", url: "#", icon: '' },
      { name: "Clients", url: "#", icon: '' },
    ],
  },
];

const socialLinks = {
  facebook: "#",
  x: "#",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "#",
  slack: "#",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};