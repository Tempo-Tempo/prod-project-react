import { ReducersMapObject } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from '../config/StateSchema';
import { CreateReduxStore } from '../config/store';

interface StoreProviderProps {
   children?: ReactNode;
   initialState?: StateSchema,
   asyncReducer?: ReducersMapObject
}

export const StoreProvider = ({ children, initialState, asyncReducer }: StoreProviderProps) => {
    const store = CreateReduxStore(initialState as StateSchema, asyncReducer as ReducersMapObject);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
