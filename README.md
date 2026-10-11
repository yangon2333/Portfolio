# 前端作业作品集

这是我的前端作业作品集。这学期前三次练习——一个注册表单、一个选择题小游戏、
一个菜单搜索页，有各自独立的仓库，都已独立部署。

在线作品集：https://portfolio-eight-tan-51.vercel.app/

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

三个作品的信息写在 `script.js` 里，打开页面后由 JavaScript 生成卡片，
点卡片跳转到对应的在线页面，右下角的链接进各自的仓库。

页面底色为深绿近黑，用珊瑚粉作为强调色。

三个作品截图宽屏两列、窄屏一列，编号用粉色圆点标出。

## 文件

- `index.html`：页面结构
- `style.css`：页面样式，窄屏调整
- `script.js`：作品数据与卡片生成、跳转
- `image/`：三个作业的截图
- `design.md`：配色、字号规范

## 本地看

双击 `index.html` 即可打开，或装了 Live Server 后右键选 Open with Live Server。

## 部署

仓库在 GitHub，连接 Vercel，push 后自动发布，静态页面不用构建。
