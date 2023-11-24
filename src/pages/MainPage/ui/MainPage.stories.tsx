import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProviders';
import { storeDecorator } from 'shared/storybookDecorators/storeDecorators/storeDecorator';
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
MainPageDark.decorators = [storeDecorator({
    counter: { value: 0 },
})];

export const MainPageLight = Template.bind({});
MainPageLight.args = {};

MainPageLight.decorators = [storeDecorator({
    counter: { value: 0 },
})];
