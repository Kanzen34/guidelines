---
date: 2024-06-19
category:
  - Frontend
  - Backend
  - Developpement
tag:
  - General
author: Nicolas Fradin
excerpt: general
---

# General rules

## Maintain a README file
- Every project should have a `README.md` file (or just `README`).
- Every developer should read this file, and update it if needed.
- Use [Markdown syntax][markdown] for better readability in Bitbucket, GitHub, etc.

This `README.md` should exist at the root of the repository and give information on:

- What the project is (client, site/app name)
- How to install the project on a developer’s machine
- How to run development tasks (e.g. import data, compile frontend assets)
- How to deploy the project

If this documentation gets too big, you can break it into several files for specialized topics:

```bash
README.md
doc/
    INSTALL.md
    FRONTEND.md
    DEPLOYMENT.md
```

Finally, if you set up a project from a boilerplate, and that boilerplate already has its own `README` file, see if you can remove it or rename it.

---

## Use EditorConfig
Frontend code files should be:

- encoded as UTF-8,
- with `LF` end of lines,
- and spaces for indents.

We use the [EditorConfig format][editorconfig] to harmonize indentation and file format in a project. For this to work, we need two things:

- A `.editorconfig` file at the root of each project.
- Your editor or IDE should have an EditorConfig plugin.

Please verify both points now if you’re not sure.
There are EditorConfig plugins for most code editors:

- [PhpStorm][PhpStorm]
- [VS Code][vscode]
- [Atom][atom]
- ...

Here’s a reference .editorconfig file for new projects:

```bash
# http://EditorConfig.org
root = true

[*]
charset = utf-8
end_of_line = lf
indent_style = space
indent_size = 2

[*.{php,py}]
indent_size = 4
```

---

## Use the DRY principle
Don’t Repeat Yourself: avoid code that is very similar in different places in the project.

In particular, avoid copying and pasting code in different places! Duplicated code is hard to maintain: you have to do the changes in 2, 5 or 10 places, and test each change.

- Templating: use includes, partials, macros…
- Styles: use components, utility classes, mixins…
- JavaScript: use functions, modules, components…

**This is not an absolute rule!** For example, if you need to make a variant that can evolve without impacting the first feature, some copy-pasting can be justified.

---

## Clean up your code
Keep the codebase short and avoid unused code.

- Remove unused files, failed experiments, etc.
- HTML: avoid unnecessary elements and attributes
- CSS: avoid unused selectors, and useless properties
- JS, PHP, etc.: look out for unused variables and functions


[markdown]: https://commonmark.org/help/
[editorconfig]: https://editorconfig.org/
[PhpStorm]: https://plugins.jetbrains.com/plugin/7294-editorconfig
[vscode]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[atom]: https://atom.io/packages/editorconfig