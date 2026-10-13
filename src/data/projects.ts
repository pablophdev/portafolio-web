import { profile } from "./profile"

export interface Project {
  index: string
  title: string
  subtitle: string
  subtitleEn: string
  description: string
  descriptionEn: string
  tags: string[]
  tagsEn: string[]
  image: string
  credit: string
  tone: "blue" | "violet" | "cyan"
  repositoryUrl: string
  projectUrl?: string
}

export const projects: Project[] = [
  {
    index: "01",
    title: "NovaShop",
    subtitle: "Comercio electrónico con microservicios",
    subtitleEn: "Microservices E-commerce",
    description:
      "Ecosistema backend modular para comercio electrónico, diseñado alrededor de servicios independientes, comunicación distribuida y despliegues reproducibles.",
    descriptionEn:
      "A modular backend ecosystem for e-commerce, designed around independent services, distributed communication and reproducible deployments.",
    tags: ["Java", "Spring Boot", "Microservicios", "Docker", "JUnit"],
    tagsEn: ["Java", "Spring Boot", "Microservices", "Docker", "JUnit"],
    image:
      "https://images.unsplash.com/photo-1759661881353-5b9cc55e1cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxkYXJrJTIwZnV0dXJpc3RpYyUyMHNvZnR3YXJlJTIwZGV2ZWxvcGVyJTIwZGVzayUyMGNvZGUlMjBtb25pdG9yJTIwYWJzdHJhY3QlMjBibHVlfGVufDF8fHx8MTc5MTc2MTExNXww&ixlib=rb-4.1.0&q=80&w=1080",
    credit: "Jakub Żerdzicki / Unsplash",
    tone: "blue",
    repositoryUrl: profile.github,
  },
  {
    index: "02",
    title: "jarodandre.cl",
    subtitle: "Comercio electrónico web",
    subtitleEn: "E-commerce Website",
    description:
      "Experiencia de compra responsive centrada en producto, con una interfaz visual refinada y una arquitectura frontend construida en React.",
    descriptionEn:
      "A responsive, product-focused shopping experience with a refined visual interface and a frontend architecture built in React.",
    tags: ["React", "JavaScript", "Interfaz adaptable", "Comercio electrónico"],
    tagsEn: ["React", "JavaScript", "Responsive UI", "E-commerce"],
    image:
      "https://images.unsplash.com/photo-1639660680788-bf160240864e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtaW5pbWFsJTIwbHV4dXJ5JTIwamV3ZWxyeSUyMGRhcmslMjBwcm9kdWN0JTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzkxNzYxMTIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    credit: "Or Hakim / Unsplash",
    tone: "violet",
    repositoryUrl: profile.github,
    projectUrl: "https://jarodandre.pages.dev/",
  },
  {
    index: "03",
    title: "Hospital Management",
    subtitle: "Sistema distribuido",
    subtitleEn: "Distributed System",
    description:
      "Sistema de gestión hospitalaria basado en microservicios, con descubrimiento de servicios, puerta de enlace central y persistencia relacional.",
    descriptionEn:
      "A microservices-based hospital management system with service discovery, a central gateway and relational persistence.",
    tags: ["Java", "Spring Boot", "MySQL", "Eureka", "Puerta de enlace API"],
    tagsEn: ["Java", "Spring Boot", "MySQL", "Eureka", "API Gateway"],
    image:
      "https://images.unsplash.com/photo-1584257354413-32f8603c40fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMGFyY2hpdGVjdHVyZSUyMGJsdWUlMjBnbGFzcyUyMGV4dGVyaW9yfGVufDF8fHx8MTc5MTc2MTEyMnww&ixlib=rb-4.1.0&q=80&w=1080",
    credit: "Meritt Thomas / Unsplash",
    tone: "cyan",
    repositoryUrl: profile.github,
  },
]
