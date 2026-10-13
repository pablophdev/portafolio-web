import { useEffect, useRef, useState } from "react"

type Language = "es" | "en"

export default function useLanguage() {
  const [language, setLanguage] = useState<Language>(() =>
    localStorage.getItem("portfolio-language") === "en" ? "en" : "es",
  )
  const [languageChanging, setLanguageChanging] = useState(false)
  const languageTimer = useRef<number | null>(null)

  useEffect(() => {
    document.documentElement.lang = language
    localStorage.setItem("portfolio-language", language)
  }, [language])

  useEffect(
    () => () => {
      if (languageTimer.current !== null)
        window.clearTimeout(languageTimer.current)
    },
    [],
  )

  const changeLanguage = () => {
    if (languageChanging) return

    setLanguageChanging(true)
    languageTimer.current = window.setTimeout(() => {
      setLanguage((currentLanguage) => (currentLanguage === "es" ? "en" : "es"))
      setLanguageChanging(false)
      languageTimer.current = null
    }, 160)
  }

  return {
    language,
    isSpanish: language === "es",
    languageChanging,
    changeLanguage,
  }
}
