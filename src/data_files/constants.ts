import ogImageSrc from "@images/social.png";



export const SITE = {
  title: "Metalindo",
  tagline: "Top-quality Hardware Tools",
  description: "Kita menyediakan solusi untuk layanan pembuatan custom & modular berbasis metal, kayu, akrilik hingga printing untuk keperluan kegiatan event dan promosi, seperti booth, display, rak, interior, eksterior dll, termasuk keperluan interior set dan eksterior set bangunan anda.",
  description_short: "Kita menyediakan solusi untuk layanan pembuatan custom & modular berbasis metal, kayu, akrilik hingga printing untuk keperluan kegiatan event dan promosi.",
  url: "https://ajmmetalindo.co.id",
  author: "AJM Metalindo",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Hardware Tools & Construction Services`,
  description: "Kita menyediakan solusi untuk layanan pembuatan custom & modular berbasis metal, kayu, akrilik hingga printing untuk keperluan kegiatan event dan promosi, seperti booth, display, rak, interior, eksterior dll, termasuk keperluan interior set dan eksterior set bangunan anda.",
  image: ogImageSrc,
};

export const recommendData = [
  {
    id: 1,
    title: `one-stop<br/>service`,
    desc:"Kami menangani semuanya mulai dari desain hingga instalasi.",
  },
  {
    id: 2,
    title: `premium<br/>quality`,
    desc:"Kami bangga memberikan hasil yang tepat, inovatif, dan berkualitas tinggi.",
  },
  {
    id: 3,
    title: `Flexible<br/>Approach`,
    desc:"Setiap proyek dirancang untuk memenuhi kebutuhan spesifik klien kami.",
  },
]

export const partnersData = [
  { icon: "aquaproof.webp", name: "Aquaproof", href: "#" },
  { icon: "boardriders.png", name: "Boardriders", href: "#" },
  { icon: "depo-bangunan.png", name: "Depo Bangunan", href: "#" },
  { icon: "eleganza.jpg", name: "Eleganza", href: "#" },
  { icon: "ikad.png", name: "IKAD", href: "#" },
  { icon: "inifiti-granite.PNG", name: "Inifiti Granite", href: "#" },
  { icon: "inlite.png", name: "Inlite", href: "#" },
  { icon: "kia-sanitary.jpg", name: "KIA Sanitary", href: "#" },
  { icon: "kohler.png", name: "Kohler", href: "#" },
  { icon: "levoit.png", name: "Levoit", href: "#" },
  { icon: "mitra10.png", name: "Mitra10", href: "#" },
  { icon: "mulia-ceramics.png", name: "Mulia Ceramics", href: "#" },
  { icon: "niro-granite.png", name: "Niro Granite", href: "#" },
  { icon: "pralon.png", name: "Pralon", href: "#" },
  { icon: "qnqlogo.png", name: "QnQ", href: "#" },
  { icon: "roman.png", name: "Roman", href: "#" },
  { icon: "sandimas.webp", name: "Sandimas", href: "#" },
  { icon: "selfietime.png", name: "Selfie Time", href: "#" },
  { icon: "solid.png", name: "Solid", href: "#" },
  { icon: "strabag.png", name: "Strabag", href: "#" },
  { icon: "toto.png", name: "Toto", href: "#" },
  { icon: "unikey.png", name: "Unikey", href: "#" },
  { icon: "visi-focus.jpg", name: "Visi Focus", href: "#" },
];