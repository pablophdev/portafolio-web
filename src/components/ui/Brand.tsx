import { profile } from "../../data/profile"

export default function Brand({ onClick }: { onClick?: () => void }) {
  return (
    <a className="brand" href="#inicio" onClick={onClick}>
      <span className="brand-mark">{profile.brandMark}</span>
      <span>{profile.name}</span>
    </a>
  )
}
