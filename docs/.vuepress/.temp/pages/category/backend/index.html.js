import comp from "C:/www/peaksGuidelines/vuepress-starter/docs/.vuepress/.temp/pages/category/backend/index.html.vue"
const data = JSON.parse("{\"path\":\"/category/backend/\",\"title\":\"Category Backend\",\"lang\":\"fr-FR\",\"frontmatter\":{\"title\":\"Category Backend\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"Backend\",\"key\":\"category\"},\"layout\":\"Category\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
