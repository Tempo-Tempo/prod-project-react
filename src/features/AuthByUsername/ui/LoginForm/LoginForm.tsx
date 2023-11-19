import { MyButton, ThemeButton } from 'shared/ui/MyButton/MyButton';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { MyInput } from 'shared/ui/MyInput/MyInput';
import { useState } from 'react';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    isClose: () => void;
}

export const LoginFrom = ({ isClose }: LoginFormProps) => {
    const { t } = useTranslation('navbar');

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const singIn = (e: any) => {
        e.preventDefault();
        isClose();
        setLogin('');
        setPassword('');
    };

    return (
        <form className={classNames(cls.LoginForm, {}, [])}>
            <MyInput
                placeholder={t('Введите логин')}
                onChange={(e) => setLogin(e)}
                value={login}
            />
            <MyInput
                placeholder={t('Введите пароль')}
                onChange={(e) => setPassword(e)}
                value={password}
            />
            <MyButton
                onClick={singIn}
                theme={ThemeButton.OUTLINE}
                className={cls.loginBtn}
            >
                {t('Войти')}

            </MyButton>
        </form>
    );
};
