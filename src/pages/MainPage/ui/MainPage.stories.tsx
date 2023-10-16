import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProviders';
// Пофиксить пути, нужно папку с декоратоами в другие места перкинуть
import { themeDecorator } from 'shared/storybookDecorators/themeDecorators/themeDecorator';
import MainPage from './MainPage';

export default {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

export const MainPageDark = Template.bind({});
MainPageDark.args = {};

MainPageDark.decorators = [themeDecorator(Theme.DARK)];

export const MainPageLight = Template.bind({});
MainPageLight.args = {};
