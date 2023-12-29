import { configureStore, getDefaultMiddleware, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/MyCounter/model/slice/counterSlice';
import { usersReducers } from 'entities/MyUsers';
import { $api } from 'shared/api/api';
import { NavigateOptions } from 'react-router-dom';
import { To } from 'history';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './StoreManager';

export function CreateReduxStore(
    initialState?: StateSchema,
    asyncReducer?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducer,
        counter: counterReducer,
        user: usersReducers,
    };
    const ReducerManager = createReducerManager(rootReducers);
    const store = configureStore({
        reducer: ReducerManager.reduce,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: { api: $api, navigate },
            },
        }),
    });
    // @ts-ignore
    store.reducerManager = ReducerManager;
    return store;
}

// Возвращаем тип из функции, а в [] уточняем какой конкретно

export type DispathStoreType = ReturnType<typeof CreateReduxStore>['dispatch'];
