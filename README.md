# 前端作业作品集

三次前端作业放在同一个页面里，各配一张截图和一段说明，点卡片就能打开对应的网页。
三个作业分别有自己的仓库。

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

挑深绿近黑的底色配一点珊瑚粉，不用浅色，是想让三个作业的截图自己亮出来——
它们本来就是白底的界面，放在暗色上像三张悬着的卡片，不用再加边框或者阴影去强调。

页面里没有多余的东西，除了导航和一句说明，剩下的位置都留给作品本身。
卡片的交互也克制，鼠标移上去只轻微上浮一点、底色亮一档，不放大、不位移、不加投影，
免得抢了截图的内容。留白给得比较大方，各块之间不挤在一起，看的时候不用急着往下滚。

三个作品按作业顺序排，编号用粉色小圆点标出来，一眼能看出是三次不同的练习。
截图统一成同一个尺寸，卡片在宽屏上两列、窄屏收成一列，不管在哪种屏幕上，
一张卡片占的位置都差不多，扫过去节奏是稳的。

## 文件

- `index.html`：页面结构
- `style.css`：页面样式，窄屏下的调整也在里面
- `script.js`：作品数据，以及卡片的生成与跳转
- `image/`：三个作业的截图
- `design.md`：配色、字号等规范，页面按它来写

## 本地看

`index.html` 直接双击就能在浏览器里打开。VS Code 装了 Live Server 插件的话，
右键选 Open with Live Server 也可以，改完存盘页面会自己刷新，调试的时候方便些。

## 部署

仓库推在 GitHub 上，Vercel 连的是这个仓库，所以更新只要 push，线上会自己重新发布。
静态页面没有构建这一步。因为 `index.html` 在 `portfolio` 子目录里，
Vercel 项目的 Root Directory 设的是 `portfolio`。

作品集地址：https://portfolio-eight-tan-51.vercel.app/
