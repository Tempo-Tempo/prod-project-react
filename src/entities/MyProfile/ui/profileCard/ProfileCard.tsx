import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { MyInput } from 'shared/ui/MyInput/MyInput';
import { MyText, TextAlign, TextTheme } from 'shared/ui/text/MyText';
import { SpinnerLoader } from 'shared/spinnerLoader/spinnerLoader';
import { useSelector } from 'react-redux';
import { getProfileReadonly } from 'entities/MyProfile/model/selectors/getProfileReadonly/getProfileReadonly';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { profileActions } from 'entities/MyProfile/model/slice/profileSlice';
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
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const editFirst = useCallback((value?: string) => {
        dispatch(profileActions.editProfile({ first: value }));
    }, [dispatch]);

    const editLastname = useCallback((value?: string) => {
        dispatch(profileActions.editProfile({ lastname: value }));
    }, [dispatch]);
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
                <MyInput
                    value={profileData?.first}
                    onChange={editFirst}
                    disabled={readonly}
                    placeholder="Ваше имя"
                    className={cls.input}
                />
                <MyInput
                    value={profileData?.lastname}
                    onChange={editLastname}
                    disabled={readonly}
                    placeholder="Ваша фамилия"
                    className={cls.input}
                />
                <MyInput
                    value={profileData?.age}
                    onChange={editLastname}
                    disabled={readonly}
                    placeholder="Ваш возраст"
                    className={cls.input}
                />
                <MyInput
                    value={profileData?.city}
                    onChange={editLastname}
                    disabled={readonly}
                    placeholder="Ваш город"
                    className={cls.input}
                />
                <MyInput
                    value={profileData?.country}
                    onChange={editLastname}
                    disabled={readonly}
                    placeholder="Ваша страна"
                    className={cls.input}
                />
                <MyInput
                    value={profileData?.currency}
                    onChange={editLastname}
                    disabled={readonly}
                    placeholder="Ваша валюта"
                    className={cls.input}
                />

            </div>
        </div>
    );
};
