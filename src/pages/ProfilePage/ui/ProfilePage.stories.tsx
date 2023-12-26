import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProviders';
import { storeDecorator } from 'shared/storybookDecorators/storeDecorators/storeDecorator';
import { themeDecorator } from 'shared/storybookDecorators/themeDecorators/themeDecorator';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const ProfilePageDark = Template.bind({});
ProfilePageDark.args = {};

ProfilePageDark.decorators = [storeDecorator({})];

export const ProfilePageLight = Template.bind({});
ProfilePageLight.args = {};

ProfilePageLight.decorators = [storeDecorator({}), themeDecorator(Theme.DARK)];
