// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Projects", url: "/projects" },
  { name: "Services", url: "/services" },
  // { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Links",
    links: [
      { name: "Home", url: "/", icon: "" },
      { name: "Services", url: "/services", icon: "" },
      { name: "Projects", url: "/projects", icon: "" },
    ],
  },
  {
    section: "Company Info",
    links: [
      { name: "Contact Us", url: "/contact", icon: "" },
      { name: "About Us", url: "/about", icon: "" },
    ],
  },
  {
    section: "Contact Us",
    links: [
      // { name: "0813-2020-1311", url: "#" },
      // { name: "Blog", url: "/blog" },
      { name: "0813-9880-0869", url: "tel:+6281398800869", icon: "/src/images/footer/tel.svg" },
      { name: "adorrajayamakmur@gmail.com", url: "mailto:adorrajayamakmur@gmail.com", icon: "/src/images/footer/mail.svg" },
      { name: "@adorrajm", url: "https://www.instagram.com/adorrajm/", icon: "/src/images/footer/insta.svg" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};