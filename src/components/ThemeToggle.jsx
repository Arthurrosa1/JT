import useTheme from '../hooks/useTheme.js';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <button
      type="button"
      className="themeButton"
      onClick={toggleTheme}
      aria-label={isLight ? 'Ativar tema escuro' : 'Ativar tema claro'}
    >
      {isLight ? '🌞' : '🌙'}
    </button>
  );
}
