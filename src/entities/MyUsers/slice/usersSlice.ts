import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCALSTOREAGE_KEY } from 'shared/const/localStoreage';
import { UserScheme, User } from '../types/user';

const initialState: UserScheme = {};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setAuthData: (state, actions: PayloadAction<User>) => {
            state.authData = actions.payload;
        },
        initAuthData: (state) => {
            const userLocal = localStorage.getItem(USER_LOCALSTOREAGE_KEY);
            if (userLocal) {
                state.authData = JSON.parse(userLocal);
            }
        },
        onLogout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTOREAGE_KEY);
        },
    },
});

export const { actions: usersAcitons } = usersSlice;
export const { reducer: usersReducers } = usersSlice;
