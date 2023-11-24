import { CounterScheme } from 'entities/MyCounter';
import { UserScheme } from 'entities/MyUsers';
import { LoginScheme } from 'features/AuthByUsername';

export interface StateSchema {
   counter?: CounterScheme;
   user?: UserScheme;
   loginForm?: LoginScheme;
}
