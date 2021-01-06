module.exports = {
  title: "小满的技术文档",
  description: "Vue.js - The 渐进式 JavaScript 框架",
  themeConfig: {
    // logo: "/logo.png",
    lastUpdated: "Last updated",
    sidebarDepth: 2,
    smoothScroll: false,
    sidebar: [
      {
        title: "首页",
        collapsable: false,
        path: "/",
      },
      {
        title: "deno服务端",
        path: "/deno/",
        children: ["/deno/"],
      },
      {
        title: "vue3.x 新特性",
        path: "/vue3/external",
        children: ["/vue3/external", "/vue3/internal"],
      },
    ],
  },
};
