import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
    test('value', () => {
        const state = {
            counter: {
                value: 10,
            },
        };
        expect(getCounterValue(state)).toEqual(10);
    });
});
