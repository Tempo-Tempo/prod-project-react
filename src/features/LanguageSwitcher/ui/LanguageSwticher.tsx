import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { MyButton, ThemeButton } from 'shared/MyButton/MyButton';

interface LanguageSwitcherProps {
    className?: string,
    collapsed: boolean,
}

export const LanguageSwitcher = ({ className, collapsed }: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <MyButton
            theme={ThemeButton.CLEAR}
            onClick={toggle}
            className={classNames('', {}, [className])}
        >
            { collapsed ? t('Абривиатруа языка') : t('Язык')}
        </MyButton>
    );
};
