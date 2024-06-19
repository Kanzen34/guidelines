<template><div><h1 id="sass-scss-css" tabindex="-1"><a class="header-anchor" href="#sass-scss-css"><span>Sass/Scss/Css</span></a></h1>
<h2 id="formatting" tabindex="-1"><a class="header-anchor" href="#formatting"><span>Formatting</span></a></h2>
<p>Follow the formatting style used by <a href="https://prettier.io/" target="_blank" rel="noopener noreferrer">Prettier</a>(with default settings).</p>
<ul>
<li>Indent with 2 spaces</li>
<li>One selector per line</li>
<li>One line per declaration (<code v-pre>property: value;</code>)</li>
<li>Always use ; at the end of a declaration</li>
<li>Prefer double quotes (<code v-pre>&quot;hello&quot;</code>), and quote attribute values (<code v-pre>input[type=&quot;text&quot;]</code>)
Recommended: install Prettier (<code v-pre>npm i -g prettier</code> or <a href="https://prettier.io/docs/en/editors.html" target="_blank" rel="noopener noreferrer">install it for your editor</a>) and use it to automatically reformat your CSS or Sass code.</li>
</ul>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token selector">body </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">font-size</span><span class="token punctuation">:</span> 0.8rem<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.selector,</span>
<span class="line">.other[type="text"] </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token selector">.something </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span><span class="token string">"/assets/img/pattern.png"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="comments" tabindex="-1"><a class="header-anchor" href="#comments"><span>Comments</span></a></h2>
<h3 id="prefer-sass-comments" tabindex="-1"><a class="header-anchor" href="#prefer-sass-comments"><span>Prefer Sass comments</span></a></h3>
<p><code v-pre>/* A CSS comment (standard syntax) */</code> <br>
<code v-pre>// A Sass comment (always removed from CSS output)</code> <br><br>
In Sass (SCSS) source files, prefer the Sass comment syntax, except for the top comment that describes each file.</p>
<h3 id="css-scss-file-header" tabindex="-1"><a class="header-anchor" href="#css-scss-file-header"><span>CSS/SCSS file header</span></a></h3>
<p>Start each CSS file (especially a component file) with a header comment using the following format: <code v-pre>/*! Title */</code>.</p>
<p>When minifying the CSS, these comments will be kept in the final CSS, which doesn’t add much to the file’s weight but makes it easier to break the minified CSS into several lines.</p>
<h3 id="don-t-repeat-obvious-information" tabindex="-1"><a class="header-anchor" href="#don-t-repeat-obvious-information"><span>Don’t repeat obvious information</span></a></h3>
<p><code v-pre>// The teaser’s title</code> <br>
<code v-pre>.Teaser-title {   … }</code></p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token comment">/*! Header Component */</span></span>
<span class="line"><span class="token comment">// More information about this component</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.Header </span><span class="token punctuation">{</span></span>
<span class="line">  …</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Use simple comments surrounded by blank lines</span></span>
<span class="line"><span class="token comment">// to introduce a group of selectors</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.Header-top </span><span class="token punctuation">{</span></span>
<span class="line">  …</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.Header-social </span><span class="token punctuation">{</span></span>
<span class="line">  …</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Use a comment just before the selector if you need to</span></span>
<span class="line"><span class="token comment">// explain something particular about this selector</span></span>
<span class="line"><span class="token selector">.Header-navItem </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> table-cell<span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// Use a comment just before the line(s) you want to</span></span>
<span class="line">  <span class="token comment">// explain; avoid comments after or on the right.</span></span>
<span class="line">  <span class="token property">vertical-align</span><span class="token punctuation">:</span> bottom<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="units-pixels-ems-etc" tabindex="-1"><a class="header-anchor" href="#units-pixels-ems-etc"><span>Units: pixels, ems, etc.</span></a></h2>
<p>It’s not always obvious which CSS units are best for what use cases. Here are some points of reference:</p>
<ul>
<li>Avoid physical units such as <code v-pre>cm</code> and <code v-pre>pt</code></li>
<li>Media queries: prefer <code v-pre>px</code> (over using <code v-pre>em</code>)</li>
<li><code v-pre>font-size:</code> use <code v-pre>rem</code>, <code v-pre>em</code> or <code v-pre>px</code></li>
<li><code v-pre>line-height:</code> use a unitless ratio, e.g. <code v-pre>1.2</code></li>
</ul>
<h3 id="viewport-relative-units" tabindex="-1"><a class="header-anchor" href="#viewport-relative-units"><span>Viewport-relative units</span></a></h3>
<ul>
<li><code v-pre>1vw</code> is equal to 1% of the viewport width (<code v-pre>100vw</code>)</li>
<li><code v-pre>1vh</code> is equal to 1% of the viewport height (<code v-pre>100vh</code>), but it can be unreliable in mobile browsers</li>
</ul>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token selector">html </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// should be 16 * 1.25 = 20px</span></span>
<span class="line">  <span class="token property">font-size</span><span class="token punctuation">:</span> 125%<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">body </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">font-size</span><span class="token punctuation">:</span> .8rem<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">line-height</span><span class="token punctuation">:</span> 1.4<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">h1 </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.6rem<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">line-height</span><span class="token punctuation">:</span> 1.2<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 1100px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token selector">h1 </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> 2.4rem<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">line-height</span><span class="token punctuation">:</span> 1.1<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="avoid-important" tabindex="-1"><a class="header-anchor" href="#avoid-important"><span>Avoid !important</span></a></h2>
<p>Adding <code v-pre>!important</code> to your declarations helps fixing specificity issues, but only in the very short term! Avoid it.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>If you do use <code v-pre>!important</code> in your code, always write a comment explaining why.</p>
</div>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token selector">.MyComponent-inner </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// The JS library we use forces a width in JavaScript,</span></span>
<span class="line">  <span class="token comment">// but we really need a fluid width here!</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> auto <span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="property-order" tabindex="-1"><a class="header-anchor" href="#property-order"><span>Property order</span></a></h2>
<p>Ordering CSS properties in a way that makes sense is not easy. 😃</p>
<p>We try to order things from “general” to “particular”, following this order:</p>
<ul>
<li>1. Position</li>
<li>2. Display &amp; Box Model</li>
<li>3. Text</li>
<li>4. Colors &amp; Backgrounds</li>
<li>5. Effects and Everything Else</li>
</ul>
<p>It’s okay if you don’t use the exact same order. Try to follow this guideline but don’t worry too much about it.</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token selector">.orderExample </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">/* Positioning */</span></span>
<span class="line">  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">z-index</span><span class="token punctuation">:</span> 10<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">float</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">/* Display &amp; Box Model */</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">visibility</span><span class="token punctuation">:</span> visible<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">margin</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">border</span><span class="token punctuation">:</span> 10px solid #333<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">/* Text */</span></span>
<span class="line">  <span class="token property">font-family</span><span class="token punctuation">:</span> sans-serif<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">line-height</span><span class="token punctuation">:</span> 1.4<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">text-align</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">text-indent</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">text-shadow</span><span class="token punctuation">:</span> …<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">text-transform</span><span class="token punctuation">:</span> uppercase<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">/* Colors &amp; Backgrounds */</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span>…<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">/* Effects and Everything Else */</span></span>
<span class="line">  <span class="token property">opacity</span><span class="token punctuation">:</span> .8<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>100%<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">transition</span><span class="token punctuation">:</span> all .5s<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">box-shadow</span><span class="token punctuation">:</span> …<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">filter</span><span class="token punctuation">:</span> …<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">mask</span><span class="token punctuation">:</span> …<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">will-change</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">-webkit-backface-visibility</span><span class="token punctuation">:</span> …<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="fonts" tabindex="-1"><a class="header-anchor" href="#fonts"><span>Fonts</span></a></h2>
<h3 id="declare-fallbacks" tabindex="-1"><a class="header-anchor" href="#declare-fallbacks"><span>Declare fallbacks</span></a></h3>
<p>Always declare a generic family name at the end of a <code v-pre>font-family</code> declaration: <code v-pre>serif</code>, <code v-pre>sans-serif</code> or <code v-pre>monospace</code>.</p>
<p>If possible, also declare system fonts that are close in style to the web font you’re using:</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token selector">body </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">font-family</span><span class="token punctuation">:</span> Fira Sans<span class="token punctuation">,</span> Arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="using-web-fonts" tabindex="-1"><a class="header-anchor" href="#using-web-fonts"><span>Using web fonts</span></a></h3>
<ul>
<li>Always get licenses for commercial fonts.</li>
<li>Host fonts locally (see: <a href="https://gwfh.mranftl.com/fonts" target="_blank" rel="noopener noreferrer">Google Fonts Helper</a>).</li>
<li>Use WOFF2 and WOFF, ignore older formats.</li>
<li>Use a single family name for all the <code v-pre>@font-face</code> blocks describing a font family.</li>
</ul>
<h3 id="web-fonts-make-websites-slow" tabindex="-1"><a class="header-anchor" href="#web-fonts-make-websites-slow"><span>Web fonts make websites slow!</span></a></h3>
<p>Typically, font files are loaded after stylesheets, and browsers can render invisible text until fonts are loaded. A few options for speeding things up:</p>
<ul>
<li>Use system fonts instead.</li>
<li>Use only a few weights and styles.</li>
<li>Tell the browser to render the text even if fonts are not loaded yet, using the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display" target="_blank" rel="noopener noreferrer">font-display property</a>.</li>
<li>Preload the most important WOFF2 file(s).</li>
</ul>
<CodeGroup>
  <CodeGroupItem title="html">
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>preload<span class="token punctuation">"</span></span> <span class="token attr-name">as</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>font<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>font/woff2<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/fonts/mycooltyp.woff2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>  </CodeGroupItem>
  <CodeGroupItem title="scss">
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">"My Cool Typeface"</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">font-style</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">font-weight</span><span class="token punctuation">:</span> 400<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">font-display</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span><span class="token string">"/fonts/mycooltyp.woff2"</span><span class="token punctuation">)</span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"woff2"</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token url">url</span><span class="token punctuation">(</span><span class="token string">"/fonts/mycooltyp.woff"</span><span class="token punctuation">)</span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"woff"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">"My Cool Typeface"</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">font-style</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">font-weight</span><span class="token punctuation">:</span> 800<span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">/* show the fallback font while the font file is loading */</span></span>
<span class="line">  <span class="token property">font-display</span><span class="token punctuation">:</span> fallback<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span><span class="token string">"/fonts/mycooltyp-heavy.woff2"</span><span class="token punctuation">)</span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"woff2"</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token url">url</span><span class="token punctuation">(</span><span class="token string">"/fonts/mycooltyp-heavy.woff"</span><span class="token punctuation">)</span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"woff"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">body </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">font-family</span><span class="token punctuation">:</span> My Cool Typeface<span class="token punctuation">,</span> Georgia<span class="token punctuation">,</span> serif<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>  </CodeGroupItem>
</CodeGroup>
<hr>
<h2 id="selectors" tabindex="-1"><a class="header-anchor" href="#selectors"><span>Selectors</span></a></h2>
<p>We use classes for selectors. We try to keep selectors short (ideally, just one class).</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>Do not use the <code v-pre>#some-id</code> selector (because of high <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity" target="_blank" rel="noopener noreferrer">specificity</a>). If you really need to target an id, and cannot add a class, use the attribute selector: <code v-pre>[id=&quot;some-id&quot;]</code>.</p>
</div>
<p>In addition to classes, you can use:</p>
<ul>
<li>Element selectors (<code v-pre>h2</code>, <code v-pre>.MainNav-item a</code>, etc.). But keep in mind that sometimes the element can change, for example a <code v-pre>&lt;h2&gt;</code> can be changed to a <code v-pre>&lt;h3&gt;</code>, a <code v-pre>&lt;a&gt;</code> to a <code v-pre>&lt;button&gt;</code>, etc.</li>
<li>Attribute selectors, especially for dynamic states (<code v-pre>.MainNav a[disabled]</code>).</li>
<li>Pseudo-classes (<code v-pre>:empty</code>, <code v-pre>:invalid</code>, …)</li>
</ul>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token comment">// Bad selector: too specific!</span></span>
<span class="line">#stream .tweet_header .author <span class="token punctuation">{</span>…<span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// Better selectors</span></span>
<span class="line">.Tweet <span class="token punctuation">{</span>…<span class="token punctuation">}</span></span>
<span class="line">.Tweet-author <span class="token punctuation">{</span>…<span class="token punctuation">}</span></span>
<span class="line">.Tweet-author a <span class="token punctuation">{</span>…<span class="token punctuation">}</span></span>
<span class="line">.Tweet-retweetBtn <span class="token punctuation">{</span>…<span class="token punctuation">}</span></span>
<span class="line">.Tweet-retweetBtn[disabled] <span class="token punctuation">{</span>…<span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="utility-classes" tabindex="-1"><a class="header-anchor" href="#utility-classes"><span>Utility classes</span></a></h2>
<p>Utilities are simple styles that can be used on any element to trigger some basic function (in a few lines of CSS at most).</p>
<ul>
<li>Write utility classes in <code v-pre>camelCase</code>, without a prefix.</li>
<li>Avoid using many utility classes. They move a lot of the presentation logic into your HTML, and can hide that a component has dependencies (unlike mixins and variables).</li>
<li>If you have several utility classes that work together, maybe make a component?</li>
</ul>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token comment">// Utility classes</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.icon </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.visuallyHidden </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">position</span><span class="token punctuation">:</span> absolute <span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">clip</span><span class="token punctuation">:</span> <span class="token function">rect</span><span class="token punctuation">(</span>1px<span class="token punctuation">,</span> 1px<span class="token punctuation">,</span> 1px<span class="token punctuation">,</span> 1px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="components" tabindex="-1"><a class="header-anchor" href="#components"><span>Components</span></a></h2>
<p>A component is a group of styles that represent a block of UI:</p>
<ul>
<li>It can be a single element (e.g. a <code v-pre>Button</code> component)</li>
<li>Or a group of elements (e.g. an article teaser with a container, a title, an image, a short excerpt…)</li>
</ul>
<p>It can be hard to decide if some part of a design should be a big component, or several smaller components. Use your best judgement, and/or ask coworkers what they think.</p>
<h3 id="component-and-elements" tabindex="-1"><a class="header-anchor" href="#component-and-elements"><span>Component and elements</span></a></h3>
<p>We follow a variant of the <a href="https://getbem.com/" target="_blank" rel="noopener noreferrer">BEM methodology</a>.</p>
<p>Each component must have a main element which contains the others (if any). Use the component’s name as its class, for example:</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Teaser<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    …</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For component elements, use the component name as a namespace, and add a lower camel case element name:</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Teaser<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Teaser-head<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>…<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Teaser-intro<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>…<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Component element classes should not have more than 2 segments. <code v-pre>MyComponent-list-item</code> is wrong; use <code v-pre>MyComponent-listItem</code> or simply <code v-pre>MyComponent-item</code>. If you need to create a lot of element classes with 2 or 3 words, maybe your component is too complex and should be refactored into smaller components?</p>
<h3 id="targetting-html-elements" tabindex="-1"><a class="header-anchor" href="#targetting-html-elements"><span>Targetting HTML elements</span></a></h3>
<p>Unlike the stricter BEM methodology, we allow writing selectors that target a HTML element inside a component or component element.</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Teaser<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Teaser-head<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>…<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Cool title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span></span>
<span class="line">  …</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For example we could style the link inside <code v-pre>MyComponent-title</code> here:</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token selector">.Teaser-head a </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.Teaser-head a:hover,</span>
<span class="line">.Teaser-head a:focus </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> purple<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="modifier-classes" tabindex="-1"><a class="header-anchor" href="#modifier-classes"><span>Modifier classes</span></a></h3>
<p>Sometimes the component’s container or a component element can have slightly different styles in different places. In those situations we can create style variants, using classes like: <code v-pre>Component--variantName</code> (for the container) or <code v-pre>Component-element--variantName</code> (for an element in the component).</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="line"><span class="token comment">&lt;!-- Alternative style for the first instance of this component in a list --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Teaser Teaser--highlight<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Teaser-head<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>…<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>…<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Teaser-desc<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>…<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Teaser<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Teaser-head<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>…<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>…<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Teaser-desc<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>…<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="responsive-styles" tabindex="-1"><a class="header-anchor" href="#responsive-styles"><span>Responsive styles</span></a></h2>
<h3 id="keep-all-styles-for-a-selector-together" tabindex="-1"><a class="header-anchor" href="#keep-all-styles-for-a-selector-together"><span>Keep all styles for a selector together</span></a></h3>
<p>Do not separate desktop and mobile styles into different files. You want to keep them tightly together:</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token selector">.spaceBefore1 </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">margin-top</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 750px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token selector">.spaceBefore1 </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">margin-top</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mobile-first" tabindex="-1"><a class="header-anchor" href="#mobile-first"><span>Mobile-first</span></a></h3>
<p>We use a mobile-first approach. Here’s how it works:</p>
<ul>
<li>First, try to find the simpler “state” of a component or element style. Most of the time, it will look like the mobile layout.</li>
<li>Then, add styles for larger viewports, in a media query.</li>
</ul>
<p>Using Sass, you can use media query nesting to avoid repeating the selector and making the relationship between the styles clearer.</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token selector">.MyComponent </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">border</span><span class="token punctuation">:</span> solid 1px black<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 750px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">border-width</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">padding</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Avoid doing things like this, it’s doing extra work for nothing:</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token selector">.MyComponent-image </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">margin-right</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 749px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">float</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">margin-right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Finally, sometimes the mobile styles are rather specific and not useful for larger screens. In that case, try to separate styles in tree groups: common, small screens, and larger screens.</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token selector">.MyComponent-image </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">outline</span><span class="token punctuation">:</span> solid 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>.25<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">outline-offset</span><span class="token punctuation">:</span> -1px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> #eee<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 749px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% <span class="token operator">-</span> 40px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">max-width</span><span class="token punctuation">:</span> 360px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 750px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">margin-right</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="share-breakpoints-between-components" tabindex="-1"><a class="header-anchor" href="#share-breakpoints-between-components"><span>Share breakpoints between components</span></a></h3>
<p>Try to use 2–3 main breakpoints and reuse them throughout the site or application. Using Sass, you can store those breakpoints in variables:</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token property"><span class="token variable">$bp-medium</span></span><span class="token punctuation">:</span> 750px<span class="token punctuation">;</span></span>
<span class="line"><span class="token property"><span class="token variable">$bp-large</span></span><span class="token punctuation">:</span> 1100px<span class="token punctuation">;</span></span>
<span class="line"><span class="token property"><span class="token variable">$bp-xlarge</span></span><span class="token punctuation">:</span> 1400px<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// By convention, when using max-width you should</span></span>
<span class="line"><span class="token comment">// remove 1px to avoid conflicts if the viewport</span></span>
<span class="line"><span class="token comment">// width is exactly $bp-medium</span></span>
<span class="line"><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> <span class="token variable">$bp-medium</span> <span class="token operator">-</span> 1px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>…<span class="token punctuation">}</span></span>
<span class="line"><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> <span class="token variable">$bp-medium</span><span class="token punctuation">)</span></span> <span class="token punctuation">{</span>…<span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="use-named-media-queries" tabindex="-1"><a class="header-anchor" href="#use-named-media-queries"><span>Use named media queries</span></a></h3>
<p>Name media queries allow you to define a media query once, and reuse it every time. In CSS proposals, it looks like this:</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span>--my-media-query<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>…<span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Since this feature is not standardized or supported yet, we can mimick this behavior in Sass to make our Sass code easier to maintain. Use this <a href="https://www.npmjs.com/package/sass-mq-build" target="_blank" rel="noopener noreferrer">mq-build</a> function to store full media queries in variables:</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token keyword">@import</span> <span class="token string">"node_modules/sass-mq-build/mq-build"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token property"><span class="token variable">$mq-small</span></span><span class="token punctuation">:</span> <span class="token function">mq-build</span><span class="token punctuation">(</span><span class="token null keyword">null</span><span class="token punctuation">,</span> 750px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token property"><span class="token variable">$mq-medium</span></span><span class="token punctuation">:</span> <span class="token function">mq-build</span><span class="token punctuation">(</span>750px<span class="token punctuation">,</span> 1100px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token property"><span class="token variable">$mq-large</span></span><span class="token punctuation">:</span> <span class="token function">mq-build</span><span class="token punctuation">(</span>1100px<span class="token punctuation">,</span> <span class="token null keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.something </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token variable">$mq-small</span><span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token variable">$mq-medium</span><span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="sass-selector-nesting" tabindex="-1"><a class="header-anchor" href="#sass-selector-nesting"><span>Sass Selector Nesting</span></a></h2>
<p>Selector nesting makes your code more difficult to read. Avoid unnecessary nesting.</p>
<ul>
<li>Nest once if helpful, and twice at most.</li>
<li>Keep the resulting CSS selectors as short as possible.</li>
<li>Do not overuse the <code v-pre>&amp;</code> symbol.</li>
</ul>
<h3 id="avoid-composing-class-names" tabindex="-1"><a class="header-anchor" href="#avoid-composing-class-names"><span>Avoid composing class names</span></a></h3>
<p>Do not use the <code v-pre>&amp;</code> symbol to create a class name that extends the parent class:</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token selector">.Header </span><span class="token punctuation">{</span></span>
<span class="line">  …</span>
<span class="line">  &amp;--dark <span class="token punctuation">{</span>…<span class="token punctuation">}</span></span>
<span class="line">  &amp;-logo <span class="token punctuation">{</span>…<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In this example, if a developer looks at the HTML code and wants to find the CSS code for the <code v-pre>Header--dark</code> or <code v-pre>Header-logo</code> classes, they won’t be able to find it in the codebase!</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token comment">// BAD: unnecessary nesting</span></span>
<span class="line"><span class="token selector">.Header </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token selector">.Header-top </span><span class="token punctuation">{</span></span>
<span class="line">    .Header-logo <span class="token punctuation">{</span>…<span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.Nav </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token selector">ul </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token selector">li </span><span class="token punctuation">{</span></span>
<span class="line">      a <span class="token punctuation">{</span>…<span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// GOOD: limit nesting</span></span>
<span class="line"><span class="token selector">.Header </span><span class="token punctuation">{</span></span>
<span class="line">  …</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.Header-top </span><span class="token punctuation">{</span></span>
<span class="line">  …</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.Header-logo </span><span class="token punctuation">{</span></span>
<span class="line">  …</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.Nav a </span><span class="token punctuation">{</span></span>
<span class="line">  …</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="sass-variables" tabindex="-1"><a class="header-anchor" href="#sass-variables"><span>Sass Variables</span></a></h2>
<p>We use the Sass preprocessor, with the <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">SCSS syntax</a>.
Sass files should have a <code v-pre>.scss</code> extension.</p>
<p>Use <code v-pre>node-sass</code> to compile <code v-pre>.scss</code> files to CSS. Generally, this is integrated in a build config using gulp or webpack. Look for the documentation in the project (in e.g. a <code v-pre>README.md</code> or <code v-pre>doc/FRONTEND.md</code>).</p>
<h3 id="variables-and-mixins" tabindex="-1"><a class="header-anchor" href="#variables-and-mixins"><span>Variables and mixins</span></a></h3>
<p>Use lowercase names with hyphens (not underscores), and follow an general-to-particular progression:</p>
<ul>
<li>Global variables and mixins: <code v-pre>$type-name</code>, <code v-pre>@mixin some-name</code></li>
<li>If specific to a component: <code v-pre>$component-type-name</code>, <code v-pre>@mixin component-some-name</code></li>
</ul>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token comment">// base/_variables.scss</span></span>
<span class="line"><span class="token property"><span class="token variable">$color-brand</span></span><span class="token punctuation">:</span>  #e95d1e<span class="token punctuation">;</span></span>
<span class="line"><span class="token property"><span class="token variable">$color-link</span></span><span class="token punctuation">:</span>   #08c<span class="token punctuation">;</span></span>
<span class="line"><span class="token property"><span class="token variable">$breakpoint-small</span></span><span class="token punctuation">:</span>   500px<span class="token punctuation">;</span></span>
<span class="line"><span class="token property"><span class="token variable">$breakpoint-medium</span></span><span class="token punctuation">:</span>  860px<span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// base/_grid.scss</span></span>
<span class="line"><span class="token keyword">@mixin</span> <span class="token function">grid-container</span><span class="token punctuation">(</span>…<span class="token punctuation">)</span> <span class="token punctuation">{</span>…<span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">@mixin</span> <span class="token function">grid-item</span><span class="token punctuation">(</span>…<span class="token punctuation">)</span> <span class="token punctuation">{</span>…<span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// component/_header.scss</span></span>
<span class="line"><span class="token keyword">@import</span> <span class="token string">"../base/variables"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">@import</span> <span class="token string">"../base/grid"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token property"><span class="token variable">$header-color-bg</span></span><span class="token punctuation">:</span> #555 <span class="token statement keyword">!default</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token property"><span class="token variable">$header-color-link-main</span></span><span class="token punctuation">:</span> #fff <span class="token statement keyword">!default</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token property"><span class="token variable">$header-color-link-active</span></span><span class="token punctuation">:</span> #faa <span class="token statement keyword">!default</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.Header </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">$header-color-bg</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


