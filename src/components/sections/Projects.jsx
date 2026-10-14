import { useState } from "react";
import Section from "../ui/Section";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";
import "./projects.css";

const allTags = ["All", ...new Set(projects.flatMap((project) => project.tags))];

function Projects() {
  const [activeTag, setActiveTag] = useState("All");

  const visibleProjects = activeTag === "All" ? projects : projects.filter((project) => project.tags.includes(activeTag));
  
  return (
    <Section id="projects" title="Projects">
      <div className="filters">
        {allTags.map((tag) => (
          <button 
            key={tag} 
            className={tag === activeTag ? "filter active" : "filter"}
            onClick={() => setActiveTag(tag)}
          >
            {tag} { tag === "All" ? `(${projects.length})` : ""}
          </button>
        ))}
      </div>

      <div className="card-grid">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.title} {...project}/>
        ))}
      </div>
    </Section>
  )
}

export default Projects