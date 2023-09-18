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
      <div className={cls.Links}>
        <AppLink
          theme={AppThemeLinks.SECONDARY}
          className={cls.mainLink}
          to={"/"}
        >
          {" "}
          Главная
        </AppLink>
        <AppLink theme={AppThemeLinks.SECONDARY} to={"/about"}>
          {" "}
          О сайте
        </AppLink>
      </div>
    </div>
  );
};

export { Navbar };
