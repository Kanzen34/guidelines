import comp from "C:/www/peaksGuidelines/vuepress-starter/docs/.vuepress/.temp/pages/category/frontend/index.html.vue"
const data = JSON.parse("{\"path\":\"/category/frontend/\",\"title\":\"Category Frontend\",\"lang\":\"fr-FR\",\"frontmatter\":{\"title\":\"Category Frontend\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"Frontend\",\"key\":\"category\"},\"layout\":\"Category\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
