import { fireEvent, screen } from '@testing-library/react';
import { renderAnyComponent }
    from 'shared/lib/tests/renderAnyComponent/renderAnyComponent';
import { Sidebar } from 'widget/sidebar/ui/sidebar/Sidebar';

describe('sidebar test', () => {
    test('Test render', () => {
        renderAnyComponent(<Sidebar />);
        const sidebar = screen.getByTestId('sidebar');
        expect(sidebar).toBeInTheDocument();
    });
    test('Test button', () => {
        renderAnyComponent(<Sidebar />);
        const button = screen.getByTestId('sidebar-toggle');
        const sidebar = screen.getByTestId('sidebar');
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        expect(sidebar).toHaveClass('Collapsed');
    });
});
