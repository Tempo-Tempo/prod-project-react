import { profileReducers } from 'entities/MyProfile/model/slice/profileSlice';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicAsyncReducer, ReducersList } from 'shared/lib/components/DynamicAsyncReducer/DynamicAsyncReducer';

interface ProfilePageProps {
   className?: string,
}

const reducer: ReducersList = {
    profile: profileReducers,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation('profile');
    return (
        <DynamicAsyncReducer reducers={reducer}>
            <div className={classNames('', {}, [className])}>
                {t('Страница профиля')}
            </div>
        </DynamicAsyncReducer>

    );
};

export default ProfilePage;
