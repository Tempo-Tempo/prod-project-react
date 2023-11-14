import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const MyCounter = () => {
    const dispath = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispath(counterActions.increment());
    };

    const decrement = () => {
        dispath(counterActions.decrement());
    };

    return (
        <div>
            <h1>
                value =
                {counterValue}
            </h1>
            <button type="button" onClick={increment}>increment</button>
            <button type="button" onClick={decrement}>decrement</button>
        </div>
    );
};
