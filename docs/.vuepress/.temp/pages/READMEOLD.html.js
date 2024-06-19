import comp from "C:/www/peaksGuidelines/vuepress-starter/docs/.vuepress/.temp/pages/READMEOLD.html.vue"
const data = JSON.parse("{\"path\":\"/READMEOLD.html\",\"title\":\"Home\",\"lang\":\"fr-FR\",\"frontmatter\":{\"home\":false,\"title\":\"Home\",\"layout\":\"HomeLayout\"},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"READMEOLD.md\",\"excerpt\":\"<p>This is the content of home page. Check <a href=\\\"https://vuejs.press/reference/default-theme/frontmatter.html#home-page\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Home Page Docs</a> for more details.</p>\\n\"}")
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
