import { useState, FC } from "react";
import { useMemo } from "react";
import { ThemeContext, Theme, LOCAL_STOREAGE_THEME_KEY } from "../lib/themeContext";

const defaultTheme =
  (localStorage.getItem(LOCAL_STOREAGE_THEME_KEY) as Theme) || Theme.WHITE;

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
