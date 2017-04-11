import React from "react";

const Project = ({ id, name, desc, techs }) => {
  const styles = { backgroundImage: `url("/public/${id}.jpg")` };
  return (
    <a className="project" href={`https://github.com/hihuz/${id}`} style={styles}>
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
};

export default Project;
