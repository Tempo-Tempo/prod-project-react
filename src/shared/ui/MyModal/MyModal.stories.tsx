import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProviders';
import { themeDecorator } from 'shared/storybookDecorators/themeDecorators/themeDecorator';
import { MyModal } from './MyModal';

export default {
    title: 'shared/MyModal',
    component: MyModal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        children: 'Text',
    },
} as ComponentMeta<typeof MyModal>;

const Template: ComponentStory<typeof MyModal> = (args) => <MyModal {...args} />;

export const MyModalDefault = Template.bind({});
MyModalDefault.args = {
    isOpen: true,
};

MyModalDefault.decorators = [themeDecorator(Theme.DARK)];
