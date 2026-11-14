import useTheme from '../hooks/useTheme.js';

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z" />
    </svg>
  );
}

/** Botão de tema. Mostra o ícone do tema para o qual vai trocar. */
export default function ThemeToggle({ floating = false }) {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';
  const label = isLight ? 'Ativar tema escuro' : 'Ativar tema claro';

  return (
    <button
      type="button"
      className={floating ? 'themeButton themeButtonFloating' : 'themeButton'}
      onClick={toggleTheme}
      aria-label={label}
      title={label}
    >
      {isLight ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
