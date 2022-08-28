import React from "react";
import Link from "./Link";

function LinkBar({ links }) {
  return (
    <div className="link-bar">
      {links.map((link) => (
        <Link {...link} key={link} />
      ))}
    </div>
  );
}

export default LinkBar;
