<template><div><h1 id="peaks-guidelines" tabindex="-1"><a class="header-anchor" href="#peaks-guidelines"><span>PEAKS Guidelines</span></a></h1>
<p>Here will be (I hope ^^), the work of the collaboration on many developpers who
shared through those guidelines the good practises, warnings, etc that they have
encountered during their developper journey.</p>
<h2 id="intro" tabindex="-1"><a class="header-anchor" href="#intro"><span>Intro</span></a></h2>
<p>The website is build on <a href="https://vuepress.vuejs.org/" target="_blank" rel="noopener noreferrer">Vuepress</a> and use the <a href="https://ecosystem.vuejs.press/themes/default/config.html" target="_blank" rel="noopener noreferrer">default theme</a>.
All templates are written in <code v-pre>markdown</code> and <code v-pre>yaml</code>. Vuepress use <a href="https://github.com/markdown-it/markdown-it#init-with-presets-and-options" target="_blank" rel="noopener noreferrer">markdownit</a>
The rest is powered by <code v-pre>Vue</code> :</p>
<ul>
<li>Layouts</li>
<li>Components</li>
<li>Router</li>
<li>...</li>
</ul>
<h2 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements"><span>Requirements</span></a></h2>
<ul>
<li><code v-pre>ndoeJS</code></li>
<li><code v-pre>VueJs</code></li>
<li>Any IDE</li>
<li>An installation package manager such as <code v-pre>npm</code>, <code v-pre>yarn</code>,..</li>
<li><code v-pre>nvm</code> or equivalent could be usefull</li>
</ul>
<h2 id="install" tabindex="-1"><a class="header-anchor" href="#install"><span>Install</span></a></h2>
<p>Clone the project on <a href="https://github.com/Kanzen34/guidelines" target="_blank" rel="noopener noreferrer">my gitHub</a> (should go to gitlab)</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token comment"># For ssh</span></span>
<span class="line"><span class="token function">git</span> clone git@github.com:Kanzen34/guidelines.git</span>
<span class="line"></span>
<span class="line"><span class="token comment"># For https</span></span>
<span class="line"><span class="token function">git</span> clone https://github.com/Kanzen34/guidelines.git</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>then</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token comment"># Go to the project /</span></span>
<span class="line"><span class="token builtin class-name">cd</span> guidelines</span>
<span class="line"></span>
<span class="line"><span class="token comment"># isntall all packages</span></span>
<span class="line"><span class="token function">npm</span> i </span>
<span class="line"></span>
<span class="line"><span class="token comment"># run dev server</span></span>
<span class="line"><span class="token function">npm</span> run docs:dev</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


