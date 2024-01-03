import { useContext, useEffect } from 'react';
import { LOCAL_STOREAGE_THEME_KEY, Theme, ThemeContext } from './themeContext';

interface useThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export function useTheme(): useThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {
        const themeFromLocal = localStorage.getItem(LOCAL_STOREAGE_THEME_KEY) as Theme;
        if (themeFromLocal) {
            setTheme?.(themeFromLocal);
            document.body.className = themeFromLocal;
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.WHITE : Theme.DARK;
        setTheme?.(newTheme);
        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STOREAGE_THEME_KEY, newTheme);
    };
    return {
        theme: Theme.WHITE,
        toggleTheme,
    };
}
