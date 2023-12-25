import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProviders/lib/useTheme';
import { FC, memo } from 'react';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Theme } from 'app/providers/ThemeProviders/lib/themeContext';
import { MyButton, ThemeButton } from 'shared/ui/MyButton/MyButton';

export interface ThemeSwticherProps {
  className?: string;
}

export const ThemeSwticher = memo(({ className }: ThemeSwticherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <MyButton
            onClick={toggleTheme}
            theme={ThemeButton.CLEAR}
            className={classNames('', {}, [className])}

        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </MyButton>
    );
});
