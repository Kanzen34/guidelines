import comp from "C:/www/peaksGuidelines/vuepress-starter/docs/.vuepress/.temp/pages/posts/general.html.vue"
const data = JSON.parse("{\"path\":\"/posts/general.html\",\"title\":\"General rules\",\"lang\":\"fr-FR\",\"frontmatter\":{\"date\":\"2024-06-19T00:00:00.000Z\",\"category\":[\"Frontend\",\"Backend\",\"Guidelines\"],\"tag\":[\"General\"],\"author\":\"Nicolas Fradin\",\"excerpt\":\"general\"},\"headers\":[{\"level\":2,\"title\":\"Maintain a README file\",\"slug\":\"maintain-a-readme-file\",\"link\":\"#maintain-a-readme-file\",\"children\":[]},{\"level\":2,\"title\":\"Use EditorConfig\",\"slug\":\"use-editorconfig\",\"link\":\"#use-editorconfig\",\"children\":[]},{\"level\":2,\"title\":\"Use the DRY principle\",\"slug\":\"use-the-dry-principle\",\"link\":\"#use-the-dry-principle\",\"children\":[]},{\"level\":2,\"title\":\"Clean up your code\",\"slug\":\"clean-up-your-code\",\"link\":\"#clean-up-your-code\",\"children\":[]}],\"git\":{\"updatedTime\":1718790907000,\"contributors\":[{\"name\":\"Nicolas Fradin\",\"email\":\"n.fradin@peaks.fr\",\"commits\":1}]},\"filePathRelative\":\"posts/general.md\"}")
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
