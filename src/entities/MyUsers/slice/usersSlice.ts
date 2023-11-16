import { createSlice } from '@reduxjs/toolkit';
import { UserScheme } from '../types/user';

const initialState: UserScheme = {};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
});

export const { actions: usersAcitons } = usersSlice;
export const { reducer: usersReducers } = usersSlice;
