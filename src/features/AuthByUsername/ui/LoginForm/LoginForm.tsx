import { MyButton, ThemeButton } from 'shared/ui/MyButton/MyButton';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { MyInput } from 'shared/ui/MyInput/MyInput';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { loginActions, loginReduser } from 'features/AuthByUsername/model/slice/LoginSlice';
import { getLoginData } from 'features/AuthByUsername/model/selectors/getLoginData/getLoginData';
import cls from './LoginForm.module.scss';
import { loginByUsername } from '../../services/loginByUsername/loginByUsername';

interface LoginFormProps {
    isClose: () => void;
}

export const LoginFrom = ({ isClose }: LoginFormProps) => {
    const { t } = useTranslation('navbar');

    const dispath = useDispatch();

    const { password, username } = useSelector(getLoginData);

    const singIn = useCallback(() => {
        isClose();
        dispath(loginByUsername({ username, password }));
    }, [dispath, username, password]);

    const onChangeUsername = useCallback((value) => {
        dispath(loginActions.setUsername(value));
    }, []);

    const onChangePassword = useCallback((value) => {
        dispath(loginActions.setPassword(value));
    }, [dispath]);

    return (
        <form className={classNames(cls.LoginForm, {}, [])}>
            <MyInput
                placeholder={t('Введите логин')}
                onChange={onChangeUsername}
                value={username}
            />
            <MyInput
                placeholder={t('Введите пароль')}
                onChange={onChangePassword}
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
