import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MyButton } from 'shared/ui/MyButton/MyButton';

interface BugButtonProps {
   className?: string,
}

export const BugButton = ({ className = '' }: BugButtonProps) => {
    const [error, setError] = useState(false);
    const { t } = useTranslation('navbar');

    const tryError = () => setError(true);

    useEffect(() => {
        if (error) throw new Error();
    }, [error]);

    return (
        <MyButton onClick={tryError}>{t('Главная')}</MyButton>
    );
};
