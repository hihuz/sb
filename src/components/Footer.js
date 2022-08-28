import React from "react";

function Footer({ content }) {
  return <footer dangerouslySetInnerHTML={{ __html: content }} />;
}

export default Footer;
