import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProviders';
// Пофиксить пути, нужно папку с декоратоами в другие места перкинуть
import { themeDecorator } from '../../../../configs/storybook/themeDecorators/themeDecorator';
import AboutPage from './AboutPage';

export default {
    title: 'pages/AboutPage',
    component: AboutPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />;

export const SidebarDark = Template.bind({});
SidebarDark.args = {};

export const SidebarLight = Template.bind({});
SidebarLight.args = {};
