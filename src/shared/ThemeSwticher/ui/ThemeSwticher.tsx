import { classNames } from "shared/lib/classNames/classNames";
import cls from "../ui/ThemeSwticher.module.scss";
import { useTheme } from "app/providers/ThemeProviders/lib/useTheme";
import { FC } from "react";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg"
import { Theme } from "app/providers/ThemeProviders/lib/themeContext";



export interface ThemeSwticherProps  {
  className?: string;
}

export const ThemeSwticher: FC<ThemeSwticherProps> = (props) => {
  const {theme, toggleTheme } = useTheme();
  const {className, children, ...otherProps} = props;
  return (
    <button
      onClick={toggleTheme}
      className={classNames(cls.ThemeSwticher, {}, [className])}
    >
     {theme === Theme.DARK ? <LightIcon/> : <DarkIcon/>} 
    </button>
  );
};
