import { MyButton, ThemeButton } from 'shared/ui/MyButton/MyButton';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { MyInput } from 'shared/ui/MyInput/MyInput';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { loginActions, loginReduser } from 'features/AuthByUsername/model/slice/LoginSlice';
import { getLoginData } from 'features/AuthByUsername/model/selectors/getLoginData/getLoginData';
import { MyText, TextTheme } from 'shared/ui/text/MyText';
import cls from './LoginForm.module.scss';
import { loginByUsername } from '../../services/loginByUsername/loginByUsername';

interface LoginFormProps {
    isClose?: () => void;
}

export const LoginFrom = ({ isClose }: LoginFormProps) => {
    const { t } = useTranslation('navbar');

    const dispath = useDispatch();

    const {
        password, username, isLoading, error,
    } = useSelector(getLoginData);

    const singIn = useCallback(() => {
        // isClose();
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
            <MyText theme={TextTheme.primary} title={t('Форма авторизации')} />
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
            {error && <MyText theme={TextTheme.error} body={t('Неверный логин или пароль')} />}
            <MyButton
                onClick={singIn}
                theme={ThemeButton.OUTLINE}
                className={cls.loginBtn}
                disabled={isLoading}
            >
                {t('Войти')}

            </MyButton>
        </form>
    );
};
