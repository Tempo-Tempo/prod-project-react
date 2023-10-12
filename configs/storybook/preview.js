import { addDecorator } from '@storybook/react';
import { Theme } from '../../src/app/providers/ThemeProviders';
import { styleDecorator } from './styleDecorators/styleDecorators';
import { themeDecorator } from './themeDecorators/themeDecorator';

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
addDecorator(themeDecorator(Theme.DARK));
