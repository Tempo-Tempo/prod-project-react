import { StateSchema } from 'app/providers/StoreProvider';
import { getErrorData } from './getErrorData';

describe('test error text', () => {
    test('return text error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'error',
            },
        };
        expect(getErrorData(state as StateSchema)).toEqual('error');
    });
});
