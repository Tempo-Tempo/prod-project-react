import { Story } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const storeDecorator = (state: StateSchema) => (ComponentStory: Story) => (
    <div>
        <StoreProvider initialState={state}>
            <ComponentStory />
        </StoreProvider>
    </div>
);
