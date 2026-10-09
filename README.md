# 第三次课堂作业：前端网页作品集

使用 HTML、CSS 和 JavaScript 制作个人作品展示页面，
集中展示前三次前端作业的截图、简介和访问链接。

## 展示作品

| 编号 | 作品 | 说明 | 在线访问 | 源码仓库 |
| --- | --- | --- | --- | --- |
| 1 | Register Form | 注册表单与输入校验 | [register-page-taupe.vercel.app](https://register-page-taupe.vercel.app/) | [Register-Page](https://github.com/yangon2333/Register-Page) |
| 2 | Quiz Game | 课堂测验小游戏 | [quizgame-vert.vercel.app](https://quizgame-vert.vercel.app/) | [Quiz-Game](https://github.com/yangon2333/Quiz-Game) |
| 3 | Menu Search | 菜单搜索器 | [recipe-finder-three-tan.vercel.app](https://recipe-finder-three-tan.vercel.app/) | [Menu-Search](https://github.com/yangon2333/Menu-Search) |

点击作品卡片，即可在新标签页打开对应作品的在线页面；
卡片中的「GitHub 仓库」链接可直接进入该作品的源码仓库。

## 页面特点

- 使用自行截取的三个作品界面截图作为卡片预览。
- 使用响应式布局，屏幕宽度小于 720px 时卡片由两列变为一列。
- 使用 JavaScript 实现卡片点击跳转，并支持 Tab 聚焦后用回车或空格打开；
  卡片内的仓库链接不会触发卡片跳转。

## 文件说明

- `index.html`：页面结构与作品内容。
- `style.css`：页面样式与响应式布局。
- `script.js`：作品卡片的跳转逻辑。
- `image/`：三个作品的页面截图。
- `design.md` 中的设计规范：页面配色、字体、间距与组件规则均按该规范实现。

## 本地运行

使用 Visual Studio Code 打开本文件夹，用 Live Server 打开 `index.html` 即可。

## 部署

代码托管于 GitHub，使用 Vercel 部署。
项目为静态网页，无需安装依赖或执行构建命令。
