import React from "react";
import Intro from "./Intro";
import Section from "./Section";

function Main({ intro, articles }) {
  return (
    <main>
      <Intro {...intro} />
      {articles.map((article) => (
        <Section key={article.name} {...article} />
      ))}
    </main>
  );
}

export default Main;
