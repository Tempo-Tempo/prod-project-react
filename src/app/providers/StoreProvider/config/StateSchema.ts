import { CounterScheme } from 'entities/MyCounter';
import { User } from 'entities/MyUsers';
import { LoginScheme } from 'features/AuthByUsername';

export interface StateSchema {
   counter: CounterScheme;
   user?: User;
   loginForm?: LoginScheme;
}
