import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProviders';
// Пофиксить пути, нужно папку с декоратоами в другие места перкинуть
import { themeDecorator } from '../../../../configs/storybook/themeDecorators/themeDecorator';
import { PageError } from './PageError';

export default {
    title: 'pages/PageError',
    component: PageError,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />;

export const SidebarDark = Template.bind({});
SidebarDark.args = {};

export const SidebarLight = Template.bind({});
SidebarLight.args = {};
