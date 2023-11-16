import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from '../config/StateSchema';
import { CreateReduxStore } from '../config/store';

interface StoreProviderProps {
   children?: ReactNode;
   initialState?: StateSchema,
}

export const StoreProvider = ({ children, initialState }: StoreProviderProps) => {
    const store = CreateReduxStore(initialState);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};