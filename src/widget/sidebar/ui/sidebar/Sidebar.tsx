import { useState, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwticher } from 'shared/ThemeSwticher';
import { LanguageSwitcher } from 'features/LanguageSwitcher';
import { MyButton, SizeButton, ThemeButton } from 'shared/ui/MyButton/MyButton';
import { SidebarItem } from 'widget/sidebar/sidebarItem/SidebarItem';
import { SidebarItemsList } from 'widget/sidebar/sidebarItem/model/items';
import cls from './Sidebar.module.scss';

export interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
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
                {SidebarItemsList.map((item) => (
                    <SidebarItem item={item} key={item.path} collapsed={collapsed} />
                ))}
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
});
