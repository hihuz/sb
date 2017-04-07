import React from "react";
import LinkBar from "./LinkBar";

const Intro = ({ title, text }) => (
  <section className="sb-section">
    <article className="intro">
      <h1>{title}</h1>
      {text.map(para => {
        const markup = { __html: para };
        return <h4 key={para} dangerouslySetInnerHTML={markup} />;
      })}
      <LinkBar />
    </article>
  </section>
);

export default Intro;
