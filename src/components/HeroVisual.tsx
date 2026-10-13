import {
  featuredTechnologies,
  technologyIconBaseUrl,
} from "../data/technologies"
import Icon from "./ui/Icon"

export default function HeroVisual({ isSpanish }: { isSpanish: boolean }) {
  return (
    <div
      className="hero-visual reveal"
      aria-label={
        isSpanish
          ? "Visualización de arquitectura de software"
          : "Software architecture visualization"
      }
    >
      <div className="orbit orbit-one">
        <span />
      </div>
      <div className="orbit orbit-two">
        <span />
      </div>
      <div className="glass-sphere" />
      <div className="code-window">
        <div className="window-top">
          <div>
            <span />
            <span />
            <span />
          </div>
          <p>
            {isSpanish ? "ArquitecturaSistema.java" : "SystemArchitecture.java"}
          </p>
          <Icon name="code" size={16} />
        </div>
        <div className="code-body" aria-hidden="true">
          <p>
            <b>01</b>
            <span className="purple">@SpringBootApplication</span>
          </p>
          <p>
            <b>02</b>
            <span className="blue">public class</span>{" "}
            <span className="white">{isSpanish ? "Futuro" : "Future"}</span>{" "}
            {"{"}
          </p>
          <p>
            <b>03</b>&nbsp;&nbsp;
            <span className="blue">public static void</span>{" "}
            <span className="cyan">{isSpanish ? "construir" : "build"}</span>(){" "}
            {"{"}
          </p>
          <p>
            <b>04</b>&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="white">
              {isSpanish ? "Arquitectura" : "Architecture"}
            </span>
            .
            <span className="cyan">{isSpanish ? "escalable" : "scalable"}</span>
            ();
          </p>
          <p>
            <b>05</b>&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="white">
              {isSpanish ? "Experiencia" : "Experience"}
            </span>
            .
            <span className="cyan">
              {isSpanish ? "excepcional" : "delightful"}
            </span>
            ();
          </p>
          <p>
            <b>06</b>&nbsp;&nbsp;{"}"}
          </p>
          <p>
            <b>07</b>
            {"}"}
          </p>
        </div>
        <div className="code-footer">
          <span>● Spring Boot</span>
          <span>UTF-8</span>
        </div>
      </div>
      {featuredTechnologies.map((technology) => (
        <div
          className={`floating-chip ${technology.className}`}
          key={technology.name}
        >
          <img src={`${technologyIconBaseUrl}${technology.icon}`} alt="" />
          {technology.name}
        </div>
      ))}
    </div>
  )
}
