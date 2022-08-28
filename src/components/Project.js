import React from "react";

function Project({ id, title, desc, techs, projectUrl }) {
  const styles = { backgroundImage: `url("${id}.jpg")` };
  return (
    <a className="project" href={`https://github.com/${projectUrl}`} style={styles}>
      <div className="project-infos">
        <h2 className="project-title">{title}</h2>
        <p className="project-desc">{desc}</p>
        <div className="project-logos">
          {techs.map((tech) => (
            <div className="project-tech" key={tech}>
              <img src={`${tech}.png`} alt={tech} />
              {tech}
            </div>
          ))}
        </div>
      </div>
    </a>
  );
}

export default Project;
