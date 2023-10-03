import { screen } from '@testing-library/react';
import { renderWithTranslation }
    from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from 'widget/sidebar/ui/sidebar/Sidebar';

describe('sidebar test', () => {
    test('Test render', () => {
        renderWithTranslation(Sidebar);
        const sidebar = screen.getByTestId('sidebar');
        expect(sidebar).toBeInTheDocument();
    });
});
