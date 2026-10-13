import Icon from "../ui/Icon"
import SectionTitle from "../ui/SectionTitle"

export default function Experience({ isSpanish }: { isSpanish: boolean }) {
  return (
    <section className="section journey" id="experiencia">
      <SectionTitle
        eyebrow={isSpanish ? "Trayectoria" : "Journey"}
        title={
          isSpanish
            ? "Siempre aprendiendo. Siempre construyendo."
            : "Always learning. Always building."
        }
        copy={
          isSpanish
            ? "Una historia en progreso, impulsada por curiosidad técnica y mejora continua."
            : "A story in progress, driven by technical curiosity and continuous improvement."
        }
      />
      <div className="timeline">
        <article className="timeline-item reveal">
          <div className="timeline-marker">
            <span />
          </div>
          <div className="timeline-date">
            {isSpanish ? "Actualidad" : "Present"}
          </div>
          <div className="timeline-card glass-card">
            <span className="timeline-kind">
              {isSpanish ? "Formación académica" : "Education"}
            </span>
            <h3>
              {isSpanish ? "Ingeniería en Informática" : "Computer Engineering"}
            </h3>
            <p className="institution">Duoc UC · Chile</p>
            <p>
              {isSpanish
                ? "Formación orientada al desarrollo de software, bases de datos, arquitectura de sistemas y prácticas modernas de ingeniería."
                : "Education focused on software development, databases, systems architecture and modern engineering practices."}
            </p>
            <div className="tag-row">
              <span>
                {isSpanish ? "Ingeniería de software" : "Software Engineering"}
              </span>
              <span>{isSpanish ? "Desarrollo backend" : "Backend"}</span>
              <span>{isSpanish ? "Bases de datos" : "Databases"}</span>
            </div>
          </div>
        </article>
        <article className="timeline-item future reveal">
          <div className="timeline-marker">
            <span />
          </div>
          <div className="timeline-date">
            {isSpanish ? "Próximo capítulo" : "Next chapter"}
          </div>
          <div className="timeline-card glass-card">
            <span className="timeline-kind">
              {isSpanish
                ? "Experiencia profesional"
                : "Professional experience"}
            </span>
            <h3>
              {isSpanish
                ? "Construyendo lo que sigue"
                : "Building what comes next"}
            </h3>
            <p>
              {isSpanish
                ? "Espacio preparado para futuros roles, colaboraciones y certificaciones verificadas."
                : "A space prepared for future roles, collaborations and verified certifications."}
            </p>
            <a className="text-link" href="#contacto">
              {isSpanish ? "Iniciar una conversación" : "Start a conversation"}{" "}
              <Icon name="arrow" size={17} />
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}
