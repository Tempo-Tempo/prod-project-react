import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { profile } from '../../model/type/profile';

export const fetchProfileData = createAsyncThunk<profile, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;
        try {
            const responce = await extra.api.get('/profile');
            return responce.data;
        } catch {
            return rejectWithValue('error');
        }
    },
);
