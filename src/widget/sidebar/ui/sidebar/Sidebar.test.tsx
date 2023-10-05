import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation }
    from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from 'widget/sidebar/ui/sidebar/Sidebar';

describe('sidebar test', () => {
    test('Test render', () => {
        renderWithTranslation(<Sidebar />);
        const sidebar = screen.getByTestId('sidebar');
        expect(sidebar).toBeInTheDocument();
    });
    test('Test button', () => {
        renderWithTranslation(<Sidebar />);
        const button = screen.getByTestId('sidebar-toggle');
        const sidebar = screen.getByTestId('sidebar');
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        expect(sidebar).toHaveClass('Collapsed');
    });
});
