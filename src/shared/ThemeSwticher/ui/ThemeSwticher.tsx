import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProviders/lib/useTheme';
import { FC } from 'react';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Theme } from 'app/providers/ThemeProviders/lib/themeContext';
import { MyButton, ThemeButton } from 'shared/MyButton/MyButton';

export interface ThemeSwticherProps {
  className?: string;
}

export const ThemeSwticher: FC<ThemeSwticherProps> = (props) => {
    const { theme, toggleTheme } = useTheme();
    const { className, children, ...otherProps } = props;
    return (
        <MyButton
            onClick={toggleTheme}
            theme={ThemeButton.CLEAR}
            className={classNames('', {}, [className])}
            {...otherProps}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </MyButton>
    );
};
