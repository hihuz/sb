import React from "react";

const Link = ({ url, viewbox, path }) => (
  <div className="link-container">
    <a href={url}>
      <svg viewBox={viewbox}>
        <path d={path} />
      </svg>
    </a>
  </div>
);

export default Link;
