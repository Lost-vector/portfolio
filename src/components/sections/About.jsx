import Section from "../ui/Section";
import "./about.css";

function About() {
  return (
    <Section id="about" title="About">
      <div className="about-grid">
        <div>
          <p>Write your first paragraph here: who you are and what you do.</p>
          <p>Write a second one: what you're learning or what you enjoy building.</p>
        </div>
        <div className="avatar" aria-hidden="true">YN</div>
        {/* <img className="avatar" src="/me.jpg" alt="Profile picture" /> */}
      </div>
    </Section>
  )
}

export default About