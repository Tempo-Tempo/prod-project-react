import { MyCounter } from 'entities/MyCounter/ui/MyCounter';
import { BugButton } from 'pages/PageError';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <div>
            <div>{t('Это главная страница')}</div>
            <BugButton />
            <MyCounter />
        </div>
    );
};

export default MainPage;
