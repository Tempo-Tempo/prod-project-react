import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwticher } from 'shared/ThemeSwticher';
import { LanguageSwitcher } from 'features/LanguageSwitcher';
import { MyButton, SizeButton, ThemeButton } from 'shared/ui/MyButton/MyButton';
import { AppLink, AppThemeLinks } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/routerConfig/routerConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import cls from './Sidebar.module.scss';

export interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation('sidebar');
    const [collapsed, setCollapsed] = useState(false);
    const toggleSidebar = () => {
        setCollapsed((collapsed) => !collapsed);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.Collapsed]: collapsed }, [className])}
        >
            <div className={cls.Links}>
                <AppLink
                    theme={AppThemeLinks.SECONDARY}
                    className={cls.mainLink}
                    to={RoutePath.main}
                >

                    {!collapsed ? (
                        <span className={cls.link}>
                            <MainIcon className={cls.icon} />
                            {t('Главная')}
                        </span>
                    ) : <MainIcon className={cls.icon} />}

                </AppLink>
                <AppLink theme={AppThemeLinks.SECONDARY} to={RoutePath.about}>
                    {!collapsed ? (
                        <span className={cls.link}>
                            <AboutIcon className={cls.icon} />
                            {t('О стр')}
                        </span>
                    ) : <AboutIcon className={cls.icon} />}

                </AppLink>
            </div>
            <MyButton
                data-testid="sidebar-toggle"
                onClick={toggleSidebar}
                className={cls.sidebarBtn}
                size={SizeButton.XL}
                theme={ThemeButton.BACKGROUND_INVERTED}
            >
                {collapsed ? '>' : '<'}
            </MyButton>
            <div className={cls.swtichers}>
                <ThemeSwticher />
                <LanguageSwitcher className={cls.lang} collapsed={collapsed} />
            </div>
        </div>
    );
};
