import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProviders';
// Пофиксить пути, нужно папку с декоратоами в другие места перкинуть
import { themeDecorator } from '../../../../../configs/storybook/themeDecorators/themeDecorator';
import { Sidebar } from './Sidebar';

export default {
    title: 'widget/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const SidebarDark = Template.bind({});
SidebarDark.args = {};

export const SidebarLight = Template.bind({});
SidebarLight.args = {};
SidebarDark.decorators = [themeDecorator(Theme.DARK)];
