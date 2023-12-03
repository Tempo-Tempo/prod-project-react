import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getIsLoadingData } from './getIsLoadingData';

describe('test isloading', () => {
    test('return isloading', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getIsLoadingData(state as StateSchema)).toEqual(true);
    });
});
