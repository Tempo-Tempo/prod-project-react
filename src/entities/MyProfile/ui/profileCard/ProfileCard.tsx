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
import { MyAvatar } from 'shared/Avatar/Avatar';
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
    const editAge = useCallback((value?: number) => {
        dispatch(profileActions.editProfile({ age: value }));
    }, [dispatch]);
    const editCity = useCallback((value?: string) => {
        dispatch(profileActions.editProfile({ city: value }));
    }, [dispatch]);
    const editAvatar = useCallback((value?: string) => {
        dispatch(profileActions.editProfile({ avatar: value }));
    }, [dispatch]);
    if (isLoading) {
        return (
            <SpinnerLoader />
        );
    }
    if (profileError) {
        return (
            <div className={classNames(cls.card_wrapper, { }, [className])}>
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
        <div className={classNames(cls.card_wrapper, { [cls.editing]: !readonly }, [className])}>
            {profileData?.avatar && (
                <div className={cls.avatarWrapper}>
                    <MyAvatar src={profileData?.avatar} />
                </div>
            )}
            <div className={cls.data}>
                <MyInput
                    value={profileData?.first}
                    onChange={editFirst}
                    disabled={readonly}
                    placeholder="Имя"
                    className={cls.input}
                />
                <MyInput
                    value={profileData?.lastname}
                    onChange={editLastname}
                    disabled={readonly}
                    placeholder="Фамилия"
                    className={cls.input}
                />
                <MyInput
                    value={profileData?.age}
                    onChange={editAge}
                    disabled={readonly}
                    placeholder="Возраст"
                    className={cls.input}
                />
                <MyInput
                    value={profileData?.city}
                    onChange={editCity}
                    disabled={readonly}
                    placeholder="Город"
                    className={cls.input}
                />
                <MyInput
                    value={profileData?.avatar}
                    onChange={editAvatar}
                    disabled={readonly}
                    placeholder="Аватар"
                    className={cls.input}
                />
            </div>
        </div>
    );
};
