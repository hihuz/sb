import React from "react";
import Showcase from "./Showcase";

const Section = ({ name, title, text }) => (
  <section className={`sb-section ${name}`}>
    <article>
      <h1>{title}</h1>
      <div className="logo-container">
        <img src={`../public/${name}.svg`} alt={title} />
      </div>
      {text.map(para => <p key={para}>{para}</p>)}
      {name === "code" ? <Showcase /> : null}
    </article>
  </section>
);

export default Section;
