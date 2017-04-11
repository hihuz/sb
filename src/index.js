import React from "react";
import { render } from "react-dom";
import * as OfflinePluginRuntime from "offline-plugin/runtime";
import Page from "./components/Page";

OfflinePluginRuntime.install();

render(<Page />, document.getElementById("page"));

/*
- add a more visible separation for showcase projects : turn the images to grey instead of full colors ?
- test / verify the added colors
- add a slight bit of accent color on the main screen, and maybe on the showcase projects ?
*/
