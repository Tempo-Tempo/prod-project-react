import { addDecorator } from '@storybook/react';
import { Theme } from '../../src/app/providers/ThemeProviders';
import { styleDecorator }
    from '../../src/shared/storybookDecorators/styleDecorators/styleDecorators';
import { themeDecorator }
    from '../../src/shared/storybookDecorators/themeDecorators/themeDecorator';
import { routerDecorator }
    from '../../src/shared/storybookDecorators/routerDecorators/routerDecorator';
// import { storeDecorator } from '../../src/shared/storybookDecorators/storeDecorators';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(styleDecorator);
addDecorator(themeDecorator(Theme.LIGHT));
addDecorator(routerDecorator);
// addDecorator(storeDecorator);
