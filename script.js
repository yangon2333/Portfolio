// ==========================================================================
// 前端网页作品集 — 作品数据
//
//   site  = 作品的在线访问地址（点击卡片打开）
//   repo  = 作品的 GitHub 源码仓库（点击卡片右下角链接打开）
//
// 如果某个网址有变化，只改这里对应的一行即可，HTML 不需要动。
// ==========================================================================

const PROJECTS = [
  {
    num: 1,
    title: 'Register Form',
    desc: '注册表单页面，实现用户名、邮箱、手机号、密码与协议勾选的前端校验',
    tag: 'Form',
    image: './image/project-1-register.png',
    alt: 'Register Page 注册表单页面截图',
    site: 'https://register-page-rho-one.vercel.app/',
    repo: 'https://github.com/yangon2333/Register-Page'
  },
  {
    num: 2,
    title: 'Quiz Game',
    desc: '五道选择题的小游戏，点击选项即时判定对错并计分，结束后可重新开始',
    tag: 'Quiz',
    image: './image/project-2-quiz.png',
    alt: 'Quiz Game 测验小游戏页面截图',
    site: 'https://quiz-game-eight-iota.vercel.app/',
    repo: 'https://github.com/yangon2333/Quiz-Game'
  },
  {
    num: 3,
    title: 'Menu Search',
    desc: '菜单搜索页面，支持关键字实时筛选与分类切换，并处理空结果提示',
    tag: 'Search',
    image: './image/project-3-menu.png',
    alt: 'Menu Search 菜单搜索页面截图',
    site: 'https://menu-search-five.vercel.app/',
    repo: 'https://github.com/yangon2333/Menu-Search'
  }
];

// ==========================================================================
// 卡片渲染
// ==========================================================================

const ARROW_SVG =
  '<svg class="arrow" viewBox="0 0 16 16" aria-hidden="true">' +
  '<path d="M4.5 11.5 11.5 4.5M6 4.5h5.5V10" fill="none" stroke="currentColor" ' +
  'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>';

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

  const desc = document.createElement('p');
  desc.textContent = project.desc;

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

  card.appendChild(preview);
  card.appendChild(heading);
  card.appendChild(desc);
  card.appendChild(meta);

  return card;
}

const worksEl = document.querySelector('.works');

if (worksEl) {
  PROJECTS.forEach(project => worksEl.appendChild(createCard(project)));
}

// ==========================================================================
// 交互：点击卡片打开在线页面；卡片内的仓库链接独立处理
// ==========================================================================

function openCard(card) {
  const url = card.dataset.url;
  if (url) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}

document.querySelectorAll('.work').forEach(card => {
  // 鼠标点击卡片 → 打开在线页面
  card.addEventListener('click', () => openCard(card));

  // 键盘操作：卡片可被 Tab 聚焦，用回车或空格打开，保证可访问性
  card.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openCard(card);
    }
  });

  // 仓库链接由 <a> 自己处理，阻止冒泡以免同时触发卡片跳转
  const repoLink = card.querySelector('.repo-link');
  if (repoLink) {
    repoLink.addEventListener('click', event => event.stopPropagation());
  }
});
