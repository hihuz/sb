# sb

This repo contains the code for my current homepage.
The site is available here and hosted by Netlify : [https://www.sylvainboulade.com](https://www.sylvainboulade.com)

### React for a simple web page ?

Yes it can look like overkill, but I wanted to take this as an opportunity to try out a few javascript tools that were on my mind (namely [Prettier](https://github.com/prettier/prettier) and [Flow](https://flow.org/)).

Also thanks to a simple webpack plugin ([static-site-generator-webpack-plugin](https://github.com/markdalgleish/static-site-generator-webpack-plugin)), the html is generated at build time from my react components and the only js loaded in the client is the necessary code for the Service Worker ([offline-plugin](https://github.com/NekR/offline-plugin)), so the page loads fairly fast and the site is actually a PWA and scores 100 on Lighthouse :
![Lighthouse screenshot](https://raw.githubusercontent.com/hihuz/sb/master/public/sb-lighthouse.jpg "Lighthouse screenshot")

Well of course it isn't too hard to achieve on such a small site but it was a good way to get started with the tooling around PWA features.

You can read about what I learned on this project [here](/THOUGHTS.md).
