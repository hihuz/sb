## Random thoughts / things related to this project

### Prettier

This new tool has been fairly popular recently and I have seen it recommended a lot so I gave it a try.
I can honestly say that it was a very good experience.
I tried it paired with VSCode and had the auto formatting on save.
This was really saving me time fixing lint style errors, indentation and what not.

The only thing that I found a bit annoying is that it was auto self-closing jsx tags that were empty (this is expected). I have a habit to create tags, leave them empty for later and hit ctrl + s, Prettier kinda broke what I want to do but mostly I can just save less often and I will be fine. 
I could also not format on save but have a specific shortcut to format that I can press every now and then. I have seen people do that and it could be better for my style.

Anyway, I think I will use this again it was overall very useful.

I have seen that the latest release is a stable v1 and they added some options, most notably the ability to not add semi-colons. I don't really have a strong opinion about this but this is cool to have the choice.


### Flow

This is gonna be a bit short because after trying it out I ended up removing it. Not that it wasn't useful I think it is a good idea to experiment with it but this project is really too simple to notice any benefit.
I am more familiar with the setup and syntax so I will be able to use this for another more complex project.

I should also mention that I had a bit of a hard time making it work on VSCode, firstly I had to remove the javascript.validate option as it was raising errors, and secondly I couldn't figure out how to get correct syntax highlighting. I'll give it another try though.


### Webpack Offline Plugin

As I wanted to test to add some PWA features I used this plugin for the service worker. It was really easy to use in this case, just added the plugin to the webpack config and a simple call in my js entry file.
That's all it took and it works great, pretty neat.

When i'll use it on bigger projects I will most likely need to dig a bit deeper on the options / customization.


### Visual Studio Code

So along with prettier I tried VS code this time and I found it to be a very solid editor. I swapped a few shortcuts to match my usual sublime config, but not many addons were needed, the editor is pretty much ready to go out of the box.
the intellisense autocompletion is really good too, much better than what I had on sublime.


### Netlify

I chose netlify to host my project as I heard good things about them and I was not disappointed, it is really easy to setup, has free tier https, easy to set custom domain, and their CDN is really fast (as can be seen from timeline / lighthouse)
Will most certainly use again if they don't change their free tier, and I may try the paid tier at some point.

They also offer "pro" tier for open source projects but I didn't try to apply for it yet.
