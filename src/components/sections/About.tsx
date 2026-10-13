import { principles, profile } from "../../data/profile"

export default function About({ isSpanish }: { isSpanish: boolean }) {
  return (
    <section className="section about" id="sobre-mi">
      <div className="about-stage">
        <aside className="profile-visual reveal">
          <div className="profile-topline">
            <span>{isSpanish ? "Perfil" : "Profile"} / 01</span>
            <span>{profile.country}</span>
          </div>
          <div className="profile-orb">
            <span className="profile-initials">{profile.initials}</span>
            <i className="orb-ring ring-one" />
            <i className="orb-ring ring-two" />
          </div>
          <div className="profile-caption">
            <span className="status-dot" />
            <div>
              <strong>{profile.name}</strong>
              <small>
                {isSpanish ? "Desarrollador de software" : "Software Developer"}
              </small>
            </div>
          </div>
        </aside>
        <div className="about-narrative">
          <p className="eyebrow reveal">
            <span />
            {isSpanish ? "Sobre mí" : "About me"}
          </p>
          <h2 className="reveal">
            {isSpanish ? (
              <>
                Código con propósito.
                <br />
                <em>Sistemas con futuro.</em>
              </>
            ) : (
              <>
                Code with purpose.
                <br />
                <em>Systems built for tomorrow.</em>
              </>
            )}
          </h2>
          <div className="about-intro reveal">
            <p className="lead">
              {isSpanish
                ? "Soy estudiante de Ingeniería en Informática en Duoc UC y disfruto convertir ideas complejas en soluciones digitales claras."
                : "I am a Computer Engineering student at Duoc UC who enjoys turning complex ideas into clear digital solutions."}
            </p>
            <p>
              {isSpanish
                ? "Mi foco está en el desarrollo del lado del servidor y de extremo a extremo. Trabajo con Spring Boot, React, MySQL y Docker, mientras profundizo en arquitectura de software, computación en la nube y sistemas escalables."
                : "My focus is Backend and Full Stack development. I work with Spring Boot, React, MySQL and Docker while deepening my knowledge of software architecture, cloud computing and scalable systems."}
            </p>
          </div>
          <div className="principles reveal">
            {principles.map((principle) => (
              <article key={principle.number}>
                <span>{principle.number}</span>
                <div>
                  <h3>{isSpanish ? principle.title : principle.titleEn}</h3>
                  <p>
                    {isSpanish
                      ? principle.description
                      : principle.descriptionEn}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
