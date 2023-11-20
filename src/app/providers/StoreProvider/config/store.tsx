import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/MyCounter/model/slice/counterSlice';
import { loginReduser } from 'features/AuthByUsername';
import { StateSchema } from './StateSchema';

export function CreateReduxStore(initialState: StateSchema) {
    return configureStore({
        reducer: {
            counter: counterReducer,
            loginForm: loginReduser,
        },
        preloadedState: initialState,
    });
}
