import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProviders';
import { themeDecorator } from 'shared/storybookDecorators/themeDecorators/themeDecorator';
import { MyText, TextTheme } from './MyText';

export default {
    title: 'shared/MyText',
    component: MyText,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        children: 'Text',
    },
} as ComponentMeta<typeof MyText>;

const Template: ComponentStory<typeof MyText> = (args) => <MyText {...args} />;

export const MyTextDefaultBlack = Template.bind({});
MyTextDefaultBlack.args = {
    title: 'Text',
    theme: TextTheme.primary,
};

MyTextDefaultBlack.decorators = [themeDecorator(Theme.DARK)];

export const MyTextErrorBlack = Template.bind({});
MyTextErrorBlack.args = {
    body: 'Text',
    theme: TextTheme.error,
};

MyTextErrorBlack.decorators = [themeDecorator(Theme.DARK)];
