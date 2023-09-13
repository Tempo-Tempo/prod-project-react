import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "../AppLink/AppLink.module.scss";

 export enum AppThemeLinks {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface mainLinkProps extends LinkProps {
  className?: string;
  theme?: AppThemeLinks;
}

 export const AppLink: FC<mainLinkProps> = (props) => {
  const { to, className, theme = AppThemeLinks.PRIMARY, children, ...otherProps } = props;
  return (
    <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps}>
      {children}
    </Link>
  );
};



