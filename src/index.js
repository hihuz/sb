import React from "react";
import ReactDOMServer from "react-dom/server";
import * as OfflinePluginRuntime from "offline-plugin/runtime";
import Template from "./components/Template";
import Page from "./components/Page";

OfflinePluginRuntime.install();

export default (locals, callback) => {
  const markup = ReactDOMServer.renderToStaticMarkup(
    <Template>
      <Page />
    </Template>
  );
  callback(null, markup);
};
