export const profile = {
  name: "Pedro Philimon",
  brandMark: "P",
  initials: "PP",
  country: "Chile",
  countryCode: "CL",
  email: "pablophilimon@gmail.com",
  github: "https://github.com/pablophdev",
  linkedin: "https://www.linkedin.com/in/pedro-philimon/",
}

export const socialLinks = [
  { label: "GitHub", icon: "github", href: profile.github },
  { label: "LinkedIn", icon: "linkedin", href: profile.linkedin },
] as const

export const principles = [
  {
    number: "01",
    title: "Arquitectura",
    titleEn: "Architecture",
    description: "Bases sólidas antes de escribir la primera línea.",
    descriptionEn: "Solid foundations before writing the first line.",
  },
  {
    number: "02",
    title: "Claridad",
    titleEn: "Clarity",
    description:
      "Software entendible, mantenible y preparado para evolucionar.",
    descriptionEn:
      "Software that is understandable, maintainable and ready to evolve.",
  },
  {
    number: "03",
    title: "Experiencia",
    titleEn: "Experience",
    description: "Tecnología que se siente simple, rápida y humana.",
    descriptionEn: "Technology that feels simple, fast and human.",
  },
]
