import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProviders';
import { themeDecorator } from '../../../shared/storybookDecorators/themeDecorators/themeDecorator';
import AboutPage from './AboutPage';

export default {
    title: 'pages/AboutPage',
    component: AboutPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />;

export const AboutPageDark = Template.bind({});
AboutPageDark.args = {};

AboutPageDark.decorators = [themeDecorator(Theme.DARK)];

export const AboutPageLight = Template.bind({});
AboutPageLight.args = {};
