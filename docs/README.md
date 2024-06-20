---
home: false
title: Home
layout: HomeLayout
---

# PEAKS Guidelines

Here will be (I hope ^^), the work of the collaboration on many developpers who
shared through those guidelines the good practises, warnings, etc that they have
encountered during their developper journey.

## Intro

The website is build on [Vuepress][vuepress] and use the [default theme][defaulttheme].
All templates are written in `markdown` and `yaml`. Vuepress use [markdownit][markdownit]
The rest is powered by `Vue` :
- Layouts
- Components
- Router
- ...

## Requirements 

- `ndoeJS`
- `VueJs`
- Any IDE
- An installation package manager such as `npm`, `yarn`,..
- `nvm` or equivalent could be usefull  

## Install

Clone the project on [my gitHub][kanzengit] (should go to gitlab)
```bash
# For ssh
git clone git@github.com:Kanzen34/guidelines.git

# For https
git clone https://github.com/Kanzen34/guidelines.git
```

then 

```bash
# Go to the project /
cd guidelines

# isntall all packages
npm i 

# run dev server
npm run docs:dev
```

[Vuepress]: https://vuepress.vuejs.org/
[defaulttheme]: https://ecosystem.vuejs.press/themes/default/config.html
[markdownit]: https://github.com/markdown-it/markdown-it#init-with-presets-and-options
[kanzengit]: https://github.com/Kanzen34/guidelines