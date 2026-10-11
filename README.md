# 前端作业作品集

把我这学期前三次前端作业放在一个页面里展示，
每个作品配一张截图和一段说明，点击卡片就能打开对应的网页。

## 三个作品

| 作品 | 内容 | 在线地址 | 源码 |
| --- | --- | --- | --- |
| Register Form | 注册表单，带输入校验 | [register-page-rho-one.vercel.app](https://register-page-rho-one.vercel.app/) | [Register-Page](https://github.com/yangon2333/Register-Page) |
| Quiz Game | 选择题小游戏，答完显示总分 | [quiz-game-eight-iota.vercel.app](https://quiz-game-eight-iota.vercel.app/) | [Quiz-Game](https://github.com/yangon2333/Quiz-Game) |
| Menu Search | 菜单搜索，支持分类筛选 | [menu-search-five.vercel.app](https://menu-search-five.vercel.app/) | [Menu-Search](https://github.com/yangon2333/Menu-Search) |

作品集本身也部署好了：https://portfolio-eight-tan-51.vercel.app/

## 页面怎么做的

三个作品的数据都写在 `script.js` 开头的 `PROJECTS` 里，
卡片是页面加载后用 JavaScript 生成出来的，所以想加一个作品只要往数组里再写一条。

点击卡片的跳转也是 JavaScript 做的，另外按 Tab 选中卡片后回车或空格也能打开。
卡片右下角的「GitHub 仓库」链接会单独打开仓库，不会同时触发卡片跳转。

样式方面，屏幕宽度小于 720px 时卡片从两列变成一列，手机上也能正常看。
截图是用浏览器把三个作业分别打开后截的，统一成一样的尺寸，放在 `image/` 里。

## 文件

- `index.html`：页面结构
- `style.css`：样式和响应式
- `script.js`：作品数据和卡片生成、点击跳转
- `image/`：三个作品的截图
- `design.md`：配色和字体的规范，页面是按这个做的

## 本地打开

用 VS Code 打开这个文件夹，装个 Live Server 插件，右键 `index.html` 选 Open with Live Server 就行。

## 部署

代码在 GitHub 上，用 Vercel 部署，静态页面不需要构建。
重新导入的时候记得把 Root Directory 填成 `portfolio`，因为 `index.html` 在这个子目录里。
