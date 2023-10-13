import React from 'react';
import { Story } from '@storybook/store';
import { BrowserRouter } from 'react-router-dom';

export const routerDecorator = (story: () => Story) => (
    <BrowserRouter>
        {story()}
    </BrowserRouter>
);
