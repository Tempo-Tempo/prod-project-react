import { useTranslation } from 'react-i18next';
import { ThemeButton, MyButton } from 'shared/ui/MyButton/MyButton';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
   className?: string,
}

export const ProfilePageHeader = ({ className = '' }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    return (
        <div className={classNames(cls.header_card, {}, [className])}>
            <div className={classNames(cls.profile_name, {}, [className])}>
                {t('Страница профиля')}
            </div>
            <MyButton className={cls.editBtn} theme={ThemeButton.OUTLINE}>
                {t('Редактировать')}
            </MyButton>
        </div>
    );
};
