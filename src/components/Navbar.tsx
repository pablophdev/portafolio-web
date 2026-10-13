import { useState } from "react"
import { navItems } from "../data/navigation"
import useTheme from "../hooks/useTheme"
import Brand from "./ui/Brand"
import Icon from "./ui/Icon"

interface NavbarProps {
  isSpanish: boolean
  onLanguageChange: () => void
}

export default function Navbar({ isSpanish, onLanguageChange }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <nav
      className="nav-shell"
      aria-label={isSpanish ? "Navegación principal" : "Main navigation"}
    >
      <Brand onClick={() => setMenuOpen(false)} />
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        {navItems.map(({ label, labelEn, href }) => (
          <a key={href} href={href} onClick={() => setMenuOpen(false)}>
            {isSpanish ? label : labelEn}
          </a>
        ))}
      </div>
      <a className="nav-cta" href="#contacto">
        <span className="status-dot" />{" "}
        {isSpanish ? "Conversemos" : "Let's talk"}
      </a>
      <button
        className="language-button"
        onClick={onLanguageChange}
        aria-label={
          isSpanish ? "Cambiar idioma a inglés" : "Switch language to Spanish"
        }
        title={isSpanish ? "English" : "Español"}
      >
        <span className={isSpanish ? "active" : ""}>ES</span>
        <i />
        <span className={!isSpanish ? "active" : ""}>EN</span>
      </button>
      <button
        className="theme-button"
        onClick={toggleTheme}
        aria-label={
          isSpanish
            ? `Cambiar a modo ${theme === "dark" ? "claro" : "oscuro"}`
            : `Switch to ${theme === "dark" ? "light" : "dark"} mode`
        }
        title={
          isSpanish
            ? `Modo ${theme === "dark" ? "claro" : "oscuro"}`
            : `${theme === "dark" ? "Light" : "Dark"} mode`
        }
      >
        <Icon name={theme === "dark" ? "sun" : "moon"} size={18} />
      </button>
      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={isSpanish ? "Abrir navegación" : "Open navigation"}
        aria-expanded={menuOpen}
      >
        <Icon name={menuOpen ? "close" : "menu"} />
      </button>
    </nav>
  )
}
