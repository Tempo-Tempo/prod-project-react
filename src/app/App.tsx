import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProviders/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widget/navbar';
import { Sidebar } from 'widget/sidebar';
import { Suspense, useState } from 'react';
import { MyModal } from 'shared/ui/MyModal/MyModal';
import { AppRouter } from './providers/AppRouter';

export enum Theme {
  WHITE = 'white',
  DARK = 'dark',
}

const App = () => {
    const { theme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const openModal = (e: MouseEvent) => {
        e.stopPropagation();
        setIsOpen(true);
    };

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content_page">
                    <Sidebar />
                    {' '}
                    <AppRouter />
                    <button onClick={openModal}>toggle</button>
                    <MyModal isOpen={isOpen} isClose={() => setIsOpen(false)}>
                        dsaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                        dddddddddddddddddddddddddddddddddddddddddd
                        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                        dddddddddddddddddddddddddddddddddddddddddd
                        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                        dddddddddddddddddddddddddddddddddddddddddd
                    </MyModal>
                </div>
            </Suspense>
        </div>
    );
};

export default App;
