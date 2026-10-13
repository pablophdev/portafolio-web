import { profile } from "../../data/profile"
import ContactForm from "../ContactForm"
import Icon from "../ui/Icon"
import SocialLinks from "../ui/SocialLinks"

export default function Contact({ isSpanish }: { isSpanish: boolean }) {
  return (
    <section className="section contact" id="contacto">
      <div className="contact-shell reveal">
        <div className="contact-copy">
          <p className="eyebrow">
            <span />
            {isSpanish ? "Contacto" : "Contact"}
          </p>
          <h2>
            {isSpanish ? (
              <>
                Construyamos algo <em>extraordinario.</em>
              </>
            ) : (
              <>
                Let&apos;s build something <em>extraordinary.</em>
              </>
            )}
          </h2>
          <p>
            {isSpanish
              ? "¿Tienes una idea, un proyecto o una oportunidad de colaboración? Hablemos."
              : "Have an idea, a project or a collaboration opportunity? Let's talk."}
          </p>
          <a className="email-link" href={`mailto:${profile.email}`}>
            <span>
              <Icon name="mail" />
            </span>
            <div>
              <small>
                {isSpanish ? "Escríbeme directamente" : "Email me directly"}
              </small>
              <strong>{profile.email}</strong>
            </div>
            <Icon name="arrow" />
          </a>
          <div className="contact-socials">
            <SocialLinks />
          </div>
        </div>
        <ContactForm isSpanish={isSpanish} />
      </div>
    </section>
  )
}
