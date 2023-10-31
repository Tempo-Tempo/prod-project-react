import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProviders';
import { ErrorBoundary } from 'app/providers/ErrorBound';
import App from './app/App';
import 'shared/i18n/i18n';
import './app/styles/index.scss';

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root'),
);
