import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MyAvatar } from './Avatar';
import img from './avatart.jpeg';

export default {
    title: 'shared/MyAvatar',
    component: MyAvatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MyAvatar>;

const Template: ComponentStory<typeof MyAvatar> = (args) => <MyAvatar {...args} />;

export const ProfileMyAvatar = Template.bind({});
ProfileMyAvatar.args = {
    size: 150,
    src: img,
};

export const ProfileMyAvatarSmall = Template.bind({});
ProfileMyAvatarSmall.args = {
    size: 50,
    src: img,
};
