import { MyButton, ThemeButton } from 'shared/ui/MyButton/MyButton';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { MyInput } from 'shared/ui/MyInput/MyInput';
import {
    useSelector, useDispatch,
} from 'react-redux';
import { useCallback } from 'react';
import { loginActions, loginReduser } from 'features/AuthByUsername/model/slice/LoginSlice';
import { MyText, TextTheme } from 'shared/ui/text/MyText';
import { DynamicAsyncReducer, ReducersList } from 'shared/lib/components/DynamicAsyncReducer/DynamicAsyncReducer';
import { getErrorData } from '../../model/selectors/getErrorData/getErrorData';
import { getPasswordData } from '../../model/selectors/getPasswordData/getPasswrodData';
import cls from './LoginForm.module.scss';
import { loginByUsername } from '../../services/loginByUsername/loginByUsername';
import { getUsernameData } from '../../model/selectors/getUsernameData/getUsernameData';
import { getIsLoadingData } from '../../model/selectors/getIsLoadingData/getIsLoadingData';

export interface LoginFormProps {
    isClose?: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReduser,
};

const LoginFrom = ({ isClose }: LoginFormProps) => {
    const { t } = useTranslation('navbar');
    const password = useSelector(getPasswordData);
    const username = useSelector(getUsernameData);
    const isLoading = useSelector(getIsLoadingData);
    const error = useSelector(getErrorData);
    const dispath = useDispatch();

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
        <DynamicAsyncReducer reducers={initialReducers}>
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
        </DynamicAsyncReducer>

    );
};

export default LoginFrom;
