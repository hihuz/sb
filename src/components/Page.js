import React from "react";
import content from "../content/content.json";
import Main from "./Main";
import Footer from "./Footer";
import "../styles/main.scss";

const Page = () => (
  <div>
    <Main intro={content.intro} articles={content.articles} />
    <Footer content={content.footer} />
  </div>
);

export default Page;
