import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';

export const MyCounter = () => {
    const dispath = useDispatch();
    const counterValue = useSelector((state: StateSchema) => state.counter?.value);

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
