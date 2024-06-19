---
date: 2024-06-19
category:
  - Frontend
  - Developpement
tag:
  - scss
  - sass
  - css
author: Nicolas Fradin
excerpt: sass
---

# Sass/Scss/Css

## Formatting
Follow the formatting style used by [Prettier][prettier](with default settings).

- Indent with 2 spaces
- One selector per line
- One line per declaration (`property: value;`)
- Always use ; at the end of a declaration
- Prefer double quotes (`"hello"`), and quote attribute values (`input[type="text"]`)
Recommended: install Prettier (`npm i -g prettier` or [install it for your editor][prettierDocs]) and use it to automatically reformat your CSS or Sass code.

```scss
body {
  font-size: 0.8rem;
}

.selector,
.other[type="text"] {
  font-weight: bold;
  color: black;
}

@media (min-width: 768px) {
  .something {
    display: block;
    background-image: url("/assets/img/pattern.png");
  }
}
```

---

## Comments
### Prefer Sass comments
`/* A CSS comment (standard syntax) */` <br>
`// A Sass comment (always removed from CSS output)` <br><br>
In Sass (SCSS) source files, prefer the Sass comment syntax, except for the top comment that describes each file.

### CSS/SCSS file header
Start each CSS file (especially a component file) with a header comment using the following format: `/*! Title */`.

When minifying the CSS, these comments will be kept in the final CSS, which doesn’t add much to the file’s weight but makes it easier to break the minified CSS into several lines.

### Don’t repeat obvious information
`// The teaser’s title` <br>
`.Teaser-title {
  …
}`

```scss
/*! Header Component */
// More information about this component

.Header {
  …
}

// Use simple comments surrounded by blank lines
// to introduce a group of selectors

.Header-top {
  …
}

.Header-social {
  …
}

// Use a comment just before the selector if you need to
// explain something particular about this selector
.Header-navItem {
  display: table-cell;
  // Use a comment just before the line(s) you want to
  // explain; avoid comments after or on the right.
  vertical-align: bottom;
}
```

---

## Units: pixels, ems, etc.
It’s not always obvious which CSS units are best for what use cases. Here are some points of reference:

- Avoid physical units such as `cm` and `pt`
- Media queries: prefer `px` (over using `em`)
- `font-size:` use `rem`, `em` or `px`
- `line-height:` use a unitless ratio, e.g. `1.2`


### Viewport-relative units
- `1vw` is equal to 1% of the viewport width (`100vw`)
- `1vh` is equal to 1% of the viewport height (`100vh`), but it can be unreliable in mobile browsers

```scss
html {
  // should be 16 * 1.25 = 20px
  font-size: 125%;
}

body {
  font-size: .8rem;
  line-height: 1.4;
}

h1 {
  font-size: 1.6rem;
  line-height: 1.2;
}

@media (min-width: 1100px) {
  h1 {
    font-size: 2.4rem;
    line-height: 1.1;
  }
}
```

---

## Avoid !important
Adding `!important` to your declarations helps fixing specificity issues, but only in the very short term! Avoid it.

:::tip
If you do use `!important` in your code, always write a comment explaining why.
:::

```scss
.MyComponent-inner {
  // The JS library we use forces a width in JavaScript,
  // but we really need a fluid width here!
  width: auto !important;
}
```

---

## Property order
Ordering CSS properties in a way that makes sense is not easy. :)

We try to order things from “general” to “particular”, following this order:

- 1.&nbsp;Position
- 2.&nbsp;Display & Box Model
- 3.&nbsp;Text
- 4.&nbsp;Colors & Backgrounds
- 5.&nbsp;Effects and Everything Else

It’s okay if you don’t use the exact same order. Try to follow this guideline but don’t worry too much about it.

```scss
.orderExample {
  /* Positioning */
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;
  float: none;

  /* Display & Box Model */
  content: "";
  display: inline-block;
  visibility: visible;
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  overflow: hidden;
  margin: 10px;
  border: 10px solid #333;
  padding: 10px;
  vertical-align: middle;
  white-space: nowrap;

  /* Text */
  font-family: sans-serif;
  font-size: 16px;
  font-style: italic;
  font-weight: bold;
  line-height: 1.4;
  text-align: right;
  text-indent: 2em;
  text-overflow: ellipsis;
  text-shadow: …;
  text-transform: uppercase;

  /* Colors & Backgrounds */
  color: #fff;
  background-color: #000;
  background-image: url(…);

  /* Effects and Everything Else */
  opacity: .8;
  transform: translateX(100%);
  transition: all .5s;
  cursor: pointer;
  box-shadow: …;
  filter: …;
  mask: …;
  will-change: transform;
  -webkit-backface-visibility: …;
}
```

---

## Fonts
### Declare fallbacks
Always declare a generic family name at the end of a `font-family` declaration: `serif`, `sans-serif` or `monospace`.

If possible, also declare system fonts that are close in style to the web font you’re using:

```scss
body {
  font-family: Fira Sans, Arial, sans-serif;
}
```

