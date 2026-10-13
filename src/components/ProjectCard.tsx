import type { Project } from "../data/projects"
import Icon from "./ui/Icon"

interface ProjectCardProps {
  project: Project
  isSpanish: boolean
}

export default function ProjectCard({ project, isSpanish }: ProjectCardProps) {
  const isExternalProject = project.projectUrl?.startsWith("http")
  const projectDomain =
    isExternalProject && project.projectUrl
      ? new URL(project.projectUrl).hostname
      : `${project.title.toLowerCase().replaceAll(" ", "-")}.dev`

  return (
    <article className={`project-card reveal ${project.tone}`}>
      <div className="project-visual">
        <img
          src={project.image}
          alt={`${
            isSpanish ? "Vista conceptual de" : "Concept view of"
          } ${project.title}`}
        />
        <span className="photo-credit">
          {isSpanish ? "Foto" : "Photo"}: {project.credit}
        </span>
        <div className="visual-overlay" />
        <div className="project-index">{project.index}</div>
        <div className="mock-browser">
          <div>
            <i />
            <i />
            <i />
          </div>
          <span>{projectDomain}</span>
        </div>
      </div>
      <div className="project-content">
        <p className="project-type">
          {isSpanish ? project.subtitle : project.subtitleEn}
        </p>
        <h3>{project.title}</h3>
        <p>{isSpanish ? project.description : project.descriptionEn}</p>
        <div className="tag-row">
          {(isSpanish ? project.tags : project.tagsEn).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="project-actions">
          {project.projectUrl && (
            <a
              className="text-link"
              href={project.projectUrl}
              target={isExternalProject ? "_blank" : undefined}
              rel={isExternalProject ? "noreferrer" : undefined}
            >
              {isSpanish ? "Ver proyecto" : "View project"}{" "}
              <Icon name="external" size={17} />
            </a>
          )}
          <a
            className="text-link muted-link"
            href={project.repositoryUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="github" size={18} />{" "}
            {isSpanish ? "Repositorio" : "Repository"}
          </a>
        </div>
      </div>
    </article>
  )
}
