export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"C:/www/peaksGuidelines/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/Home.html", { loader: () => import(/* webpackChunkName: "Home.html" */"C:/www/peaksGuidelines/vuepress-starter/docs/.vuepress/.temp/pages/Home.html.js"), meta: {"title":"Home"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/www/peaksGuidelines/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Currently writing the readme file"} }],
  ["/posts/general.html", { loader: () => import(/* webpackChunkName: "posts_general.html" */"C:/www/peaksGuidelines/vuepress-starter/docs/.vuepress/.temp/pages/posts/general.html.js"), meta: {"_blog":{"title":"General rules","author":"Nicolas Fradin","date":"2024-06-19T00:00:00.000Z","category":["Frontend","Backend","Developpement"],"tag":["General"],"excerpt":"general"},"title":"General rules"} }],
  ["/posts/html.html", { loader: () => import(/* webpackChunkName: "posts_html.html" */"C:/www/peaksGuidelines/vuepress-starter/docs/.vuepress/.temp/pages/posts/html.html.js"), meta: {"_blog":{"title":"HTML AND TEMPLATING","author":"Nicolas Fradin","date":"2024-06-19T00:00:00.000Z","category":["Frontend","Developpement"],"tag":["html","accessibility","templating","Semantic"],"excerpt":"html"},"title":"HTML AND TEMPLATING"} }],
  ["/posts/js.html", { loader: () => import(/* webpackChunkName: "posts_js.html" */"C:/www/peaksGuidelines/vuepress-starter/docs/.vuepress/.temp/pages/posts/js.html.js"), meta: {"_blog":{"title":"Javascript","author":"Nicolas Fradin","date":"2024-06-19T00:00:00.000Z","category":["Frontend","Developpement"],"tag":["javascript"],"excerpt":"js"},"title":"Javascript"} }],
  ["/posts/scss.html", { loader: () => import(/* webpackChunkName: "posts_scss.html" */"C:/www/peaksGuidelines/vuepress-starter/docs/.vuepress/.temp/pages/posts/scss.html.js"), meta: {"_blog":{"title":"Sass/Scss/Css","author":"Nicolas Fradin","date":"2024-06-19T00:00:00.000Z","category":["Frontend","Developpement"],"tag":["scss","sass","css"],"excerpt":"sass"},"title":"Sass/Scss/Css"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/www/peaksGuidelines/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"C:/www/peaksGuidelines/vuepress-starter/docs/.vuepress/.temp/pages/category/index.html.js"), meta: {"title":"Categories"} }],
  ["/category/frontend/", { loader: () => import(/* webpackChunkName: "category_frontend_index.html" */"C:/www/peaksGuidelines/vuepress-starter/docs/.vuepress/.temp/pages/category/frontend/index.html.js"), meta: {"title":"Category Frontend"} }],
  ["/category/backend/", { loader: () => import(/* webpackChunkName: "category_backend_index.html" */"C:/www/peaksGuidelines/vuepress-starter/docs/.vuepress/.temp/pages/category/backend/index.html.js"), meta: {"title":"Category Backend"} }],
  ["/category/developpement/", { loader: () => import(/* webpackChunkName: "category_developpement_index.html" */"C:/www/peaksGuidelines/vuepress-starter/docs/.vuepress/.temp/pages/category/developpement/index.html.js"), meta: {"title":"Category Developpement"} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"C:/www/peaksGuidelines/vuepress-starter/docs/.vuepress/.temp/pages/tag/index.html.js"), meta: {"title":"Tags"} }],
  ["/tag/general/", { loader: () => import(/* webpackChunkName: "tag_general_index.html" */"C:/www/peaksGuidelines/vuepress-starter/docs/.vuepress/.temp/pages/tag/general/index.html.js"), meta: {"title":"Tag General"} }],
  ["/tag/html/", { loader: () => import(/* webpackChunkName: "tag_html_index.html" */"C:/www/peaksGuidelines/vuepress-starter/docs/.vuepress/.temp/pages/tag/html/index.html.js"), meta: {"title":"Tag html"} }],
  ["/tag/accessibility/", { loader: () => import(/* webpackChunkName: "tag_accessibility_index.html" */"C:/www/peaksGuidelines/vuepress-starter/docs/.vuepress/.temp/pages/tag/accessibility/index.html.js"), meta: {"title":"Tag accessibility"} }],
  ["/tag/templating/", { loader: () => import(/* webpackChunkName: "tag_templating_index.html" */"C:/www/peaksGuidelines/vuepress-starter/docs/.vuepress/.temp/pages/tag/templating/index.html.js"), meta: {"title":"Tag templating"} }],
  ["/tag/semantic/", { loader: () => import(/* webpackChunkName: "tag_semantic_index.html" */"C:/www/peaksGuidelines/vuepress-starter/docs/.vuepress/.temp/pages/tag/semantic/index.html.js"), meta: {"title":"Tag Semantic"} }],
  ["/tag/javascript/", { loader: () => import(/* webpackChunkName: "tag_javascript_index.html" */"C:/www/peaksGuidelines/vuepress-starter/docs/.vuepress/.temp/pages/tag/javascript/index.html.js"), meta: {"title":"Tag javascript"} }],
  ["/tag/scss/", { loader: () => import(/* webpackChunkName: "tag_scss_index.html" */"C:/www/peaksGuidelines/vuepress-starter/docs/.vuepress/.temp/pages/tag/scss/index.html.js"), meta: {"title":"Tag scss"} }],
  ["/tag/sass/", { loader: () => import(/* webpackChunkName: "tag_sass_index.html" */"C:/www/peaksGuidelines/vuepress-starter/docs/.vuepress/.temp/pages/tag/sass/index.html.js"), meta: {"title":"Tag sass"} }],
  ["/tag/css/", { loader: () => import(/* webpackChunkName: "tag_css_index.html" */"C:/www/peaksGuidelines/vuepress-starter/docs/.vuepress/.temp/pages/tag/css/index.html.js"), meta: {"title":"Tag css"} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"C:/www/peaksGuidelines/vuepress-starter/docs/.vuepress/.temp/pages/article/index.html.js"), meta: {"title":"Articles"} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"C:/www/peaksGuidelines/vuepress-starter/docs/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"title":"Timeline"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
