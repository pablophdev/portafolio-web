import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./components/sections/Hero"
import About from "./components/sections/About"
import Technologies from "./components/sections/Technologies"
import Projects from "./components/sections/Projects"
import Experience from "./components/sections/Experience"
import Contact from "./components/sections/Contact"
import useLanguage from "./hooks/useLanguage"
import useScrollReveal from "./hooks/useScrollReveal"

export default function App() {
  const { isSpanish, languageChanging, changeLanguage } = useLanguage()
  useScrollReveal()

  return (
    <main
      className={languageChanging ? "language-changing" : ""}
      aria-busy={languageChanging}
    >
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <Navbar isSpanish={isSpanish} onLanguageChange={changeLanguage} />
      <Hero isSpanish={isSpanish} />
      <About isSpanish={isSpanish} />
      <Technologies isSpanish={isSpanish} />
      <Projects isSpanish={isSpanish} />
      <Experience isSpanish={isSpanish} />
      <Contact isSpanish={isSpanish} />
      <Footer isSpanish={isSpanish} />
    </main>
  )
}
