import { MyButton } from 'shared/ui/MyButton/MyButton';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { MyInput } from 'shared/ui/MyInput/MyInput';
import { useState } from 'react';
import cls from './LoginForm.module.scss';

export const LoginFrom = () => {
    const { t } = useTranslation('navbar');

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const singIn = (e: any) => {
        e.preventDefault();
        console.log(login, 'ETO LOGIN');
        console.log(password, 'ETO PASSWORD');
    };

    return (
        <form className={classNames(cls.LoginForm, {}, [])}>
            <MyInput onChange={(e) => setLogin(e)} value={login} />
            <MyInput onChange={(e) => setPassword(e)} value={password} />
            <MyButton onClick={singIn} className={cls.loginBtn}>{t('Войти')}</MyButton>
        </form>
    );
};
