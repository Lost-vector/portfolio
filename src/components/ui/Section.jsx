import Reveal from "./Reveal"

function Section({ id, title, className, children }) {
  return (
    <section id={id} className={className}>
      <Reveal>
        <h2>{title}</h2>
        {children}
      </Reveal>
    </section>
  )
}

export default Section