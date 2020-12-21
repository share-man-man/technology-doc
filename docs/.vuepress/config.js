module.exports = {
  title: "小满的文档",
  description: "技术文档",
  themeConfig: {
    lastUpdated: "Last Updated", // string | boolean
    smoothScroll: true,
    // nav: [
    //   { text: "Home", link: "/" },
    //   { text: "Guide", link: "/guide/" },
    //   { text: "External", link: "https://google.com" },
    // ],
    sidebar: [
      ["/", "首页"],
      ["/deno/", "deno入门"],
      ["/vue3/", "Vue3.x"],
    ],
  },
};
