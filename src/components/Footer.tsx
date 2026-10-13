import Brand from "./ui/Brand"

export default function Footer({ isSpanish }: { isSpanish: boolean }) {
  return (
    <footer>
      <Brand />
      <p>
        {isSpanish
          ? "Diseñando sistemas. Construyendo experiencias."
          : "Designing systems. Building experiences."}
      </p>
      <div>
        <span>© {new Date().getFullYear()}</span>
        <a href="#inicio">{isSpanish ? "Volver arriba" : "Back to top"} ↑</a>
      </div>
    </footer>
  )
}
