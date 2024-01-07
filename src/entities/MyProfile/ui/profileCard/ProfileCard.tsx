import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { MyButton, ThemeButton } from 'shared/ui/MyButton/MyButton';
import { MyInput } from 'shared/ui/MyInput/MyInput';
import { MyText, TextAlign, TextTheme } from 'shared/ui/text/MyText';
import { SpinnerLoader } from 'shared/spinnerLoader/spinnerLoader';
import cls from './profileCard.module.scss';
import { profile } from '../../model/type/profile';

interface profileCardProps {
   className?: string,
   profileData?: profile,
   profileError?: string,
   isLoading?: boolean,
}

export const ProfileCard = ({
    className = '', profileData, profileError, isLoading,
}: profileCardProps) => {
    const { t } = useTranslation('profile');
    if (isLoading) {
        return (
            <SpinnerLoader />
        );
    }
    if (profileError) {
        return (
            <div className={classNames(cls.card_wrapper, {}, [className])}>
                <MyText
                    title={t('Ошибка загрузки профиля')}
                    body={t('Попробуйте перезагрузить страницу')}
                    theme={TextTheme.error}
                    align={TextAlign.center}
                />
            </div>
        );
    }
    return (
        <div className={classNames(cls.card_wrapper, {}, [className])}>
            <div className={cls.data}>
                <MyInput value={profileData?.first} placeholder="Ваше имя" className={cls.input} />
                <MyInput value={profileData?.lastname} placeholder="Ваша фамилия" className={cls.input} />
            </div>
        </div>
    );
};
