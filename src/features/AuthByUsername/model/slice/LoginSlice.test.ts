import { LoginScheme } from '../type/LoginScheme';
import { loginActions, loginReduser } from './LoginSlice';

describe('loginSlice test', () => {
    test('test username', () => {
        const state: DeepPartial<LoginScheme> = { username: '12321' };
        expect(loginReduser(state as LoginScheme, loginActions.setUsername('12321'))).toEqual({ username: '12321' });
    });
    test('test password', () => {
        const state: DeepPartial<LoginScheme> = { password: '123' };
        expect(loginReduser(state as LoginScheme, loginActions.setPassword('123'))).toEqual({ password: '123' });
    });
});
