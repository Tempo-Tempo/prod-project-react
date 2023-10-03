import { ReloadButton } from 'shared/ReloadButton/ReloadButton';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageError.module.scss';

interface PageErrorProps {
   className?: string,
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation('error');
    return (
        <div className={classNames(cls.Page_error_wrapper, {}, [className])}>
            <div className={cls.Page_error}>
                {t('Ошибка')}
                <ReloadButton />
            </div>

        </div>
    );
};
