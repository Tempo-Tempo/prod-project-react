import { FC, ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithReducerManaget } from 'app/providers/StoreProvider';
import { StateSchemaKeys } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';
import { loginReduser } from 'features/AuthByUsername/model/slice/LoginSlice';

export type ReducersList = {
    [name in StateSchemaKeys]?: Reducer;
}

type ReducersListEntry = [StateSchemaKeys, Reducer];

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
        Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
            console.log(name, reducer);
            store.reducerManager.add(name, reducer);
            dispath({ type: `@INIT ${name} reducer` });
        });

        return () => {
            Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
                store.reducerManager.remove(name);
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
