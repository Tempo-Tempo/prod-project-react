import { createContext } from 'react';

export enum Theme {
   WHITE = 'white',
   DARK = 'dark'
}

export interface ThemeContextProps {
   theme?: Theme;
   setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STOREAGE_THEME_KEY = 'theme';
