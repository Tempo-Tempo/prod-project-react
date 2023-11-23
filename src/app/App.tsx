import { useTheme } from 'app/providers/ThemeProviders/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widget/navbar';
import { Sidebar } from 'widget/sidebar';
import React, { Suspense, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { usersAcitons } from 'entities/MyUsers';
import { AppRouter } from './providers/AppRouter';

export enum Theme {
  WHITE = 'app_white_theme',
  DARK = 'app_dark_theme',
}

const App = () => {
    const { theme } = useTheme();
    const dispath = useDispatch();

    useEffect(() => {
        dispath(usersAcitons.initAuthData());
    }, [dispath]);
    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content_page">
                    <Sidebar />
                    {' '}
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
