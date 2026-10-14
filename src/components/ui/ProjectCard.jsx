import "./projectCard.css" 

function ProjectCard({title, description, tags, github, demo}) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{description}</p>

      <ul className="tags">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      <div className="card-links">
        {demo && (
          <a href={demo} target="_blank" rel="noreferrer">Demo</a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noreferrer">Github</a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard