import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import axios from 'axios';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');

const mockValue = jest.mocked(axios, true);

let dispatch: Dispatch;
let getState: () => StateSchema;

beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
});

describe('login test', () => {
    test('return success', async () => {
        const dataValue = { username: '123', id: '1' };
        mockValue.post.mockReturnValue(Promise.resolve({ data: dataValue }));
        const action = loginByUsername({ username: '123', password: '123' });
        const result = await action(dispatch, getState, undefined);
        expect(result.payload).toEqual(dataValue);
        expect(mockValue.post).toHaveBeenCalled();
        expect(dispatch).toBeCalledTimes(3);
    });
    test('return error', async () => {
        mockValue.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const action = loginByUsername({ username: '123', password: '123' });
        const result = await action(dispatch, getState, undefined);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(mockValue.post).toHaveBeenCalled();
    });
});
