export {
    profileActions,
    profileReducers,
} from './model/slice/profileSlice';

export { fetchProfileData } from './services/fetchProfileData/fetchProfileData';

export { ProfileCard } from './ui/profileCard/ProfileCard';

export { getProfileData } from './model/selectors/getProfileData/getProfileData';
export { getProfileError } from './model/selectors/getProfileError/getProfileError';
export { getProfileIsLoading } from './model/selectors/getProfileIsLoading/getProfileIsLoading';
