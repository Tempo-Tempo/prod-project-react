import { CounterScheme } from '../types/counterScheme';
import { counterActions, counterReducer } from './counterSlice';

describe('test counterSlice', () => {
    test('value increment', () => {
        const state: CounterScheme = { value: 10 };
        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
    });
    test('value decrement', () => {
        const state: CounterScheme = { value: 10 };
        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
    });
    test('default value', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
    });
});
