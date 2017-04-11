import React from "react";
import content from "../content/content.json";
import Intro from "./Intro";
import Section from "./Section";

const Main = () => (
  <main>
    <Intro {...content.intro} />
    {content.articles.map(article => <Section key={article.name} {...article} />)}
  </main>
);

export default Main;
