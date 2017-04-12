import React from "react";
import Showcase from "./Showcase";

const Section = ({ name, title, text, projects }) => (
  <section className={`sb-section ${name}`}>
    <article>
      <h1>{title}</h1>
      <div className="logo-container">
        <img src={`${name}.svg`} alt={title} />
      </div>
      {text.map(para => <p key={para}>{para}</p>)}
      {name === "code" ? <Showcase projects={projects} /> : null}
    </article>
  </section>
);

export default Section;
