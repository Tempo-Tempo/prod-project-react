import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { MyButton, ThemeButton } from 'shared/ui/MyButton/MyButton';
import { MyModal } from 'shared/ui/MyModal/MyModal';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
    const [isAuth, setIsAuth] = useState(false);
    const { t } = useTranslation('navbar');

    const singIn = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsAuth((prev) => !prev);
    };

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <MyButton theme={ThemeButton.OUTLINE_INVERTED} onClick={(e) => singIn(e)}>
                    {t('Войти')}
                </MyButton>
                <MyModal isOpen={isAuth} isClose={() => setIsAuth(false)}>
                    dsaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dddddddddddddddddddddddddddddddddddddddddd
                    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dddddddddddddddddddddddddddddddddddddddddd
                    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dddddddddddddddddddddddddddddddddddddddddd
                </MyModal>
            </div>

        </div>
    );
};

export { Navbar };
