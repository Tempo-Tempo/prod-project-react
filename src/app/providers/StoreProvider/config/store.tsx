import { configureStore, getDefaultMiddleware, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/MyCounter/model/slice/counterSlice';
import { usersReducers } from 'entities/MyUsers';
import { $api } from 'shared/api/api';
import { NavigateOptions } from 'react-router-dom';
import { To } from 'history';
import { profileReducers } from 'entities/MyProfile';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './StoreManager';

export function CreateReduxStore(
    initialState?: StateSchema,
    asyncReducer?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void,
) {
    const extraArg = { api: $api, navigate };

    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducer,
        counter: counterReducer,
        user: usersReducers,
    };
    const ReducerManager = createReducerManager(rootReducers);
    const store = configureStore({
        // @ts-ignore
        reducer: ReducerManager.reduce as ReducersMapObject<StateSchema>,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }),
    });
    // @ts-ignore
    store.reducerManager = ReducerManager;
    return store;
}

// Возвращаем тип из функции, а в [] уточняем какой конкретно
export type DispathStoreType = ReturnType<typeof CreateReduxStore>['dispatch'];
