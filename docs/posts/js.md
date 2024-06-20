---
date: 2024-06-19
category:
  - Frontend
  - Guidelines
tag:
  - javascript
author: Nicolas Fradin
excerpt: js
---

# Javascript

## Formatting
Follow the formatting style used by [Prettier][prettier] (with default settings).

- Indent with 2 spaces
- Use semicolons (`;`) at the end of statements
- Use double quotes for strings
- Keep opening braces (`{`) on the current line, with one space before, and closing braces (`}`) on a new line

Recommended: install Prettier (`npm i -g prettier` or [install for your editor][prettierisntall]) and use it to automatically reformat your JS code.

```js
const settings = {
  indentSize: 2,
  semicolons: true
};

console.log(opinion(settings.semicolons));

function opinion(pref) {
  let opinion = "Semicolons are ";
  if (pref === true) {
    opinion += "alright, mate.";
  } else if (pref === false) {
    opinion += "superfluous.";
  } else {
    opinion = "What is a semicolon?";
  }
  return opinion;
}
```

---

## Comments
- Use single-line comments (`// …`) to comment on the next line or the next few lines of code.
- Use a [JSDoc-style][jsdoc] comment (`/** … */`) before a complex function or a module.

```js
/**
 * Make a header "sticky"
 * (Adds/removes a class when scrolling)
 */
function stickifyHeader(element, activeClass, offset) {
  // 250ms not working when scrolling too quicky
  const latency = 100;
  …
}
```

---

## Naming things
- Use `lowerCamelCase` for names: variables, functions, object keys…
- Use `UpperCamelCase` for classes, and for UI components (in React, Vue.js, etc.).
- Use descriptive names rather than generic ones.

```js

// Use descriptive names
const element1 = document.querySelector(…);
const element2 = document.querySelector(…);
const button = document.querySelector(…);
const container = document.querySelector(…);
// For names with 2 or 3 words,
// use lowerCamelCase style
const userSettings = {
  limit: 20,
  showInvisible: false
};

function validateSettings() {
  …
}

// And UpperCamelCase for classes
class MobileHeader extends React.Component {
  …
}
```

---

## Global variables
Global variables from a script can clash with other scripts in the page, creating subtle bugs.

