import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwticher } from 'shared/ThemeSwticher';
import { LanguageSwitcher } from 'features/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { MyButton } from 'shared/MyButton/MyButton';
import cls from './Sidebar.module.scss';

export interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation('sidebar');
    const toggleSidebar = () => {
        setCollapsed((collapsed) => !collapsed);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.Collapsed]: collapsed }, [className])}
        >
            <MyButton
                type="button"
                onClick={toggleSidebar}
            >
                {collapsed ? t('Открыть') : t('Закрыть')}
            </MyButton>
            <div className={cls.swtichers}>
                <ThemeSwticher />
                <LanguageSwitcher />
            </div>
        </div>
    );
};
