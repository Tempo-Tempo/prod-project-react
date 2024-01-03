import { getCounter } from './getCounter';

describe('state counter', () => {
    test('counter', () => {
        const state = {
            counter: { value: 10 }, user: {},
        };
        expect(getCounter(state)).toEqual({ value: 10 });
    });
});
