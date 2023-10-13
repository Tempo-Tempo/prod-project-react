import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProviders';
// Пофиксить пути, нужно папку с декоратоами в другие места перкинуть
import { themeDecorator } from '../../../../configs/storybook/themeDecorators/themeDecorator';
import { AppLink, AppThemeLinks } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        children: 'Text',
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const LinkOnWhite = Template.bind({});
LinkOnWhite.args = {
    theme: AppThemeLinks.PRIMARY,
};

LinkOnWhite.decorators = [themeDecorator(Theme.WHITE)];

export const LinkOnDark = Template.bind({});
LinkOnDark.args = {
    theme: AppThemeLinks.SECONDARY,
};

LinkOnDark.decorators = [themeDecorator(Theme.DARK)];
