import { useEffect, useState } from 'react';

const STORAGE_KEY = 'theme';

function readSavedTheme() {
  try {
    return localStorage.getItem(STORAGE_KEY) || 'dark';
  } catch {
    return 'dark';
  }
}

export default function useTheme() {
  const [theme, setTheme] = useState(readSavedTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // storage unavailable (private mode etc.): theme still applies for this visit
    }
  }, [theme]);

  const toggleTheme = () => setTheme((current) => (current === 'light' ? 'dark' : 'light'));

  return { theme, toggleTheme };
}
