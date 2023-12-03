import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getUsernameData } from './getUsernameData';

describe('', () => {
    test('', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'admin',
            },
        };
        expect(getUsernameData(state as StateSchema)).toEqual('admin');
    });
});
