import type { FormEvent } from "react"
import { profile } from "../data/profile"
import Icon from "./ui/Icon"

export default function ContactForm({ isSpanish }: { isSpanish: boolean }) {
  const sendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = encodeURIComponent(
      `${
        isSpanish ? "Contacto portafolio" : "Portfolio contact"
      } — ${data.get("name")}`,
    )
    const body = encodeURIComponent(
      `${data.get("message")}\n\n${
        isSpanish ? "De" : "From"
      }: ${data.get("email")}`,
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <form className="contact-form" onSubmit={sendMessage}>
      <div className="form-row">
        <label>
          <span>{isSpanish ? "Tu nombre" : "Your name"}</span>
          <input
            name="name"
            placeholder={
              isSpanish ? "Nombre y apellido" : "First and last name"
            }
            required
          />
        </label>
        <label>
          <span>{isSpanish ? "Tu email" : "Your email"}</span>
          <input
            name="email"
            type="email"
            placeholder={isSpanish ? "tu@email.com" : "you@email.com"}
            required
          />
        </label>
      </div>
      <label>
        <span>
          {isSpanish ? "Cuéntame sobre tu idea" : "Tell me about your idea"}
        </span>
        <textarea
          name="message"
          rows={5}
          placeholder={
            isSpanish
              ? "Proyecto, colaboración, oportunidad..."
              : "Project, collaboration, opportunity..."
          }
          required
        />
      </label>
      <button className="button primary" type="submit">
        {isSpanish ? "Enviar mensaje" : "Send message"}{" "}
        <Icon name="arrow" size={18} />
      </button>
    </form>
  )
}
