import { ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { loginReduser } from 'features/AuthByUsername/model/slice/LoginSlice';

const defaultAsyncReducers: ReducersMapObject<StateSchema> = {
    loginForm: loginReduser,
};

export const storeDecorator = (
    state: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) => (ComponentStory: Story) => (
    <div>
        <StoreProvider initialState={state} asyncReducer={{ ...defaultAsyncReducers, ...asyncReducers }}>
            <ComponentStory />
        </StoreProvider>
    </div>
);
