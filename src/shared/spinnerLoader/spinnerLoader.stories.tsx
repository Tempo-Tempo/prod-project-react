import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProviders';
// Пофиксить пути, нужно папку с декоратоами в другие места перкинуть
import { themeDecorator } from '../../../configs/storybook/themeDecorators/themeDecorator';
import { SpinnerLoader } from './spinnerLoader';

export default {
    title: 'shared/spinnerLoader',
    component: SpinnerLoader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },

} as ComponentMeta<typeof SpinnerLoader>;

const Template: ComponentStory<typeof SpinnerLoader> = () => <SpinnerLoader />;

export const LinkOnWhite = Template.bind({});
LinkOnWhite.args = {};

LinkOnWhite.decorators = [themeDecorator(Theme.WHITE)];

export const LinkOnDark = Template.bind({});
LinkOnDark.args = {};

LinkOnDark.decorators = [themeDecorator(Theme.DARK)];
