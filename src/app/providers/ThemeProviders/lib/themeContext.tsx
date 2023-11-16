import { createContext } from 'react';

export enum Theme {
   WHITE = 'app_white_theme',
   DARK = 'app_dark_theme'
}

export interface ThemeContextProps {
   theme?: Theme;
   setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STOREAGE_THEME_KEY = 'theme';
