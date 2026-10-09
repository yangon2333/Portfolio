// ==========================================================================
// 前端网页作品集 — 交互脚本
// 点击（或键盘回车/空格）作品卡片，在新标签页打开对应的 GitHub 仓库
// ==========================================================================

const cards = document.querySelectorAll('.work');

function openCard(card) {
  const url = card.dataset.url;
  if (url) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}

cards.forEach(card => {
  // 鼠标点击
  card.addEventListener('click', () => openCard(card));

  // 键盘操作：让卡片也能被 Tab 聚焦后打开，保证可访问性
  card.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openCard(card);
    }
  });
});
