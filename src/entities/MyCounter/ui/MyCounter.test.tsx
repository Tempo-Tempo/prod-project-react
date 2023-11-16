import { renderAnyComponent } from 'shared/lib/tests/renderAnyComponent/renderAnyComponent';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { MyCounter } from './MyCounter';

describe('MyCounter test component', () => {
    test('title value', () => {
        renderAnyComponent(<MyCounter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });
    test('increment value', () => {
        renderAnyComponent(<MyCounter />, {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });
    test('decrement value', () => {
        renderAnyComponent(<MyCounter />, {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
