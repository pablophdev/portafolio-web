import { projects } from "../../data/projects"
import ProjectCard from "../ProjectCard"
import SectionTitle from "../ui/SectionTitle"

export default function Projects({ isSpanish }: { isSpanish: boolean }) {
  return (
    <section className="section work" id="proyectos">
      <SectionTitle
        eyebrow={isSpanish ? "Proyectos destacados" : "Featured projects"}
        title={isSpanish ? "Proyectos seleccionados." : "Selected work."}
        copy={
          isSpanish
            ? "Sistemas diseñados con intención: desde la arquitectura hasta el último detalle de interfaz."
            : "Systems designed with intention, from architecture to the final interface detail."
        }
      />
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard
            key={project.index}
            project={project}
            isSpanish={isSpanish}
          />
        ))}
      </div>
    </section>
  )
}
