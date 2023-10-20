import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nTests from 'shared/i18n/i18nTests';

export interface renderAnyComponentProps {
    initialRoute?: string;
}

export function renderAnyComponent(
    component: ReactNode,
    options?: renderAnyComponentProps,
) {
    const { initialRoute = '/' } = options;
    return render(
        <MemoryRouter initialEntries={[initialRoute]}>
            <I18nextProvider i18n={i18nTests}>
                {component}
            </I18nextProvider>
        </MemoryRouter>,
    );
}
