import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwticher } from 'shared/ThemeSwticher';
import { LanguageSwitcher } from 'features/LanguageSwitcher';
import cls from './Sidebar.module.scss';

export interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed((collapsed) => !collapsed);
    };

    return (
        <div className={classNames(cls.Sidebar, { [cls.Collapsed]: collapsed }, [className])}>
            <button type="button" onClick={toggleSidebar}>toggle</button>
            <div className={cls.swtichers}>
                <ThemeSwticher />
                <LanguageSwitcher />
            </div>
        </div>
    );
};
