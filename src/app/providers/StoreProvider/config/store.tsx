import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';

export function CreateReduxStore(initialState?: StateSchema) {
    return configureStore({
        reducer: {},
        preloadedState: initialState,
    });
}