### Using web fonts
- Always get licenses for commercial fonts.
- Host fonts locally (see: [Google Fonts Helper][fonthelper]).
- Use WOFF2 and WOFF, ignore older formats.
- Use a single family name for all the `@font-face` blocks describing a font family.

### Web fonts make websites slow!
Typically, font files are loaded after stylesheets, and browsers can render invisible text until fonts are loaded. A few options for speeding things up:

- Use system fonts instead.
- Use only a few weights and styles.
- Tell the browser to render the text even if fonts are not loaded yet, using the [font-display property][fontdisplay].
- Preload the most important WOFF2 file(s).

<CodeGroup>
  <CodeGroupItem title="html">

```html
<head>
  <link rel="preload" as="font" type="font/woff2"
    src="/fonts/mycooltyp.woff2">
</head>
```

  </CodeGroupItem>

  <CodeGroupItem title="scss">

```scss
@font-face {
  font-family: "My Cool Typeface";
  font-style: normal;
  font-weight: 400;
  font-display: auto;
  src: url("/fonts/mycooltyp.woff2") format("woff2"),
    url("/fonts/mycooltyp.woff") format("woff");
}

@font-face {
  font-family: "My Cool Typeface";
  font-style: normal;
  font-weight: 800;
  /* show the fallback font while the font file is loading */
  font-display: fallback;
  src: url("/fonts/mycooltyp-heavy.woff2") format("woff2"),
    url("/fonts/mycooltyp-heavy.woff") format("woff");
}

body {
  font-family: My Cool Typeface, Georgia, serif;
}
```

  </CodeGroupItem>
</CodeGroup>

---

## Selectors
We use classes for selectors. We try to keep selectors short (ideally, just one class).

:::warning
Do not use the `#some-id` selector (because of high [specificity][specificity]). If you really need to target an id, and cannot add a class, use the attribute selector: `[id="some-id"]`.
:::

In addition to classes, you can use:

- Element selectors (`h2`, `.MainNav-item a`, etc.). But keep in mind that sometimes the element can change, for example a `<h2>` can be changed to a `<h3>`, a `<a>` to a `<button>`, etc.
- Attribute selectors, especially for dynamic states (`.MainNav a[disabled]`).
- Pseudo-classes (`:empty`, `:invalid`, …)

```scss
// Bad selector: too specific!
#stream .tweet_header .author {…}
// Better selectors
.Tweet {…}
.Tweet-author {…}
.Tweet-author a {…}
.Tweet-retweetBtn {…}
.Tweet-retweetBtn[disabled] {…}
```

---

## Utility classes
Utilities are simple styles that can be used on any element to trigger some basic function (in a few lines of CSS at most).

- Write utility classes in `camelCase`, without a prefix.
- Avoid using many utility classes. They move a lot of the presentation logic into your HTML, and can hide that a component has dependencies (unlike mixins and variables).
- If you have several utility classes that work together, maybe make a component?

```scss
// Utility classes

.icon {
    display: inline-block;
    vertical-align: middle;
    width: 1em;
    height: 1em;
}

.visuallyHidden {
    position: absolute !important;
    clip: rect(1px, 1px, 1px, 1px);
}
```

---


## Components
A component is a group of styles that represent a block of UI:

- It can be a single element (e.g. a `Button` component)
- Or a group of elements (e.g. an article teaser with a container, a title, an image, a short excerpt…)

It can be hard to decide if some part of a design should be a big component, or several smaller components. Use your best judgement, and/or ask coworkers what they think.

### Component and elements
We follow a variant of the [BEM methodology][bem].

Each component must have a main element which contains the others (if any). Use the component’s name as its class, for example:

```html
<div class="Teaser">
    …
</div>
```

For component elements, use the component name as a namespace, and add a lower camel case element name:

```html
<div class="Teaser">
    <h2 class="Teaser-head">…</h2>
  <p class="Teaser-intro">…</p>
</div>
```

Component element classes should not have more than 2 segments. `MyComponent-list-item` is wrong; use `MyComponent-listItem` or simply `MyComponent-item`. If you need to create a lot of element classes with 2 or 3 words, maybe your component is too complex and should be refactored into smaller components?

### Targetting HTML elements
Unlike the stricter BEM methodology, we allow writing selectors that target a HTML element inside a component or component element.

```html
<div class="Teaser">
    <h2 class="Teaser-head">
        <a href="…">Cool title</a>
  </h2>
  …
</div>
```

For example we could style the link inside `MyComponent-title` here:

```scss
.Teaser-head a {
  display: block;
  color: inherit;
}
.Teaser-head a:hover,
.Teaser-head a:focus {
  color: purple;
}
```

### Modifier classes
Sometimes the component’s container or a component element can have slightly different styles in different places. In those situations we can create style variants, using classes like: `Component--variantName` (for the container) or `Component-element--variantName` (for an element in the component).

```html
<!-- Alternative style for the first instance of this component in a list -->
<article class="Teaser Teaser--highlight">
  <h2 class="Teaser-head">
    <a href="…">…</a>
  </h2>
  <p class="Teaser-desc">…</p>
</article>

<article class="Teaser">
  <h2 class="Teaser-head">
    <a href="…">…</a>
  </h2>
  <p class="Teaser-desc">…</p>
</article>
```

