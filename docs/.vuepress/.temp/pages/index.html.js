import comp from "C:/www/peaksGuidelines/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"fr-FR\",\"frontmatter\":{\"home\":false,\"title\":\"Home\",\"layout\":\"HomeLayout\"},\"headers\":[],\"git\":{\"updatedTime\":1718793414000,\"contributors\":[{\"name\":\"Nicolas Fradin\",\"email\":\"n.fradin@peaks.fr\",\"commits\":3}]},\"filePathRelative\":\"README.md\",\"excerpt\":\"\\n<p>In progress</p>\\n\"}")
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
