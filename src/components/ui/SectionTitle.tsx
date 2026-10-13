interface SectionTitleProps {
  eyebrow: string
  title: string
  copy?: string
}

export default function SectionTitle({
  eyebrow,
  title,
  copy,
}: SectionTitleProps) {
  return (
    <header className="section-heading reveal">
      <p className="eyebrow">
        <span />
        {eyebrow}
      </p>
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </header>
  )
}
