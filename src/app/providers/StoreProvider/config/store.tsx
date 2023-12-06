import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/MyCounter/model/slice/counterSlice';
import { usersReducers } from 'entities/MyUsers';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './StoreManager';

export function CreateReduxStore(initialState?: StateSchema, asyncReducer?: ReducersMapObject<StateSchema>) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducer,
        counter: counterReducer,
        user: usersReducers,
    };
    const ReducerManager = createReducerManager(rootReducers);
    const store = configureStore<StateSchema>({
        reducer: ReducerManager.reduce,
        preloadedState: initialState,
    });
    // @ts-ignore
    store.reducerManager = ReducerManager;
    return store;
}

// Возвращаем тип из функции, а в [] уточняем какой конкретно

export type DispathStoreType = ReturnType<typeof CreateReduxStore>['dispatch'];
