<template><div><h1 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript"><span>Javascript</span></a></h1>
<h2 id="formatting" tabindex="-1"><a class="header-anchor" href="#formatting"><span>Formatting</span></a></h2>
<p>Follow the formatting style used by <a href="https://prettier.io/" target="_blank" rel="noopener noreferrer">Prettier</a> (with default settings).</p>
<ul>
<li>Indent with 2 spaces</li>
<li>Use semicolons (<code v-pre>;</code>) at the end of statements</li>
<li>Use double quotes for strings</li>
<li>Keep opening braces (<code v-pre>{</code>) on the current line, with one space before, and closing braces (<code v-pre>}</code>) on a new line</li>
</ul>
<p>Recommended: install Prettier (<code v-pre>npm i -g prettier</code> or <a href="https://prettier.io/docs/en/editors.html" target="_blank" rel="noopener noreferrer">install for your editor</a>) and use it to automatically reformat your JS code.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> settings <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">indentSize</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">semicolons</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">opinion</span><span class="token punctuation">(</span>settings<span class="token punctuation">.</span>semicolons<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">opinion</span><span class="token punctuation">(</span><span class="token parameter">pref</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> opinion <span class="token operator">=</span> <span class="token string">"Semicolons are "</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>pref <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    opinion <span class="token operator">+=</span> <span class="token string">"alright, mate."</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>pref <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    opinion <span class="token operator">+=</span> <span class="token string">"superfluous."</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    opinion <span class="token operator">=</span> <span class="token string">"What is a semicolon?"</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">return</span> opinion<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="comments" tabindex="-1"><a class="header-anchor" href="#comments"><span>Comments</span></a></h2>
<ul>
<li>Use single-line comments (<code v-pre>// …</code>) to comment on the next line or the next few lines of code.</li>
<li>Use a <a href="https://jsdoc.app/" target="_blank" rel="noopener noreferrer">JSDoc-style</a> comment (<code v-pre>/** … */</code>) before a complex function or a module.</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Make a header "sticky"</span>
<span class="line"> * (Adds/removes a class when scrolling)</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">stickifyHeader</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> activeClass<span class="token punctuation">,</span> offset</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 250ms not working when scrolling too quicky</span></span>
<span class="line">  <span class="token keyword">const</span> latency <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span></span>
<span class="line">  …</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="naming-things" tabindex="-1"><a class="header-anchor" href="#naming-things"><span>Naming things</span></a></h2>
<ul>
<li>Use <code v-pre>lowerCamelCase</code> for names: variables, functions, object keys…</li>
<li>Use <code v-pre>UpperCamelCase</code> for classes, and for UI components (in React, Vue.js, etc.).</li>
<li>Use descriptive names rather than generic ones.</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"></span>
<span class="line"><span class="token comment">// Use descriptive names</span></span>
<span class="line"><span class="token keyword">const</span> element1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>…<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> element2 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>…<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> button <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>…<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>…<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// For names with 2 or 3 words,</span></span>
<span class="line"><span class="token comment">// use lowerCamelCase style</span></span>
<span class="line"><span class="token keyword">const</span> userSettings <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">showInvisible</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">validateSettings</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  …</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// And UpperCamelCase for classes</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">MobileHeader</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span></span>
<span class="line">  …</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="global-variables" tabindex="-1"><a class="header-anchor" href="#global-variables"><span>Global variables</span></a></h2>
<p>Global variables from a script can clash with other scripts in the page, creating subtle bugs.</p>
<ul>
<li>Avoid creating global variables; use the <a href="#iife">IIFE pattern or ES6 modules</a> to isolate variables</li>
<li>If you need to set a parameter for a script in your HTML code, use data attributes</li>
</ul>
<h3 id="variables-and-the-window-object" tabindex="-1"><a class="header-anchor" href="#variables-and-the-window-object"><span>Variables and the window object</span></a></h3>
<p>In web pages, global variables are “hosted” by the <code v-pre>window</code> object. This means that a global variable <code v-pre>myVar</code> can also be accessed at <code v-pre>window.myVar</code>.</p>
<p>Variables become global when:</p>
<ul>
<li>Assigning explicitely: window.myVar = &quot;hello&quot;;</li>
<li>Declaring a variable at the top level of a script</li>
<li>Forgetting the <code v-pre>var</code> / <code v-pre>const</code> / <code v-pre>let</code> keyword</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// top level variables are global</span></span>
<span class="line"><span class="token keyword">var</span> count <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 50</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 50</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// variables in functions are not,</span></span>
<span class="line"><span class="token comment">// UNLESS you forget the var keyword</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">showCookieBanner</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">var</span> banner <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>…<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  visible <span class="token operator">=</span> <span class="token operator">!</span>banner<span class="token punctuation">.</span>hidden<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="line"><span class="token comment">&lt;!-- using data attributes for settings --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"><span class="token keyword">var</span> sliderItems <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Slider<span class="token punctuation">"</span></span> <span class="token attr-name">data-items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  …</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="modules" tabindex="-1"><a class="header-anchor" href="#modules"><span>Modules</span></a></h2>
<ul>
<li>Create one JS file for each major feature or UI part.</li>
<li>Wrap the contents of each file in an IIFE manually, or use a bundler such as Browserify, Rollup or webpack.</li>
</ul>
<h3 id="writing-iifes-by-hand" tabindex="-1"><a class="header-anchor" href="#writing-iifes-by-hand"><span><a name="iife"></a> Writing IIFEs by hand</span></a></h3>
<p>The immediately-invoked function expression (IIFE) pattern prevents us from creating global variables. The <code v-pre>()</code> after the function executes it (that’s the “immediately-invoked” part), otherwise our code would not run.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// my-module.js</span></span>
<span class="line"><span class="token operator">!</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// only exists in the scope of the parent function</span></span>
<span class="line">  <span class="token keyword">var</span> local <span class="token operator">=</span> <span class="token string">"Hot variables in you area"</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// we can still make some values or methods global if we want to</span></span>
<span class="line">  window<span class="token punctuation">.</span><span class="token function-variable function">myModule</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>…<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When you concatenate several modules, you should end up with a bundled JS file that looks like this:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// my-module.js</span></span>
<span class="line"><span class="token operator">!</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>…<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// other-module.js</span></span>
<span class="line"><span class="token operator">!</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>…<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="using-a-script-bundler" tabindex="-1"><a class="header-anchor" href="#using-a-script-bundler"><span>Using a script bundler</span></a></h3>
<p>With a JS code bundler such as <a href="https://browserify.org/" target="_blank" rel="noopener noreferrer">Browserify</a>, <a href="https://browserify.org/" target="_blank" rel="noopener noreferrer">Rollup</a> or <a href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer">Webpack</a>, you don’t need to wrap each module in a function: the bundler will take care of it.</p>
<p>For example with webpack and ES6 syntax:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// app.js</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">"some-dependency"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">"./scripts/my-module.js"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">"./scripts/other-module.js"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// my-module.js</span></span>
<span class="line"><span class="token keyword">const</span> local <span class="token operator">=</span> <span class="token string">"Hot variables in you area"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">myModule</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>…<span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="using-es6" tabindex="-1"><a class="header-anchor" href="#using-es6"><span>Using ES6</span></a></h2>
<p>ECMAScript 2015 (also called ES6 or ES2015) is a major version of the JavaScript standard, with most of its features already implemented by major browsers in 2017. To support older browsers, it might be useful to transpile your ES6 code into ES5.</p>
<ul>
<li>For new projects, use ES6 syntax and features.</li>
<li>Use a transpiler (<a href="https://babeljs.io/" target="_blank" rel="noopener noreferrer">Babel</a>, <a href="https://buble.surge.sh/" target="_blank" rel="noopener noreferrer">Bublé</a>) to generate ES5 code.</li>
<li>Avoid ES6 syntax and features for existing projects not using a transpiler.</li>
</ul>
<h3 id="browser-support" tabindex="-1"><a class="header-anchor" href="#browser-support"><span>Browser support</span></a></h3>
<p>If you’re not transpiling to ES5 and are targetting older browsers, avoid using ES6 syntax and features. Some examples of minimum compatibility:</p>
<ul>
<li>Arrow functions (<code v-pre>x =&gt; x * 2</code>): needs Edge 12, Chrome 45, Safari 10</li>
<li>Promises: Chrome 32, Firefox 29, Edge 12</li>
<li><code v-pre>const</code> and <code v-pre>let</code> statements: needs IE11, Chrome 49</li>
<li><code v-pre>for...of</code> loops: Edge 12, Chrome 38</li>
<li><code v-pre>async / await</code>: Chrome 55, Firefox 52, Edge 14, Safari 10.1</li>
<li>ES6 modules: experimental support in some browsers only</li>
</ul>
<p>If you are transpiling ES6 to ES5, note that some features require adding a polyfill to your JS code, and that can increase the size of your JS bundle a lot!</p>
<hr>
<h2 id="debugging" tabindex="-1"><a class="header-anchor" href="#debugging"><span>Debugging</span></a></h2>
<ul>
<li>In the browser’s Developer Tools, try to be familiar with both the Console and the JS Debugger (“Sources” in Chrome, “Debugger” in Firefox)</li>
<li>Remove <code v-pre>console.log</code> calls and <code v-pre>debugger</code> statements from your code before committing</li>
</ul>
<p>How to set breakpoints in your JS code:</p>
<ul>
<li><a href="https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html" target="_blank" rel="noopener noreferrer">Firefox Developer Tools - Debugger</a></li>
<li><a href="https://developer.chrome.com/docs/devtools?hl=fr" target="_blank" rel="noopener noreferrer">Chrome Developer Tools - Breakpoints</a></li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">potentiallyBuggyCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  …</span>
<span class="line">  <span class="token comment">// don’t forget to remove this statement</span></span>
<span class="line">  <span class="token keyword">debugger</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="tooling-up" tabindex="-1"><a class="header-anchor" href="#tooling-up"><span>Tooling up</span></a></h2>
<p>A lot of JavaScript development uses Node.js and associated packages.</p>
<h3 id="minimum-requirements" tabindex="-1"><a class="header-anchor" href="#minimum-requirements"><span>Minimum requirements</span></a></h3>
<ul>
<li>Install <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">Node.js</a> version 8 or higher</li>
<li>Learn the basics of <a href="https://nodesource.com/blog/the-basics-of-package-json-in-node-js-and-npm/" target="_blank" rel="noopener noreferrer">how package.json is structured</a></li>
<li>Use <code v-pre>npm</code> to manage dependencies and scripts</li>
<li>Use a JS code bundler (such as webpack) to create one or several JS bundles for the frontend</li>
</ul>
<h3 id="recommended-tools" tabindex="-1"><a class="header-anchor" href="#recommended-tools"><span>Recommended tools</span></a></h3>
<ul>
<li>Use <a href="https://github.com/nvm-sh/nvm" target="_blank" rel="noopener noreferrer">nvm</a> to install several Node.js versions and switch between them.</li>
<li>Use <a href="https://prettier.io/" target="_blank" rel="noopener noreferrer">Prettier</a> to format your JS and CSS code. You can install a Prettier plugin for your code editor of choice.</li>
<li>Consider using <a href="https://eslint.org/" target="_blank" rel="noopener noreferrer">eslint</a> to check your JS code, and <a href="https://stylelint.io/" target="_blank" rel="noopener noreferrer">stylelint</a> to check your CSS or SCSS code.</li>
</ul>
<p>In this example package.json we installed user-facing code as dependencies (<code v-pre>npm install --save</code>), and all the tools used to build or test code as development dependencies (<code v-pre>npm install --save-dev</code>).</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"my-project"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"build"</span><span class="token operator">:</span> <span class="token string">"webpack --env=prod"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"dev"</span><span class="token operator">:</span> <span class="token string">"webpack-dev-server --env=dev"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"dependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"jquery"</span><span class="token operator">:</span> <span class="token string">"^3.2.1"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"some-other-lib"</span><span class="token operator">:</span> <span class="token string">"^1.0"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"devDependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"babel-core"</span><span class="token operator">:</span> <span class="token string">"^6.25.0"</span><span class="token punctuation">,</span></span>
<span class="line">    …</span>
<span class="line">    <span class="token string-property property">"eslint"</span><span class="token operator">:</span> <span class="token string">"^4.7.1"</span><span class="token punctuation">,</span></span>
<span class="line">    …</span>
<span class="line">    <span class="token string-property property">"webpack"</span><span class="token operator">:</span> <span class="token string">"^3.4.1"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"webpack-dev-server"</span><span class="token operator">:</span> <span class="token string">"^2.6.1"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="type-coercion" tabindex="-1"><a class="header-anchor" href="#type-coercion"><span>Type coercion</span></a></h2>
<p>JavaScript may automatically convert a value from one type to another (for example, from a string to a number):</p>
<ul>
<li>When writing <code v-pre>if (myVar)</code> (or using operators like <code v-pre>?</code>, <code v-pre>!</code>, <code v-pre>||</code> and <code v-pre>&amp;&amp;</code>), JS will convert the value to a boolean (<code v-pre>true</code> or <code v-pre>false</code>)</li>
<li>When comparing two values with <code v-pre>x == y</code>, <code v-pre>x != y</code>, <code v-pre>x &lt; y</code> and <code v-pre>x &gt; y</code>, some type conversion can happen if the values have different types</li>
</ul>
<h3 id="conversion-to-boolean" tabindex="-1"><a class="header-anchor" href="#conversion-to-boolean"><span>Conversion to boolean</span></a></h3>
<p>The following values convert to <code v-pre>false: 0</code> and <code v-pre>NaN</code>, the empty string <code v-pre>&quot;&quot;</code>, <code v-pre>undefined</code>, <code v-pre>null</code> and <code v-pre>false</code>. Everything else converts to <code v-pre>true</code>, including objects and empty arrays!</p>
<ul>
<li>Be careful with <code v-pre>if (myVar)</code>; try to write a more precise check if possible</li>
<li>For arrays and some object types, you may need to check myVar.length</li>
</ul>
<h3 id="comparing-values" tabindex="-1"><a class="header-anchor" href="#comparing-values"><span>Comparing values</span></a></h3>
<ul>
<li>Prefer the strict equality and inequality operators (<code v-pre>x === y</code>, <code v-pre>x !== y</code>)</li>
<li>Avoid <code v-pre>==</code> and <code v-pre>!=</code> (although sometimes it can be useful, for example <code v-pre>myVar != null</code> checks if the value is different from <code v-pre>null</code> and <code v-pre>undefined</code>)</li>
</ul>
</div></template>


