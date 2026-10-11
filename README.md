# 前端作业作品集

前三次前端作业的展示页面，每个作品配一张截图和一段说明，
点卡片就能打开对应的网页。三个作业各自有单独的仓库。

## 菜单搜索（Menu Search）

一页像菜单一样的菜品列表，十道菜分成主菜、前菜、甜点和饮料四类，
每道菜配一个 emoji 和价格，比如 Margherita Pizza $12.99、Caesar Salad $7.99、
Chocolate Cake $5.99、Orange Juice $3.49。

上面有一排分类按钮，点哪个就只留下那一类；旁边的输入框可以直接打菜名找，
输入的时候列表跟着变。找不到对应菜品时会显示一行提示，而不是留一片空白。

菜卡用网格排，窗口变窄会自己折行，手机上变成一列。
页面是浅灰底配白色圆角卡片，选中的分类按钮是蓝色的。

在线看：https://menu-search-five.vercel.app/
源码：[yangon2333/Menu-Search](https://github.com/yangon2333/Menu-Search)

## 测验小游戏（Quiz Game）

五道选择题，每题四个选项，涉及首都、行星、算术这些内容。

点一个选项就立刻判对错：选对的那项变绿，选错的变红，同时把正确答案标出来，
分数加一。右下角的 Next 进入下一题，做完最后一题显示总分，可以重来一次。

页面上方一直显示当前分数和进度，比如「Question 1 / 5」。

在线看：https://quiz-game-eight-iota.vercel.app/
源码：[yangon2333/Quiz-Game](https://github.com/yangon2333/Quiz-Game)

## 注册表单（Register Form）

一个注册页，字段有用户名、邮箱、手机号、密码、确认密码，外加一个服务条款勾选框。

点 Sign Up 的时候逐个检查：用户名至少三个字符，邮箱要符合格式，手机号是十一位数字，
密码不少于六位，两次密码要一致，条款必须勾上。哪一项不合格就在那个输入框下面
显示一行红字，并把边框标红。

在线看：https://register-page-rho-one.vercel.app/
源码：[yangon2333/Register-Page](https://github.com/yangon2333/Register-Page)

## 作品集页面

三个作品的信息写在 `script.js` 开头的 `PROJECTS` 数组里，卡片是页面打开后用 JavaScript
生成出来的，所以以后想再加一个作品，往数组里多写一条就行。

点卡片的跳转也是 JavaScript 做的；按 Tab 选中卡片后回车或者空格也能打开。
卡片右下角那个「GitHub 仓库」是单独的链接，点它只开仓库，不会连带把作品页面也打开。

整页共用一套样式，卡片在宽一点的屏幕上两列，窗口宽度小于 720px 时改成一列。
截图是把三个作业分别用浏览器打开之后截的，统一成一样的尺寸放在 `image/` 里。

## 文件

- `index.html`：页面骨架
- `style.css`：样式，含窄屏的处理
- `script.js`：作品数据，以及生成卡片和点击跳转
- `image/`：三个作业的截图
- `design.md`：配色和字号的规范，页面是按它做的

## 本地看

用 VS Code 打开这个文件夹，装个 Live Server 插件，
右键 `index.html` 选 Open with Live Server；或者直接双击 `index.html` 用浏览器打开也行。

## 部署

代码在 GitHub，用 Vercel 部署，静态页面不需要构建。
导入的时候 Root Directory 要填 `portfolio`，因为 `index.html` 在这个子目录里。

作品集：https://portfolio-eight-tan-51.vercel.app/
