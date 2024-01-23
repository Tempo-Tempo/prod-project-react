import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MySelect } from './MySelect';

export default {
    title: 'shared/MySelect',
    component: MySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MySelect>;

const Template: ComponentStory<typeof MySelect> = (args) => <MySelect {...args} />;

export const MySelectr = Template.bind({});
MySelectr.args = {
    label: 'Укажите название',
    options: [{ value: 'test', content: 'test' },
        { value: 'test', content: 'test2' },
        { value: 'test', content: 'test3' }],
};
