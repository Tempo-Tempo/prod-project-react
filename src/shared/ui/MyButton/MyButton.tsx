import { classNames } from 'shared/lib/classNames/classNames';
import React, { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import cls from './MyButton.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outline_red',
  OUTLINE_INVERTED = 'outline_inverted',
}

export enum SizeButton {
   M = 'size_m',
   L = 'size_l',
   XL = 'size_xl',
   None = ''
  }

interface ButtonsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  size?: SizeButton;
  disabled?: boolean,
  children?: ReactNode
}

export const MyButton = memo((props: ButtonsProps) => {
    const {
        className = '', theme = ThemeButton.OUTLINE, children, size = SizeButton.None, disabled, ...otherProps
    } = props;
    return (
        <button
            type="button"
            disabled={disabled}
            className={classNames(cls.Button, { [cls.disabled]: disabled }, [className, cls[theme], cls[size]])}
            {...otherProps}
        >
            {children}
        </button>
    );
});
