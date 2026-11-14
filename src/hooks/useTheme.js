import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'theme';
const THEMES = ['dark', 'light'];

function readSavedTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return THEMES.includes(saved) ? saved : null;
  } catch {
    return null;
  }
}

function systemTheme() {
  return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

/**
 * Tema atual do site.
 * - O script inline do index.html já aplicou o tema antes do React (sem "piscar"),
 *   então o estado inicial é lido do próprio <html>.
 * - Sem escolha salva, segue o tema do sistema (inclusive se ele mudar).
 * - Ao alternar, a escolha é salva e passa a valer em todas as páginas.
 */
export default function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || readSavedTheme() || systemTheme(),
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const media = window.matchMedia?.('(prefers-color-scheme: light)');
    if (!media) return undefined;
    const onChange = () => {
      if (!readSavedTheme()) setTheme(systemTheme());
    };
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === 'light' ? 'dark' : 'light';
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // armazenamento indisponível: o tema vale só nesta visita
      }
      return next;
    });
  }, []);

  return { theme, toggleTheme };
}
