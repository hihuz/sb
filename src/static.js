import React from "react";
import ReactDOMServer from "react-dom/server";
import Template from "./components/Template";
import Page from "./components/Page";

export default (locals, callback) => {
  const markup = ReactDOMServer.renderToStaticMarkup(
    <Template>
      <Page />
    </Template>
  );
  callback(null, markup);
};
