import React from "react";
import Project from "./Project";

function Showcase({ projects }) {
  return (
    <div className="showcase">
      {projects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </div>
  );
}

export default Showcase;
