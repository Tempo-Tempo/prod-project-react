import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from '../type/profile';

const initialState: ProfileSchema = {
    data: undefined,
    isLoading: false,
    readonly: true,
    error: undefined,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
});

export const { reducer: profileReducers } = profileSlice;
export const { actions: profileActions } = profileSlice;