- Avoid creating global variables; use the [IIFE pattern or ES6 modules](#iife) to isolate variables
- If you need to set a parameter for a script in your HTML code, use data attributes

### Variables and the window object
In web pages, global variables are “hosted” by the `window` object. This means that a global variable `myVar` can also be accessed at `window.myVar`.

Variables become global when:

- Assigning explicitely: window.myVar = "hello";
- Declaring a variable at the top level of a script
- Forgetting the `var` / `const` / `let` keyword

```js
// top level variables are global
var count = 50;
console.log(count); // 50
console.log(window.count); // 50

// variables in functions are not,
// UNLESS you forget the var keyword
function showCookieBanner() {
  var banner = document.querySelector(…);
  visible = !banner.hidden;
}
```

```html
<!-- using data attributes for settings -->
<script>var sliderItems = 2;</script>
<div class="Slider" data-items="2">
  …
</div>
```

---

## Modules

- Create one JS file for each major feature or UI part.
- Wrap the contents of each file in an IIFE manually, or use a bundler such as Browserify, Rollup or webpack.

### <a name="iife"></a> Writing IIFEs by hand
The immediately-invoked function expression (IIFE) pattern prevents us from creating global variables. The `()` after the function executes it (that’s the “immediately-invoked” part), otherwise our code would not run.

```js
// my-module.js
!function() {
    // only exists in the scope of the parent function
  var local = "Hot variables in you area";
  // we can still make some values or methods global if we want to
  window.myModule = function() {…}
}();
```
When you concatenate several modules, you should end up with a bundled JS file that looks like this:

```js
// my-module.js
!function(){…}();
// other-module.js
!function(){…}();
```

### Using a script bundler 

With a JS code bundler such as [Browserify][browserify], [Rollup][browserify] or [Webpack][webpack], you don’t need to wrap each module in a function: the bundler will take care of it.

For example with webpack and ES6 syntax:

```js
// app.js
import "some-dependency";
import "./scripts/my-module.js";
import "./scripts/other-module.js";
// my-module.js
const local = "Hot variables in you area";
export function myModule() {…}
```

---

## Using ES6
ECMAScript 2015 (also called ES6 or ES2015) is a major version of the JavaScript standard, with most of its features already implemented by major browsers in 2017. To support older browsers, it might be useful to transpile your ES6 code into ES5.

- For new projects, use ES6 syntax and features.
- Use a transpiler ([Babel][babel], [Bublé][buble]) to generate ES5 code.
- Avoid ES6 syntax and features for existing projects not using a transpiler.

### Browser support
If you’re not transpiling to ES5 and are targetting older browsers, avoid using ES6 syntax and features. Some examples of minimum compatibility:

- Arrow functions (`x => x * 2`): needs Edge 12, Chrome 45, Safari 10
- Promises: Chrome 32, Firefox 29, Edge 12
- `const` and `let` statements: needs IE11, Chrome 49
- `for...of` loops: Edge 12, Chrome 38
- `async / await`: Chrome 55, Firefox 52, Edge 14, Safari 10.1
- ES6 modules: experimental support in some browsers only

If you are transpiling ES6 to ES5, note that some features require adding a polyfill to your JS code, and that can increase the size of your JS bundle a lot!

---

## Debugging
- In the browser’s Developer Tools, try to be familiar with both the Console and the JS Debugger (“Sources” in Chrome, “Debugger” in Firefox)
- Remove `console.log` calls and `debugger` statements from your code before committing

How to set breakpoints in your JS code:

- [Firefox Developer Tools - Debugger][bkfirefox]
- [Chrome Developer Tools - Breakpoints][bkchrome]

```js
function potentiallyBuggyCode() {
  …
  // don’t forget to remove this statement
  debugger;
}
```

---

## Tooling up
A lot of JavaScript development uses Node.js and associated packages.

### Minimum requirements
- Install [Node.js][nodejs] version 8 or higher
- Learn the basics of [how package.json is structured][json]
- Use `npm` to manage dependencies and scripts
- Use a JS code bundler (such as webpack) to create one or several JS bundles for the frontend

### Recommended tools
- Use [nvm][nvm] to install several Node.js versions and switch between them.
- Use [Prettier][prettier] to format your JS and CSS code. You can install a Prettier plugin for your code editor of choice.
- Consider using [eslint][eslint] to check your JS code, and [stylelint][stylelint] to check your CSS or SCSS code.

In this example package.json we installed user-facing code as dependencies (`npm install --save`), and all the tools used to build or test code as development dependencies (`npm install --save-dev`).

```js
{
  "name": "my-project",
  "scripts": {
    "build": "webpack --env=prod",
    "dev": "webpack-dev-server --env=dev"
  },
  "dependencies": {
    "jquery": "^3.2.1",
    "some-other-lib": "^1.0"
  },
  "devDependencies": {
    "babel-core": "^6.25.0",
    …
    "eslint": "^4.7.1",
    …
    "webpack": "^3.4.1",
    "webpack-dev-server": "^2.6.1"
  }
}
```

---

## Type coercion
JavaScript may automatically convert a value from one type to another (for example, from a string to a number):

- When writing `if (myVar)` (or using operators like `?`, `!`, `||` and `&&`), JS will convert the value to a boolean (`true` or `false`)
- When comparing two values with `x == y`, `x != y`, `x < y` and `x > y`, some type conversion can happen if the values have different types

### Conversion to boolean
The following values convert to `false: 0` and `NaN`, the empty string `""`, `undefined`, `null` and `false`. Everything else converts to `true`, including objects and empty arrays!

- Be careful with `if (myVar)`; try to write a more precise check if possible
- For arrays and some object types, you may need to check myVar.length

### Comparing values
- Prefer the strict equality and inequality operators (`x === y`, `x !== y`)
- Avoid `==` and `!=` (although sometimes it can be useful, for example `myVar != null` checks if the value is different from `null` and `undefined`)

[prettier]: https://prettier.io/
[prettierisntall]: https://prettier.io/docs/en/editors.html
[jsdoc]: https://jsdoc.app/
[browserify]: https://browserify.org/
[webpack]: https://webpack.js.org/
[rollup]: https://rollupjs.org/
[babel]: https://babeljs.io/
[buble]: https://buble.surge.sh/
[bkfirefox]: https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html
[bkchrome]: https://developer.chrome.com/docs/devtools?hl=fr
[nodejs]: https://nodejs.org/en/
[json]: https://nodesource.com/blog/the-basics-of-package-json-in-node-js-and-npm/
[nvm]: https://github.com/nvm-sh/nvm
[eslint]: https://eslint.org/
[stylelint]: https://stylelint.io/