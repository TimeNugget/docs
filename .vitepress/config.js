import { defineConfig } from "vitepress";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TimeNugget",
  description: "TimeNugget 文档",
  head: [["link", { rel: "icon", href: "/avatar.webp" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: "/avatar.webp",

    nav: [
      { text: "首页", link: "/" },
      { text: "文档", link: "/docs/" },
      { text: "求生宝典", link: "/SurvivalManual/" },
      {
        text: "官方Q群",
        link: "https://qm.qq.com/q/N80scRlJmi",
      },
    ],

    search: {
      provider: "local",
    },

    sidebar: {
      "/docs/": [
        {
          text: "简介",
          items: [{ text: "TimeNugget", link: "/docs/" }],
        },
        {
          text: "推荐",
          items: [
            { text: "Github项目推荐", link: "/docs/github-recommendations" },
          ],
        },
        {
          text: "高效使用AI",
          items: [
            { text: "AI工具推荐", link: "/docs/ai-tools" },
            { text: "提示词工程", link: "/docs/prompt-engineering" },
          ],
        },
      ],
      "/SurvivalManual/": [
        {
          text: "简介",
          items: [{ text: "求生宝典", link: "/SurvivalManual/" }],
        },
        {
          text: "济南大学",
          items: [
            { text: "目录", link: "/SurvivalManual/ujn/" },
            { text: "免责声明", link: "/SurvivalManual/ujn/disclaimer" },
            { text: "序言", link: "/SurvivalManual/ujn/preface" },
            {
              text: "第一章 认识“大学”",
              link: "/SurvivalManual/ujn/First/",
              collapsed: true,
              items: [
                {
                  text: "大学系统的本质",
                  link: "/SurvivalManual/ujn/First/One",
                },
                { text: "信息差地图", link: "/SurvivalManual/ujn/First/Two" },
                {
                  text: "时间价值量化",
                  link: "/SurvivalManual/ujn/First/Three",
                },
              ],
            },
            {
              text: "第二章 反内卷",
              link: "/SurvivalManual/ujn/Second/",
              collapsed: true,
              items: [
                {
                  text: "选课的“断舍离”",
                  link: "/SurvivalManual/ujn/Second/One",
                },
                { text: "考试突击", link: "/SurvivalManual/ujn/Second/Two" },
                {
                  text: "避坑指南",
                  link: "/SurvivalManual/ujn/Second/Three",
                },
              ],
            },
            {
              text: "第三章 时间管理",
              link: "/SurvivalManual/ujn/Third/",
              collapsed: true,
              items: [
                {
                  text: "反常识时间分配",
                  link: "/SurvivalManual/ujn/Third/One",
                },
                {
                  text: "优先级决策模型",
                  link: "/SurvivalManual/ujn/Third/Two",
                },
                {
                  text: "工具与系统",
                  link: "/SurvivalManual/ujn/Third/Three",
                },
              ],
            },
            {
              text: "第四章 资源“掠夺”",
              link: "/SurvivalManual/ujn/Fourth/",
              collapsed: true,
              items: [
                {
                  text: "人脉网络搭建",
                  link: "/SurvivalManual/ujn/Fourth/One",
                },
                {
                  text: "免费资源地图",
                  link: "/SurvivalManual/ujn/Fourth/Two",
                },
                {
                  text: "信息验证机制",
                  link: "/SurvivalManual/ujn/Fourth/Three",
                },
              ],
            },
            {
              text: "第五章 风险对冲",
              link: "/SurvivalManual/ujn/Fifth/",
              collapsed: true,
              items: [
                {
                  text: "制度性风险预警",
                  link: "/SurvivalManual/ujn/Fifth/One",
                },
                {
                  text: "健康与安全止损",
                  link: "/SurvivalManual/ujn/Fifth/Two",
                },
                {
                  text: "决策备份系统",
                  link: "/SurvivalManual/ujn/Fifth/Three",
                },
              ],
            },
            {
              text: "第六章 认知升维",
              link: "/SurvivalManual/ujn/Sixth/",
              collapsed: true,
              items: [
                {
                  text: "大学的 “第三空间”",
                  link: "/SurvivalManual/ujn/Sixth/One",
                },
                {
                  text: "反脆弱思维",
                  link: "/SurvivalManual/ujn/Sixth/Two",
                },
                {
                  text: "认知工具箱",
                  link: "/SurvivalManual/ujn/Sixth/Three",
                },
              ],
            },
            { text: "致谢", link: "/SurvivalManual/ujn/Thanks" },
          ],
        },
      ],
    },

    editLink: {
      pattern: "https://github.com/TimeNugget/timenugget-docs/edit/main/:path",
      text: "在 GitHub 上编辑此页",
    },

    socialLinks: [{ icon: "github", link: "https://github.com/TimeNugget" }],
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "short",
      },
    },
  },
});
