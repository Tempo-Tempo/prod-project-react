import { getCounter } from './getCounter';

describe('state counter', () => {
    test('counter', () => {
        const state = {
            counter: { value: 10 },
        };
        expect(getCounter(state)).toEqual({ value: 10 });
    });
});
