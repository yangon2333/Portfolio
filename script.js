// 三个作品的数据：点击卡片打开 site，右下角的仓库链接打开 repo
const PROJECTS = [
  {
    num: 1,
    title: 'Register Form',
    tag: 'Form',
    image: './image/project-1-register.png',
    alt: '注册表单页面截图',
    detail: [
      '一个注册页，字段有用户名、邮箱、手机号、密码、确认密码，外加一个服务条款勾选框。',
      '点 Sign Up 时逐个检查，哪一项不合格就在那个输入框下面显示一行红字，并把边框标红。'
    ],
    site: 'https://register-page-rho-one.vercel.app/',
    repo: 'https://github.com/yangon2333/Register-Page'
  },
  {
    num: 2,
    title: 'Quiz Game',
    tag: 'Quiz',
    image: './image/project-2-quiz.png',
    alt: '测验小游戏页面截图',
    detail: [
      '五道选择题，每题四个选项，涉及首都、行星、算术这些内容。',
      '点一个选项就立刻判对错，选对的那项变绿、选错的变红，分数加一；做完最后一题显示总分，可以重来一次。'
    ],
    site: 'https://quiz-game-eight-iota.vercel.app/',
    repo: 'https://github.com/yangon2333/Quiz-Game'
  },
  {
    num: 3,
    title: 'Menu Search',
    tag: 'Search',
    image: './image/project-3-menu.png',
    alt: '菜单搜索页面截图',
    detail: [
      '一页像菜单一样的菜品列表，十道菜分成主菜、前菜、甜点和饮料四类，每道菜配一个 emoji 和价格。',
      '上面有一排分类按钮，点哪个就只留下那一类；旁边的输入框可以直接打菜名找，输入的时候列表跟着变。'
    ],
    site: 'https://menu-search-five.vercel.app/',
    repo: 'https://github.com/yangon2333/Menu-Search'
  }
];

const ARROW_SVG =
  '<svg class="arrow" viewBox="0 0 16 16" aria-hidden="true">' +
  '<path d="M4.5 11.5 11.5 4.5M6 4.5h5.5V10" fill="none" stroke="currentColor" ' +
  'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>';

// 按上面的数据生成卡片：截图 + 标题 + 说明 + 仓库链接
function createCard(project) {
  const card = document.createElement('article');
  card.className = 'card work';
  card.tabIndex = 0;
  card.setAttribute('role', 'link');
  card.setAttribute('aria-label', '打开 ' + project.title + ' 的在线页面');
  card.dataset.url = project.site;

  const preview = document.createElement('div');
  preview.className = 'work-preview';

  const img = document.createElement('img');
  img.src = project.image;
  img.alt = project.alt;
  img.loading = 'lazy';
  preview.appendChild(img);

  const heading = document.createElement('h3');
  const num = document.createElement('span');
  num.className = 'step-num';
  num.textContent = project.num;
  heading.appendChild(num);
  heading.appendChild(document.createTextNode(' ' + project.title));

  card.appendChild(preview);
  card.appendChild(heading);

  project.detail.forEach(text => {
    const p = document.createElement('p');
    p.className = 'card-detail';
    p.textContent = text;
    card.appendChild(p);
  });

  const meta = document.createElement('div');
  meta.className = 'work-meta';

  const tag = document.createElement('span');
  tag.className = 'tag';
  tag.textContent = project.tag;

  const repoLink = document.createElement('a');
  repoLink.className = 'repo-link';
  repoLink.href = project.repo;
  repoLink.target = '_blank';
  repoLink.rel = 'noopener noreferrer';
  repoLink.textContent = 'GitHub 仓库';
  repoLink.insertAdjacentHTML('beforeend', ARROW_SVG);

  meta.appendChild(tag);
  meta.appendChild(repoLink);
  card.appendChild(meta);

  return card;
}

const worksEl = document.querySelector('.works');

if (worksEl) {
  PROJECTS.forEach(project => worksEl.appendChild(createCard(project)));
}

// 打开作品的在线页面
function openCard(card) {
  const url = card.dataset.url;
  if (url) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}

document.querySelectorAll('.work').forEach(card => {
  card.addEventListener('click', () => openCard(card));

  // 用键盘也能打开
  card.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openCard(card);
    }
  });

  // 点仓库链接时不要同时打开作品页面
  const repoLink = card.querySelector('.repo-link');
  if (repoLink) {
    repoLink.addEventListener('click', event => event.stopPropagation());
  }
});
