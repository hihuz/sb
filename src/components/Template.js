import React from "react";

const Template = ({ children }) => (
  <html lang="en">

    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Sylvain Boulade" />
      <link
        href="https://fonts.googleapis.com/css?family=Raleway"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="main.css" />
      <title>Sylvain {"'"}hihuz{"'"} Boulade</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        href="favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="favicon-16x16.png"
        sizes="16x16"
      />
      <link rel="manifest" href="manifest.json" />
      <meta name="theme-color" content="#333e4b" />
    </head>

    <body>
      {children}
      <script src="bundle.js" />
    </body>

  </html>
);

export default Template;
