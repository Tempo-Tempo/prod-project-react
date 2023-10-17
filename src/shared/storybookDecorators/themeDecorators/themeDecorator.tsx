import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProviders';

export const themeDecorator = (theme: Theme) => (ComponentStory: Story) => (
    <div className={`app ${theme}`}>
        <ComponentStory />
    </div>
);
