import { render, screen } from '@testing-library/react';
import React from 'react';
import { MyButton, ThemeButton } from './MyButton';

describe('button test', () => {
    test('Test render', () => {
        render(<MyButton>test</MyButton>);
        expect(screen.getByText('test')).toBeInTheDocument();
    });
    test('Test theme', () => {
        render(<MyButton theme={ThemeButton.CLEAR}>test</MyButton>);
        expect(screen.getByText('test')).toHaveClass('clear');
    });
});
