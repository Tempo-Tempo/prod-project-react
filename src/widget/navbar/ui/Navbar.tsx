import { usersAcitons } from 'entities/MyUsers';
import { getAuthDataUser } from 'entities/MyUsers/selectors/getAuthDataUser/getAuthDataUser';
import { LoginModal } from 'features/AuthByUsername';
import React, {
    Suspense, useCallback, useState, memo,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { SpinnerLoader } from 'shared/spinnerLoader/spinnerLoader';
import { MyButton, ThemeButton } from 'shared/ui/MyButton/MyButton';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar = memo(({ className = '' }: NavbarProps) => {
    const [isAuth, setIsAuth] = useState(false);
    const { t } = useTranslation('navbar');
    const authData = useSelector(getAuthDataUser);
    const dispath = useDispatch();

    const singIn = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsAuth((prev) => !prev);
    };

    const onCloseModal = useCallback(() => {
        setIsAuth(false);
    }, []);

    const onLogout = useCallback(() => {
        dispath(usersAcitons.onLogout());
        setIsAuth(false);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            {authData ? (
                <div className={cls.links}>
                    <MyButton theme={ThemeButton.OUTLINE_INVERTED} onClick={onLogout}>
                        {t('Выйти')}
                    </MyButton>
                </div>
            ) : (
                <div className={cls.links}>
                    <MyButton theme={ThemeButton.OUTLINE_INVERTED} onClick={(e) => singIn(e)}>
                        {t('Войти')}
                    </MyButton>
                    <Suspense fallback={<SpinnerLoader />}>
                        <LoginModal className="test" isOpen={isAuth} isClose={onCloseModal} />
                    </Suspense>

                </div>
            )}
        </div>
    );
});

export { Navbar };
