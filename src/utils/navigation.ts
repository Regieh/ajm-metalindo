// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/", dropdown: false },
  { name: "About Us", url: "/about", dropdown: false },
  { name: "Projects", url: "/projects", dropdown: true },
  { name: "Services", url: "/services", dropdown: false  },
  // { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact", dropdown: false  },
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
      { name: "0813-9880-0869", url: "https://wa.me/6281398800869?text=Halo%20%5BNama%20Anda%5D%2C%0A%0ASaya%20tertarik%20dengan%20layanan%20Anda%20untuk%20solusi%20media%20dan%20promosi.%20Bisakah%20saya%20mendapatkan%20informasi%20lebih%20lanjut%20terkait%3A%0A%0A1.%20Desain%20grafis%20dan%20branding%0A2.%20Produksi%20konten%20media%20sosial%0A3.%20Strategi%20pemasaran%20digital%0A4.%20Layanan%20lain%20yang%20Anda%20tawarkan%0A%0ATerima%20kasih.%20Saya%20menunggu%20respon%20dari%20tim%20Anda.", icon: "wa.svg" },
      { name: "adorrajayamakmur@gmail.com", url: "mailto:adorrajayamakmur@gmail.com", icon: "mail.svg" },
      { name: "@adorrajm", url: "https://www.instagram.com/adorrajm/", icon: "insta.svg" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/Metalindo",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};