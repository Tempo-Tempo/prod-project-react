import React from 'react';
import { Story } from '@storybook/react';
import { Theme } from '../../../src/app/providers/ThemeProviders/index';

export const themeDecorator = (theme: Theme) => (ComponentStory: Story) => (
    <div className={`app ${theme}`}>
        <ComponentStory />
    </div>
);
