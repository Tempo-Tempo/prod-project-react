import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProviders';
import { MyButton, ThemeButton } from './MyButton';
import { themeDecorator } from '../../../configs/storybook/themeDecorators/themeDecorator';

export default {
    title: 'shared/MyButton',
    component: MyButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        children: 'Text',
    },
} as ComponentMeta<typeof MyButton>;

const Template: ComponentStory<typeof MyButton> = (args) => <MyButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

export const Clear = Template.bind({});
Clear.args = {
    theme: ThemeButton.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
    theme: ThemeButton.OUTLINE,
};

export const OutlineDark = Template.bind({});
Outline.args = {};

OutlineDark.decorators = [themeDecorator(Theme.DARK)];
