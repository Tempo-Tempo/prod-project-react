import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppThemeLinks } from "shared/ui/AppLink/AppLink";
import { ThemeSwticher } from "shared/ThemeSwticher";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
     <ThemeSwticher>Toggle</ThemeSwticher>
      <div className={cls.Links}>
        <AppLink
          theme={AppThemeLinks.SECONDARY}
          className={cls.mainLink}
          to={"/"}
        >
          {" "}
          О сайте
        </AppLink>
        <AppLink theme={AppThemeLinks.SECONDARY} to={"/about"}>
          {" "}
          Главная
        </AppLink>
      </div>
    </div>
  );
};

export { Navbar };
