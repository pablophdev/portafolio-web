import { technologies, technologyIconBaseUrl } from "../../data/technologies"
import SectionTitle from "../ui/SectionTitle"

export default function Technologies({ isSpanish }: { isSpanish: boolean }) {
  return (
    <section className="section stack" id="tecnologias">
      <SectionTitle
        eyebrow={isSpanish ? "Tecnologías" : "Technologies"}
        title={
          isSpanish
            ? "Herramientas para una ingeniería con propósito."
            : "Tools for thoughtful engineering."
        }
        copy={
          isSpanish
            ? "Un conjunto tecnológico moderno para diseñar, construir y desplegar productos digitales de extremo a extremo."
            : "A modern stack for designing, building and deploying end-to-end digital products."
        }
      />
      <div className="stack-grid">
        {technologies.map((group) => (
          <article className="stack-group glass-card reveal" key={group.number}>
            <header>
              <span>{group.number}</span>
              <h3>{isSpanish ? group.category : group.categoryEn}</h3>
            </header>
            <div className="tech-list">
              {group.items.map(({ name, icon }) => (
                <div className="tech-item" key={name}>
                  <span className="tech-icon">
                    <img src={`${technologyIconBaseUrl}${icon}`} alt="" />
                  </span>
                  <strong>{name}</strong>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
