import { useTranslation } from 'react-i18next';
import { ThemeButton, MyButton } from 'shared/ui/MyButton/MyButton';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/MyProfile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
   className?: string,
}

export const ProfilePageHeader = ({ className = '' }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const editProfile = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, []);

    const cancelEditProfile = useCallback(() => {
        dispatch(profileActions.setReadonly(true));
        dispatch(profileActions.cancelEditProfile());
    }, []);

    const saveEditProfile = useCallback(() => {
        dispatch(profileActions.saveProfile(true));
        dispatch(updateProfileData());
    }, []);

    return (
        <div className={classNames(cls.header_card, {}, [className])}>
            <div className={classNames(cls.profile_name, {}, [className])}>
                {t('Страница профиля')}
            </div>
            {readonly ? (
                <MyButton onClick={editProfile} className={cls.editBtn} theme={ThemeButton.OUTLINE}>
                    {t('Редактировать')}
                </MyButton>
            )
                : (
                    <div className={cls.header_card}>
                        <MyButton onClick={cancelEditProfile} className={cls.cancelBtn} theme={ThemeButton.OUTLINE_RED}>
                            {t('Отменить')}
                        </MyButton>
                        <MyButton onClick={saveEditProfile} className={cls.editBtn} theme={ThemeButton.OUTLINE}>
                            {t('Сохранить')}
                        </MyButton>
                    </div>

                )}

        </div>
    );
};
