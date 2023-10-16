import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProviders';
import { themeDecorator } from 'shared/storybookDecorators/themeDecorators/themeDecorator';
import { PageError } from './PageError';

export default {
    title: 'pages/PageError',
    component: PageError,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />;

export const PageErrorDark = Template.bind({});
PageErrorDark.args = {};

PageErrorDark.decorators = [themeDecorator(Theme.DARK)];

export const PageErrorLight = Template.bind({});
PageErrorLight.args = {};
