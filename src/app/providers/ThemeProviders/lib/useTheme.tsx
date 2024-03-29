import { useContext } from 'react';
import { LOCAL_STOREAGE_THEME_KEY, Theme, ThemeContext } from './themeContext';

interface useThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export function useTheme(): useThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.WHITE : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STOREAGE_THEME_KEY, newTheme);
    };
    return {
        theme,
        toggleTheme,
    };
}
