import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProviders';
import { themeDecorator } from 'shared/storybookDecorators/themeDecorators/themeDecorator';
import { storeDecorator } from 'shared/storybookDecorators/storeDecorators/storeDecorator';
import LoginFrom from './LoginForm';

export default {
    title: 'entities/LoginFrom',
    component: LoginFrom,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        children: 'Text',
    },
} as ComponentMeta<typeof LoginFrom>;

const Template: ComponentStory<typeof LoginFrom> = (args) => <LoginFrom {...args} />;

export const MyLoginForm = Template.bind({});
MyLoginForm.args = {};

MyLoginForm.decorators = [storeDecorator({
    loginForm: { username: 'admin', password: '123' },
})];

export const MyLoginFormErr = Template.bind({});
MyLoginFormErr.args = {};

MyLoginFormErr.decorators = [storeDecorator({
    loginForm: { username: 'admin', password: '123', error: 'Error' },
})];

export const MyLoginFormLoading = Template.bind({});
MyLoginFormLoading.args = {};

MyLoginFormLoading.decorators = [storeDecorator({
    loginForm: { username: 'admin', password: '123', isLoading: true },
})];
