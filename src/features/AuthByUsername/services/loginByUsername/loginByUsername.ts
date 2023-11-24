import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, usersAcitons } from 'entities/MyUsers';
import { USER_LOCALSTOREAGE_KEY } from 'shared/const/localStoreage';

interface userDataProps {
   username: string,
   password: string,
}

export const loginByUsername = createAsyncThunk<User, userDataProps, { rejectValue: string }>(
    'login/loginByUsername',
    async (userData: userDataProps, thunkApi) => {
        try {
            const responce = await axios.post('http://localhost:8000/login', userData);
            if (!responce.data) {
                throw new Error();
            }
            thunkApi.dispatch(usersAcitons.setAuthData(responce.data));
            localStorage.setItem(USER_LOCALSTOREAGE_KEY, JSON.stringify(responce.data));
            return responce.data;
        } catch {
            return thunkApi.rejectWithValue('error');
        }
    },

);
