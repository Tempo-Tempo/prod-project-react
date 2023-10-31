import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { MyButton } from 'shared/ui/MyButton/MyButton';
import cls from './ReloadButton.module.scss';

interface ReloadButtonProps {
    className?: string,
}

export const ReloadButton = ({ className }: ReloadButtonProps) => {
    const { t } = useTranslation('error');

    const reloadPage = () => {
        // eslint-disable-next-line
        location.reload();
    };

    return (
        <MyButton
            className={classNames(cls.Reload_button, {}, [className])}
            onClick={reloadPage}
        >
            {t('Перезагрузить старницу')}
        </MyButton>
    );
};
