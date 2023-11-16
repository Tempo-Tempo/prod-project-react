import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nTests from 'shared/i18n/i18nTests';
import { StoreProvider } from 'app/providers/StoreProvider';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export interface renderAnyComponentProps {
    initialRoute?: string;
    initialState?: StateSchema;
}

export function renderAnyComponent(
    component: ReactNode,
    options: renderAnyComponentProps = {},
) {
    const { initialRoute = '/', initialState } = options;
    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[initialRoute]}>
                <I18nextProvider i18n={i18nTests}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>,

    );
}
