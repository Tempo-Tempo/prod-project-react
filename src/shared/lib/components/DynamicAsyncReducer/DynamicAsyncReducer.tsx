import { FC, ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithReducerManaget } from 'app/providers/StoreProvider';
import { StateSchemaKeys } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
    [name in StateSchemaKeys]?: Reducer;
}

interface DynamicAsyncReducerProps {
   children?: ReactNode
   reducers: ReducersList
}

export const DynamicAsyncReducer: FC<DynamicAsyncReducerProps> = (props) => {
    const store = useStore() as ReduxStoreWithReducerManaget;
    const {
        children, reducers,
    } = props;
    const dispath = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateSchemaKeys, reducer);
            dispath({ type: `@INIT ${name} reducer` });
        });

        return () => {
            Object.entries(reducers).forEach(([name, reducer]) => {
                store.reducerManager.remove(name as StateSchemaKeys);
                dispath({ type: `@DESTROY ${name} reducer` });
            });
        };
    }, []);

    return (
        <div>
            {children}
        </div>
    );
};
