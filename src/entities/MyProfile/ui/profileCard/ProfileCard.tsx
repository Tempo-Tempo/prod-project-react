import { getProfileData } from 'entities/MyProfile/model/selectors/getProfileData/getProfileData';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { MyButton, ThemeButton } from 'shared/ui/MyButton/MyButton';
import { MyInput } from 'shared/ui/MyInput/MyInput';
import cls from './profileCard.module.scss';

interface profileCardProps {
   className?: string,
}

export const ProfileCard = ({ className }: profileCardProps) => {
    const { t } = useTranslation('profile');
    const profileData = useSelector(getProfileData);
    return (
        <div className={classNames(cls.card_wrapper, {}, [className])}>
            <div className={classNames(cls.header_card, {}, [className])}>
                <div className={classNames(cls.profile_name, {}, [className])}>
                    {t('Страница профиля')}
                </div>
                <MyButton className={cls.editBtn} theme={ThemeButton.OUTLINE}>
                    {t('Редактировать')}
                </MyButton>
            </div>
            <div className={cls.data}>
                <MyInput value={profileData?.first} placeholder="Ваше имя" className={cls.input} />
                <MyInput value={profileData?.lastname} placeholder="Ваша фамилия" className={cls.input} />
            </div>
        </div>
    );
};
