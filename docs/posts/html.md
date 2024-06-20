---
date: 2024-06-19
category:
  - Frontend
  - Guidelines
tag:
  - html
  - accessibility
  - templating
  - Semantic
author: Nicolas Fradin
excerpt: html
heroImage: 
---

<!-- ![VuePress Logo](./images/html-background.jpg) -->

# HTML AND TEMPLATING

## Formatting
HTML’s syntax can be very flexible, and browsers will try to deal with errors silently. To make our code more robust and consistent, follow these rules:

- Valid HTML code [validator.nu][validator]
- Lowercase tag names and attributes
- Always quote attribute values, with double quotes
- Attribute order: `class` first, `id` second, then everything else.

<!-- <CodeGroup>
  <CodeGroupItem title="HTML"> -->

```html
<p class="Form-field">
    <label class="Form-label" for="f-color">
        What is your favourite colour?
    </label>
    <input class="Form-textbox" id="f-color" name="color" required>
    <a class="modalLink" href="/help/276b6de1">
        <img src="question-mark.svg" alt="Help">
    </a>
</p>
```
  <!-- </CodeGroupItem>
</CodeGroup> -->

---

## Comments
Write as few HTML comments (`<!-- Comment -->`) as possible:

- They should not contain technical information Or references to client requirements
- It’s often better to use the templating language’s comment syntax instead. This helps sending fewer bytes to users, too.

<!-- <CodeGroup>
  <CodeGroupItem title="HTML"> -->

```html
<!-- The main content -->
<main class="content">…</main>
```
  <!-- </CodeGroupItem>
</CodeGroup> -->


---

## Indentation
Template should always have a perfect indentation. 

::: tip
Your IDE surely provide a prettier on save or a similar extension/plugin.
:::

- Use 2 spaces
- Indent the contents elements (unless it’s short)
- In each template file, start with no indentation

<!-- <CodeGroup>
  <CodeGroupItem title="HTML"> -->

```html
<div class="page-row">
  <div class="container">
    <p>Some content</p>
  </div>
</div>
```

  <!-- </CodeGroupItem>
</CodeGroup> -->

---

## Document structure
The basic structure of a HTML page should have:

- The HTML5 doctype: `<!DOCTYPE html>`
- A single root element: `<html>`
- With two child elements: `<head>` and `<body>`

### Declaring languages
Always provide a lang attribute on the root element; make sure it shows the correct language for each page, especially on multilingual sites! For more information, see this W3C tutorial.

### Essential metadata
- Add a `<meta charset="UTF-8">` encoding declaration, in case it’s not already declared in the HTTP Content-Type header.
- Always have a `<title>` element, with a specific content for each page.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Page title</title>
</head>
<body>
  <!-- Visible content -->
</body>
</html>
```

---

## Adding styles
### Request an external stylesheet
To add styles to a page, we generally write one (or sometimes a few) stylesheet(s) and link to it from the HTML.

Use `<link rel="stylesheet" href="/url/to/styles.css">` in the page’s `<head>` to request an external stylesheet.

::: tip
We want to load only one stylesheet (or 2–3 max). For each stylesheet, the browser will make a HTTP request, and block rendering the page until all the CSS arrives!
:::

### Inline stylesheets
More rarely, we can write some of the styles directly in the HTML page, using `<style>/* My styles */</style>`. This can be useful for:

- Some web performance techniques (“critical CSS”).
- Styles generated depending on user preferences.

### Viewport meta tag
For responsive sites, make sure you have this tag in your `<head>`:`<meta name="viewport" content="width=device-width">`
Some sites add more parameters to the content value:
- initial-scale=1: this should not be necessary anymore.
- maximum-scale=1: this breaks accessibility! Avoid it.

```html
<head>
  …
  <meta name="viewport" content="width=device-width">
  <style>.icon{width:1em;height:1em}</style>
  <link rel="stylesheet" href="/dist/main.css">
</head>
```
---

## Adding scripts
Like CSS, JS code can live in separate files or in the HTML document. For most uses, we recommend using an external JS file.

### Request an external script
Use `<script src="/url/to/script.js"></script>` after the page’s content. Generally, that means putting this script tag just before the end of the body (`</body>` tag).

### Inline scripts
The syntax for inline scripts is similar: `<script>/* JS code */</script>`

This can be useful for some critical — and short! — JS code that we want to execute as soon as possible, without making a HTTP request.

### Performance guidelines
- Load as few scripts as possible; concatenate code to make 1 (or 2–3 max) HTTP requests.
- Script tags block rendering. Add the async attribute or call them just before `</body>`.
- Third party scripts are often huge.
- Load on pages that need them only.

```html
<head>
  …
  <!-- In HEAD: only short scripts that declare variables! -->
  <script>
    window.modules = {};
    window._gaq = [];
  </script>
