import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/MyCounter/model/slice/counterSlice';
import { usersReducers } from 'entities/MyUsers';
import { loginReduser } from 'features/AuthByUsername';
import { StateSchema } from './StateSchema';

export function CreateReduxStore(initialState?: StateSchema) {
    // const rootReducers: ReducersMapObject<StateSchema> = {
    //     counter: counterReducer,
    //     loginForm: loginReduser,
    //     user: usersReducers,
    // };
    return configureStore({
        reducer: {
            counter: counterReducer,
            loginForm: loginReduser,
            user: usersReducers,
        },
        preloadedState: initialState,
    });
}
