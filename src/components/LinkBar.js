import React from "react";
import Link from "./Link";

const LinkBar = ({ links }) => (
  <div className="link-bar">
    {links.map(link => <Link {...link} />)}
  </div>
);

export default LinkBar;
