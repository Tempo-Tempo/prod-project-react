import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProviders';
import { storeDecorator } from 'shared/storybookDecorators/storeDecorators/storeDecorator';
import { themeDecorator } from 'shared/storybookDecorators/themeDecorators/themeDecorator';
import { Navbar } from './Navbar';

export default {
    title: 'widget/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const NavbarDark = Template.bind({});
NavbarDark.args = {};
NavbarDark.decorators = [themeDecorator(Theme.DARK), storeDecorator({ user: { authData: { username: 'admin', id: '1' } }, counter: { value: 0 } })];

export const NavbarLight = Template.bind({});
NavbarLight.args = {};

NavbarLight.decorators = [storeDecorator({ user: { authData: { username: 'admin', id: '1' } }, counter: { value: 0 } })];

export const NavbarAuth = Template.bind({});
NavbarAuth.args = {};

NavbarAuth.decorators = [storeDecorator({ user: { authData: { username: 'admin', id: '1' } }, counter: { value: 0 } })];
