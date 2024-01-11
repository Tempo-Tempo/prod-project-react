import { fetchProfileData, getProfileForm, getProfileIsLoading } from 'entities/MyProfile';
import { profileReducers } from 'entities/MyProfile/model/slice/profileSlice';
import { useEffect } from 'react';
import { DynamicAsyncReducer, ReducersList } from 'shared/lib/components/DynamicAsyncReducer/DynamicAsyncReducer';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ProfileCard } from 'entities/MyProfile/ui/profileCard/ProfileCard';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/MyProfile/model/selectors/getProfileData/getProfileData';
import { getProfileError } from 'entities/MyProfile/model/selectors/getProfileError/getProfileError';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

interface ProfilePageProps {
   className?: string,
}

const reducer: ReducersList = {
    profile: profileReducers,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch();
    const profileForm = useSelector(getProfileForm);
    const profileError = useSelector(getProfileError);
    const profileIsLoading = useSelector(getProfileIsLoading);
    useEffect(() => {
        dispatch(fetchProfileData());
    }, []);
    return (
        <DynamicAsyncReducer reducers={reducer}>
            <ProfilePageHeader />
            <ProfileCard profileData={profileForm} profileError={profileError} isLoading={profileIsLoading} />
        </DynamicAsyncReducer>

    );
};

export default ProfilePage;
