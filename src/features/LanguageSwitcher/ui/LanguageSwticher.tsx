import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { MyButton, ThemeButton } from "shared/MyButton/MyButton";
import cls from "./LanguageSwitcher.module.scss"

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return <MyButton theme={ThemeButton.CLEAR} className={classNames(cls.lng)} onClick={toggle}>{t('Язык')}</MyButton>;
};
