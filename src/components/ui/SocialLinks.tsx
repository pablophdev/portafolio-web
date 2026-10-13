import { socialLinks } from "../../data/profile"
import Icon from "./Icon"

export default function SocialLinks() {
  return (
    <>
      {socialLinks.map((link) => (
        <a key={link.icon} href={link.href} target="_blank" rel="noreferrer">
          <Icon name={link.icon} /> {link.label}
        </a>
      ))}
    </>
  )
}
