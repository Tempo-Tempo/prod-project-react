import axios from 'axios';
import { AsyncThunkTest } from 'shared/lib/tests/tests/asyncThunkTests/asyncThunkTest';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');

const mockValue = jest.mocked(axios, true);

describe('login test', () => {
    test('return success', async () => {
        const dataValue = { username: '123', id: '1', password: '123' };
        mockValue.post.mockReturnValue(Promise.resolve({ data: dataValue }));
        const thunk = new AsyncThunkTest(loginByUsername);
        const result = await thunk.callThunk(dataValue);
        expect(result.payload).toEqual(dataValue);
        expect(mockValue.post).toHaveBeenCalled();
        expect(thunk.dispatch).toBeCalledTimes(3);
    });
    test('return error', async () => {
        mockValue.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const thunk = new AsyncThunkTest(loginByUsername);
        const result = await thunk.callThunk({ username: '123', password: '123' });
        expect(result.meta.requestStatus).toBe('rejected');
        expect(mockValue.post).toHaveBeenCalled();
        expect(result.payload).toBe('error');
    });
});

// let dispatch: Dispatch;
// let getState: () => StateSchema;

// beforeEach(() => {
//     dispatch = jest.fn();
//     getState = jest.fn();
// });

// describe('login test', () => {
//     test('return success', async () => {
//         const dataValue = { username: '123', id: '1' };
//         mockValue.post.mockReturnValue(Promise.resolve({ data: dataValue }));
//         const action = loginByUsername({ username: '123', password: '123' });
//         const result = await action(dispatch, getState, undefined);
//         expect(result.payload).toEqual(dataValue);
//         expect(mockValue.post).toHaveBeenCalled();
//         expect(dispatch).toBeCalledTimes(3);
//     });
//     test('return error', async () => {
//         mockValue.post.mockReturnValue(Promise.resolve({ status: 403 }));
//         const action = loginByUsername({ username: '123', password: '123' });
//         const result = await action(dispatch, getState, undefined);
//         expect(result.meta.requestStatus).toBe('rejected');
//         expect(mockValue.post).toHaveBeenCalled();
//         expect(result.payload).toBe('error');
//     });
// });
