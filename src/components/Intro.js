import React from "react";
import LinkBar from "./LinkBar";

const Intro = ({ title, text, greetings, links }) => (
  <section className="sb-intro">
    <article className="intro">
      <h1 className="intro-title">{title}</h1>
      <div className="logo-container">
        <img src="hihuz.jpg" alt="hihuz" />
      </div>
      {text.map(para => {
        const markup = { __html: para };
        return <h4 className="intro-text" key={para} dangerouslySetInnerHTML={markup} />;
      })}
      <h4 className="intro-text">{greetings}</h4>
      <LinkBar links={links} />
    </article>
  </section>
);

export default Intro;
