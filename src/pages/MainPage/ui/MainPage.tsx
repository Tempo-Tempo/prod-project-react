import { BugButton } from 'pages/PageError';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <div>
            <div>{t('Это главная страница')}</div>
            <BugButton />
        </div>
    );
};

export default MainPage;
