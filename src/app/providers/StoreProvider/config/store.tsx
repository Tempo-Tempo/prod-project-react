import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/MyCounter/model/slice/counterSlice';
import { usersReducers } from 'entities/MyUsers';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './StoreManager';

export function CreateReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        //  loginForm: loginReduser,
        user: usersReducers,
    };
    const ReducerManager = createReducerManager(rootReducers);
    const store = configureStore<StateSchema>({
        reducer: rootReducers,
        preloadedState: initialState,
    });
    // @ts-ignore
    store.replaceReducer = ReducerManager;
    return store;
}
