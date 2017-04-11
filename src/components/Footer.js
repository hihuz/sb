import React from "react";
import content from "../content/content.json";

const Footer = () => <footer dangerouslySetInnerHTML={{ __html: content.footer }} />;

export default Footer;
