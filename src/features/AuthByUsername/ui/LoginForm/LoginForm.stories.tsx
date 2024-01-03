import { ComponentStory, ComponentMeta } from '@storybook/react';
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
    loginForm: { username: 'admin', password: '123' }, counter: { value: 0 }, user: { authData: { username: 'admin', id: '1' } },
})];

export const MyLoginFormErr = Template.bind({});
MyLoginFormErr.args = {};

MyLoginFormErr.decorators = [storeDecorator({
    loginForm: { username: 'admin', password: '123' }, counter: { value: 0 }, user: { authData: { username: 'admin', id: '1' } },
})];

export const MyLoginFormLoading = Template.bind({});
MyLoginFormLoading.args = {};

MyLoginFormLoading.decorators = [storeDecorator({
    loginForm: { username: 'admin', password: '123' }, counter: { value: 0 }, user: { authData: { username: 'admin', id: '1' } },
})];