</head>
<body>
  …
  <!-- ALL SCRIPTS AFTER PAGE CONTENT -->
  <!-- Short inline scripts (executed earlier) -->
  <script>!function(){…}();</script>
  <!-- Call the main scripts after the page’s content -->
  <script src="/dist/vendor.js"></script>
  <script src="/dist/main.js"></script>
  <!-- Scripts that don’t depend on vendor/libs can use the async attribute -->
  <script async src="/dist/something.js"></script>
</body>
```
---

## Semantic HTML
- Use the appropriate HTML element to mark up content, not only `<div>` and `<span>`.
- You can use a reference such as [htmlreference.io][htmlreference] for details on available elements and attributes.

### Links vs buttons
The rule is simple:

- If it goes somewhere else, it’s a `<a href="url">…</a>` element.
- If it performs a custom JS action, it’s a `<button>…</button>` element.
Avoid `<div onclick="…"></div>` or `<li onclick="…"></li>`: it can’t be focused with the keyboard, can’t be read by a screen reader, doesn’t work for SEO, etc.

Always use real links (`<a href="url">…</a>`) to navigate between pages, including for navigating between views in “single-page” applications. It’s better for accessibility, SEO, bookmarking and sharing.

### Semantic groups
In the `<body>` we try to group the page’s visible elements in 4 groups:

```html
<body>
  <header>
    logo, search, etc.
  </header>
  <nav>
    primary navigation
  </nav>
  <main>
    page’s main content
  </main>
  <footer>
    more info about the site, links, etc.
  </footer>
</body>
```

::: tip
It’s also possible to put the `<nav>` inside the `<header>`.
Use the “search” role for the main search
If the page offers a search form, use the ARIA search role on this form:
:::

```html
<form role="search" action="/site-search">
  …
</form>
```

::: warning
Important: role="search" must only appear once in the page.
:::

---

## Accessible HTML
We strive to create accessible user interfaces, whether the HTML is generated server-side or client-side in JavaScript. Here are a few guidelines to get you started on this topic.

### Use titles for structure
- Use H1, H2, H3 elements (lower levels are often unnecessary)
- If this conflicts with SEO needs, see if you can find a compromise (keep the main titles, maybe change a useful H1/H2 to a H3 so that it does not clash with SEO needs but is still listed in screen readers)

```html
<main>
  <h1>Page title</h1>
  …
  <h2>A sub-section</h2>
  …
  <h2>Another section</h2>
  …
</main>
```

### Use text labels
Outside of content managed in a CMS, we need accessible text for:

- Logos (use the brand’s name, not `"logo"`) and other significant images
- Buttons or links with icons and no visible text

For links and buttons, this can look like:

```html
<a href="…">
  <img src="…" alt="Subscribe Now">
</a>

<button>
  <svg class="icon">
    <title>Subscribe Now</title>
    <path d="…"></path>
  </svg>
</button>
```

If you can’t add alt text to the image or icon itself, you can use aria-label on the link or button:

```html
<a href="…" aria-label="Subscribe Now">
  <i data-icon="letter"></i>
</a>
```

Finally, if the text is already present in context, it’s often better to have empty alt text:

```html
<a href="…">
  <img src="…" alt="">
  Subscribe Now
</a>
```

```html
<button>
  <svg class="icon" aria-hidden="true"><path d="…"></path></svg>
  Subscribe Now
</button>
```

Make sure that form elements have labels
Link a form element and the relevant label using `<label for="some-id">` and the id attribute.

```html
<p>
  <label for="user-name">My Name</label>
  <input type="text" id="user-name">
</p>

<p>
  <input type="checkbox" id="user-subscribe">
  <label for="user-subscribe">Subscribe me to the newsletter</label>
</p>
```

If done properly, clicking the label should focus the text input (or `<select>` or any other form control). Note that each id attribute must be unique in the page.

Learn more
Beyond this section, see this [accessibility cheatsheet for an introduction to accessibility][accesibility].

---

## UI states
Using script, we often need to change the “state” of an element in the UI. Instead of adding or removing classes, consider using:

Native HTML attributes such as `disabled` or `hidden`.
ARIA attributes such as `aria-expanded="true|false"`.
Or, finally, a `data attribute: data-state="my-custom-state"`.
Try to use `id` attribute values to link elements logically. Both HTML (example: `<label for="some-id">`) and ARIA (example: `aria-labelledby="other-id"`) use this technique already. But make sure that the id values you use are unique in the page!

---

## Encoding & characters
- Always use UTF-8
- In text content, use typographically correct characters, for example `’` (apostrophe) or `…` (ellipsis)
- Avoid character references (`Fançais`, not `Fran&#231;ais`), except for invisible characters (`&nbsp;`)

Useful tools:
- [⋃nilist][unilist]
- [Unicode Character Search][fileformat]

<!-- Links -->
[validator]: https://validator.nu/
[htmlreference]: https://htmlreference.io/
[accesibility]: https://bitsofco.de/the-accessibility-cheatsheet/
[unilist]: https://unilist.raphaelbastide.com/
[fileformat]: https://www.fileformat.info/info/unicode/char/search.htm?q=fd