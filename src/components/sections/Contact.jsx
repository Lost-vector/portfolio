import Section from "../ui/Section";
import "./contact.css";


const EMAIL = "franck.t.alonso@gmail.com";
const LINKS = [{ label: "GitHub", href: "https://github.com/Lost-vector" } ]

function Contact() {
  return (
    <Section id="contact" title="Contact" className="section-short">
      <p className="contact-text">
        I'm open to new opportunities and happy to chat. You can reach me via mail.
      </p>
      <div className="button-row">
        <a className="button" href={`mailto:${EMAIL}`}>Say hello</a>
        {LINKS.map(({label, href}) => (
          <a className="button button-outline" href={href} key={label} target="_blank" rel="noreferrer">
            {label}
          </a>
        ))}
      </div>
    </Section>
  )
}

export default Contact