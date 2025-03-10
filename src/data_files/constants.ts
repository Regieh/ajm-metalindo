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
    {
        icon: "strabag.png",
        name: "first",
        href: "#",
    },
    {
        icon: "strabag.png",
        name: "Second",
        href: "#",
    },
    {
        icon: "strabag.png",
        name: "Third",
        href: "#",
    },

    {
        icon: "strabag.png",
        name: "Fourth",
        href: "#",
    },
    {
        icon: "strabag.png",
        name: "Fifth",
        href: "#",
    },
    {
        icon: "strabag.png",
        name: "Sixth",
        href: "#",
    },
    {
        icon: "strabag.png",
        name: "Seventh",
        href: "#",
    },
    {
        icon: "strabag.png",
        name: "Eighth",
        href: "#",
    },
    {
        icon: "strabag.png",
        name: "Ninth",
        href: "#",
    },
    {
        icon: "strabag.png",
        name: "Tenth",
        href: "#",
    }
]