// 三个作品的数据：点击卡片打开 site，右下角的仓库链接打开 repo
const PROJECTS = [
  {
    num: 1,
    title: 'Register Form',
    desc: '注册表单，检查用户名、邮箱、手机号和两次密码是否填写正确',
    tag: 'Form',
    image: './image/project-1-register.png',
    alt: '注册表单页面截图',
    site: 'https://register-page-rho-one.vercel.app/',
    repo: 'https://github.com/yangon2333/Register-Page'
  },
  {
    num: 2,
    title: 'Quiz Game',
    desc: '五道选择题，选完立刻知道对错并加分，最后显示总分',
    tag: 'Quiz',
    image: './image/project-2-quiz.png',
    alt: '测验小游戏页面截图',
    site: 'https://quiz-game-eight-iota.vercel.app/',
    repo: 'https://github.com/yangon2333/Quiz-Game'
  },
  {
    num: 3,
    title: 'Menu Search',
    desc: '菜单可以按分类筛选，也能输入关键字查找菜品',
    tag: 'Search',
    image: './image/project-3-menu.png',
    alt: '菜单搜索页面截图',
    site: 'https://menu-search-five.vercel.app/',
    repo: 'https://github.com/yangon2333/Menu-Search'
  }
];

const ARROW_SVG =
  '<svg class="arrow" viewBox="0 0 16 16" aria-hidden="true">' +
  '<path d="M4.5 11.5 11.5 4.5M6 4.5h5.5V10" fill="none" stroke="currentColor" ' +
  'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>';

// 按上面的数据生成卡片
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
