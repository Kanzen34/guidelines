export const categoriesMap = {"category":{"/":{"path":"/category/","map":{"Frontend":{"path":"/category/frontend/","indexes":[0,1,2,3]},"Backend":{"path":"/category/backend/","indexes":[3]},"Guidelines":{"path":"/category/guidelines/","indexes":[0,1,2,3]}}}},"tag":{"/":{"path":"/tag/","map":{"General":{"path":"/tag/general/","indexes":[3]},"html":{"path":"/tag/html/","indexes":[2]},"accessibility":{"path":"/tag/accessibility/","indexes":[2]},"templating":{"path":"/tag/templating/","indexes":[2]},"Semantic":{"path":"/tag/semantic/","indexes":[2]},"javascript":{"path":"/tag/javascript/","indexes":[1]},"scss":{"path":"/tag/scss/","indexes":[0]},"sass":{"path":"/tag/sass/","indexes":[0]},"css":{"path":"/tag/css/","indexes":[0]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

