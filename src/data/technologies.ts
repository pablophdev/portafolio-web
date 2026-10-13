export const technologyIconBaseUrl =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/"

export const technologies = [
  {
    category: "Desarrollo backend",
    categoryEn: "Backend",
    number: "01",
    items: [
      { name: "Java", icon: "java/java-original.svg" },
      { name: "Spring Boot", icon: "spring/spring-original.svg" },
      { name: "Kotlin", icon: "kotlin/kotlin-original.svg" },
      { name: "Python", icon: "python/python-original.svg" },
    ],
  },
  {
    category: "Desarrollo frontend",
    categoryEn: "Frontend",
    number: "02",
    items: [
      { name: "React", icon: "react/react-original.svg" },
      { name: "JavaScript", icon: "javascript/javascript-original.svg" },
      { name: "HTML5", icon: "html5/html5-original.svg" },
      { name: "CSS3", icon: "css3/css3-original.svg" },
      { name: "Tailwind CSS", icon: "tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    category: "Datos",
    categoryEn: "Data",
    number: "03",
    items: [
      { name: "MySQL", icon: "mysql/mysql-original.svg" },
      { name: "Oracle", icon: "oracle/oracle-original.svg" },
    ],
  },
  {
    category: "DevOps y herramientas",
    categoryEn: "DevOps & Tools",
    number: "04",
    items: [
      { name: "Docker", icon: "docker/docker-original.svg" },
      { name: "Git", icon: "git/git-original.svg" },
      { name: "GitHub", icon: "github/github-original.svg" },
      { name: "Linux", icon: "linux/linux-original.svg" },
      { name: "Postman", icon: "postman/postman-original.svg" },
    ],
  },
]

export const featuredTechnologies = [
  { name: "Java", icon: "java/java-original.svg", className: "chip-java" },
  { name: "React", icon: "react/react-original.svg", className: "chip-react" },
  {
    name: "Docker",
    icon: "docker/docker-original.svg",
    className: "chip-docker",
  },
]
