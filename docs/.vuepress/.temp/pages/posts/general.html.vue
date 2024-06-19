<template><div><h1 id="general-rules" tabindex="-1"><a class="header-anchor" href="#general-rules"><span>General rules</span></a></h1>
<h2 id="maintain-a-readme-file" tabindex="-1"><a class="header-anchor" href="#maintain-a-readme-file"><span>Maintain a README file</span></a></h2>
<ul>
<li>Every project should have a <code v-pre>README.md</code> file (or just <code v-pre>README</code>).</li>
<li>Every developer should read this file, and update it if needed.</li>
<li>Use <a href="https://commonmark.org/help/" target="_blank" rel="noopener noreferrer">Markdown syntax</a> for better readability in Bitbucket, GitHub, etc.</li>
</ul>
<p>This <code v-pre>README.md</code> should exist at the root of the repository and give information on:</p>
<ul>
<li>What the project is (client, site/app name)</li>
<li>How to install the project on a developer’s machine</li>
<li>How to run development tasks (e.g. import data, compile frontend assets)</li>
<li>How to deploy the project</li>
</ul>
<p>If this documentation gets too big, you can break it into several files for specialized topics:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line">README.md</span>
<span class="line">doc/</span>
<span class="line">    INSTALL.md</span>
<span class="line">    FRONTEND.md</span>
<span class="line">    DEPLOYMENT.md</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Finally, if you set up a project from a boilerplate, and that boilerplate already has its own <code v-pre>README</code> file, see if you can remove it or rename it.</p>
<hr>
<h2 id="use-editorconfig" tabindex="-1"><a class="header-anchor" href="#use-editorconfig"><span>Use EditorConfig</span></a></h2>
<p>Frontend code files should be:</p>
<ul>
<li>encoded as UTF-8,</li>
<li>with <code v-pre>LF</code> end of lines,</li>
<li>and spaces for indents.</li>
</ul>
<p>We use the <a href="https://editorconfig.org/" target="_blank" rel="noopener noreferrer">EditorConfig format</a> to harmonize indentation and file format in a project. For this to work, we need two things:</p>
<ul>
<li>A <code v-pre>.editorconfig</code> file at the root of each project.</li>
<li>Your editor or IDE should have an EditorConfig plugin.</li>
</ul>
<p>Please verify both points now if you’re not sure.
There are EditorConfig plugins for most code editors:</p>
<ul>
<li><a href="https://plugins.jetbrains.com/plugin/7294-editorconfig" target="_blank" rel="noopener noreferrer">PhpStorm</a></li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig" target="_blank" rel="noopener noreferrer">VS Code</a></li>
<li><a href="https://atom.io/packages/editorconfig" target="_blank" rel="noopener noreferrer">Atom</a></li>
<li>...</li>
</ul>
<p>Here’s a reference .editorconfig file for new projects:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token comment"># http://EditorConfig.org</span></span>
<span class="line">root <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span></span>
<span class="line">charset <span class="token operator">=</span> utf-8</span>
<span class="line">end_of_line <span class="token operator">=</span> lf</span>
<span class="line">indent_style <span class="token operator">=</span> space</span>
<span class="line">indent_size <span class="token operator">=</span> <span class="token number">2</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>*.<span class="token punctuation">{</span>php,py<span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line">indent_size <span class="token operator">=</span> <span class="token number">4</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="use-the-dry-principle" tabindex="-1"><a class="header-anchor" href="#use-the-dry-principle"><span>Use the DRY principle</span></a></h2>
<p>Don’t Repeat Yourself: avoid code that is very similar in different places in the project.</p>
<p>In particular, avoid copying and pasting code in different places! Duplicated code is hard to maintain: you have to do the changes in 2, 5 or 10 places, and test each change.</p>
<ul>
<li>Templating: use includes, partials, macros…</li>
<li>Styles: use components, utility classes, mixins…</li>
<li>JavaScript: use functions, modules, components…</li>
</ul>
<p><strong>This is not an absolute rule!</strong> For example, if you need to make a variant that can evolve without impacting the first feature, some copy-pasting can be justified.</p>
<hr>
<h2 id="clean-up-your-code" tabindex="-1"><a class="header-anchor" href="#clean-up-your-code"><span>Clean up your code</span></a></h2>
<p>Keep the codebase short and avoid unused code.</p>
<ul>
<li>Remove unused files, failed experiments, etc.</li>
<li>HTML: avoid unnecessary elements and attributes</li>
<li>CSS: avoid unused selectors, and useless properties</li>
<li>JS, PHP, etc.: look out for unused variables and functions</li>
</ul>
</div></template>


