import React from "react";

const Link = ({ url, name, viewbox, path }) => (
  <div className="link-container">
    <a href={url} title={name}>
      <svg viewBox={viewbox} role="presentation" focusable="false">
        <path d={path} />
      </svg>
    </a>
  </div>
);

export default Link;
