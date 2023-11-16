import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const MyCounter = () => {
    const dispath = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation('main');

    const increment = () => {
        dispath(counterActions.increment());
    };

    const decrement = () => {
        dispath(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">
                {counterValue}
            </h1>
            <button
                data-testid="increment-btn"
                type="button"
                onClick={increment}
            >
                {t('Прибавить')}

            </button>
            <button
                data-testid="decrement-btn"
                type="button"
                onClick={decrement}
            >
                {t('Отнять')}
            </button>
        </div>
    );
};
