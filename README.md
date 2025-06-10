# TimeNugget Docs

> 大学生高效利用时间的经验分享文档

## 简介

TimeNugget 是一个专为大学生打造的时间管理和学习经验分享平台，帮助大学生避坑、快速上手大学生活。

## 快速开始

### 环境要求

- [Node.js](https://nodejs.org/) 版本 18 或更高
- npm 包管理器
- Git（用于版本控制）

### 本地开发

**开发环境推荐**：

- **编辑器**：推荐使用 [Visual Studio Code](https://code.visualstudio.com/)
- **推荐 MarkDown 插件**：
  - `Markdown All in One` - 提供 Markdown 语法支持和快捷操作
  - `Markdown Preview Enhanced` - 增强的 Markdown 预览功能
  - `markdownlint` - Markdown 语法检查和格式化
- **开发习惯**：建议对 Markdown 文件进行格式化，保持代码整洁

#### 前提

在开始之前，建议先阅读 [VitePress 官方文档](https://vitepress.dev/zh/)，了解 VitePress 的基本概念和使用方法，这将帮助你更好地理解和修改本项目。

#### 1. Fork 仓库

1. 访问项目仓库：[https://github.com/TimeNugget/timenugget-docs](https://github.com/TimeNugget/timenugget-docs)
2. 点击页面右上角的 `Fork` 按钮，将项目 Fork 到你的 GitHub 账户
3. 在你的账户中找到 Fork 后的仓库，复制仓库链接
4. 在本地克隆仓库：

```bash
# 克隆你 Fork 的仓库到本地
git clone https://github.com/你的用户名/timenugget-docs.git

# 进入项目目录
cd timenugget-docs

# 添加原仓库为上游远程仓库（用于后续同步）
git remote add upstream https://github.com/TimeNugget/timenugget-docs.git

# 验证远程仓库配置
git remote -v
```

#### 2. 本地开发环境搭建

确保你已安装 Node.js（版本 18 或更高），然后执行：

```bash
# 安装项目依赖
npm install

# 启动开发服务器
npm run docs:dev
```

开发服务器启动后，你可以：

- 🌐 在浏览器中访问 `http://localhost:5173` 查看文档
- 🔄 修改 Markdown 文件时自动刷新预览
- 👀 实时查看你的修改效果

> **💡 提示**：如果遇到端口占用，VitePress 会自动使用下一个可用端口（如 5174），自己查看终端即可

#### 3. 同步最新代码并创建新分支

在开始工作前，确保你的代码是最新的：

```bash
# 切换到主分支
git checkout main

# 拉取并合并上游仓库的最新更改（等价于 fetch + merge）
git pull upstream main

# 推送更新到你的 Fork 仓库
git push origin main

# 推荐创建并切换到新的功能分支来保持主分支干净
git checkout -b feature/你的贡献内容描述
```

**推荐分支命名规范**：

- `feature/add-study-tips` - 添加学习技巧
- `feature/update-course-guide` - 更新课程指南
- `docs/fix-typos` - 修复文档错误
- `content/add-club-info` - 添加社团信息

**💡 分支管理技巧**：

```bash
# 查看所有分支
git branch -a

# 切换分支
git checkout 分支名

# 删除本地分支（功能完成后）
git branch -d 分支名

# 删除远程分支
git push origin --delete 分支名
```

#### 4. 编写和编辑内容

- 在相应目录下编写或修改 Markdown 文件
- 使用 Markdown 格式编写内容
- 如果添加了新页面，需要在 `.vitepress/config.js` 中配置导航，请参考 [VitePress 官方文档](https://vitepress.dev/zh/)

#### 5. 本地测试和预览

在提交前，请务必进行本地测试：

```bash
# 启动开发服务器
npm run docs:dev
```

**✅ 测试检查清单**：

- [ ] 页面能正常访问，无404错误
- [ ] 新增的导航链接工作正常
- [ ] 图片和资源正确显示
- [ ] Markdown 格式渲染正确
- [ ] 代码块语法高亮正常

#### 6. 提交更改

```bash
# 添加所有修改的文件
git add .

# 或选择性添加特定文件
git add docs/你的文档.md

# 提交更改
git commit -m "修改内容的简要描述"

# 推送到你的功能分支
git push origin feature/你的贡献内容描述
```

#### 7. 发起 Pull Request

> **💡 说明**：PR是从你的**功能分支**直接提交到上游仓库的**main分支**，无需先合并到你Fork仓库的main分支

**提交 PR**：

1. 推送功能分支后，访问你的Fork仓库页面
2. GitHub会自动显示黄色提示条：`Compare & pull request`
3. 点击 `Compare & pull request` 按钮

- 或者在原仓库点击 `New pull request` 手动创建PR

**📝 填写PR信息**：

- 简要描述你的更改内容

**📞 如需修改PR**：

```bash
# 在同一个功能分支上继续修改
git add .
git commit -m "修复PR反馈的问题"
git push origin feature/你的贡献内容描述
# PR会自动更新
```

**⏳ 等待审核**：

- 项目维护者会审核你的PR
- 可能会要求进行修改或提供更多信息
- 根据反馈意见调整代码或文档

#### 8. 后续维护

PR 合并后的维护工作：

```bash
# 切换回主分支
git checkout main

# 拉取最新的更改
git pull upstream main

# 推送到你的 Fork
git push origin main

# 删除已完成的功能分支（可选）
git branch -d feature/你的贡献内容描述
git push origin --delete feature/你的贡献内容描述
```

### 文档编写指南

1. **新增文档页面**

   - 在 `docs/` (对应文档栏目)或在 `SurvivalManual/` (对应求生宝典栏目)目录下创建新的 `.md` 文件或文件夹添加新内容

   > 求生宝典内容可以在现有内容上做修改，因为是AI生成的，只当作参考

   - 在 `.vitepress/config.js` 中添加相应的导航和侧边栏配置

2. **Markdown 语法**

   - 支持标准 Markdown 语法
   - 支持 VitePress 扩展功能（如代码高亮、容器等）
   - 可以使用 Vue 组件

3. **图片资源**

   - 建议将图片放在 `public/` 目录下
   - 使用根绝对路径引用：`![alt text](/icon.png)`
   - 放置在 `public` 中的资源将按原样复制到输出目录的根目录中

### 开发提示

1. **配置文件**: 主要配置在 `.vitepress/config.js`
2. **热重载**: 开发模式下支持文件修改自动刷新
3. **代码高亮**: 支持多种编程语言语法高亮
4. **搜索功能**: VitePress 内置全文搜索功能

## 技术栈

- [VitePress](https://vitepress.dev/) - 静态文档生成器
- Markdown - 文档编写

## 贡献

我们非常欢迎学长学姐们分享宝贵的校园生活经验！

### 🤝 贡献指南

详细的贡献指南请查看：**[CONTRIBUTING.md](CONTRIBUTING.md)**

### 📞 联系方式

- 🔗 [官方QQ群](https://qm.qq.com/q/N80scRlJmi)
- 📧 [timenugget@tupx.xyz](mailto:timenugget@tupx.xyz)
- 💬 [GitHub Issues](https://github.com/TimeNugget/timenugget-docs/issues)

欢迎提交 Pull Request 或 Issue 来完善文档内容。
