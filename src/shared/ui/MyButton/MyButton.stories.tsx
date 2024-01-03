import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProviders';
import { themeDecorator } from 'shared/storybookDecorators/themeDecorators/themeDecorator';
import { MyButton, SizeButton, ThemeButton } from './MyButton';

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

export const MyButtonDefault = Template.bind({});
MyButtonDefault.args = {
    theme: ThemeButton.OUTLINE,
};

export const MyButtonDefaultBlack = Template.bind({});
MyButtonDefaultBlack.args = {
    theme: ThemeButton.CLEAR,
};

MyButtonDefaultBlack.decorators = [themeDecorator(Theme.DARK)];

export const MyButtonSquare = Template.bind({});
MyButtonSquare.args = {
    size: SizeButton.XL,
    theme: ThemeButton.BACKGROUND,
};

export const MyButtonSquareBlack = Template.bind({});
MyButtonSquareBlack.args = {
    size: SizeButton.XL,
    theme: ThemeButton.BACKGROUND_INVERTED,
};

MyButtonSquareBlack.decorators = [themeDecorator(Theme.DARK)];

export const MyButtonDisabled = Template.bind({});
MyButtonDisabled.args = {
    size: SizeButton.XL,
    theme: ThemeButton.OUTLINE_INVERTED,
    disabled: true,
};

MyButtonDisabled.decorators = [themeDecorator(Theme.DARK)];
