import React from "react";
import Project from "./Project";

const Showcase = ({ projects }) => (
  <div className="showcase">
    {projects.map(project => <Project key={project.id} {...project} />)}
  </div>
);

export default Showcase;
