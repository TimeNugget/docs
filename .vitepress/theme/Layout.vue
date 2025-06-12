<script setup>
import { useData } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { nextTick, provide, computed } from "vue";

const { Layout } = DefaultTheme;
const { isDark, page, frontmatter } = useData();

// 面包屑导航生成函数
const breadcrumbs = computed(() => {
  if (frontmatter.value.layout === "home") return [];

  const path = page.value.relativePath;
  const segments = path.replace(/\.md$/, "").split("/").filter(Boolean);
  const crumbs = [{ text: "首页", link: "/" }];

  let currentPath = "";

  // 路径映射配置
  const pathMap = {
    SurvivalManual: "求生宝典",
    Treasures: "藏宝阁",
    ujn: "济南大学",
    First: "共识问题",
    Second: "细分学院",
    Third: "学校建设",
    Fourth: "学长学姐碎碎念",
  };

  // 学院映射
  const collegeMap = {
    1: "信息科学与工程学院",
    2: "数学科学学院",
    3: "自动化与电气工程学院",
    4: "商学院",
    5: "物理科学与技术学院",
    6: "政法学院",
    7: "文学院",
    8: "外国语学院",
    9: "马克思主义学院",
    10: "材料科学与工程学院",
    11: "化学化工学院",
    12: "机械工程学院",
    13: "工训中心",
    14: "土木建筑学院",
    15: "水利与环境学院",
    16: "体育学院",
    17: "美术与设计学院",
    18: "音乐学院",
    19: "文化和旅游学院",
    20: "教育与心理科学学院",
    21: "生物科学与技术学院",
    22: "管理科学与工程学院",
    23: "继续教育学院",
    24: "国际教育交流学院",
  };

  segments.forEach((segment, index) => {
    currentPath += "/" + segment;

    // 如果是最后一个段落，使用页面标题
    if (index === segments.length - 1) {
      const title = page.value.title || segment;
      crumbs.push({ text: title, link: null });
      return;
    }

    // 处理已知路径映射
    if (pathMap[segment]) {
      crumbs.push({
        text: pathMap[segment],
        link: currentPath + "/",
      });
      return;
    }

    // 处理学院编号（在Second路径下）
    if (collegeMap[segment] && currentPath.includes("/Second/")) {
      crumbs.push({
        text: collegeMap[segment],
        link: currentPath + "/",
      });
      return;
    }

    // 处理文件名为index的情况
    if (segment === "index") {
      return; // 跳过index段落
    }

    // 其他情况使用段落名称
    crumbs.push({
      text: segment,
      link: currentPath + "/",
    });
  });

  return crumbs;
});

// 优化后的主题切换动画效果
const enableTransitions = () =>
  "startViewTransition" in document &&
  window.matchMedia("(prefers-reduced-motion: no-preference)").matches;

// 提供优化的主题切换逻辑
provide("toggle-appearance", async ({ clientX: x, clientY: y }) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value;
    return;
  }

  // 计算圆形动画的半径 - 优化算法
  const radius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  );

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${radius}px at ${x}px ${y}px)`,
  ];

  try {
    const transition = document.startViewTransition(async () => {
      isDark.value = !isDark.value;
      await nextTick();
    });

    await transition.ready;

    // 优化动画参数
    document.documentElement.animate(
      { clipPath: isDark.value ? [...clipPath].reverse() : clipPath },
      {
        duration: 400,
        easing: "ease-out",
        pseudoElement: `::view-transition-${
          isDark.value ? "old" : "new"
        }(root)`,
      }
    );
  } catch (error) {
    // 如果动画失败，直接切换主题
    isDark.value = !isDark.value;
  }
});
</script>

<template>
  <!-- 使用默认主题的Layout作为基础 -->
  <Layout>
    <!-- 在文档内容之前添加面包屑导航 -->
    <template #doc-before v-if="!frontmatter.home && breadcrumbs.length > 1">
      <div class="custom-breadcrumb">
        <nav class="breadcrumb-nav">
          <template v-for="(crumb, index) in breadcrumbs" :key="index">
            <a
              v-if="crumb.link"
              :href="crumb.link"
              class="breadcrumb-link"
              :class="{ 'breadcrumb-home': index === 0 }"
            >
              {{ crumb.text }}
            </a>
            <span v-else class="breadcrumb-current">
              {{ crumb.text }}
            </span>
            <span
              v-if="index < breadcrumbs.length - 1"
              class="breadcrumb-separator"
            >
              /
            </span>
          </template>
        </nav>
      </div>
    </template>
  </Layout>
</template>

<style>
/* ========================================
   面包屑导航样式
   ======================================== */
.custom-breadcrumb {
  padding: 1rem 0;
  border-bottom: 1px solid var(--vp-c-divider);
  margin-bottom: 1rem;
  background: var(--vp-c-bg);
}

.breadcrumb-nav {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  flex-wrap: wrap;
}

.breadcrumb-link {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  transition: all 0.25s;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
}

.breadcrumb-link:hover {
  color: var(--vp-c-brand-2);
  background: var(--vp-c-brand-soft);
}

.breadcrumb-home {
  font-weight: 600;
}

.breadcrumb-separator {
  color: var(--vp-c-text-3);
  margin: 0 0.125rem;
}

.breadcrumb-current {
  color: var(--vp-c-text-1);
  font-weight: 600;
  padding: 0.25rem 0.5rem;
}

/* ========================================
   主题切换过渡动画优化
   ======================================== */
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}

/* 增强性能优化 */
::view-transition-group(root) {
  animation-duration: 400ms;
  animation-timing-function: ease-out;
}

/* 减少动画时对页面元素的影响 */
.VPSwitchAppearance {
  position: relative;
  z-index: 10000;
}

/* 为低端设备优化动画 */
@media (prefers-reduced-motion: reduce) {
  ::view-transition-old(root),
  ::view-transition-new(root) {
    animation-duration: 0.1s !important;
  }
}

/* 为触摸设备优化 */
@media (pointer: coarse) {
  .VPSwitchAppearance {
    padding: 8px;
    border-radius: 50%;
  }
}
</style>
