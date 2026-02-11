document.addEventListener('DOMContentLoaded', () => {
  const themeButton = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('theme') || 'dark';

  document.documentElement.setAttribute('data-theme', savedTheme);
  themeButton.textContent = savedTheme === 'light' ? '🌞' : '🌙';

  themeButton.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    themeButton.textContent = next === 'light' ? '🌞' : '🌙';
    localStorage.setItem('theme', next);
  });
});
