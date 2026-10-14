import Section from "../ui/Section";
import { skills } from "../../data/skills";

function Skills() {
  return (
    <Section id="skills" title="Skills" className="section-short">
      <div className="card-grid">
        {skills.map(({category, items}) => (
          <div className="card" key={category}>
            <h3>{category}</h3>
            <ul className="tags">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>       
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Skills