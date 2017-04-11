import React from "react";

const Project = ({ id, name, desc, techs }) => (
  <a
    className="project"
    href={`https://github.com/hihuz/${id}`}
    style={{ backgroundImage: `url("/public/${id}.jpg")` }}
  >
    <div className="project-infos">
      <h2 className="project-name">{name}</h2>
      <p className="project-desc">
        {desc}
      </p>
      <div className="project-logos">
        {techs.map(tech => (
          <div className="project-tech" key={tech}>
            <img src={`../public/${tech}.png`} alt={tech} />{tech}
          </div>
        ))}
      </div>
    </div>
  </a>
);

export default Project;
