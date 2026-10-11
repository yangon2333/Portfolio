# 第三次课堂作业：前端网页作品集

使用 HTML、CSS 和 JavaScript 制作个人作品展示页面，
集中展示前三次前端作业的截图、简介和访问链接。

## 在线访问

作品集：https://portfolio-eight-tan-51.vercel.app/

GitHub：https://github.com/yangon2333/Portfolio

## 展示作品

- Register Form：注册表单与输入校验。
- Quiz Game：课堂测验小游戏。
- Menu Search：菜单搜索器。

点击作品卡片，即可在新标签页打开对应网站；
卡片中的「GitHub 仓库」链接可进入该作品的源码仓库。

## 页面特点

- 使用作品截图展示各项目的实际界面。
- 使用响应式布局，适配不同屏幕宽度，宽度小于 720px 时卡片由两列变为一列。
- 使用 JavaScript 实现卡片点击跳转，并支持 Tab 聚焦后用回车或空格打开；
  卡片内的仓库链接不会触发卡片跳转。

## 文件说明

- `index.html`：页面结构与作品内容。
- `style.css`：页面样式与响应式布局。
- `script.js`：作品数据（`PROJECTS` 数组）与作品卡片的点击跳转逻辑。
- `image/`：作品截图及图片资源。
- `design.md`：页面设计规范，配色、字体、间距与组件规则均按该规范实现。

## 本地运行

在 VS Code 或 Cursor 中打开项目文件夹，
使用 Live Server 打开 `index.html`。

## 部署

代码托管于 GitHub，使用 Vercel 部署。
在 Vercel 导入本仓库时，需要把 **Root Directory** 设为 `portfolio`。
项目为静态网页，无需安装依赖或执行构建命令。
