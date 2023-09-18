import { classNames } from "shared/lib/classNames/classNames";
import cls from "../MyButton/MyButton.module.scss";
import { FC, ButtonHTMLAttributes } from "react";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const MyButton: FC<ButtonsProps> = (props) => {
  const { className, theme, children, ...otherProps } = props;
  return (
    <button className={classNames(cls.Button, {}, [className, cls[theme]])} {...otherProps}>
      {children}
    </button>
  );
};
