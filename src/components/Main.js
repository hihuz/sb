import React from "react";
import Intro from "./Intro";
import Section from "./Section";

const Main = ({ intro, articles }) => (
  <main>
    <Intro {...intro} />
    {articles.map(article => <Section key={article.name} {...article} />)}
  </main>
);

export default Main;
