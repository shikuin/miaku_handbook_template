### What my app should do?
- Language: Handle switching between languages and easily adding them
- Configure: Easy add MDX and paths, themes, tailwind configuration
- Contribution: Take documentation (explain code, configuration, be ready for issues)
- Modern design: TW + Chakra UI

### Paths

[doc]
- adaptivity - for changing screen resolution
- design - concept, chakra UI
- dynamic_pages - [lang]/[slug...] and how it works
- syntax_highlighter - setup of prism.js and adding of highlight
- themes - tw setup config, prism-theme

[src]

- ?

### TODOs

Main
- Determine what languages there are in [public/documentation/[lang]], it's wrapper
- getStaticPaths, getStaticProps for MDX
- Add tailwind configuration, dont configure
- Add MDX configuration and configure
- Add dynamic pages [lang]/[slug...]
- Add simple theme-tw configuration
- Add prism.js highlight for test
- Add prism-theme for prism.js

Design
- Add buttons below (to continue reading for the future)
- Add left bar with list of pages  
- Add in Main Page read in [lang...]
- Add in Main Page button for Start reading

Adaptivity 
- Make adaptivity for 1920x1080 (learn more)
- Make hook for getting resolution screen

Themes 
- Find somewhere... colors (examples) and add them to tailwind config of theme
- Add prism-theme to tailwind config when switching

Dynamic pages
- Add lazy import for mdx 

Debugging and Testing
- Add Bundle analyzer 








