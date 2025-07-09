---
title: "济南大学求生宝典"
description: "一站式生存指南，助你在济南大学游刃有余"
---
<link rel="prefetch" href="/Ujnmap.webp" as="image">
<link rel="prefetch" href="/ujnaddressbook.webp" as="image">

# 《济南大学求生宝典》

> 🎉 欢迎来到 **济南大学求生宝典**！  
> 这里汇集了济南大学的实用生存指南，助你脱离信息差的苦海。

***

## 针对此宝典的一些话

或许某些**经验**会随着时代的进步而发生改变，但是**传承**能让此宝典成为追赶时代的接力赛，望走过荆棘之路的我们无忘来时之路，为**过去的自己**留下点什么 **【足够真实，切勿美化】**，共勉。

## 🤝 贡献指南  

【[查看详细讲解](/CONTRIBUTING)】

***

## 📞 联系我们

| 📱 方式       | 详情                                                         |
|--------------|--------------------------------------------------------------|
| 官方 Q 群     | [点击加入](https://qm.qq.com/q/N80scRlJmi)                   |
| GitHub 仓库  | [访问仓库](https://github.com/TimeNugget/timenugget-docs)    |
| 官方邮箱 1   | <timenugget@tupx.xyz>                                        |
| 官方邮箱 2   | <1727369245@qq.com>                                          |
| 官方邮箱 3   | <dabblerli@qq.com>                                           |

## **⚠ 免责声明**

### 一、版权与使用规范  

《济南大学求生宝典》（以下简称 **「宝典」** ）为公益性质知识集合，GitHub 仓库地址：[https://github.com/TimeNugget/timenugget-docs](https://github.com/TimeNugget/timenugget-docs)，**版权归属于TimeNugget项目组员**。  

撰写全程坚守 **「多元」「中立」「公益」** 原则。  

### 二、内容与责任说明  

宝典由**多篇持续更新文章**组成，每章节/每篇文章可能由不同创作者独立撰写。编写中充分吸纳济南大学学生的真实反馈，力求呈现多元视角，但**不构成「行动指令」**——作者不对读者因参考宝典产生的行为结果负责。  

#### 特别提醒  

1. **内容局限性**：无法保证无误解、偏见，且未通过权威机构审查，方法有效性随场景变化，敬请理性参考；  
2. **法规适配**：因各地政策差异，作者无法确认内容是否符合读者所在地规定。若阅读中发现冲突，**请立即停止阅读并销毁副本**；  
3. **传播责任**：未经授权传播宝典引发的问题，作者概不负责；  
4. **身心健康**：内容可能包含复杂观点，**未满 18 岁或阅读后感到不适者，请立刻停读并联系心理专业人士** 。  

### 三、交流与改进  

TimeNugget项目组员欢迎所有建议与批评！若对内容存疑、想分享想法，可通过 **[联系方式](#📞-联系我们)** 向我们反馈。

虽无法承诺逐一回复，但每一条反馈都会被认真对待——我们会在后续版本中优化调整，和济大学子一起完善这份 **「校园生存指南」**。

<script setup>
import { ref, onMounted } from 'vue'

// 弹窗状态
const showNoticeModal = ref(false)

// 页面加载时自动显示弹窗
onMounted(() => {
  // 延迟300ms显示弹窗，确保页面内容已加载
  setTimeout(() => {
    showNoticeModal.value = true
  }, 300)
})

// 关闭弹窗
const closeNoticeModal = () => {
  showNoticeModal.value = false
}
</script>

<!-- 自动弹出的注意事项弹窗 -->
<div v-if="showNoticeModal" class="auto-notice-modal-overlay" @click="closeNoticeModal">
  <div class="auto-notice-modal-content" @click.stop>
    <div class="auto-notice-modal-header">
      <h3>📋 重要提示</h3>
    </div>
    <div class="auto-notice-modal-body">
      <div class="auto-notice-item">
        <div class="auto-notice-icon">💻</div>
        <div class="auto-notice-text">
          <strong>电脑端使用：</strong>在电脑端打开时，左侧可直接选择章节。
        </div>
      </div>
      <div class="auto-notice-item">
        <div class="auto-notice-icon">📱</div>
        <div class="auto-notice-text">
          <strong>手机端使用：</strong>在手机端点击左上角 "Menu" 打开侧边栏，或点击右上角 "On this page" 快速跳转。
        </div>
      </div>
    </div>
    <div class="auto-notice-modal-footer">
      <button @click="closeNoticeModal" class="auto-notice-confirm-btn">
        ✅ 我知道了
      </button>
    </div>
  </div>
</div>

<style scoped>
/* VitePress主题适配的自动弹窗样式 */
.auto-notice-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--vp-backdrop-bg-color, rgba(0, 0, 0, 0.6));
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  backdrop-filter: blur(4px);
}

.auto-notice-modal-content {
  background: var(--vp-c-bg, #ffffff);
  border: 1px solid var(--vp-c-border, #c2c2c4);
  border-radius: 12px;
  width: 90%;
  max-width: 480px;
  box-shadow: var(--vp-shadow-3, 0 12px 32px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.08));
  animation: autoModalSlideIn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  overflow: hidden;
}

@keyframes autoModalSlideIn {
  from {
    opacity: 0;
    transform: scale(0.9) translateY(-20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.auto-notice-modal-header {
  background: var(--vp-c-brand-1, #3451b2);
  color: var(--vp-c-white, #ffffff);
  padding: 20px 24px;
  text-align: center;
  border-bottom: 1px solid var(--vp-c-brand-2, #3a5ccc);
}

.auto-notice-modal-header h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  font-family: var(--vp-font-family-base);
}

.auto-notice-modal-body {
  padding: 24px;
  background: var(--vp-c-bg, #ffffff);
}

.auto-notice-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
  padding: 16px;
  background: var(--vp-c-bg-soft, #f6f6f7);
  border: 1px solid var(--vp-c-border-soft, #e2e2e3);
  border-radius: 8px;
  border-left: 3px solid var(--vp-c-brand-1, #3451b2);
  transition: all 0.2s ease;
}

.auto-notice-item:last-child {
  margin-bottom: 0;
}

.auto-notice-item:hover {
  background: var(--vp-c-bg-mute, #f1f1f2);
  border-color: var(--vp-c-brand-2, #3a5ccc);
}

.auto-notice-icon {
  font-size: 22px;
  margin-right: 12px;
  flex-shrink: 0;
  opacity: 0.8;
}

.auto-notice-text {
  flex: 1;
  line-height: 1.7;
  color: var(--vp-c-text-1, #213547);
  font-family: var(--vp-font-family-base);
  font-size: 14px;
}

.auto-notice-text strong {
  color: var(--vp-c-brand-1, #3451b2);
  font-weight: 600;
}

.auto-notice-modal-footer {
  padding: 20px 24px;
  text-align: center;
  background: var(--vp-c-bg-soft, #f6f6f7);
  border-top: 1px solid var(--vp-c-border, #c2c2c4);
}

.auto-notice-confirm-btn {
  background: var(--vp-c-brand-1, #3451b2);
  color: var(--vp-c-white, #ffffff);
  border: 1px solid var(--vp-c-brand-1, #3451b2);
  padding: 10px 24px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  font-family: var(--vp-font-family-base);
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  min-width: 120px;
}

.auto-notice-confirm-btn:hover {
  background: var(--vp-c-brand-2, #3a5ccc);
  border-color: var(--vp-c-brand-2, #3a5ccc);
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.auto-notice-confirm-btn:active {
  transform: translateY(0);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

/* 深色模式自动适配 - 使用VitePress CSS变量 */
html.dark .auto-notice-modal-overlay {
  background-color: var(--vp-backdrop-bg-color, rgba(0, 0, 0, 0.8));
}

html.dark .auto-notice-modal-content {
  background: var(--vp-c-bg, #1b1b1f);
  border-color: var(--vp-c-border, #2e2e32);
}

html.dark .auto-notice-modal-header {
  background: var(--vp-c-brand-1, #a8b1ff);
  color: var(--vp-c-bg, #1b1b1f);
  border-bottom-color: var(--vp-c-brand-2, #9499ff);
}

html.dark .auto-notice-modal-body {
  background: var(--vp-c-bg, #1b1b1f);
}

html.dark .auto-notice-item {
  background: var(--vp-c-bg-soft, #161618);
  border-color: var(--vp-c-border-soft, #2e2e32);
  border-left-color: var(--vp-c-brand-1, #a8b1ff);
}

html.dark .auto-notice-item:hover {
  background: var(--vp-c-bg-mute, #212125);
  border-color: var(--vp-c-brand-2, #9499ff);
}

html.dark .auto-notice-text {
  color: var(--vp-c-text-1, #c9d1d9);
}

html.dark .auto-notice-text strong {
  color: var(--vp-c-brand-1, #a8b1ff);
}

html.dark .auto-notice-modal-footer {
  background: var(--vp-c-bg-soft, #161618);
  border-top-color: var(--vp-c-border, #2e2e32);
}

html.dark .auto-notice-confirm-btn {
  background: var(--vp-c-brand-1, #a8b1ff);
  color: var(--vp-c-bg, #1b1b1f);
  border-color: var(--vp-c-brand-1, #a8b1ff);
}

html.dark .auto-notice-confirm-btn:hover {
  background: var(--vp-c-brand-2, #9499ff);
  border-color: var(--vp-c-brand-2, #9499ff);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .auto-notice-modal-content {
    width: 95%;
    margin: 20px;
  }
  
  .auto-notice-modal-header,
  .auto-notice-modal-body,
  .auto-notice-modal-footer {
    padding: 16px 20px;
  }
  
  .auto-notice-item {
    padding: 14px;
    margin-bottom: 12px;
  }
  
  .auto-notice-icon {
    font-size: 20px;
    margin-right: 10px;
  }
  
  .auto-notice-text {
    font-size: 13px;
  }
  
  .auto-notice-confirm-btn {
    padding: 8px 20px;
    font-size: 13px;
    min-width: 100px;
  }
}

</style>
