import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink, AppThemeLinks } from 'shared/ui/AppLink/AppLink';
import { SidebarItemsType } from './model/items';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
   item: SidebarItemsType,
   collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation('sidebar');
    return (
        <AppLink
            theme={AppThemeLinks.SECONDARY}
            to={item.path}
            className={cls.item}
        >

            {!collapsed ? (
                <span className={cls.link}>
                    <item.icon className={cls.icon} />
                    {t(item.text)}
                </span>
            ) : <item.icon className={cls.icon} />}

        </AppLink>
    );
});
