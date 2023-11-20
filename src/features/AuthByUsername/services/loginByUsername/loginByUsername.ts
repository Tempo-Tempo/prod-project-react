import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from 'entities/MyUsers';

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
            return responce.data;
        } catch {
            return thunkApi.rejectWithValue('Error');
        }
    },

);
