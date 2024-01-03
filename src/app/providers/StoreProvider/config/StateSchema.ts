import { CounterScheme } from 'entities/MyCounter';
import { UserScheme } from 'entities/MyUsers';
import { LoginScheme } from 'features/AuthByUsername';
import {
    CombinedState, ReducersMapObject, AnyAction, Reducer,
} from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { ProfileSchema } from 'entities/MyProfile/model/type/profile';
import { AxiosInstance } from 'axios';
import { NavigateOptions } from 'react-router-dom';
import { To } from 'history';

export interface StateSchema {
   counter: CounterScheme;
   user: UserScheme;

   // async reducers
   loginForm?: LoginScheme;
   profile?: ProfileSchema;
}
export type StateSchemaKeys = keyof StateSchema;

export interface ReducerManager {
   reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>,
   add: (key: StateSchemaKeys, reducer: Reducer) => void;
   remove: (key: StateSchemaKeys) => void;
   getReducerMap: () => ReducersMapObject<StateSchema>;
}

export interface ReduxStoreWithReducerManaget extends ToolkitStore<StateSchema> {
   reducerManager: ReducerManager,
}

export interface ReduxExtraArg {
   api: AxiosInstance,
   navigate?: (to: To, options?: NavigateOptions) => void,
}

export interface ThunkConfig<T> {
   rejectValue: T,
   extra: ReduxExtraArg
}
