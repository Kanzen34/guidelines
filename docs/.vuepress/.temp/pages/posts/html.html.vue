<template><div><h1 id="html-and-templating" tabindex="-1"><a class="header-anchor" href="#html-and-templating"><span>HTML AND TEMPLATING</span></a></h1>
<h2 id="formatting" tabindex="-1"><a class="header-anchor" href="#formatting"><span>Formatting</span></a></h2>
<p>HTML’s syntax can be very flexible, and browsers will try to deal with errors silently. To make our code more robust and consistent, follow these rules:</p>
<ul>
<li>Valid HTML code <a href="https://validator.nu/" target="_blank" rel="noopener noreferrer">validator.nu</a></li>
<li>Lowercase tag names and attributes</li>
<li>Always quote attribute values, with double quotes</li>
<li>Attribute order: <code v-pre>class</code> first, <code v-pre>id</code> second, then everything else.</li>
</ul>
<!-- <CodeGroup>
  <CodeGroupItem title="HTML"> -->
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Form-field<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Form-label<span class="token punctuation">"</span></span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>f-color<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        What is your favourite colour?</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Form-textbox<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>f-color<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>color<span class="token punctuation">"</span></span> <span class="token attr-name">required</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modalLink<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/help/276b6de1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>question-mark.svg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Help<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>  <!-- </CodeGroupItem>
</CodeGroup> -->
<hr>
<h2 id="comments" tabindex="-1"><a class="header-anchor" href="#comments"><span>Comments</span></a></h2>
<p>Write as few HTML comments (<code v-pre>&lt;!-- Comment --&gt;</code>) as possible:</p>
<ul>
<li>They should not contain technical information Or references to client requirements</li>
<li>It’s often better to use the templating language’s comment syntax instead. This helps sending fewer bytes to users, too.</li>
</ul>
<!-- <CodeGroup>
  <CodeGroupItem title="HTML"> -->
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="line"><span class="token comment">&lt;!-- The main content --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>…<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div>  <!-- </CodeGroupItem>
</CodeGroup> -->
<hr>
<h2 id="indentation" tabindex="-1"><a class="header-anchor" href="#indentation"><span>Indentation</span></a></h2>
<p>Template should always have a perfect indentation.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Your IDE surely provide a prettier on save or a similar extension/plugin.</p>
</div>
<ul>
<li>Use 2 spaces</li>
<li>Indent the contents elements (unless it’s short)</li>
<li>In each template file, start with no indentation</li>
</ul>
<!-- <CodeGroup>
  <CodeGroupItem title="HTML"> -->
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>page-row<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Some content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>  <!-- </CodeGroupItem>
</CodeGroup> -->
<hr>
<h2 id="document-structure" tabindex="-1"><a class="header-anchor" href="#document-structure"><span>Document structure</span></a></h2>
<p>The basic structure of a HTML page should have:</p>
<ul>
<li>The HTML5 doctype: <code v-pre>&lt;!DOCTYPE html&gt;</code></li>
<li>A single root element: <code v-pre>&lt;html&gt;</code></li>
<li>With two child elements: <code v-pre>&lt;head&gt;</code> and <code v-pre>&lt;body&gt;</code></li>
</ul>
<h3 id="declaring-languages" tabindex="-1"><a class="header-anchor" href="#declaring-languages"><span>Declaring languages</span></a></h3>
<p>Always provide a lang attribute on the root element; make sure it shows the correct language for each page, especially on multilingual sites! For more information, see this W3C tutorial.</p>
<h3 id="essential-metadata" tabindex="-1"><a class="header-anchor" href="#essential-metadata"><span>Essential metadata</span></a></h3>
<ul>
<li>Add a <code v-pre>&lt;meta charset=&quot;UTF-8&quot;&gt;</code> encoding declaration, in case it’s not already declared in the HTTP Content-Type header.</li>
<li>Always have a <code v-pre>&lt;title&gt;</code> element, with a specific content for each page.</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Page title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token comment">&lt;!-- Visible content --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="adding-styles" tabindex="-1"><a class="header-anchor" href="#adding-styles"><span>Adding styles</span></a></h2>
<h3 id="request-an-external-stylesheet" tabindex="-1"><a class="header-anchor" href="#request-an-external-stylesheet"><span>Request an external stylesheet</span></a></h3>
<p>To add styles to a page, we generally write one (or sometimes a few) stylesheet(s) and link to it from the HTML.</p>
<p>Use <code v-pre>&lt;link rel=&quot;stylesheet&quot; href=&quot;/url/to/styles.css&quot;&gt;</code> in the page’s <code v-pre>&lt;head&gt;</code> to request an external stylesheet.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>We want to load only one stylesheet (or 2–3 max). For each stylesheet, the browser will make a HTTP request, and block rendering the page until all the CSS arrives!</p>
</div>
<h3 id="inline-stylesheets" tabindex="-1"><a class="header-anchor" href="#inline-stylesheets"><span>Inline stylesheets</span></a></h3>
<p>More rarely, we can write some of the styles directly in the HTML page, using <code v-pre>&lt;style&gt;/* My styles */&lt;/style&gt;</code>. This can be useful for:</p>
<ul>
<li>Some web performance techniques (“critical CSS”).</li>
<li>Styles generated depending on user preferences.</li>
</ul>
<h3 id="viewport-meta-tag" tabindex="-1"><a class="header-anchor" href="#viewport-meta-tag"><span>Viewport meta tag</span></a></h3>
<p>For responsive sites, make sure you have this tag in your <code v-pre>&lt;head&gt;</code>:<code v-pre>&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width&quot;&gt;</code>
Some sites add more parameters to the content value:</p>
<ul>
<li>initial-scale=1: this should not be necessary anymore.</li>
<li>maximum-scale=1: this breaks accessibility! Avoid it.</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">  …</span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"><span class="token selector">.icon</span><span class="token punctuation">{</span><span class="token property">width</span><span class="token punctuation">:</span>1em<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span>1em<span class="token punctuation">}</span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/dist/main.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="adding-scripts" tabindex="-1"><a class="header-anchor" href="#adding-scripts"><span>Adding scripts</span></a></h2>
<p>Like CSS, JS code can live in separate files or in the HTML document. For most uses, we recommend using an external JS file.</p>
<h3 id="request-an-external-script" tabindex="-1"><a class="header-anchor" href="#request-an-external-script"><span>Request an external script</span></a></h3>
<p>Use <code v-pre>&lt;script src=&quot;/url/to/script.js&quot;&gt;&lt;/script&gt;</code> after the page’s content. Generally, that means putting this script tag just before the end of the body (<code v-pre>&lt;/body&gt;</code> tag).</p>
<h3 id="inline-scripts" tabindex="-1"><a class="header-anchor" href="#inline-scripts"><span>Inline scripts</span></a></h3>
<p>The syntax for inline scripts is similar: <code v-pre>&lt;script&gt;/* JS code */&lt;/script&gt;</code></p>
<p>This can be useful for some critical — and short! — JS code that we want to execute as soon as possible, without making a HTTP request.</p>
<h3 id="performance-guidelines" tabindex="-1"><a class="header-anchor" href="#performance-guidelines"><span>Performance guidelines</span></a></h3>
<ul>
<li>Load as few scripts as possible; concatenate code to make 1 (or 2–3 max) HTTP requests.</li>
<li>Script tags block rendering. Add the async attribute or call them just before <code v-pre>&lt;/body&gt;</code>.</li>
<li>Third party scripts are often huge.</li>
<li>Load on pages that need them only.</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">  …</span>
<span class="line">  <span class="token comment">&lt;!-- In HEAD: only short scripts that declare variables! --></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    window<span class="token punctuation">.</span>modules <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    window<span class="token punctuation">.</span>_gaq <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">  …</span>
<span class="line">  <span class="token comment">&lt;!-- ALL SCRIPTS AFTER PAGE CONTENT --></span></span>
<span class="line">  <span class="token comment">&lt;!-- Short inline scripts (executed earlier) --></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"><span class="token operator">!</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>…<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token comment">&lt;!-- Call the main scripts after the page’s content --></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/dist/vendor.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/dist/main.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token comment">&lt;!-- Scripts that don’t depend on vendor/libs can use the async attribute --></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">async</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/dist/something.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="semantic-html" tabindex="-1"><a class="header-anchor" href="#semantic-html"><span>Semantic HTML</span></a></h2>
<ul>
<li>Use the appropriate HTML element to mark up content, not only <code v-pre>&lt;div&gt;</code> and <code v-pre>&lt;span&gt;</code>.</li>
<li>You can use a reference such as <a href="https://htmlreference.io/" target="_blank" rel="noopener noreferrer">htmlreference.io</a> for details on available elements and attributes.</li>
</ul>
<h3 id="links-vs-buttons" tabindex="-1"><a class="header-anchor" href="#links-vs-buttons"><span>Links vs buttons</span></a></h3>
<p>The rule is simple:</p>
<ul>
<li>If it goes somewhere else, it’s a <code v-pre>&lt;a href=&quot;url&quot;&gt;…&lt;/a&gt;</code> element.</li>
<li>If it performs a custom JS action, it’s a <code v-pre>&lt;button&gt;…&lt;/button&gt;</code> element.
Avoid <code v-pre>&lt;div onclick=&quot;…&quot;&gt;&lt;/div&gt;</code> or <code v-pre>&lt;li onclick=&quot;…&quot;&gt;&lt;/li&gt;</code>: it can’t be focused with the keyboard, can’t be read by a screen reader, doesn’t work for SEO, etc.</li>
</ul>
<p>Always use real links (<code v-pre>&lt;a href=&quot;url&quot;&gt;…&lt;/a&gt;</code>) to navigate between pages, including for navigating between views in “single-page” applications. It’s better for accessibility, SEO, bookmarking and sharing.</p>
<h3 id="semantic-groups" tabindex="-1"><a class="header-anchor" href="#semantic-groups"><span>Semantic groups</span></a></h3>
<p>In the <code v-pre>&lt;body&gt;</code> we try to group the page’s visible elements in 4 groups:</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">></span></span></span>
<span class="line">    logo, search, etc.</span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span><span class="token punctuation">></span></span></span>
<span class="line">    primary navigation</span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span></span>
<span class="line">    page’s main content</span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">></span></span></span>
<span class="line">    more info about the site, links, etc.</span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>It’s also possible to put the <code v-pre>&lt;nav&gt;</code> inside the <code v-pre>&lt;header&gt;</code>.
Use the “search” role for the main search
If the page offers a search form, use the ARIA search role on this form:</p>
</div>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>search<span class="token punctuation">"</span></span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/site-search<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  …</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>Important: role=&quot;search&quot; must only appear once in the page.</p>
</div>
<hr>
<h2 id="accessible-html" tabindex="-1"><a class="header-anchor" href="#accessible-html"><span>Accessible HTML</span></a></h2>
<p>We strive to create accessible user interfaces, whether the HTML is generated server-side or client-side in JavaScript. Here are a few guidelines to get you started on this topic.</p>
<h3 id="use-titles-for-structure" tabindex="-1"><a class="header-anchor" href="#use-titles-for-structure"><span>Use titles for structure</span></a></h3>
<ul>
<li>Use H1, H2, H3 elements (lower levels are often unnecessary)</li>
<li>If this conflicts with SEO needs, see if you can find a compromise (keep the main titles, maybe change a useful H1/H2 to a H3 so that it does not clash with SEO needs but is still listed in screen readers)</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Page title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></span>
<span class="line">  …</span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>A sub-section<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span></span>
<span class="line">  …</span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>Another section<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span></span>
<span class="line">  …</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="use-text-labels" tabindex="-1"><a class="header-anchor" href="#use-text-labels"><span>Use text labels</span></a></h3>
<p>Outside of content managed in a CMS, we need accessible text for:</p>
<ul>
<li>Logos (use the brand’s name, not <code v-pre>&quot;logo&quot;</code>) and other significant images</li>
<li>Buttons or links with icons and no visible text</li>
</ul>
<p>For links and buttons, this can look like:</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>…<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>…<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Subscribe Now<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Subscribe Now<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span> <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>…<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>path</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you can’t add alt text to the image or icon itself, you can use aria-label on the link or button:</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>…<span class="token punctuation">"</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Subscribe Now<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">data-icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>letter<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Finally, if the text is already present in context, it’s often better to have empty alt text:</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>…<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>…<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  Subscribe Now</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span> <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>…<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>path</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line">  Subscribe Now</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Make sure that form elements have labels
Link a form element and the relevant label using <code v-pre>&lt;label for=&quot;some-id&quot;&gt;</code> and the id attribute.</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user-name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>My Name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user-name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user-subscribe<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user-subscribe<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Subscribe me to the newsletter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If done properly, clicking the label should focus the text input (or <code v-pre>&lt;select&gt;</code> or any other form control). Note that each id attribute must be unique in the page.</p>
<p>Learn more
Beyond this section, see this <a href="https://bitsofco.de/the-accessibility-cheatsheet/" target="_blank" rel="noopener noreferrer">accessibility cheatsheet for an introduction to accessibility</a>.</p>
<hr>
<h2 id="ui-states" tabindex="-1"><a class="header-anchor" href="#ui-states"><span>UI states</span></a></h2>
<p>Using script, we often need to change the “state” of an element in the UI. Instead of adding or removing classes, consider using:</p>
<p>Native HTML attributes such as <code v-pre>disabled</code> or <code v-pre>hidden</code>.
ARIA attributes such as <code v-pre>aria-expanded=&quot;true|false&quot;</code>.
Or, finally, a <code v-pre>data attribute: data-state=&quot;my-custom-state&quot;</code>.
Try to use <code v-pre>id</code> attribute values to link elements logically. Both HTML (example: <code v-pre>&lt;label for=&quot;some-id&quot;&gt;</code>) and ARIA (example: <code v-pre>aria-labelledby=&quot;other-id&quot;</code>) use this technique already. But make sure that the id values you use are unique in the page!</p>
<hr>
<h2 id="encoding-characters" tabindex="-1"><a class="header-anchor" href="#encoding-characters"><span>Encoding &amp; characters</span></a></h2>
<ul>
<li>Always use UTF-8</li>
<li>In text content, use typographically correct characters, for example <code v-pre>’</code> (apostrophe) or <code v-pre>…</code> (ellipsis)</li>
<li>Avoid character references (<code v-pre>Fançais</code>, not <code v-pre>Fran&amp;#231;ais</code>), except for invisible characters (<code v-pre>&amp;nbsp;</code>)</li>
</ul>
<p>Useful tools:</p>
<ul>
<li><a href="https://unilist.raphaelbastide.com/" target="_blank" rel="noopener noreferrer">⋃nilist</a></li>
<li><a href="https://www.fileformat.info/info/unicode/char/search.htm?q=fd" target="_blank" rel="noopener noreferrer">Unicode Character Search</a></li>
</ul>
<!-- Links -->
</div></template>


