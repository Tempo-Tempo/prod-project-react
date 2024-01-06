import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { User, usersAcitons } from 'entities/MyUsers';
import { USER_LOCALSTOREAGE_KEY } from 'shared/const/localStoreage';

interface userDataProps {
   username: string,
   password: string,
}

export const loginByUsername = createAsyncThunk<User, userDataProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (userData: userDataProps, thunkApi) => {
        const { extra, dispatch, rejectWithValue } = thunkApi;
        try {
            const responce = await extra.api.post('http://localhost:8000/login', userData);
            if (!responce.data) {
                throw new Error();
            }
            dispatch(usersAcitons.setAuthData(responce.data));
            localStorage.setItem(USER_LOCALSTOREAGE_KEY, JSON.stringify(responce.data));
            extra.navigate?.('/about');
            return responce.data;
        } catch {
            return rejectWithValue('error');
        }
    },

);
