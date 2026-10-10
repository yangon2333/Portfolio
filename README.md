# yangon2333 的前端网页作品集

使用 HTML、CSS 和 JavaScript 制作个人作品展示页面，
集中展示前三次前端作业的截图、简介和访问链接。

页面首屏为一句话定位：「yangon2333 的前端网页作品集 / 这是我的前端网页作品，点击跳转到具体的页面」。

## 展示作品

| 编号 | 作品 | 说明 | 在线访问 | 源码仓库 |
| --- | --- | --- | --- | --- |
| 1 | Register Form | 注册表单与输入校验 | [register-page-rho-one.vercel.app](https://register-page-rho-one.vercel.app/) | [Register-Page](https://github.com/yangon2333/Register-Page) |
| 2 | Quiz Game | 课堂测验小游戏 | [quiz-game-eight-iota.vercel.app](https://quiz-game-eight-iota.vercel.app/) | [Quiz-Game](https://github.com/yangon2333/Quiz-Game) |
| 3 | Menu Search | 菜单搜索器 | [menu-search-five.vercel.app](https://menu-search-five.vercel.app/) | [Menu-Search](https://github.com/yangon2333/Menu-Search) |

> 如果地址有变化，只需修改 `script.js` 顶部 `PROJECTS` 数组里对应的 `site` 一行，HTML 无需改动。

点击作品卡片，即可在新标签页打开对应作品的在线页面；
卡片中的「GitHub 仓库」链接可直接进入该作品的源码仓库。

## 交付核对

| 要求 | 状态 | 证据 |
| --- | --- | --- |
| 三个作品各自独立仓库 | 已完成 | `Register-Page`、`Quiz-Game`、`Menu-Search` 三个仓库互相独立 |
| 代码推送到 GitHub | 已完成 | 三个仓库工作区干净，本地与 `origin/main` 一致 |
| 三个作品部署上线 | 已完成 | 三个线上地址已用浏览器实测，页面标题与正文内容均正确 |
| 自行截图三个作品 | 已完成 | `image/` 下为三个项目在本机渲染后截取的界面，规格统一为 2400×1500 |
| 作品集页面本身部署 | 已完成 | [portfolio-eight-tan-51.vercel.app](https://portfolio-eight-tan-51.vercel.app/)，已实测首页文案、三张卡片链接与截图均正常 |

## 页面特点

- 使用自行截取的三个作品界面截图作为卡片预览。
- 使用响应式布局，屏幕宽度小于 720px 时卡片由两列变为一列。
- 使用 JavaScript 实现卡片点击跳转，并支持 Tab 聚焦后用回车或空格打开；
  卡片内的仓库链接不会触发卡片跳转。

## 文件说明

- `index.html`：页面结构（导航、首屏、作品区块、页脚）。
- `style.css`：页面样式与响应式布局。
- `script.js`：顶部 `PROJECTS` 数组存放三个作品的数据，并负责渲染卡片与跳转逻辑。
- `image/`：三个作品的页面截图。
- `design.md`：页面设计规范，配色、字体、间距与组件规则均按该规范实现。

## 本地运行

使用 Visual Studio Code 打开本文件夹，用 Live Server 打开 `index.html` 即可。

## 在线访问

作品集：https://portfolio-eight-tan-51.vercel.app/

## 部署

代码托管于 [GitHub 仓库](https://github.com/yangon2333/Portfolio)，
使用 Vercel 部署：在 Vercel 选择 **Import Git Repository** 并选中该仓库，
把 **Root Directory** 设为 `portfolio` 后即可部署，之后每次 `git push` 都会自动重新部署。

项目为静态网页，无需安装依赖或执行构建命令。