---

## Responsive styles
### Keep all styles for a selector together
Do not separate desktop and mobile styles into different files. You want to keep them tightly together:

```scss
.spaceBefore1 {
  margin-top: 20px;
}

@media (min-width: 750px) {
  .spaceBefore1 {
    margin-top: 30px;
  }
}
```

### Mobile-first
We use a mobile-first approach. Here’s how it works:

- First, try to find the simpler “state” of a component or element style. Most of the time, it will look like the mobile layout.
- Then, add styles for larger viewports, in a media query.

Using Sass, you can use media query nesting to avoid repeating the selector and making the relationship between the styles clearer.

```scss
.MyComponent {
  border: solid 1px black;
  padding: 10px;

  @media (min-width: 750px) {
    border-width: 5px;
    padding: 25px;
  }
}
```

Avoid doing things like this, it’s doing extra work for nothing:

```scss
.MyComponent-image {
  float: left;
  margin-right: 20px;

  @media (max-width: 749px) {
    float: none;
    margin-right: 0;
  }
}
```

Finally, sometimes the mobile styles are rather specific and not useful for larger screens. In that case, try to separate styles in tree groups: common, small screens, and larger screens.

```scss
.MyComponent-image {
  display: block;
  outline: solid 1px rgba(0,0,0,.25);
  outline-offset: -1px;
  background-color: #eee;

  @media (max-width: 749px) {
    width: calc(100% - 40px);
    max-width: 360px;
    margin: 0 auto;
  }

  @media (min-width: 750px) {
    float: right;
    margin-right: 20px;
  }
}
```

### Share breakpoints between components
Try to use 2–3 main breakpoints and reuse them throughout the site or application. Using Sass, you can store those breakpoints in variables:

```scss
$bp-medium: 750px;
$bp-large: 1100px;
$bp-xlarge: 1400px;

// By convention, when using max-width you should
// remove 1px to avoid conflicts if the viewport
// width is exactly $bp-medium
@media (max-width: $bp-medium - 1px) {…}
@media (min-width: $bp-medium) {…}
```

### Use named media queries
Name media queries allow you to define a media query once, and reuse it every time. In CSS proposals, it looks like this:

```scss
@media (--my-media-query) {…}
```

Since this feature is not standardized or supported yet, we can mimick this behavior in Sass to make our Sass code easier to maintain. Use this [mq-build][mq] function to store full media queries in variables:

```scss
@import "node_modules/sass-mq-build/mq-build";
$mq-small: mq-build(null, 750px);
$mq-medium: mq-build(750px, 1100px);
$mq-large: mq-build(1100px, null);

.something {
  @media ($mq-small) {
    color: green;
  }
  @media ($mq-medium) {
    color: red;
  }
}
```

---


## Sass Selector Nesting
Selector nesting makes your code more difficult to read. Avoid unnecessary nesting.

- Nest once if helpful, and twice at most.
- Keep the resulting CSS selectors as short as possible.
- Do not overuse the `&` symbol.

### Avoid composing class names
Do not use the `&` symbol to create a class name that extends the parent class:

```scss
.Header {
  …
  &--dark {…}
  &-logo {…}
}
```

In this example, if a developer looks at the HTML code and wants to find the CSS code for the `Header--dark` or `Header-logo` classes, they won’t be able to find it in the codebase!

```scss
// BAD: unnecessary nesting
.Header {
  .Header-top {
    .Header-logo {…}
  }
}
.Nav {
  ul {
    li {
      a {…}
    }
  }
}
// GOOD: limit nesting
.Header {
  …
}
.Header-top {
  …
}
.Header-logo {
  …
}
.Nav a {
  …
}
```

---

## Sass Variables
We use the Sass preprocessor, with the [SCSS syntax][sass].
Sass files should have a `.scss` extension.

Use `node-sass` to compile `.scss` files to CSS. Generally, this is integrated in a build config using gulp or webpack. Look for the documentation in the project (in e.g. a `README.md` or `doc/FRONTEND.md`).

### Variables and mixins
Use lowercase names with hyphens (not underscores), and follow an general-to-particular progression:

- Global variables and mixins: `$type-name`, `@mixin some-name`
- If specific to a component: `$component-type-name`, `@mixin component-some-name`

```scss
// base/_variables.scss
$color-brand:  #e95d1e;
$color-link:   #08c;
$breakpoint-small:   500px;
$breakpoint-medium:  860px;
// base/_grid.scss
@mixin grid-container(…) {…}
@mixin grid-item(…) {…}
// component/_header.scss
@import "../base/variables";
@import "../base/grid";

$header-color-bg: #555 !default;
$header-color-link-main: #fff !default;
$header-color-link-active: #faa !default;

.Header {
  background-color: $header-color-bg;
}
```


[prettier]: https://prettier.io/
[prettierDocs]: https://prettier.io/docs/en/editors.html
[fonthelper]: https://gwfh.mranftl.com/fonts
[fontdisplay]: https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display
[specificity]: https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity
[bem]: https://getbem.com/
[mq]: https://www.npmjs.com/package/sass-mq-build
[sass]: https://sass-lang.com/