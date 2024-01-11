import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfileData } from 'entities/MyProfile/services/fetchProfileData/fetchProfileData';
import { profile, ProfileSchema } from '../type/profile';

const initialState: ProfileSchema = {
    data: undefined,
    form: undefined,
    isLoading: false,
    readonly: true,
    error: undefined,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        editProfile: (state, action: PayloadAction<profile>) => {
            state.form = { ...state.form, ...action.payload };
        },
        cancelEditProfile: (state) => {
            state.form = state.data;
        },
        saveProfile: (state, action: PayloadAction<boolean>) => {
            state.data = state.form;
            state.readonly = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<profile>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { reducer: profileReducers } = profileSlice;
export const { actions: profileActions } = profileSlice;
