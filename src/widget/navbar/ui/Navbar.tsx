import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppThemeLinks } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation('navbar');

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div />
        </div>
    );
};

export { Navbar };
