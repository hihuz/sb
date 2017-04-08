import React from "react";

const Section = ({ name, title, text }) => (
  <section className={`sb-section ${name}`}>
    <article>
      <h1>{title}</h1>
      {text.map(para => <p key={para}>{para}</p>)}
    </article>
  </section>
);

export default Section;
