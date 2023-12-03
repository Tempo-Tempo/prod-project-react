import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginData } from './getLoginData';

describe('test full loginForm', () => {
    test('return full login form', () => {
        const state: StateSchema = {
            loginForm: {
                isLoading: true,
                username: 'admin',
                password: '123',
            },
        };
        expect(getLoginData(state as StateSchema)).toEqual({
            isLoading: true,
            username: 'admin',
            password: '123',
        });
    });
});
