import { fetchProfileData } from 'entities/MyProfile';
import { profileReducers } from 'entities/MyProfile/model/slice/profileSlice';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicAsyncReducer, ReducersList } from 'shared/lib/components/DynamicAsyncReducer/DynamicAsyncReducer';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ProfileCard } from 'entities/MyProfile/ui/profileCard/ProfileCard';

interface ProfilePageProps {
   className?: string,
}

const reducer: ReducersList = {
    profile: profileReducers,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchProfileData());
    }, []);
    return (
        <DynamicAsyncReducer reducers={reducer}>
            <ProfileCard />
        </DynamicAsyncReducer>

    );
};

export default ProfilePage;
