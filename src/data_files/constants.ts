import ogImageSrc from "@images/social.png";



export const SITE = {
  title: "Metalindo",
  tagline: "Top-quality Hardware Tools",
  description: "ScrewFast offers top-tier hardware tools and expert construction services to meet all your project needs. Start exploring and contact our sales team for superior quality and reliability.",
  description_short: "ScrewFast offers top-tier hardware tools and expert construction services to meet all your project needs.",
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
  description: "Equip your projects with ScrewFast's top-quality hardware tools and expert construction services. Trusted by industry leaders, ScrewFast offers simplicity, affordability, and reliability. Experience the difference with user-centric design and cutting-edge tools. Start exploring now!",
  image: ogImageSrc,
};

export const recommendData = [
  {
    id: 1,
    title: `one-stop<br/>service`,
    desc:"We handle everything from design to installation.",
  },
  {
    id: 2,
    title: `premium<br/>quality`,
    desc:"We take pride in providing precise, innovative, and high-quality results.",
  },
  {
    id: 3,
    title: `Flexible<br/>Approach`,
    desc:"Every project is tailored to meet our clients' specific needs.",
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