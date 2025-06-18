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
      { text: "求生宝典", link: "/SurvivalManual/" },
      { text: "藏宝阁", link: "/Treasures/" },
      {
        text: "官方Q群",
        link: "https://qm.qq.com/q/N80scRlJmi",
      },
    ],

    search: {
      provider: "local",
    },

    sidebar: {
      "/Treasures/": [
        {
          text: "简介",
          items: [{ text: "藏宝阁", link: "/Treasures/" }],
        },
        {
          text: "秘籍",
          items: [
            {
              text: "Github 项目推荐",
              link: "/Treasures/github-recommendations",
            },
            {
              text: "高效使用 AI",
              collapsed: false,
              items: [
                { text: "AI 工具推荐", link: "/Treasures/ai-tools" },
                { text: "提示词工程", link: "/Treasures/prompt-engineering" },
              ],
            },
          ],
        },
      ],
      "/SurvivalManual/": [
        {
          text: "引言：宝典序言",
          collapsed: true,
          items: [
            { text: "宝典须知", link: "/SurvivalManual/" },
            { text: "致新济大人", link: "/SurvivalManual/toNewUJNer" },
            { text: "宝典使用说明", link: "/SurvivalManual/Guide" },
          ],
        },
        {
          text: "零. 新生指引",
          link: "/SurvivalManual/ujn/",
          collapsed: true,
          items: [
            {
              text: "1.报到注册流程",
              link: "/SurvivalManual/ujn/ReportProcess",
            },
            {
              text: "2.校园初识与生活必备",
              link: "/SurvivalManual/ujn/Campus",
            },
            {
              text: "3.融入大学生活",
              link: "/SurvivalManual/ujn/Integrate",
            },
          ],
        },
        {
          text: "一. 共识问题",
          link: "/SurvivalManual/ujn/First",
          collapsed: true,
          items: [
            {
              text: "1.你的生存法则/为人处世的价值观",
              link: "/SurvivalManual/ujn/First/1",
            },
            {
              text: "2.你遇到的困难/你已经了解的真相",
              link: "/SurvivalManual/ujn/First/2",

              items: [
                {
                  text: "2.1 学习方面",
                  link: "/SurvivalManual/ujn/First/2.1",
                },
                {
                  text: "2.2 生活方面",
                  link: "/SurvivalManual/ujn/First/2.2",
                },
                {
                  text: "2.3 社会实践方面",
                  link: "/SurvivalManual/ujn/First/2.3",
                },
              ],
            },
          ],
        },
        {
          text: "二. 细分学院",
          link: "/SurvivalManual/ujn/Second",
          collapsed: true,
          items: [
            {
              text: "1.信息科学与工程学院",
              link: "/SurvivalManual/ujn/Second/1",
              collapsed: true,
              items: [
                {
                  text: "1.1 学业攻坚策略",
                  link: "/SurvivalManual/ujn/Second/1/1.1",
                },
                {
                  text: "1.2 科研与竞赛之路",
                  link: "/SurvivalManual/ujn/Second/1/1.2",
                },
                {
                  text: "1.3 独家资源与设施",
                  link: "/SurvivalManual/ujn/Second/1/1.3",
                },
                {
                  text: "1.4 学院生活与社交",
                  link: "/SurvivalManual/ujn/Second/1/1.4",
                },
                {
                  text: "1.5 就业与深造展望",
                  link: "/SurvivalManual/ujn/Second/1/1.5",
                },
              ],
            },
            {
              text: "2.数学科学学院",
              link: "/SurvivalManual/ujn/Second/2",
              collapsed: true,
              items: [
                {
                  text: "2.1 学业进阶攻略",
                  link: "/SurvivalManual/ujn/Second/2/2.1",
                },
                {
                  text: "2.2 科研与竞赛",
                  link: "/SurvivalManual/ujn/Second/2/2.2",
                },
                {
                  text: "2.3 学习资源",
                  link: "/SurvivalManual/ujn/Second/2/2.3",
                },
                {
                  text: "2.4 学院生活",
                  link: "/SurvivalManual/ujn/Second/2/2.4",
                },
                {
                  text: "2.5 就业与深造",
                  link: "/SurvivalManual/ujn/Second/2/2.5",
                },
              ],
            },
            {
              text: "3.自动化与电气工程学院",
              link: "/SurvivalManual/ujn/Second/3",
              collapsed: true,
              items: [
                {
                  text: "3.1 学业精进之路",
                  link: "/SurvivalManual/ujn/Second/3/3.1",
                },
                {
                  text: "3.2 实践与创新",
                  link: "/SurvivalManual/ujn/Second/3/3.2",
                },
                {
                  text: "3.3 实验室与资源",
                  link: "/SurvivalManual/ujn/Second/3/3.3",
                },
                {
                  text: "3.4 学院生活",
                  link: "/SurvivalManual/ujn/Second/3/3.4",
                },
                {
                  text: "3.5 职业发展",
                  link: "/SurvivalManual/ujn/Second/3/3.5",
                },
              ],
            },
            {
              text: "4.商学院",
              link: "/SurvivalManual/ujn/Second/4",
              collapsed: true,
              items: [
                {
                  text: "4.1 学习策略与方法",
                  link: "/SurvivalManual/ujn/Second/4/4.1",
                },
                {
                  text: "4.2 实践与竞赛",
                  link: "/SurvivalManual/ujn/Second/4/4.2",
                },
                {
                  text: "4.3 资源与平台",
                  link: "/SurvivalManual/ujn/Second/4/4.3",
                },
                {
                  text: "4.4 学院生活与社交",
                  link: "/SurvivalManual/ujn/Second/4/4.4",
                },
                {
                  text: "4.5 就业与深造",
                  link: "/SurvivalManual/ujn/Second/4/4.5",
                },
              ],
            },
            {
              text: "5.物理科学与技术学院",
              link: "/SurvivalManual/ujn/Second/5",
              collapsed: true,
              items: [
                {
                  text: "5.1 学业精进",
                  link: "/SurvivalManual/ujn/Second/5/5.1",
                },
                {
                  text: "5.2 科研与实践",
                  link: "/SurvivalManual/ujn/Second/5/5.2",
                },
                {
                  text: "5.3 资源利用",
                  link: "/SurvivalManual/ujn/Second/5/5.3",
                },
                {
                  text: "5.4 学院生活",
                  link: "/SurvivalManual/ujn/Second/5/5.4",
                },
                {
                  text: "5.5 发展方向",
                  link: "/SurvivalManual/ujn/Second/5/5.5",
                },
              ],
            },
            {
              text: "6.政法学院",
              link: "/SurvivalManual/ujn/Second/6",
              collapsed: true,
              items: [
                {
                  text: "6.1 学业攻坚",
                  link: "/SurvivalManual/ujn/Second/6/6.1",
                },
                {
                  text: "6.2 实践与竞赛",
                  link: "/SurvivalManual/ujn/Second/6/6.2",
                },
                {
                  text: "6.3 资源与平台",
                  link: "/SurvivalManual/ujn/Second/6/6.3",
                },
                {
                  text: "6.4 学院生活",
                  link: "/SurvivalManual/ujn/Second/6/6.4",
                },
                {
                  text: "6.5 就业与深造",
                  link: "/SurvivalManual/ujn/Second/6/6.5",
                },
              ],
            },
            {
              text: "7.文学院",
              link: "/SurvivalManual/ujn/Second/7",
              collapsed: true,
              items: [
                {
                  text: "7.1 学业精进",
                  link: "/SurvivalManual/ujn/Second/7/7.1",
                },
                {
                  text: "7.2 实践与创作",
                  link: "/SurvivalManual/ujn/Second/7/7.2",
                },
                {
                  text: "7.3 资源利用",
                  link: "/SurvivalManual/ujn/Second/7/7.3",
                },
                {
                  text: "7.4 学院生活",
                  link: "/SurvivalManual/ujn/Second/7/7.4",
                },
                {
                  text: "7.5 发展方向",
                  link: "/SurvivalManual/ujn/Second/7/7.5",
                },
              ],
            },
            {
              text: "8.外国语学院",
              link: "/SurvivalManual/ujn/Second/8",
              collapsed: true,
              items: [
                {
                  text: "8.1 语言学习秘籍",
                  link: "/SurvivalManual/ujn/Second/8/8.1",
                },
                {
                  text: "8.2 跨文化体验",
                  link: "/SurvivalManual/ujn/Second/8/8.2",
                },
                {
                  text: "8.3 资源与平台",
                  link: "/SurvivalManual/ujn/Second/8/8.3",
                },
                {
                  text: "8.4 学院生活与社交",
                  link: "/SurvivalManual/ujn/Second/8/8.4",
                },
                {
                  text: "8.5 就业与深造",
                  link: "/SurvivalManual/ujn/Second/8/8.5",
                },
              ],
            },
            {
              text: "9.马克思主义学院",
              link: "/SurvivalManual/ujn/Second/9",
              collapsed: true,
              items: [
                {
                  text: "9.1 学业深耕",
                  link: "/SurvivalManual/ujn/Second/9/9.1",
                },
                {
                  text: "9.2 实践与研究",
                  link: "/SurvivalManual/ujn/Second/9/9.2",
                },
                {
                  text: "9.3 资源利用",
                  link: "/SurvivalManual/ujn/Second/9/9.3",
                },
                {
                  text: "9.4 学院生活",
                  link: "/SurvivalManual/ujn/Second/9/9.4",
                },
                {
                  text: "9.5 职业发展",
                  link: "/SurvivalManual/ujn/Second/9/9.5",
                },
              ],
            },
            {
              text: "10.材料科学与工程学院",
              link: "/SurvivalManual/ujn/Second/10",
              collapsed: true,
              items: [
                {
                  text: "10.1 学业精进",
                  link: "/SurvivalManual/ujn/Second/10/10.1",
                },
                {
                  text: "10.2 实践与科研",
                  link: "/SurvivalManual/ujn/Second/10/10.2",
                },
                {
                  text: "10.3 资源与设施",
                  link: "/SurvivalManual/ujn/Second/10/10.3",
                },
                {
                  text: "10.4 学院生活",
                  link: "/SurvivalManual/ujn/Second/10/10.4",
                },
                {
                  text: "10.5 就业与深造",
                  link: "/SurvivalManual/ujn/Second/10/10.5",
                },
              ],
            },
            {
              text: "11.化学化工学院",
              link: "/SurvivalManual/ujn/Second/11",
              collapsed: true,
              items: [
                {
                  text: "11.1 学业精进",
                  link: "/SurvivalManual/ujn/Second/11/11.1",
                },
                {
                  text: "11.2 实践与科研",
                  link: "/SurvivalManual/ujn/Second/11/11.2",
                },
                {
                  text: "11.3 资源与设施",
                  link: "/SurvivalManual/ujn/Second/11/11.3",
                },
                {
                  text: "11.4 学院生活",
                  link: "/SurvivalManual/ujn/Second/11/11.4",
                },
                {
                  text: "11.5 就业与深造",
                  link: "/SurvivalManual/ujn/Second/11/11.5",
                },
              ],
            },
            {
              text: "12.机械工程学院",
              link: "/SurvivalManual/ujn/Second/12",
              collapsed: true,
              items: [
                {
                  text: "12.1 学业精进",
                  link: "/SurvivalManual/ujn/Second/12/12.1",
                },
                {
                  text: "12.2 实践与创新",
                  link: "/SurvivalManual/ujn/Second/12/12.2",
                },
                {
                  text: "12.3 资源与设施",
                  link: "/SurvivalManual/ujn/Second/12/12.3",
                },
                {
                  text: "12.4 学院生活",
                  link: "/SurvivalManual/ujn/Second/12/12.4",
                },
                {
                  text: "12.5 就业与深造",
                  link: "/SurvivalManual/ujn/Second/12/12.5",
                },
              ],
            },
            {
              text: "13.工训中心",
              link: "/SurvivalManual/ujn/Second/13",
              collapsed: true,
              items: [
                {
                  text: "13.1 必修实践课程",
                  link: "/SurvivalManual/ujn/Second/13/13.1",
                },
                {
                  text: "13.2 设备与工具",
                  link: "/SurvivalManual/ujn/Second/13/13.2",
                },
                {
                  text: "13.3 创新实践与开放实验室",
                  link: "/SurvivalManual/ujn/Second/13/13.3",
                },
                {
                  text: "13.4 经验分享",
                  link: "/SurvivalManual/ujn/Second/13/13.4",
                },
              ],
            },
            {
              text: "14.土木建筑学院",
              link: "/SurvivalManual/ujn/Second/14",
              collapsed: true,
              items: [
                {
                  text: "14.1 学业精进",
                  link: "/SurvivalManual/ujn/Second/14/14.1",
                },
                {
                  text: "14.2 实践与设计",
                  link: "/SurvivalManual/ujn/Second/14/14.2",
                },
                {
                  text: "14.3 资源与设施",
                  link: "/SurvivalManual/ujn/Second/14/14.3",
                },
                {
                  text: "14.4 学院生活",
                  link: "/SurvivalManual/ujn/Second/14/14.4",
                },
                {
                  text: "14.5 就业与深造",
                  link: "/SurvivalManual/ujn/Second/14/14.5",
                },
              ],
            },
            {
              text: "15.水利与环境学院",
              link: "/SurvivalManual/ujn/Second/15",
              collapsed: true,
              items: [
                {
                  text: "15.1 学业精进",
                  link: "/SurvivalManual/ujn/Second/15/15.1",
                },
                {
                  text: "15.2 实践与调研",
                  link: "/SurvivalManual/ujn/Second/15/15.2",
                },
                {
                  text: "15.3 资源与设施",
                  link: "/SurvivalManual/ujn/Second/15/15.3",
                },
                {
                  text: "15.4 学院生活",
                  link: "/SurvivalManual/ujn/Second/15/15.4",
                },
                {
                  text: "15.5 就业与深造",
                  link: "/SurvivalManual/ujn/Second/15/15.5",
                },
              ],
            },
            {
              text: "16.体育学院",
              link: "/SurvivalManual/ujn/Second/16",
              collapsed: true,
              items: [
                {
                  text: "16.1 专业技能提升",
                  link: "/SurvivalManual/ujn/Second/16/16.1",
                },
                {
                  text: "16.2 实践与赛事",
                  link: "/SurvivalManual/ujn/Second/16/16.2",
                },
                {
                  text: "16.3 资源与设施",
                  link: "/SurvivalManual/ujn/Second/16/16.3",
                },
                {
                  text: "16.4 学院生活",
                  link: "/SurvivalManual/ujn/Second/16/16.4",
                },
                {
                  text: "16.5 就业与深造",
                  link: "/SurvivalManual/ujn/Second/16/16.5",
                },
              ],
            },
            {
              text: "17.美术与设计学院",
              link: "/SurvivalManual/ujn/Second/17",
              collapsed: true,
              items: [
                {
                  text: "17.1 艺术与技法",
                  link: "/SurvivalManual/ujn/Second/17/17.1",
                },
                {
                  text: "17.2 创作与展示",
                  link: "/SurvivalManual/ujn/Second/17/17.2",
                },
                {
                  text: "17.3 资源与设施",
                  link: "/SurvivalManual/ujn/Second/17/17.3",
                },
                {
                  text: "17.4 学院生活与社交",
                  link: "/SurvivalManual/ujn/Second/17/17.4",
                },
                {
                  text: "17.5 就业与深造",
                  link: "/SurvivalManual/ujn/Second/17/17.5",
                },
              ],
            },
            {
              text: "18.音乐学院",
              link: "/SurvivalManual/ujn/Second/18",
              collapsed: true,
              items: [
                {
                  text: "18.1 专业技能提升",
                  link: "/SurvivalManual/ujn/Second/18/18.1",
                },
                {
                  text: "18.2 表演与实践",
                  link: "/SurvivalManual/ujn/Second/18/18.2",
                },
                {
                  text: "18.3 资源与设施",
                  link: "/SurvivalManual/ujn/Second/18/18.3",
                },
                {
                  text: "18.4 学院生活与社交",
                  link: "/SurvivalManual/ujn/Second/18/18.4",
                },
                {
                  text: "18.5 就业与深造",
                  link: "/SurvivalManual/ujn/Second/18/18.5",
                },
              ],
            },
            {
              text: "19.文化和旅游学院",
              link: "/SurvivalManual/ujn/Second/19",
              collapsed: true,
              items: [
                {
                  text: "19.1 学业精进",
                  link: "/SurvivalManual/ujn/Second/19/19.1",
                },
                {
                  text: "19.2 实践与调研",
                  link: "/SurvivalManual/ujn/Second/19/19.2",
                },
                {
                  text: "19.3 资源与平台",
                  link: "/SurvivalManual/ujn/Second/19/19.3",
                },
                {
                  text: "19.4 学院生活与社交",
                  link: "/SurvivalManual/ujn/Second/19/19.4",
                },
                {
                  text: "19.5 就业与深造",
                  link: "/SurvivalManual/ujn/Second/19/19.5",
                },
              ],
            },
            {
              text: "20.教育与心理科学学院",
              link: "/SurvivalManual/ujn/Second/20",
              collapsed: true,
              items: [
                {
                  text: "20.1 学业精进",
                  link: "/SurvivalManual/ujn/Second/20/20.1",
                },
                {
                  text: "20.2 实践与研究",
                  link: "/SurvivalManual/ujn/Second/20/20.2",
                },
                {
                  text: "20.3 资源与设施",
                  link: "/SurvivalManual/ujn/Second/20/20.3",
                },
                {
                  text: "20.4 学院生活与社交",
                  link: "/SurvivalManual/ujn/Second/20/20.4",
                },
                {
                  text: "20.5 就业与深造",
                  link: "/SurvivalManual/ujn/Second/20/20.5",
                },
              ],
            },
            {
              text: "21.生物科学与技术学院",
              link: "/SurvivalManual/ujn/Second/21",
              collapsed: true,
              items: [
                {
                  text: "21.1 学业精进",
                  link: "/SurvivalManual/ujn/Second/21/21.1",
                },
                {
                  text: "21.2 实践与科研",
                  link: "/SurvivalManual/ujn/Second/21/21.2",
                },
                {
                  text: "21.3 资源与设施",
                  link: "/SurvivalManual/ujn/Second/21/21.3",
                },
                {
                  text: "21.4 学院生活",
                  link: "/SurvivalManual/ujn/Second/21/21.4",
                },
                {
                  text: "21.5 就业与深造",
                  link: "/SurvivalManual/ujn/Second/21/21.5",
                },
              ],
            },
            {
              text: "22.管理科学与工程学院",
              link: "/SurvivalManual/ujn/Second/22",
              collapsed: true,
              items: [
                {
                  text: "22.1 学业精进",
                  link: "/SurvivalManual/ujn/Second/22/22.1",
                },
                {
                  text: "22.2 实践与研究",
                  link: "/SurvivalManual/ujn/Second/22/22.2",
                },
                {
                  text: "22.3 资源与平台",
                  link: "/SurvivalManual/ujn/Second/22/22.3",
                },
                {
                  text: "22.4 学院生活与社交",
                  link: "/SurvivalManual/ujn/Second/22/22.4",
                },
                {
                  text: "22.5 就业与深造",
                  link: "/SurvivalManual/ujn/Second/22/22.5",
                },
              ],
            },
            {
              text: "23.继续教育学院",
              link: "/SurvivalManual/ujn/Second/23",
              collapsed: true,
              items: [
                {
                  text: "23.1 学习模式与管理",
                  link: "/SurvivalManual/ujn/Second/23/23.1",
                },
                {
                  text: "23.2 职业发展与转型",
                  link: "/SurvivalManual/ujn/Second/23/23.2",
                },
                {
                  text: "23.3 资源与支持",
                  link: "/SurvivalManual/ujn/Second/23/23.3",
                },
                {
                  text: "23.4 学习生活",
                  link: "/SurvivalManual/ujn/Second/23/23.4",
                },
              ],
            },
            {
              text: "24.国际教育交流学院 ",
              link: "/SurvivalManual/ujn/Second/24",
              collapsed: true,
              items: [
                {
                  text: "24.1 国际学生篇",
                  link: "/SurvivalManual/ujn/Second/24/24.1",
                },
                {
                  text: "24.2 中国学生篇",
                  link: "/SurvivalManual/ujn/Second/24/24.2",
                },
              ],
            },
          ],
        },
        {
          text: "三. 学校建设",
          link: "/SurvivalManual/ujn/Third",
          collapsed: true,
          items: [
            {
              text: "1.食堂",
              link: "/SurvivalManual/ujn/Third/1",
            },
            {
              text: "2.图书馆",
              link: "/SurvivalManual/ujn/Third/2",
            },
            { text: "3.宿舍", link: "/SurvivalManual/ujn/Third/3" },
            { text: "4.教学楼", link: "/SurvivalManual/ujn/Third/4" },
            { text: "5.体育设施", link: "/SurvivalManual/ujn/Third/5" },
            { text: "6.医疗健康", link: "/SurvivalManual/ujn/Third/6" },
            { text: "7.交通出行", link: "/SurvivalManual/ujn/Third/7" },
            { text: "8.校园服务", link: "/SurvivalManual/ujn/Third/8" },
            { text: "9.信息化服务", link: "/SurvivalManual/ujn/Third/9" },
          ],
        },
        {
          text: "四. 学长学姐碎碎念",
          link: "/SurvivalManual/ujn/Fourth",
          collapsed: true,
          items: [
            {
              text: "我在信院四年的感悟",
              link: "/SurvivalManual/ujn/Fourth/1",
            },
            {
              text: "如果重来，我会这样规划我的大学",
              link: "/SurvivalManual/ujn/Fourth/2",
            },
            {
              text: "我的跨专业/转专业/考研/出国/就业经历",
              link: "/SurvivalManual/ujn/Fourth/3",
            },
            {
              text: "给学弟学妹的忠告",
              link: "/SurvivalManual/ujn/Fourth/4",
            },
          ],
        },
        {
          text: "五. 致谢与反馈",
          link: "/SurvivalManual/ujn/Thanks",
          items: [],
        },
        {
          text: "附：济大地图",
          link: "/SurvivalManual/ujn/Map",
          items: [],
        },
        {
          text: "附：济大学工人员联系表",
          link: "/SurvivalManual/ujn/addressbook",
          items: [],
        },
      ],
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    editLink: {
      pattern: "https://github.com/TimeNugget/timenugget-docs/edit/dev/:path",
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
