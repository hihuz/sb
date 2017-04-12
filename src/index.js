import React from "react";
import { render } from "react-dom";
import * as OfflinePluginRuntime from "offline-plugin/runtime";
import Page from "./components/Page";

OfflinePluginRuntime.install();

render(<Page />, document.getElementById("page"));
