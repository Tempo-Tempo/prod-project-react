import { classNames } from 'shared/lib/classNames/classNames';
import React, { FC, ButtonHTMLAttributes } from 'react';
import cls from './MyButton.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const MyButton: FC<ButtonsProps> = (props) => {
    const {
        className, theme, children, ...otherProps
    } = props;
    return (
        <button
            type="button"
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
