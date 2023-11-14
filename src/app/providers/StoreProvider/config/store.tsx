import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/MyCounter/model/slice/counterSlice';
import { StateSchema } from './StateSchema';

export function CreateReduxStore(initialState: StateSchema) {
    return configureStore({
        reducer: {
            counter: counterReducer,
        },
        preloadedState: initialState,
    });
}
