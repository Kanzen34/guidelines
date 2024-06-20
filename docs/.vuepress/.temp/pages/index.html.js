import comp from "C:/www/peaksGuidelines/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"fr-FR\",\"frontmatter\":{\"home\":false,\"title\":\"Home\",\"layout\":\"HomeLayout\"},\"headers\":[{\"level\":2,\"title\":\"Intro\",\"slug\":\"intro\",\"link\":\"#intro\",\"children\":[]},{\"level\":2,\"title\":\"Requirements\",\"slug\":\"requirements\",\"link\":\"#requirements\",\"children\":[]},{\"level\":2,\"title\":\"Install\",\"slug\":\"install\",\"link\":\"#install\",\"children\":[]}],\"git\":{\"updatedTime\":1718871736000,\"contributors\":[{\"name\":\"Nicolas Fradin\",\"email\":\"n.fradin@peaks.fr\",\"commits\":5}]},\"filePathRelative\":\"README.md\",\"excerpt\":\"\\n<p>Here will be (I hope ^^), the work of the collaboration on many developpers who\\nshared through those guidelines the good practises, warnings, etc that they have\\nencountered during their developper journey.</p>\\n<h2>Intro</h2>\\n<p>The website is build on <a href=\\\"https://vuepress.vuejs.org/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Vuepress</a> and use the <a href=\\\"https://ecosystem.vuejs.press/themes/default/config.html\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">default theme</a>.\\nAll templates are written in <code>markdown</code> and <code>yaml</code>. Vuepress use <a href=\\\"https://github.com/markdown-it/markdown-it#init-with-presets-and-options\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">markdownit</a>\\nThe rest is powered by <code>Vue</code> :</p>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
