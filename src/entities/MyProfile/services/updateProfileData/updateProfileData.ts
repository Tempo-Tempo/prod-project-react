import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getProfileForm } from 'entities/MyProfile/model/selectors/getProfileForm/getProfileForm';
import { profile } from 'entities/MyProfile/model/type/profile';

export const updateProfileData = createAsyncThunk<profile, void, ThunkConfig<string>>(
    'profile/saveProfileData',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;
        const formData = getProfileForm(getState());

        try {
            const responce = await extra.api.put('/profile', formData);
            return responce.data;
        } catch {
            return rejectWithValue('Error');
        }
    },
);
