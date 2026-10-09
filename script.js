// ==========================================================================
// 前端网页作品集 — 交互脚本
//   · 点击（或键盘回车/空格）作品卡片 → 在新标签页打开该作品的在线页面
//   · 卡片内的「GitHub 仓库」链接 → 打开对应仓库，且不再触发卡片跳转
// ==========================================================================

const cards = document.querySelectorAll('.work');

function openCard(card) {
  const url = card.dataset.url;
  if (url) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}

cards.forEach(card => {
  // 鼠标点击卡片 → 打开在线页面
  card.addEventListener('click', () => openCard(card));

  // 键盘操作：让卡片能被 Tab 聚焦后用回车/空格打开，保证可访问性
  card.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openCard(card);
    }
  });

  // 卡片内的仓库链接由 <a> 自己处理，阻止冒泡以免同时打开在线页面
  const repoLink = card.querySelector('.repo-link');
  if (repoLink) {
    repoLink.addEventListener('click', event => event.stopPropagation());
  }
});
