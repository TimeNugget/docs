---
layout: home

hero:
  name: "TimeNugget"
  text: "大学生时间管理与成长指南"
  tagline: 高效学习，精彩生活，从这里开始
  image:
    src: /logo.svg
    alt: TimeNugget logo
  actions:
    - theme: brand
      text: 求生宝典
      link: /SurvivalManual/
    - theme: brand
      text: 藏宝阁
      link: /Treasures/
    - theme: alt
      text: "官方Q群"
      link: "https://qm.qq.com/q/N80scRlJmi"

features:
    - title: 点击上方按钮开始探索
      details: <strong>求生宝典</strong>提供大学生活指南，<strong>藏宝阁</strong>获取优质资源，<strong>加入Q群</strong>或访问<strong>GitHub</strong>作出贡献
---

<style>
.title {
  text-align: center;
}
.details {
  text-align: center;
}
/* Logo浮动和旋转动画效果 */
.image-container {
  animation: logoFloat 3s ease-in-out infinite;
  transition: transform 0.3s ease;
}

.image-container:hover {
  animation: logoRotate 3s linear infinite;
}

@keyframes logoFloat {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes logoRotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

<Waline />
