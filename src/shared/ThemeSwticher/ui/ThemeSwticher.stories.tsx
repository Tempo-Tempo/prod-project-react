import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProviders';
import { themeDecorator } from 'shared/storybookDecorators/themeDecorators/themeDecorator';
import { ThemeSwticher } from './ThemeSwticher';

export default {
    title: 'shared/ThemeSwticher',
    component: ThemeSwticher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },

} as ComponentMeta<typeof ThemeSwticher>;

const Template: ComponentStory<typeof ThemeSwticher> = () => <ThemeSwticher />;

export const ThemeSwticherWhite = Template.bind({});
ThemeSwticherWhite.args = {};

ThemeSwticherWhite.decorators = [themeDecorator(Theme.WHITE)];

export const ThemeSwticherDark = Template.bind({});
ThemeSwticherDark.args = {};

ThemeSwticherDark.decorators = [themeDecorator(Theme.DARK)];
