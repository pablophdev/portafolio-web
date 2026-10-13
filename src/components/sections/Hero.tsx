import { profile } from "../../data/profile"
import Icon from "../ui/Icon"
import SocialLinks from "../ui/SocialLinks"
import HeroVisual from "../HeroVisual"

export default function Hero({ isSpanish }: { isSpanish: boolean }) {
  return (
    <section className="hero section" id="inicio">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="availability reveal">
            <span className="status-dot" />
            {isSpanish
              ? "Abierto a conectar y crear"
              : "Open to connect and create"}
            <span className="availability-line" />
            {profile.countryCode}
          </div>
          <h1 className="reveal">
            {isSpanish ? (
              <>
                Construyendo experiencias digitales{" "}
                <span>y sistemas escalables.</span>
              </>
            ) : (
              <>
                Building digital experiences{" "}
                <span>&amp; scalable systems.</span>
              </>
            )}
          </h1>
          <p className="hero-description reveal">
            {isSpanish
              ? "Desarrollador de software enfocado en construir aplicaciones modernas, arquitecturas escalables y experiencias digitales de alto rendimiento."
              : "Software Developer focused on building modern applications, scalable architectures and high-performance digital experiences."}
          </p>
          <div className="hero-actions reveal">
            <a className="button primary" href="#proyectos">
              {isSpanish ? "Explorar proyectos" : "Explore projects"}{" "}
              <Icon name="arrow" size={18} />
            </a>
            <a className="button secondary" href="#contacto">
              {isSpanish ? "Contactarme" : "Contact me"}
            </a>
          </div>
          <div className="social-row reveal">
            <span>{isSpanish ? "Encuéntrame en" : "Find me on"}</span>
            <SocialLinks />
          </div>
        </div>
        <HeroVisual isSpanish={isSpanish} />
      </div>
      <div className="scroll-cue">
        <span>{isSpanish ? "Desliza para explorar" : "Scroll to explore"}</span>
        <i />
      </div>
    </section>
  )
}
