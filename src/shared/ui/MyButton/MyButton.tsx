import { classNames } from 'shared/lib/classNames/classNames';
import React, { FC, ButtonHTMLAttributes } from 'react';
import cls from './MyButton.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
  OUTLINE = 'outline',
  OUTLINE_INVERTED = 'outline_inverted',
}

export enum SizeButton {
   M = 'size_m',
   L = 'size_l',
   XL = 'size_xl',
  }

interface ButtonsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  size?: SizeButton;
  disabled?: boolean,
}

export const MyButton: FC<ButtonsProps> = (props) => {
    const {
        className, theme, children, size, disabled, ...otherProps
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
};
