import { FC, ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithReducerManaget } from 'app/providers/StoreProvider';
import { StateSchemaKeys } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

interface DynamicAsyncReducerProps {
   children?: ReactNode
   name: StateSchemaKeys
   reducer: Reducer
   removeAfterUnmounted: boolean
}

export const DynamicAsyncReducer: FC<DynamicAsyncReducerProps> = (props) => {
    const store = useStore() as ReduxStoreWithReducerManaget;
    const {
        children, name, reducer, removeAfterUnmounted,
    } = props;
    const dispath = useDispatch();

    useEffect(() => {
        store.reducerManager.add(name, reducer);
        console.log(store.reducerManager);
        dispath({ type: `@INIT ${name} reducer` });

        return () => {
            if (removeAfterUnmounted) {
                console.log('suka');
                store.reducerManager.remove(name);
                dispath({ type: `@DESTROY ${name} reducer` });
            }
        };
    }, []);

    return (
        <div>
            {children}
        </div>
    );
};
