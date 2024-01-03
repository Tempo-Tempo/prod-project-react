import { Story } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { profileReducers } from 'entities/MyProfile/model/slice/profileSlice';
import { loginReduser } from 'features/AuthByUsername/model/slice/LoginSlice';
import { ReducersList } from 'shared/lib/components/DynamicAsyncReducer/DynamicAsyncReducer';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReduser,
    profile: profileReducers,
};

export const storeDecorator = (
    state: StateSchema,
    asyncReducers?: ReducersList,
) => (ComponentStory: Story) => (
    <div>
        <StoreProvider initialState={state} asyncReducer={{ ...defaultAsyncReducers, ...asyncReducers }}>
            <ComponentStory />
        </StoreProvider>
    </div>
);
